import Image from "next/image";
import Link from "next/link";
import { beforeAfterGalleryImages } from "@/lib/gallery";

type BeforeAfterGalleryProps = {
  /** Tighter heading + marquee strip for above-the-fold home placement */
  compact?: boolean;
};

export function BeforeAfterGallery({ compact = false }: BeforeAfterGalleryProps) {
  const marqueeImages = [...beforeAfterGalleryImages, ...beforeAfterGalleryImages];

  return (
    <section className={compact ? "space-y-1.5" : "space-y-3"}>
      <h2
        className={
          compact
            ? "text-lg font-bold text-sky-900 md:text-xl"
            : "text-2xl font-bold text-sky-900"
        }
      >
        Before and After Results
      </h2>
      <p className={compact ? "text-xs text-sky-800 md:text-sm" : "text-sky-800"}>
        Real project photos from recent Premier Home Services jobs.
      </p>
      <div
        className={
          compact
            ? "overflow-hidden rounded-xl border border-sky-200 bg-sky-950/95 py-1.5 shadow-sm md:rounded-2xl md:py-2"
            : "overflow-hidden rounded-2xl border border-sky-200 bg-sky-950/95 py-3 shadow-sm"
        }
      >
        <div className="marquee-track">
          {marqueeImages.map((image, index) => (
            <Link
              key={`${image.src}-${index}`}
              href="/gallery"
              aria-label="View full before and after gallery"
              className={
                compact
                  ? "relative aspect-[5/4] w-[220px] flex-none overflow-hidden rounded-lg border border-white/15 bg-black shadow-sm transition-transform hover:scale-[1.01] sm:w-[240px] md:w-[280px]"
                  : "relative aspect-[5/4] w-[260px] flex-none overflow-hidden rounded-xl border border-white/15 bg-black shadow-sm transition-transform hover:scale-[1.01] md:w-[300px] lg:w-[320px]"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                sizes={
                  compact
                    ? "(max-width: 640px) 220px, (max-width: 768px) 240px, 280px"
                    : "(max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
