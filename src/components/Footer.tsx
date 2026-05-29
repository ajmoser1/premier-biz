import Image from "next/image";
import Link from "next/link";
import { contactLinks, siteConfig } from "@/lib/site";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const footerLinks = {
  services: [
    { href: "/services/pressure-washing", label: "Pressure Washing" },
    { href: "/services/exterior-window-cleaning", label: "Window Cleaning" },
    { href: "/services/gutter-cleaning", label: "Gutter Cleaning" },
    { href: "/services/roof-cleaning", label: "Roof Cleaning" },
  ],
  company: [
    { href: "/packages", label: "Service Packages" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  const reviewSummary = getGoogleReviewSummary();

  return (
    <footer className="bg-[#1a2744] pb-24 md:pb-0">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/premier-logo-primary.png"
                alt={`${siteConfig.companyName} logo`}
                width={184}
                height={122}
                className="h-auto w-[160px]"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#a8d4be]">
              Premium exterior cleaning services throughout Chicagoland. Same-day and emergency service available.
            </p>
            {reviewSummary.rating ? (
              <a
                href={reviewSummary.googleMapsUri}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#7db89b]/40 bg-[#1e4d3a]/30 px-3 py-1 text-xs font-semibold text-[#d9f4e8] transition-colors hover:border-[#7db89b]"
              >
                <span aria-hidden>★</span>
                {reviewSummary.rating.toFixed(1)} ({reviewSummary.userRatingCount} Google reviews)
              </a>
            ) : null}
            <div className="mt-4 h-1 w-12 rounded-full bg-[#7db89b]" />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7db89b]">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a8d4be] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7db89b]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a8d4be] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7db89b]">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contactLinks.callHref}
                  className="flex items-center gap-2 text-sm text-[#a8d4be] transition-colors hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.primaryPhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.emailHref}
                  className="flex items-center gap-2 text-sm text-[#a8d4be] transition-colors hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 rounded-md bg-[#7db89b] px-4 py-2 text-sm font-semibold text-[#1a2744] shadow-md ring-2 ring-white/20 ring-offset-2 ring-offset-[#1a2744] transition-all hover:bg-[#6a9e82] hover:shadow-lg"
                >
                  Get a Free Quote
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e4d3a]/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b]">
            Serving {siteConfig.serviceRadiusLabel}
          </p>
        </div>
      </div>
    </footer>
  );
}
