import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/chicago-driveway-pressure-washing-before-after.webp",
    alt: "Driveway before and after pressure washing result",
  },
  {
    src: "/images/gallery/chicago-outdoor-structure-softwash-before-after.webp",
    alt: "Outdoor structure before and after wash result",
  },
  {
    src: "/images/gallery/chicago-siding-softwash-before-after.webp",
    alt: "House siding before and after softwash result",
  },
  {
    src: "/images/gallery/chicago-sidewalk-pressure-washing-before-after.webp",
    alt: "Sidewalk before and after pressure washing result",
  },
  {
    src: "/images/gallery/chicago-patio-pressure-washing-before-after.webp",
    alt: "Patio concrete before and after pressure washing result",
  },
  {
    src: "/images/gallery/chicago-house-wash-before-after.webp",
    alt: "House exterior siding before and after cleaning result",
  },
];

export function BeforeAfterGallery() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Before and After Results</h2>
      <p className="mt-2 text-slate-700">
        Real project photos from recent Premier Home Services jobs.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={1024}
              height={768}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
