import type { Metadata } from "next";
import { getGoogleReviewSummary } from "@/lib/googleReviews";
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
      images: [
        {
          url: `${siteConfig.baseUrl}/images/logo/premier-logo-horizontal.png`,
          width: 720,
          height: 454,
          alt: `${siteConfig.companyName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.baseUrl}/images/logo/premier-logo-horizontal.png`],
    },
    icons: {
      icon: "/images/logo/premier-logo-round.png",
      apple: "/images/logo/premier-logo-round.png",
    },
  };
}

export function localBusinessJsonLd() {
  const reviewSummary = getGoogleReviewSummary();

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.companyName,
    logo: `${siteConfig.baseUrl}/images/logo/premier-logo-primary.png`,
    image: `${siteConfig.baseUrl}/images/logo/premier-logo-primary.png`,
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
    sameAs: [siteConfig.googleBusinessProfileUrl],
    ...(reviewSummary.rating && reviewSummary.userRatingCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewSummary.rating,
            reviewCount: reviewSummary.userRatingCount,
          },
        }
      : {}),
  };
}
