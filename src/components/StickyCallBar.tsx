import { contactLinks, siteConfig } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-300 bg-sky-50/95 p-3 backdrop-blur md:hidden">
      <a
        href={contactLinks.callHref}
        className="block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-bold text-white"
      >
        Call {siteConfig.primaryPhoneDisplay} Now
      </a>
    </div>
  );
}
