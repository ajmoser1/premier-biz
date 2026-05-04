import { contactLinks } from "@/lib/site";

export function SmsCta() {
  return (
    <a
      href={contactLinks.smsHref}
      className="inline-flex items-center gap-2 rounded-md border-2 border-[#7db89b] px-5 py-3 text-sm font-medium text-[#f8f6f1] transition-all hover:bg-[#7db89b]/10"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      Text for Fast Response
    </a>
  );
}
