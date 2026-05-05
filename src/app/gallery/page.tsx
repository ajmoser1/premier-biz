import Image from "next/image";
import { beforeAfterGalleryImages } from "@/lib/gallery";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Before and After Gallery",
  description: "Before and after project photos from recent exterior cleaning jobs.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-[#1a2744] md:text-4xl">Before and After Gallery</h1>
        <p className="text-sm text-[#64748b] md:text-base">
          Real project photos from recent Premier Home Services jobs.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {beforeAfterGalleryImages.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[5/4] overflow-hidden rounded-xl border border-[#d8e0ee] bg-black shadow-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
