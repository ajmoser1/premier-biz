import { contactLinks } from "@/lib/site";

export function SmsCta() {
  return (
    <a
      href={contactLinks.smsHref}
      className="inline-flex rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-100"
    >
      Text for Fast Response
    </a>
  );
}
