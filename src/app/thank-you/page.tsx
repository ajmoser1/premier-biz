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
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl border border-sky-200 bg-sky-50 p-8">
      <h1 className="text-3xl font-bold text-sky-900">Thank You</h1>
      <p className="text-sky-900">
        We received your request and will reach out as soon as possible.
      </p>
      <a
        href={siteConfig.googleBusinessProfileUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
      >
        Leave a Google Review
      </a>
      <p>
        <Link href="/" className="font-semibold text-red-700 hover:text-red-600">
          Return to homepage
        </Link>
      </p>
    </div>
  );
}
