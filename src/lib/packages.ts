export type ServicePackage = {
  slug: string;
  tierLabel: string;
  name: string;
  priceLabel: string;
  tagline: string;
  summary: string;
  includes: string[];
  badge?: string;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "quick-win",
    tierLabel: "Package 1",
    name: "The Quick Win",
    priceLabel: "$199-299 (depending on driveway size)",
    tagline: "A polished first impression, delivered in hours",
    summary:
      "Ideal for homeowners who want their entry and frontage to feel pristine, welcoming, and carefully maintained.",
    includes: [
      "Driveway pressure wash",
      "Trash can cleaning (2 cans)",
      "Cobweb removal (exterior)",
      "Doormat + light fixture wipe-down",
    ],
  },
  {
    slug: "curb-appeal-boost",
    tierLabel: "Package 2",
    name: "The Curb Appeal Boost",
    priceLabel: "$449-599 (based on size)",
    tagline: "Signature curb appeal with a refined, finished look",
    summary:
      "A high-impact exterior refresh for families and sellers who want the home to look photo-ready in one visit.",
    badge: "Best First-Time Value",
    includes: [
      "Full house siding pressure wash",
      "Driveway + walkway pressure wash",
      "Gutter blowout + downspout flush",
      "Cobweb removal (full exterior)",
      "Trash can cleaning",
      "Window screen cleaning",
    ],
  },
  {
    slug: "exterior-refresh",
    tierLabel: "Package 3",
    name: "The Exterior Refresh",
    priceLabel: "$895-999",
    tagline: "Comprehensive exterior care with concierge-level ease",
    summary:
      "Our most-booked package for homeowners who want the entire exterior elevated without managing multiple crews.",
    badge: "Most Popular",
    includes: [
      "Everything in Package 2",
      "Full gutter cleaning (not just blowout)",
      "Exterior window cleaning",
      "Outdoor furniture cleaning",
      "Bed edging + weed pull (up to 3 beds)",
      "Mulch top-off (up to 2 yards)",
    ],
  },
  {
    slug: "property-overhaul",
    tierLabel: "Package 4",
    name: "The Property Overhaul",
    priceLabel: "$1,695-1,999",
    tagline: "Estate-style results, coordinated from start to finish",
    summary:
      "For larger seasonal upgrades and pre-listing preparation when every exterior detail needs to look exceptional.",
    includes: [
      "Everything in Package 3",
      "Deck/patio pressure wash + staining/sealing",
      "Hedge/shrub trimming (up to 10 shrubs)",
      "Full lawn aeration",
      "One handyman task (customer picks one)",
      "Junk haul (up to one trailer load)",
    ],
  },
  {
    slug: "estate-treatment",
    tierLabel: "Package 5",
    name: "The Estate Treatment",
    priceLabel: "$2,995",
    tagline: "White-glove transformation for your entire property",
    summary:
      "A premium, fully managed service tier for discerning homeowners seeking complete, turnkey property presentation.",
    includes: [
      "Everything in Package 4",
      "Garage organization + shelving install OR garage floor epoxy",
      "Estate/garage cleanout (up to 2 trailer loads)",
      "Fence repair",
      "Exterior trim/accent painting",
      "30-day callback guarantee",
    ],
  },
];

export const featuredPackageSlugs = [
  "quick-win",
  "curb-appeal-boost",
  "exterior-refresh",
] as const;

export function getPackageBySlug(slug: string) {
  return servicePackages.find((item) => item.slug === slug);
}
