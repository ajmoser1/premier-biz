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
    slug: "landscaping",
    name: "Landscaping",
    shortDescription:
      "Seasonal cleanups, bed refreshes, and curb-appeal landscaping done fast.",
    longDescription:
      "We handle practical, high-impact landscaping tasks that keep your property polished, tidy, and listing-ready.",
    includes: [
      "Bed edging and bed cleanup",
      "Weeding and seasonal refreshes",
      "Mulch install or top-off",
      "Shrub and hedge shaping",
    ],
    idealFor: [
      "Homeowners improving curb appeal",
      "Pre-listing prep for sellers",
      "HOA common-area touchups",
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
  {
    slug: "junk-removal",
    name: "Junk Removal",
    shortDescription:
      "Fast hauling for garages, yards, and move-out cleanup projects.",
    longDescription:
      "We remove unwanted items quickly and responsibly so your property is clear, safe, and presentation-ready.",
    includes: [
      "Garage and basement haul-outs",
      "Yard debris and curbside pickup",
      "Light demolition debris removal",
      "Responsible disposal coordination",
    ],
    idealFor: [
      "Move-out and estate transitions",
      "Pre-renovation cleanups",
      "Landlords turning over units",
    ],
  },
  {
    slug: "fence-building-repair",
    name: "Fence Building and Repair",
    shortDescription:
      "Fence repairs and new section installs for privacy, safety, and curb appeal.",
    longDescription:
      "From broken panels to full section rebuilds, we restore or improve fencing with clean, durable workmanship.",
    includes: [
      "Panel and post replacement",
      "Gate adjustments and hardware fixes",
      "Fence line reinforcement",
      "Site cleanup after completion",
    ],
    idealFor: [
      "Storm or age-related fence damage",
      "Homes preparing for sale",
      "Property managers with recurring repair needs",
    ],
  },
  {
    slug: "deck-staining",
    name: "Deck Staining",
    shortDescription:
      "Prep and stain services that bring weathered decks back to life.",
    longDescription:
      "We clean, prep, and stain deck surfaces to improve color, longevity, and overall finish quality.",
    includes: [
      "Surface prep and rinse",
      "Targeted sanding for rough spots",
      "Stain and sealant application",
      "Dry-time and care guidance",
    ],
    idealFor: [
      "Seasonal deck restoration",
      "Properties needing polished outdoor spaces",
      "Homeowners extending deck life",
    ],
  },
  {
    slug: "estate-garage-cleanout",
    name: "Estate and Garage Cleanout",
    shortDescription:
      "Large cleanouts for estates, garages, and inherited properties.",
    longDescription:
      "We coordinate labor and hauling for large-volume cleanouts when a property needs to be cleared efficiently.",
    includes: [
      "Item sorting and staging",
      "Large-load hauling coordination",
      "Donation and disposal routing",
      "Sweep-out and final walkthrough",
    ],
    idealFor: [
      "Estate transitions and probate timelines",
      "Real estate listing prep",
      "Landlords and investors turning properties",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
