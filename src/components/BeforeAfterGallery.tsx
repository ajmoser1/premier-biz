import Image from "next/image";
import Link from "next/link";
import { MarqueeTrack } from "@/components/MarqueeTrack";
import { beforeAfterGalleryImages } from "@/lib/gallery";

type BeforeAfterGalleryProps = {
  /** Tighter heading + marquee strip for above-the-fold home placement */
  compact?: boolean;
};

export function BeforeAfterGallery({ compact = false }: BeforeAfterGalleryProps) {
  const marqueeImages = [...beforeAfterGalleryImages, ...beforeAfterGalleryImages];

  return (
    <section
      className={
        compact
          ? "min-w-0 space-y-1.5 px-4 md:px-0"
          : "min-w-0 space-y-3"
      }
    >
      <h2
        className={
          compact
            ? "text-lg font-bold text-sky-900 md:text-xl"
            : "text-2xl font-bold text-sky-900"
        }
      >
        
      </h2>
      
      <div
        className={
          compact
            ? "-mx-4 rounded-none border-y border-sky-200 bg-sky-950/95 py-1.5 shadow-sm md:mx-0 md:rounded-2xl md:border md:py-2"
            : "rounded-2xl border border-sky-200 bg-sky-950/95 py-3 shadow-sm"
        }
      >
        <MarqueeTrack>
          {marqueeImages.map((image, index) => (
            <Link
              key={`${image.src}-${index}`}
              href="/gallery"
              aria-label="View full before and after gallery"
              className={
                compact
                  ? "relative aspect-[5/4] w-[min(72vw,200px)] flex-none overflow-hidden rounded-lg border border-white/15 bg-black shadow-sm transition-transform hover:scale-[1.01] sm:w-[220px] md:w-[280px]"
                  : "relative aspect-[5/4] w-[min(78vw,240px)] flex-none overflow-hidden rounded-xl border border-white/15 bg-black shadow-sm transition-transform hover:scale-[1.01] sm:w-[260px] md:w-[300px] lg:w-[320px]"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                sizes={
                  compact
                    ? "(max-width: 640px) 72vw, (max-width: 768px) 220px, 280px"
                    : "(max-width: 640px) 78vw, (max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                }
              />
            </Link>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  );
}
