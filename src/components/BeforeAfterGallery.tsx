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
      <div className="mb-4 h-1 w-12 rounded-full bg-[#7db89b]" />
      <h2 className="font-serif text-3xl font-semibold text-[#1a2744] md:text-4xl">
        Before and After Results
      </h2>
      <p className="mt-4 max-w-xl text-[#64748b]">
        Real project photos from recent Premier Home Services jobs throughout Chicagoland.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xl border border-[#e2e0db] bg-[#1a2744] shadow-sm transition-all hover:border-[#7db89b] hover:shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1024}
              height={768}
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Subtle green accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7db89b] to-[#1e4d3a] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
