"use client";

import { useEffect, useRef } from "react";

type MarqueeTrackProps = {
  children: React.ReactNode;
  mobilePixelsPerSecond?: number;
  desktopPixelsPerSecond?: number;
};

export function MarqueeTrack({
  children,
  mobilePixelsPerSecond = 36,
  desktopPixelsPerSecond = 48,
}: MarqueeTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let offset = 0;
    let lastTime = 0;
    let rafId = 0;
    let halfWidth = 0;

    const pixelsPerSecond = () =>
      window.innerWidth < 640 ? mobilePixelsPerSecond : desktopPixelsPerSecond;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
      if (offset >= halfWidth && halfWidth > 0) {
        offset %= halfWidth;
      }
    };

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (halfWidth > 0) {
        offset += pixelsPerSecond() * delta;
        if (offset >= halfWidth) offset -= halfWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    rafId = requestAnimationFrame(animate);

    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        cancelAnimationFrame(rafId);
        track.style.transform = "";
      } else {
        offset = 0;
        lastTime = 0;
        measure();
        rafId = requestAnimationFrame(animate);
      }
    };

    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
      track.style.transform = "";
    };
  }, [desktopPixelsPerSecond, mobilePixelsPerSecond]);

  return (
    <div className="marquee-viewport">
      <div ref={trackRef} className="marquee-track marquee-track--js">
        {children}
      </div>
    </div>
  );
}
