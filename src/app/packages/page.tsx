import { PackagesGrid } from "@/components/PackagesGrid";
import { makeMetadata } from "@/lib/seo";
import { servicePackages } from "@/lib/packages";
import { DualCTA } from "@/components/DualCTA";

export const metadata = makeMetadata({
  title: "Service Packages",
  description:
    "Discover premium exterior care packages designed to make every home look beautifully maintained and market-ready.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative -mx-4 -mt-8 overflow-hidden bg-[#1a2744] px-4 py-12 md:py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,184,155,0.3),transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#7db89b]" />
          <p className="text-sm font-medium uppercase tracking-widest text-[#7db89b]">
            Premier Exterior Care Collections
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            Service Packages
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#a8d4be]">
            Choose the level of transformation you want, and our team handles the rest with a clean, high-touch experience from arrival to final walkthrough.
          </p>
        </div>
      </section>

      {/* Packages Grid - Psychology: Anchoring effect, most popular highlighted */}
      <PackagesGrid packages={servicePackages} />

      {/* Scope Note */}
      <section className="rounded-xl border border-[#e2e0db] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e4d3a]/10 text-[#1e4d3a]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#1a2744]">
              Custom Scope Available
            </h3>
            <p className="mt-1 text-sm text-[#64748b]">
              Every property has different needs, so we finalize scope after a brief walkthrough. Need a custom bundle? We can add painting touch-ups, hauling, handyman items, and seasonal maintenance to any package.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-xl bg-[#f8f6f1] border border-[#e2e0db] p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold text-[#1a2744]">
          Not Sure Which Package Is Right?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-[#64748b]">
          Talk to our team for a personalized recommendation based on your property and goals.
        </p>
        <div className="mt-6">
          <DualCTA variant="dark" />
        </div>
      </section>
    </div>
  );
}
