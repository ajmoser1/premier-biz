import { QuoteForm } from "@/components/QuoteForm";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Request a Quote",
  description:
    "Submit a quick quote request for same-day pressure washing and exterior cleaning in Chicagoland.",
  path: "/request-quote",
});

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-4xl font-bold text-slate-900">Request a Quote</h1>
      <p className="text-slate-700">
        Tell us about your property and service needs. We will follow up quickly.
      </p>
      <QuoteForm />
    </div>
  );
}
