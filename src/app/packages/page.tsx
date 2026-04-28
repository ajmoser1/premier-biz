import Link from "next/link";
import { PackagesGrid } from "@/components/PackagesGrid";
import { makeMetadata } from "@/lib/seo";
import { servicePackages } from "@/lib/packages";

export const metadata = makeMetadata({
  title: "Service Packages",
  description:
    "Discover premium exterior care packages designed to make every home look beautifully maintained and market-ready.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-sky-700 px-6 py-10 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-200">
          Premier Exterior Care Collections
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Service Packages</h1>
        <p className="mt-4 max-w-3xl text-sky-100">
          Choose the level of transformation you want, and our team will handle the rest
          with a clean, high-touch experience from arrival to final walkthrough.
        </p>
        <p className="mt-2 text-sm text-sky-200">
          Custom pricing is provided after a quick property walkthrough or online estimate request.
        </p>
      </section>

      <PackagesGrid packages={servicePackages} />

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5 text-sm text-sky-800">
        <p>
          Final pricing is confirmed after a brief walkthrough and can vary by property
          size, condition, and access.
        </p>
        <p className="mt-2">
          Need a custom scope? We can add painting touch-ups, hauling, handyman items,
          and seasonal maintenance to any package.
        </p>
      </section>
    </div>
  );
}
