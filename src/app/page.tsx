import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewSection } from "@/components/ReviewSection";
import { SmsCta } from "@/components/SmsCta";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="space-y-14 pb-16">
      <section className="rounded-2xl bg-slate-900 px-6 py-12 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          {siteConfig.emergencyHours}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Same-Day Pressure Washing and Exterior Cleaning in Chicagoland
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          We help homeowners, sellers, and small commercial properties look clean
          and ready fast with on-demand exterior service.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+13125550147"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950"
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
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular Services</h2>
          {services.map((service) => (
            <div key={service.slug} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-1 text-sm text-slate-700">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-emerald-700"
              >
                Explore service
              </Link>
            </div>
          ))}
        </div>
        <QuoteForm />
      </section>

      <BeforeAfterGallery />
      <ReviewSection />
    </div>
  );
}
