import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ReviewSection() {
  return (
    <section className="rounded-xl border border-[#e2e0db] bg-white p-8">
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1e4d3a]/10 text-[#1e4d3a]">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="font-serif text-2xl font-semibold text-[#1a2744]">
            Help Us Build Our Reputation
          </h2>
          <p className="mt-2 text-[#64748b]">
            We&apos;re actively building our online presence. If we&apos;ve serviced your property, we&apos;d love to hear your feedback.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={siteConfig.googleBusinessProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#1e4d3a] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#163d2e]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Leave a Google Review
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#e2e0db] px-5 py-3 text-sm font-medium text-[#1a2744] transition-all hover:border-[#7db89b]"
            >
              Send a Testimonial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
