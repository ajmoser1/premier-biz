"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { ServicePackage } from "@/lib/packages";

type PackagesGridProps = {
  packages: ServicePackage[];
};

export function PackagesGrid({ packages }: PackagesGridProps) {
  const thirdPackageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      thirdPackageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {packages.map((item, index) => {
        const isMostPopular = item.badge === "Most Popular";
        return (
          <article
            key={item.slug}
            id={`package-${item.slug}`}
            ref={index === 2 ? thirdPackageRef : null}
            className={`relative rounded-xl border bg-white p-6 transition-all hover:shadow-lg ${
              isMostPopular
                ? "border-[#1e4d3a] shadow-md"
                : "border-[#e2e0db] hover:border-[#7db89b]"
            }`}
          >
            {/* Badge */}
            {item.badge && (
              <span
                className={`absolute -top-3 left-6 rounded-full px-4 py-1 text-xs font-semibold ${
                  isMostPopular
                    ? "bg-[#1e4d3a] text-white"
                    : "bg-[#7db89b]/20 text-[#1e4d3a]"
                }`}
              >
                {item.badge}
              </span>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium uppercase tracking-wider text-[#7db89b]">
                {item.tierLabel}
              </p>
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold text-[#1a2744]">
              {item.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-[#1e4d3a]">
              {item.priceLabel}
            </p>
            <p className="mt-2 italic text-[#64748b]">{item.tagline}</p>
            <p className="mt-2 text-sm text-[#64748b]">{item.summary}</p>

            <ul className="mt-5 space-y-2">
              {item.includes.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-[#1a2744]">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#7db89b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/request-quote?package=${item.slug}`}
                className={`rounded-md px-5 py-3 text-sm font-medium transition-all ${
                  isMostPopular
                    ? "bg-[#1e4d3a] text-white hover:bg-[#163d2e]"
                    : "border border-[#1e4d3a] text-[#1e4d3a] hover:bg-[#1e4d3a] hover:text-white"
                }`}
              >
                Request This Package
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-[#e2e0db] px-5 py-3 text-sm font-medium text-[#1a2744] transition-all hover:border-[#7db89b]"
              >
                Learn More
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
