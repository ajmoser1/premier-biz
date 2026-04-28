import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, serviceCities } from "@/lib/cities";
import { makeMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  return makeMetadata({
    title: `${cityData.name} Exterior Cleaning Services`,
    description: `Same-day pressure washing, gutter cleaning, window cleaning, and roof cleaning in ${cityData.name}, IL.`,
    path: `/service-areas/${cityData.slug}`,
  });
}

export function generateStaticParams() {
  return serviceCities.map((city) => ({ city: city.slug }));
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const cityPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Exterior Cleaning in ${cityData.name}, IL`,
    about: "Pressure washing and exterior cleaning services",
  };

  return (
    <article className="space-y-5">
      <h1 className="text-4xl font-bold text-sky-900">
        Same-Day Exterior Cleaning in {cityData.name}, IL
      </h1>
      <p className="max-w-3xl text-sky-700">
        Premier Home Services helps homes and local businesses in {cityData.name} with
        pressure washing, window cleaning, gutter cleaning, trash can cleaning, and roof
        softwashing.
      </p>
      <div className="rounded-xl border border-sky-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-sky-900">Who We Serve in {cityData.name}</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sky-700">
          <li>Homeowners and luxury residential properties</li>
          <li>Home sellers and local real estate partners</li>
          <li>Independent retail and restaurant storefronts</li>
          <li>Apartment common areas and small office parks</li>
        </ul>
      </div>
      <Link
        href="/request-quote"
        className="inline-block rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-500"
      >
        Get a Quote in {cityData.name}
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPageJsonLd) }}
      />
    </article>
  );
}
