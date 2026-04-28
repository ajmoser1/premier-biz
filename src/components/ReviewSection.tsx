import { siteConfig } from "@/lib/site";

export function ReviewSection() {
  return (
    <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-sky-900">Reviews Build Trust Fast</h2>
      <p className="mt-3 text-sky-700">
        We are actively building our reputation online. If we serviced your property,
        we would love your feedback.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={siteConfig.googleBusinessProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
        >
          Leave a Google Review
        </a>
        <a
          href="/contact"
          className="rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-sky-800 hover:border-red-300 hover:text-red-600"
        >
          Send a Testimonial
        </a>
      </div>
    </section>
  );
}
