import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { getPackageBySlug } from "@/lib/packages";
import { makeMetadata } from "@/lib/seo";
import { contactLinks, siteConfig } from "@/lib/site";

export const metadata = makeMetadata({
  title: "Request a Quote",
  description:
    "Submit a quick quote request for same-day pressure washing and exterior cleaning in Chicagoland.",
  path: "/request-quote",
});

type RequestQuotePageProps = {
  searchParams?: Promise<{
    package?: string;
  }>;
};

export default async function RequestQuotePage({ searchParams }: RequestQuotePageProps) {
  const params = await searchParams;
  const packageSlug = params?.package;
  const preselectedPackage = packageSlug ? getPackageBySlug(packageSlug)?.name : undefined;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative -mx-4 -mt-8 overflow-hidden bg-[#1a2744] px-4 py-12 md:py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,184,155,0.3),transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#7db89b]" />
          <p className="text-sm font-medium uppercase tracking-widest text-[#7db89b]">
            Free Estimate
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            Request a Quote
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#a8d4be]">
            Tell us about your property and we&apos;ll provide a customized quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content - Psychology: Zeigarnik effect with progress feel */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Quote Form */}
          <div>
            {preselectedPackage && (
              <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#7db89b] bg-[#1e4d3a]/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e4d3a]">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a2744]">
                    Package Selected: <span className="text-[#1e4d3a]">{preselectedPackage}</span>
                  </p>
                  <p className="text-xs text-[#64748b]">
                    We&apos;ll tailor your quote to this package
                  </p>
                </div>
              </div>
            )}
            <QuoteForm preselectedPackage={preselectedPackage} />
          </div>

          {/* Sidebar - Psychology: reduce anxiety, provide alternatives */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Phone Alternative */}
            <div className="rounded-xl border border-[#e2e0db] bg-white p-6">
              <h3 className="font-serif text-lg font-semibold text-[#1a2744]">
                Prefer to Talk?
              </h3>
              <p className="mt-2 text-sm text-[#64748b]">
                Call us directly for immediate assistance or to discuss your project.
              </p>
              <a
                href={contactLinks.callHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#1a2744] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#0f1a2e]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.primaryPhoneDisplay}
              </a>
            </div>

            {/* What to Expect */}
            <div className="rounded-xl border border-[#e2e0db] bg-white p-6">
              <h3 className="font-serif text-lg font-semibold text-[#1a2744]">
                What Happens Next?
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  { step: "1", title: "We Review", desc: "Our team reviews your request" },
                  { step: "2", title: "We Quote", desc: "You receive a detailed quote" },
                  { step: "3", title: "We Schedule", desc: "Pick a time that works for you" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e4d3a]/10 text-xs font-semibold text-[#1e4d3a]">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#1a2744]">{item.title}</p>
                      <p className="text-xs text-[#64748b]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages CTA */}
            <div className="rounded-xl bg-[#f8f6f1] border border-[#e2e0db] p-6 text-center">
              <p className="text-sm text-[#64748b]">
                Not sure what to request?
              </p>
              <Link
                href="/packages"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#1e4d3a] transition-colors hover:text-[#163d2e]"
              >
                Browse our packages
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
