import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.companyName}</p>
          <p className="mt-2 text-sm text-slate-600">
            Same-day and emergency exterior cleaning across Chicagoland.
          </p>
        </div>
        <div className="text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/service-areas">Service Areas</Link>
            </li>
            <li>
              <Link href="/commercial">Commercial Services</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2">{siteConfig.primaryPhoneDisplay}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
