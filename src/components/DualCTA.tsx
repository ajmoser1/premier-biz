import Link from "next/link";
import { contactLinks, siteConfig } from "@/lib/site";

type DualCTAProps = {
  variant?: "light" | "dark";
  size?: "default" | "large";
  className?: string;
};

export function DualCTA({
  variant = "dark",
  size = "default",
  className = "",
}: DualCTAProps) {
  const isLight = variant === "light";
  const isLarge = size === "large";

  const baseClasses = `flex items-center justify-center gap-2 font-medium transition-all ${
    isLarge ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
  }`;

  const primaryClasses = `${baseClasses} rounded-md bg-[#1e4d3a] text-[#f8f6f1] hover:bg-[#163d2e] hover:shadow-lg`;

  const secondaryClasses = `${baseClasses} rounded-md border-2 ${
    isLight
      ? "border-[#7db89b] text-[#f8f6f1] hover:bg-[#7db89b]/10"
      : "border-[#1e4d3a] text-[#1e4d3a] hover:bg-[#1e4d3a] hover:text-white"
  }`;

  return (
    <div className={`flex flex-col items-center gap-4 sm:flex-row ${className}`}>
      <a href={contactLinks.callHref} className={primaryClasses}>
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call {siteConfig.primaryPhoneDisplay}
      </a>
      <Link href="/request-quote" className={secondaryClasses}>
        Get Your Free Quote
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
  );
}
