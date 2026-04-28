import Link from "next/link";
import { contactLinks, siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-sky-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-bold text-sky-900">
          {siteConfig.companyName}
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-sky-700 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-red-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={contactLinks.callHref}
          className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
