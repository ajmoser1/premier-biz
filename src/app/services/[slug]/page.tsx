import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { makeMetadata } from "@/lib/seo";
import { getServiceBySlug, services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return makeMetadata({
    title: `${service.name} in Chicagoland`,
    description: service.longDescription,
    path: `/services/${service.slug}`,
  });
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    areaServed: "Chicagoland",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Premier Home Services",
    },
  };

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">{service.name}</h1>
      <p className="max-w-3xl text-slate-700">{service.longDescription}</p>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">What&apos;s Included</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">Best Fit For</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            {service.idealFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <Link
        href="/request-quote"
        className="inline-block rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
      >
        Request Same-Day Quote
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </article>
  );
}
