import { QuoteForm } from "@/components/QuoteForm";
import { makeMetadata } from "@/lib/seo";
import { contactLinks, siteConfig } from "@/lib/site";

export const metadata = makeMetadata({
  title: "Contact Premier Home Services",
  description:
    "Call, text, or request a quote for same-day pressure washing and exterior cleaning in Chicagoland.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="text-slate-700">
          Need emergency or same-day service? Call or text us now.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
          <p>
            <strong>Phone:</strong> <a href={contactLinks.callHref}>{siteConfig.primaryPhoneDisplay}</a>
          </p>
          <p className="mt-2">
            <strong>Text:</strong> <a href={contactLinks.smsHref}>{siteConfig.smsDisplay}</a>
          </p>
          <p className="mt-2">
            <strong>Email:</strong> <a href={contactLinks.emailHref}>{siteConfig.email}</a>
          </p>
        </div>
      </section>
      <QuoteForm />
    </div>
  );
}
