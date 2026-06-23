/** Storefront slugs + presentation keyed by curxor-os `ootb-apps.ts` id. */

/** GTM depth tiers — honest labels for buyer-facing copy (Wave 1 truth pass). */
export const GTM_TIER_LABELS = {
  flagship: "Flagship",
  forge: "Forge",
  cafe: "Cafe",
  preview: "Preview",
} as const;

export type GtmTier = keyof typeof GTM_TIER_LABELS;

export const CLAW_CATEGORY_LABELS = {
  forge: "Create",
  wealth: "Wealth & growth",
  work: "Work & commerce",
  physical: "Signals & swarm",
  life: "Life & family",
} as const;

export type ClawCategoryId = keyof typeof CLAW_CATEGORY_LABELS;

export const MARKETING_BY_APPLIANCE_ID = {
  "claw-forge": {
    storefrontId: "claw-forge",
    icon: "✚",
    sortOrder: 0,
    category: "forge",
    gtmTier: "forge",
  },
  "my-capital": {
    storefrontId: "capital-claw",
    icon: "↗",
    sortOrder: 1,
    category: "wealth",
    gtmTier: "flagship",
  },
  "my-content-creator": {
    storefrontId: "creator-claw",
    icon: "✦",
    sortOrder: 2,
    category: "wealth",
    gtmTier: "flagship",
  },
  "my-work": {
    storefrontId: "outreach-claw",
    icon: "⌘",
    sortOrder: 3,
    category: "work",
    gtmTier: "flagship",
  },
  "my-shop": {
    storefrontId: "arbitrage-claw",
    icon: "◈",
    sortOrder: 4,
    category: "work",
    gtmTier: "preview",
  },
  "tesla-optimus-engine": {
    storefrontId: "signal-claw",
    icon: "⊕",
    sortOrder: 5,
    category: "physical",
    gtmTier: "preview",
  },
  "robotaxi-fleet-manager": {
    storefrontId: "swarm-claw",
    icon: "◎",
    sortOrder: 6,
    category: "physical",
    gtmTier: "preview",
  },
  "claw-cafe": {
    storefrontId: "engage-claw",
    icon: "⎔",
    sortOrder: 7,
    category: "physical",
    gtmTier: "cafe",
  },
  "my-vital": {
    storefrontId: "vital-claw",
    icon: "♡",
    sortOrder: 8,
    category: "life",
    gtmTier: "preview",
  },
  "my-family": {
    storefrontId: "kin-claw",
    icon: "⚘",
    sortOrder: 9,
    category: "life",
    gtmTier: "preview",
  },
} as const satisfies Record<
  string,
  {
    storefrontId: string;
    icon: string;
    sortOrder: number;
    category: ClawCategoryId;
    gtmTier: GtmTier;
  }
>;

export type ApplianceAppId = keyof typeof MARKETING_BY_APPLIANCE_ID;

export const CATEGORY_DISPLAY_ORDER: ClawCategoryId[] = [
  "forge",
  "wealth",
  "work",
  "physical",
  "life",
];
