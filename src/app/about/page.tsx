import { makeMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = makeMetadata({
  title: "About Premier Home Services",
  description:
    "Learn about Premier Home Services and our mission to provide same-day exterior cleaning across Chicagoland.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold text-slate-900">About {siteConfig.companyName}</h1>
      <p className="max-w-3xl text-slate-700">
        Premier Home Services grew from hands-on local work and direct neighborhood
        outreach. Our mission is simple: deliver reliable same-day exterior cleaning with
        transparent communication and quality results.
      </p>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">What Sets Us Apart</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Fast turnaround with emergency availability</li>
          <li>Residential and small commercial focus</li>
          <li>Upsell-ready service mix for full exterior refreshes</li>
        </ul>
      </div>
    </div>
  );
}
