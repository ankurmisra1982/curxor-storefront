export type BuyerTip = {
  title: string;
  body: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export const buyerTips = {
  tops: {
    title: "TOPS (NPU speed)",
    body: "Trillions of operations per second — a shorthand for how fast the on-box AI chip runs models. Higher means snappier Claws without cloud API calls.",
  },
  uma: {
    title: "Unified memory (UMA)",
    body: "One shared 64 GB memory pool for the CPU and GPU — so large local models fit on your desk without a separate “VRAM” limit. That is how CurXor keeps inference off the cloud.",
    learnMoreHref: "/pricing",
    learnMoreLabel: "Model budgets",
  },
  umaTiers: {
    title: "UMA tiers",
    body: "Economy, Balanced, and Performance are how much of 64 GB you budget for local AI models on the same appliance — not subscription plans and not different hardware SKUs.",
    learnMoreHref: "/pricing",
    learnMoreLabel: "Full model matrix",
  },
  eno2: {
    title: "eno2 egress port",
    body: "The second 10GbE port carries outbound traffic only — trades, posts, webhooks. Unplug it and agents stop reaching the internet. Flight Command stays on the private eno1 port.",
    learnMoreHref: "/architecture",
    learnMoreLabel: "Network architecture",
  },
  dualPort: {
    title: "eno1 / eno2",
    body: "Two physical network ports: eno1 is your private command lane (Flight Command). eno2 is the only path agents use for Alpaca, social APIs, and other outbound work.",
    learnMoreHref: "/architecture",
    learnMoreLabel: "Dual-port isolation",
  },
  vla: {
    title: "VLA models",
    body: "Vision-Language-Action — AI that reads a scene and plans actions. Optional at the Performance tier for manipulation-heavy workflows; most Claws do not need it.",
  },
  illustrativeSpend: {
    title: "Illustrative spend scenarios",
    body: "Planning estimates only — not quotes. Rows mix compute classes and currencies; read the notes column before comparing totals.",
    learnMoreHref: "/compare#tco",
    learnMoreLabel: "Scenario methodology",
  },
} as const satisfies Record<string, BuyerTip>;

export type BuyerTipId = keyof typeof buyerTips;
