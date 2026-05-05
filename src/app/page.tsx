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
  const featuredServices = services.slice(0, 4);

  return (
    <div className="space-y-0">
      <section className="relative -mx-4 -mt-8 overflow-hidden bg-[#1a2744] px-4 py-8 md:py-12 lg:py-14">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,184,155,0.3),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(220px,40%)] sm:items-center sm:gap-4 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] md:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <div className="mx-auto mb-2 h-0.5 w-12 rounded-full bg-[#7db89b] sm:mx-0" />
              <p className="text-xs font-medium uppercase tracking-widest text-[#7db89b] md:text-sm">
                Premium Exterior Cleaning
              </p>
              <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl text-balance">
                Protect Your Home&apos;s Value and Curb Appeal
              </h1>
              <p className="mx-auto mt-3 max-w-xl rounded-lg bg-white/90 px-4 py-2.5 text-sm leading-snug text-[#1a2744] sm:mx-0 md:mt-4 md:px-4 md:py-3 md:text-base md:leading-relaxed">
                Fast, responsive scheduling for homeowners, sellers, and commercial
                properties. Same-day exterior cleaning available throughout{" "}
                {siteConfig.serviceRadiusLabel}.
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-start md:mt-5">
                <a
                  href={contactLinks.callHref}
                  className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#1e4d3a] px-5 py-3 text-sm font-medium text-[#f8f6f1] transition-all hover:bg-[#163d2e] hover:shadow-lg hover:shadow-[#1e4d3a]/20 sm:w-auto md:px-6 md:py-3.5 md:text-base"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call {siteConfig.primaryPhoneDisplay}
                </a>
                <Link
                  href="/request-quote"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#7db89b] px-5 py-3 text-sm font-semibold text-[#1a2744] shadow-md ring-2 ring-[#1a2744]/15 ring-offset-2 ring-offset-[#1a2744] transition-all hover:bg-[#6a9e82] hover:shadow-lg hover:ring-[#1a2744]/25 active:scale-[0.99] sm:w-auto md:px-6 md:py-3.5 md:text-base"
                >
                  Get Your Free Quote
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <p className="mt-2 text-xs leading-snug text-[#94a3b8] sm:mt-3 sm:text-sm">
                Serving homeowners, sellers, and commercial properties
              </p>
            </div>

            <div className="mx-auto w-full max-w-md shrink-0 sm:mx-0 sm:max-w-none">
              <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/owners-team.png"
                  alt="Premier Home Services team with pressure washing equipment"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7db89b] to-[#1e4d3a]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-2 pt-4 md:pb-3 md:pt-5">
        <BeforeAfterGallery compact />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-xl border border-[#d8e0ee] bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1e4d3a]">
            Non-Residential Services
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#1a2744]">
            Commercial and Real Estate Support
          </h2>
          <p className="mt-2 max-w-3xl text-[#475569]">
            From storefronts and office parks to listing teams and property managers, we
            provide fast-turn cleaning scopes and flexible contract pricing.
          </p>
          <Link
            href="/commercial"
            className="mt-4 inline-block rounded-md bg-[#1a2744] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#111b31]"
          >
            Explore Commercial Options
          </Link>
        </div>
      </section>

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
      </section>

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
            <div className="lg:sticky lg:top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

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
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPackages.map((item) => (
            <article
              key={item.slug}
              className={`relative rounded-xl border bg-white p-6 transition-all hover:shadow-lg ${
                item.badge ? "border-[#1e4d3a] shadow-md" : "border-[#e2e0db] hover:border-[#7db89b]"
              }`}
            >
              {item.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[#1e4d3a] px-4 py-1 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              ) : null}
              <p className="text-xs font-medium uppercase tracking-wider text-[#7db89b]">{item.tierLabel}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-[#1a2744]">{item.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#1e4d3a]">{item.priceLabel}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b]">{item.tagline}</p>
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
      </section>
    </div>
  );
}
