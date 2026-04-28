export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortDescription:
      "Driveways, walkways, siding, decks, and other exterior surfaces restored fast.",
    longDescription:
      "From concrete driveways to vinyl siding, we remove grime, algae, and buildup with the right pressure and detergents for each material.",
    includes: [
      "Driveways and sidewalks",
      "Patios and pool decks",
      "Siding and fences",
      "Surface-specific pressure and treatment",
    ],
    idealFor: [
      "Homeowners improving curb appeal",
      "Sellers prepping for listing photos",
      "Retail storefront refreshes",
    ],
  },
  {
    slug: "exterior-window-cleaning",
    name: "Exterior Window Cleaning",
    shortDescription:
      "Streak-free exterior glass cleaning for homes and small commercial properties.",
    longDescription:
      "We clean windows, tracks, and surrounding frames to restore clear views and a polished exterior appearance.",
    includes: [
      "Exterior glass wash",
      "Frame and sill wipe-down",
      "Reach and safety equipment",
      "Final quality check",
    ],
    idealFor: [
      "Homes on the market",
      "Restaurant and retail storefronts",
      "Office park units",
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription:
      "Debris removal and gutter flow clearing to protect roofs and foundations.",
    longDescription:
      "We clear clogged gutters and downspouts to help prevent overflow, water intrusion, and ice-related damage.",
    includes: [
      "Leaf and debris removal",
      "Downspout flush",
      "Flow check",
      "Photo updates available on request",
    ],
    idealFor: [
      "Seasonal home maintenance",
      "Property managers and landlords",
      "Storm-prep and emergency cleanouts",
    ],
  },
  {
    slug: "trash-can-cleaning",
    name: "Trash Can Cleaning",
    shortDescription:
      "Odor and residue removal for cleaner, better-smelling bins and pad areas.",
    longDescription:
      "Deep clean and sanitize garbage/recycling bins and surrounding areas to reduce odor, insects, and residue buildup.",
    includes: [
      "Interior and exterior rinse",
      "Degreasing and deodorizing",
      "Sanitizing treatment",
      "Pad area rinse-down",
    ],
    idealFor: [
      "Busy families",
      "Small commercial back-of-house areas",
      "HOA and multi-unit properties",
    ],
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortDescription:
      "Softwash-focused roof cleaning to remove dark streaks and organic growth.",
    longDescription:
      "We use roof-safe softwash methods to clean algae and buildup while protecting shingles and extending visual life.",
    includes: [
      "Low-pressure roof treatment",
      "Algae and streak reduction",
      "Surface-safe methods",
      "Perimeter cleanup",
    ],
    idealFor: [
      "High-value residential properties",
      "Sellers improving listing appearance",
      "Annual exterior maintenance plans",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
