import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = makeMetadata({
  title: "Exterior Cleaning Services in Chicagoland",
  description:
    "Explore pressure washing, roof cleaning, window cleaning, gutter cleaning, and more from Premier Home Services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        We provide on-demand exterior cleaning for homes and small commercial
        properties throughout Chicagoland.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-2 text-slate-700">{service.shortDescription}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-emerald-700"
            >
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
