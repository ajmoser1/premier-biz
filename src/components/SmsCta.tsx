import { contactLinks } from "@/lib/site";

export function SmsCta() {
  return (
    <a
      href={contactLinks.smsHref}
      className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
    >
      Text for Fast Response
    </a>
  );
}
