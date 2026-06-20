/** Storefront slugs + presentation keyed by curxor-os `ootb-apps.ts` id. */
export const CLAW_CATEGORY_LABELS = {
  forge: "Create",
  wealth: "Wealth & growth",
  work: "Work & commerce",
  physical: "Signals & swarm",
} as const;

export type ClawCategoryId = keyof typeof CLAW_CATEGORY_LABELS;

export const MARKETING_BY_APPLIANCE_ID = {
  "claw-forge": {
    storefrontId: "claw-forge",
    icon: "✚",
    sortOrder: 0,
    category: "forge",
  },
  "my-capital": {
    storefrontId: "capital-claw",
    icon: "↗",
    sortOrder: 1,
    category: "wealth",
  },
  "my-content-creator": {
    storefrontId: "creator-claw",
    icon: "✦",
    sortOrder: 2,
    category: "wealth",
  },
  "my-work": {
    storefrontId: "outreach-claw",
    icon: "⌘",
    sortOrder: 3,
    category: "work",
  },
  "my-shop": {
    storefrontId: "arbitrage-claw",
    icon: "◈",
    sortOrder: 4,
    category: "work",
  },
  "tesla-optimus-engine": {
    storefrontId: "signal-claw",
    icon: "⊕",
    sortOrder: 5,
    category: "physical",
  },
  "robotaxi-fleet-manager": {
    storefrontId: "swarm-claw",
    icon: "◎",
    sortOrder: 6,
    category: "physical",
  },
  "claw-cafe": {
    storefrontId: "engage-claw",
    icon: "⎔",
    sortOrder: 7,
    category: "physical",
  },
} as const satisfies Record<
  string,
  {
    storefrontId: string;
    icon: string;
    sortOrder: number;
    category: ClawCategoryId;
  }
>;

export type ApplianceAppId = keyof typeof MARKETING_BY_APPLIANCE_ID;

export const CATEGORY_DISPLAY_ORDER: ClawCategoryId[] = [
  "forge",
  "wealth",
  "work",
  "physical",
];
