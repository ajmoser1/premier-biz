import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function makeMetadata({
  title,
  description,
  path = "",
}: MetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.companyName}`;
  const canonical = `${siteConfig.baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.companyName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.companyName,
    areaServed: siteConfig.serviceRadiusLabel,
    telephone: siteConfig.primaryPhoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    url: siteConfig.baseUrl,
  };
}
