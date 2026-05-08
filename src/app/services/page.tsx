import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { DualCTA } from "@/components/DualCTA";

export const metadata = makeMetadata({
  title: "Exterior Cleaning Services in Chicagoland",
  description:
    "Explore pressure washing, roof cleaning, window cleaning, gutter cleaning, and more from Premier Home Services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative -mx-4 -mt-8 overflow-hidden bg-[#1a2744] px-4 py-12 md:py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,184,155,0.3),transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#7db89b]" />
          <p className="text-sm font-medium uppercase tracking-widest text-[#7db89b]">
            Professional Exterior Care
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#a8d4be]">
            On-demand exterior cleaning for homes and small commercial properties throughout Chicagoland.
          </p>
        </div>
      </section>

      {/* Services Grid - Psychology: chunking with visual hierarchy */}
      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="group rounded-xl border border-[#e2e0db] bg-white p-6 transition-all hover:border-[#7db89b] hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              
              <div className="flex-1">
                <h2 className="font-serif text-xl font-semibold text-[#1a2744] group-hover:text-[#1e4d3a]">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                  {service.longDescription}
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-5 border-t border-[#e2e0db] pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7db89b]">
                What&apos;s Included
              </h3>
              <ul className="mt-3 space-y-2">
                {service.includes.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#1a2744]">
                    <svg className="h-4 w-4 shrink-0 text-[#7db89b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7db89b]">
                Ideal For
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {service.idealFor.slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[#1a2744]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e4d3a] transition-colors hover:text-[#163d2e]"
              >
                View Details
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/request-quote"
                className="text-sm font-medium text-[#64748b] transition-colors hover:text-[#1e4d3a]"
              >
                Get Quote
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="rounded-xl bg-[#1a2744] p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold text-white">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-[#a8d4be]">
          Contact us for a free quote tailored to your property&apos;s needs.
        </p>
        <div className="mt-6">
          <DualCTA variant="light" />
        </div>
      </section>
    </div>
  );
}
