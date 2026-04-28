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
    <section className="grid gap-5 lg:grid-cols-2">
      {packages.map((item, index) => {
        const isMostPopular = item.badge === "Most Popular";
        return (
          <article
            key={item.slug}
            id={`package-${item.slug}`}
            ref={index === 2 ? thirdPackageRef : null}
            className={`rounded-2xl border bg-white p-6 shadow-sm ${
              isMostPopular ? "border-red-300 ring-2 ring-red-200" : "border-sky-200"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                {item.tierLabel}
              </p>
              {item.badge ? (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isMostPopular ? "bg-red-100 text-red-700" : "bg-sky-100 text-sky-700"
                  }`}
                >
                  {item.badge}
                </span>
              ) : null}
            </div>

            <h2 className="mt-3 text-2xl font-bold text-sky-900">{item.name}</h2>
            <p className="mt-2 font-medium text-sky-700">{item.tagline}</p>
            <p className="mt-2 text-sm text-sky-700">{item.summary}</p>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-sky-800">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/request-quote?package=${item.slug}`}
                className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Request This Package
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-sky-300 px-5 py-2 text-sm font-semibold text-sky-800 hover:border-sky-400"
              >
                Speak With Our Team
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
