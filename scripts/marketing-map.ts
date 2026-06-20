/** Storefront marketing IDs/names/icons keyed by curxor-os `ootb-apps.ts` id. */
export const MARKETING_BY_APPLIANCE_ID = {
  "my-work": {
    storefrontId: "my-work",
    storefrontName: "My Work",
    icon: "⌘",
  },
  "my-shop": {
    storefrontId: "my-shop",
    storefrontName: "My Shop",
    icon: "◈",
  },
  "tesla-optimus-engine": {
    storefrontId: "optimus",
    storefrontName: "Tesla Optimus Engine",
    icon: "⊕",
  },
  "robotaxi-fleet-manager": {
    storefrontId: "robotaxi",
    storefrontName: "Robotaxi Fleet Manager",
    icon: "◎",
  },
  "claw-cafe": {
    storefrontId: "claw-cafe",
    storefrontName: "Claw Cafe",
    icon: "⎔",
  },
  "my-content-creator": {
    storefrontId: "content-creator",
    storefrontName: "Content Creator",
    icon: "✦",
  },
  "my-capital": {
    storefrontId: "invest-agent",
    storefrontName: "Invest Agent",
    icon: "↗",
  },
} as const;

export type ApplianceAppId = keyof typeof MARKETING_BY_APPLIANCE_ID;
