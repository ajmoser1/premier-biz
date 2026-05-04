"use client";

import Link from "next/link";
import { useState } from "react";
import { contactLinks, siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/service-areas", label: "Areas" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e0db] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl font-semibold text-[#1a2744] tracking-tight">
            {siteConfig.companyName}
          </span>
          <span className="text-xs text-[#64748b] tracking-wide">
            Premium Exterior Cleaning
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#1a2744] transition-colors hover:text-[#1e4d3a] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#7db89b] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contactLinks.callHref}
            className="flex items-center gap-2 text-sm font-medium text-[#1a2744] transition-colors hover:text-[#1e4d3a]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {siteConfig.primaryPhoneDisplay}
          </a>
          <Link
            href="/request-quote"
            className="rounded-md bg-[#1e4d3a] px-5 py-2.5 text-sm font-medium text-[#f8f6f1] transition-all hover:bg-[#163d2e] hover:shadow-lg"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#1a2744] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#e2e0db] bg-white px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#1a2744] transition-colors hover:text-[#1e4d3a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={contactLinks.callHref}
              className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1a2744] px-5 py-3 text-base font-medium text-[#1a2744] transition-all hover:bg-[#1a2744] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {siteConfig.primaryPhoneDisplay}
            </a>
            <Link
              href="/request-quote"
              className="flex items-center justify-center rounded-md bg-[#1e4d3a] px-5 py-3 text-base font-medium text-[#f8f6f1] transition-all hover:bg-[#163d2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
