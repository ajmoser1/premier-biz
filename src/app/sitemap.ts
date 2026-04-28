import type { MetadataRoute } from "next";
import { serviceCities } from "@/lib/cities";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = ["", "/services", "/service-areas", "/commercial", "/about", "/contact", "/request-quote"];

  const baseEntries = basePages.map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.baseUrl}/services/${service.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const cityEntries = serviceCities.map((city) => ({
    url: `${siteConfig.baseUrl}/service-areas/${city.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...baseEntries, ...serviceEntries, ...cityEntries];
}
