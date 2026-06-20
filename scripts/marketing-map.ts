/** Storefront slugs + presentation keyed by curxor-os `ootb-apps.ts` id. Names/descriptions sync from appliance. */
export const MARKETING_BY_APPLIANCE_ID = {
  "claw-forge": {
    storefrontId: "claw-forge",
    icon: "✚",
    sortOrder: 0,
  },
  "my-capital": {
    storefrontId: "capital-claw",
    icon: "↗",
    sortOrder: 1,
  },
  "my-content-creator": {
    storefrontId: "creator-claw",
    icon: "✦",
    sortOrder: 2,
  },
  "my-work": {
    storefrontId: "outreach-claw",
    icon: "⌘",
    sortOrder: 3,
  },
  "my-shop": {
    storefrontId: "arbitrage-claw",
    icon: "◈",
    sortOrder: 4,
  },
  "tesla-optimus-engine": {
    storefrontId: "signal-claw",
    icon: "⊕",
    sortOrder: 5,
  },
  "robotaxi-fleet-manager": {
    storefrontId: "swarm-claw",
    icon: "◎",
    sortOrder: 6,
  },
  "claw-cafe": {
    storefrontId: "engage-claw",
    icon: "⎔",
    sortOrder: 7,
  },
} as const;

export type ApplianceAppId = keyof typeof MARKETING_BY_APPLIANCE_ID;
