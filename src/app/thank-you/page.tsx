import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = makeMetadata({
  title: "Thank You",
  description: "Thanks for contacting Premier Home Services.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl border border-emerald-200 bg-emerald-50 p-8">
      <h1 className="text-3xl font-bold text-emerald-900">Thank You</h1>
      <p className="text-emerald-900">
        We received your request and will reach out as soon as possible.
      </p>
      <a
        href={siteConfig.googleBusinessProfileUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white"
      >
        Leave a Google Review
      </a>
      <p>
        <Link href="/" className="font-semibold text-emerald-800">
          Return to homepage
        </Link>
      </p>
    </div>
  );
}
