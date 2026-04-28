export type ServiceCity = {
  slug: string;
  name: string;
  county?: string;
};

export const serviceCities: ServiceCity[] = [
  { slug: "chicago", name: "Chicago, IL, USA" },
  { slug: "glencoe", name: "Glencoe, IL, USA" },
  { slug: "kildeer", name: "Kildeer, IL, USA" },
  { slug: "inverness", name: "Inverness, IL, USA" },
  { slug: "oak-brook", name: "Oak Brook, IL, USA" },
  { slug: "long-grove", name: "Long Grove, IL, USA" },
  { slug: "cook-county", name: "Cook County, IL, USA" },
  { slug: "lake-county", name: "Lake County, IL, USA" },
  { slug: "lake-forest", name: "Lake Forest, IL, USA" },
  { slug: "lake-zurich", name: "Lake Zurich, IL, USA" },
  { slug: "lincolnshire", name: "Lincolnshire, IL, USA" },
  { slug: "dupage-county", name: "DuPage County, IL, USA" },
  { slug: "winnetka", name: "Winnetka, IL 60093, USA" },
  { slug: "barrington-hills", name: "Barrington Hills, IL, USA" },
  { slug: "kenilworth", name: "Kenilworth, IL 60043, USA" },
  { slug: "riverwoods", name: "Riverwoods, IL 60015, USA" },
  { slug: "chicago-metropolitan-area", name: "Chicago Metropolitan Area, USA" },
];

export function getCityBySlug(slug: string) {
  return serviceCities.find((city) => city.slug === slug);
}
