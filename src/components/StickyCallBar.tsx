import Link from "next/link";
import { contactLinks, siteConfig } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1e4d3a]/20 bg-[#1a2744]/95 p-3 backdrop-blur-sm md:hidden">
      {/* Dual CTA: 50/50 split for equal weight (psychology principle) */}
      <div className="flex gap-2">
        {/* Call Button */}
        <a
          href={contactLinks.callHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#1e4d3a] px-4 py-3 text-sm font-medium text-white transition-all active:scale-[0.98]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Call Now</span>
        </a>

        {/* Quote Button */}
        <Link
          href="/request-quote"
          className="flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#7db89b] px-4 py-3 text-sm font-medium text-white transition-all active:scale-[0.98]"
        >
          <span>Free Quote</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
