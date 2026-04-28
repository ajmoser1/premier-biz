import Image from "next/image";
import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewSection } from "@/components/ReviewSection";
import { SmsCta } from "@/components/SmsCta";
import { featuredPackageSlugs, servicePackages } from "@/lib/packages";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featuredPackages = servicePackages.filter((item) =>
    featuredPackageSlugs.includes(item.slug as (typeof featuredPackageSlugs)[number]),
  );

  return (
    <div className="space-y-14 pb-16">
      <section className="rounded-2xl bg-sky-700 px-6 py-12 text-white md:px-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_380px] md:items-center lg:grid-cols-[minmax(0,1fr)_440px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-200">
              {siteConfig.emergencyHours}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Same-Day Pressure Washing and Exterior Cleaning in Chicagoland
            </h1>
            <p className="mt-4 max-w-2xl text-sky-100">
              We help homeowners, sellers, and small commercial properties look clean
              and ready fast with on-demand exterior service.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+13125550147"
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-500"
              >
                Call for Same-Day Service
              </a>
              <Link
                href="/request-quote"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
              >
                Request Quote
              </Link>
              <SmsCta />
            </div>
          </div>
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <Image
              src="/images/owners-team.png"
              alt="Premier Home Services team with pressure washing equipment"
              width={1024}
              height={768}
              className="h-full w-full rounded-2xl border border-white/20 object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-900">Popular Services</h2>
          {services.map((service) => (
            <div key={service.slug} className="rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-sky-900">{service.name}</h3>
              <p className="mt-1 text-sm text-sky-700">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-red-600 hover:text-red-500"
              >
                Explore service
              </Link>
            </div>
          ))}
        </div>
        <QuoteForm />
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Service Packages</h2>
            <p className="mt-1 text-sky-700">
              Crafted for homeowners who want a polished, luxury-level finish without the hassle.
            </p>
          </div>
          <Link
            href="/packages"
            className="hidden text-sm font-semibold text-red-600 hover:text-red-500 md:inline"
          >
            Compare all packages
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredPackages.map((item) => (
            <article key={item.slug} className="rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                {item.tierLabel}
              </p>
              <h3 className="mt-1 text-lg font-bold text-sky-900">{item.name}</h3>
              <p className="mt-2 text-sm text-sky-700">{item.tagline}</p>
              {item.badge ? (
                <span className="mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  {item.badge}
                </span>
              ) : null}
              <Link
                href="/packages"
                className="mt-4 inline-block text-sm font-semibold text-sky-800 hover:text-red-600"
              >
                See package details
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/packages"
          className="inline-block rounded-full border border-sky-300 px-5 py-2 text-sm font-semibold text-sky-800 hover:border-sky-400 md:hidden"
        >
          Compare all packages
        </Link>
      </section>

      <BeforeAfterGallery />
      <ReviewSection />
    </div>
  );
}
