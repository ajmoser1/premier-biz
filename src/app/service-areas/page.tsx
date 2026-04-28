import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { serviceCities } from "@/lib/cities";

export const metadata = makeMetadata({
  title: "Service Areas Across Chicagoland",
  description:
    "Premier Home Services offers same-day exterior cleaning across Chicago and nearby suburbs.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-900">Service Areas</h1>
      <p className="mt-3 text-sky-700">
        We serve homeowners and small commercial properties throughout Chicagoland.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {serviceCities.map((city) => (
          <Link
            key={city.slug}
            href={`/service-areas/${city.slug}`}
            className="rounded-lg border border-sky-200 bg-white p-4 font-medium text-sky-900 shadow-sm hover:border-red-300 hover:text-red-600"
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
