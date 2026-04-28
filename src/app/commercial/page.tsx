import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Small Commercial Exterior Cleaning",
  description:
    "Same-day exterior cleaning for storefronts, office parks, and apartment common areas in Chicagoland.",
  path: "/commercial",
});

export default function CommercialPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold text-slate-900">Commercial Services</h1>
      <p className="max-w-3xl text-slate-700">
        We support independent retail stores, restaurants, office parks, gym parking
        lots, and apartment common areas with fast, reliable exterior cleaning.
      </p>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">Ideal Partnership Fits</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Small real estate agencies and listing teams</li>
          <li>Retail strips and standalone storefronts</li>
          <li>Restaurant storefront and patio cleanups</li>
          <li>Small office parks and mixed-use properties</li>
        </ul>
      </div>
      <a
        href="mailto:hello@premierhomeserviceschi.com"
        className="inline-block rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
      >
        Discuss Commercial Contracting
      </a>
    </div>
  );
}
