import { makeMetadata } from "@/lib/seo";
import { commercialAudiences, commercialBundles, commercialPricing } from "@/lib/commercial";

export const metadata = makeMetadata({
  title: "Small Commercial Exterior Cleaning",
  description:
    "Same-day exterior cleaning for storefronts, office parks, and apartment common areas in Chicagoland.",
  path: "/commercial",
});

export default function CommercialPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-sky-900 px-6 py-10 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
          Non-Residential Exterior Care
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Commercial and Real Estate Services</h1>
        <p className="mt-4 max-w-3xl text-sky-100">
          Fast-turn support for listings, tenant turnovers, storefront upkeep, and
          recurring exterior maintenance across Chicagoland.
        </p>
      </section>

      <section className="rounded-xl border border-sky-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-sky-900">Who We Support</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sky-800">
          {commercialAudiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-sky-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-sky-900">Popular Non-Residential Bundles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {commercialBundles.map((bundle) => (
            <article key={bundle.name} className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-900">{bundle.name}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-sky-800">
                {bundle.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-sky-900">Pricing Approach</h2>
        <p className="mt-2 text-sky-800">
          We use transparent starting ranges and confirm final pricing after a quick
          walkthrough or remote scope review.
        </p>
        <ul className="mt-3 space-y-1 text-sky-800">
          {commercialPricing.map((item) => (
            <li key={item.scope}>
              <span className="font-semibold">{item.scope}:</span> {item.range}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-sky-700">
          Final quotes vary by property size, access, timeline, and disposal requirements.
        </p>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-sky-900">Turnaround and Contract Options</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sky-800">
          <li>Priority scheduling windows for listing photos and inspections</li>
          <li>Rapid-response scheduling for urgent curb-appeal requests</li>
          <li>Weekly, biweekly, and monthly recurring service agreements</li>
          <li>Single-point communication and consolidated invoicing</li>
        </ul>
      </section>

      <section className="flex flex-wrap gap-3">
        <a
          href="/request-quote"
          className="inline-block rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
        >
          Request Commercial Quote
        </a>
        <a
          href="mailto:alex@premiercleaning.online"
          className="inline-block rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-sky-900 hover:border-sky-400"
        >
          Schedule Site Walkthrough
        </a>
        <a
          href="tel:+13125550147"
          className="inline-block rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-sky-900 hover:border-sky-400"
        >
          Call for Contracting
        </a>
      </section>
    </div>
  );
}
