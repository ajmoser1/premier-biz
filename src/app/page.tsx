import Image from "next/image";
import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { QuoteForm } from "@/components/QuoteForm";
import { featuredPackageSlugs, servicePackages } from "@/lib/packages";
import { services } from "@/lib/services";
import { contactLinks, siteConfig } from "@/lib/site";

export default function Home() {
  const featuredPackages = servicePackages.filter((item) =>
    featuredPackageSlugs.includes(item.slug as (typeof featuredPackageSlugs)[number]),
  );

  // Limit services to 4 for cognitive load optimization (Hick's Law)
  const featuredServices = services.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Hero Section - Psychology: System 1 thinking, immediate trust */}
      <section className="relative -mx-4 -mt-8 overflow-hidden bg-[#1a2744] px-4 py-16 md:py-24">
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,184,155,0.3),transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="text-center lg:text-left">
              {/* Accent line - establishes premium feel immediately */}
              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#7db89b] lg:mx-0" />
              
              <p className="text-sm font-medium uppercase tracking-widest text-[#7db89b]">
                Premium Exterior Cleaning
              </p>
              
              {/* Loss aversion headline - what they risk losing */}
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
                Protect Your Home&apos;s Value and Curb Appeal
              </h1>
              
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a8d4be] lg:mx-0">
                Professional pressure washing and exterior cleaning that transforms your property. Same-day service available throughout {siteConfig.serviceRadiusLabel}.
              </p>
              
              {/* Dual CTA - equal weight, Von Restorff effect on primary */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={contactLinks.callHref}
                  className="group flex w-full items-center justify-center gap-3 rounded-md bg-[#1e4d3a] px-8 py-4 text-base font-medium text-[#f8f6f1] transition-all hover:bg-[#163d2e] hover:shadow-lg hover:shadow-[#1e4d3a]/20 sm:w-auto"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {siteConfig.primaryPhoneDisplay}
                </a>
                <Link
                  href="/request-quote"
                  className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-[#7db89b] px-8 py-4 text-base font-medium text-[#f8f6f1] transition-all hover:bg-[#7db89b]/10 sm:w-auto"
                >
                  Get Your Free Quote
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Social proof hint - builds anticipation for testimonials */}
              <p className="mt-6 text-sm text-[#64748b]">
                Serving homeowners, sellers, and commercial properties
              </p>
            </div>
            
            {/* Hero image - quality signal */}
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/owners-team.png"
                  alt="Premier Home Services team with pressure washing equipment"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                  priority
                />
                {/* Subtle green accent border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7db89b] to-[#1e4d3a]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Psychology: chunking, limited to 4 items */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#7db89b]" />
          <h2 className="font-serif text-3xl font-semibold text-[#1a2744] md:text-4xl">
            Why Homeowners Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
            Premium results with the convenience and reliability you expect from a professional service.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Same-Day Service",
              description: "Fast, responsive scheduling when you need it most",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Premium Products",
              description: "Professional-grade equipment and eco-safe solutions",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "We Come to You",
              description: "Full-service mobile operation across Chicagoland",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: "Satisfaction Focus",
              description: "We ensure every detail meets your expectations",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-[#e2e0db] bg-white p-6 text-center transition-all hover:border-[#7db89b] hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1e4d3a]/10 text-[#1e4d3a] transition-colors group-hover:bg-[#1e4d3a] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#1a2744]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services + Quote Form - Psychology: visual chunking, dual path */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-[#7db89b]" />
              <h2 className="font-serif text-3xl font-semibold text-[#1a2744] md:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-[#64748b]">
                Professional exterior cleaning tailored to your property&apos;s needs.
              </p>
              
              <div className="mt-8 space-y-4">
                {featuredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-start gap-4 rounded-lg border border-[#e2e0db] bg-[#f8f6f1] p-5 transition-all hover:border-[#7db89b] hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e4d3a]/10 text-[#1e4d3a] transition-colors group-hover:bg-[#1e4d3a] group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-[#1a2744] group-hover:text-[#1e4d3a]">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
                        {service.shortDescription}
                      </p>
                    </div>
                    <svg
                      className="h-5 w-5 shrink-0 text-[#7db89b] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
              
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1e4d3a] transition-colors hover:text-[#163d2e]"
              >
                View all services
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Quote Form - Psychology: reduces friction with simplified form */}
            <div className="lg:sticky lg:top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Packages - Psychology: Anchoring (premium first), limited choices */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-4 h-1 w-12 rounded-full bg-[#7db89b]" />
            <h2 className="font-serif text-3xl font-semibold text-[#1a2744] md:text-4xl">
              Service Packages
            </h2>
            <p className="mt-4 max-w-xl text-[#64748b]">
              Curated packages for homeowners who want a polished, luxury-level finish without the hassle.
            </p>
          </div>
          <Link
            href="/packages"
            className="hidden text-sm font-medium text-[#1e4d3a] transition-colors hover:text-[#163d2e] md:inline-flex md:items-center md:gap-2"
          >
            Compare all packages
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPackages.map((item, index) => (
            <article
              key={item.slug}
              className={`relative rounded-xl border bg-white p-6 transition-all hover:shadow-lg ${
                item.badge
                  ? "border-[#1e4d3a] shadow-md"
                  : "border-[#e2e0db] hover:border-[#7db89b]"
              }`}
            >
              {item.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#1e4d3a] px-4 py-1 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-wider text-[#7db89b]">
                {item.tierLabel}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-[#1a2744]">
                {item.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#1e4d3a]">
                {item.priceLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                {item.tagline}
              </p>
              <Link
                href="/packages"
                className={`mt-6 flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-medium transition-all ${
                  item.badge
                    ? "bg-[#1e4d3a] text-white hover:bg-[#163d2e]"
                    : "border border-[#1e4d3a] text-[#1e4d3a] hover:bg-[#1e4d3a] hover:text-white"
                }`}
              >
                View Package Details
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/packages"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#e2e0db] px-6 py-3 text-sm font-medium text-[#1a2744] transition-all hover:border-[#7db89b] md:hidden"
        >
          Compare all packages
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

      {/* Before/After Gallery */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <BeforeAfterGallery />
        </div>
      </section>

      {/* Final CTA - Psychology: Peak-end rule, strong memorable close */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a2744] px-6 py-12 text-center md:px-12 md:py-16">
          {/* Subtle accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7db89b] via-[#1e4d3a] to-[#7db89b]" />
          
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl text-balance">
            Ready to Transform Your Property?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#a8d4be]">
            Get a free, no-obligation quote and see the difference professional exterior cleaning can make.
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactLinks.callHref}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1e4d3a] px-8 py-4 text-base font-medium text-[#f8f6f1] transition-all hover:bg-[#163d2e] hover:shadow-lg sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.primaryPhoneDisplay}
            </a>
            <Link
              href="/request-quote"
              className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-[#7db89b] px-8 py-4 text-base font-medium text-[#f8f6f1] transition-all hover:bg-[#7db89b]/10 sm:w-auto"
            >
              Get Your Free Quote
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
