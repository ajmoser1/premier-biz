import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { getPackageBySlug } from "@/lib/packages";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Request a Quote",
  description:
    "Submit a quick quote request for same-day pressure washing and exterior cleaning in Chicagoland.",
  path: "/request-quote",
});

type RequestQuotePageProps = {
  searchParams?: {
    package?: string;
  };
};

export default function RequestQuotePage({ searchParams }: RequestQuotePageProps) {
  const packageSlug = searchParams?.package;
  const preselectedPackage = packageSlug ? getPackageBySlug(packageSlug)?.name : undefined;

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-4xl font-bold text-sky-900">Request a Quote</h1>
      <p className="text-sky-700">
        Tell us about your property and service needs. We will follow up quickly.
      </p>
      <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">
        Not sure what to request? Compare bundled options on our{" "}
        <Link href="/packages" className="font-semibold text-red-600 hover:text-red-500">
          Service Packages
        </Link>{" "}
        page, then come back and choose your preferred package in the form below.
      </div>
      <QuoteForm preselectedPackage={preselectedPackage} />
    </div>
  );
}
