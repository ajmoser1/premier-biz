export const siteConfig = {
  companyName: "Premier Home Services",
  baseUrl: "https://www.premierhomeserviceschi.com",
  primaryPhoneDisplay: "(847) 257-6322",
  primaryPhoneRaw: "+18472576322",
  smsDisplay: "(847) 257-6322",
  smsRaw: "+18472576322",
  email: "alex@premiercleaning.online",
  googlePlaceId: "ChIJP07CjVA3gKURI5ZzRJMB0GQ",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJP07CjVA3gKURI5ZzRJMB0GQ",
  serviceRadiusLabel: "Chicagoland",
  cityState: "Chicago, IL",
  emergencyHours: "Same-day and emergency service available",
} as const;

export const contactLinks = {
  callHref: `tel:${siteConfig.primaryPhoneRaw}`,
  smsHref: `sms:${siteConfig.smsRaw}`,
  emailHref: `mailto:${siteConfig.email}`,
} as const;

export const businessChecklist = [
  "Confirm inbound emails are monitored for quote responses.",
  "Replace Google Business Profile URL in siteConfig.",
  "Confirm service-area city list in src/lib/cities.ts.",
  "Add logo and before/after photos in public/images.",
  "Add GOOGLE_MAPS_API_KEY and GOOGLE_PLACE_ID to .env.local.",
] as const;
