export const siteConfig = {
  name: "CurXor",
  siteUrl: "https://curxor.ai",
  pageTitle: "CurXor — 126 TOPS · 64GB UMA AI Powerhouse | $0/mo API",
  metaDescription:
    "126 TOPS NPU. 64GB unified memory. Mint AI employees on bare metal — $3,999 once, zero monthly API fees. Your alpha stays local.",
  ogTagline: "126 TOPS · 64GB UMA · $0/mo API · $3,999 once",
  viralHook: "ChatGPT bills per token. CurXor bills once.",
  tagline:
    "A sovereign 64GB compute appliance that runs an infinite swarm of digital Claws — trade, create, scrape, and scale 24/7 without sending your strategies to OpenAI.",
  heroSubtext:
    "Not a PC. A money printer with 126 TOPS of local inference, dual 10GbE, and alpha that never leaves your building.",
  preOrderPrice: "$3,999",
  stripeCheckoutUrl:
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ??
    "https://buy.stripe.com/00w4gzb5U6gKc6igCZabK00",
  twitterUrl: "https://x.com/curxorai",
  twitterHandle: "@curxorai",
  emailEndpoint: "/api/subscribe",
};

export const computePower = {
  badge: "126 TOPS · 64GB UMA · RYZEN AI MAX+ 395",
  headline: "The Powerhouse",
  subhead:
    "More NPU than most data-center racks. Sitting on your desk. Running your Claws while you sleep.",
  stats: [
    { value: "126", unit: "TOPS", label: "NPU INFERENCE" },
    { value: "64", unit: "GB", label: "LPDDR5X UMA" },
    { value: "2×", unit: "10GbE", label: "DUAL PORT" },
    { value: "$0", unit: "/MO", label: "API FEES" },
  ],
  comparison: [
    { cloud: "$500+/mo in API tokens", curxor: "$3,999 — pay once" },
    { cloud: "Your prompts → OpenAI", curxor: "Your alpha → your metal" },
    { cloud: "Rate limits & downtime", curxor: "Infinite local inference" },
  ],
} as const;

export {
  apps,
  applianceVersion,
  applianceChannel,
  applianceSyncedAt,
} from "./generated/appliance-sync";

export const specColumns = [
  {
    id: "compute",
    label: "POWERHOUSE COMPUTE",
    featured: true,
    items: [
      "AMD Ryzen AI Max+ 395 — flagship edge silicon",
      "64GB LPDDR5X UMA — run massive models locally",
      "126 TOPS NPU — outpaces most cloud API tiers",
      "Zero per-token billing. Ever.",
    ],
  },
  {
    id: "network",
    label: "NETWORK",
    items: [
      "Dual 10GbE — eno1 Command · eno2 Egress",
      "Unplug eno2 → kill every outbound agent",
      "Flight Command UI firewalled from the internet",
    ],
  },
  {
    id: "engine",
    label: "CLAW ENGINE",
    items: [
      "Containerized digital employees, 24/7",
      "The Forge — describe it, deploy it, earn",
      "Alpaca · X · CRM bridges on eno2 only",
    ],
  },
] as const;

export const createToEarnSteps = [
  {
    step: "01",
    title: "Buy the powerhouse",
    body: "$3,999 once. 126 TOPS. 64GB UMA. No subscriptions. No token meter. Own the silicon.",
  },
  {
    step: "02",
    title: "Forge your Claw",
    body: "One sentence in The Forge → local LLM compiles a custom agent wired to eno2 egress.",
  },
  {
    step: "03",
    title: "Deploy 24/7",
    body: "Your Claw hits the swarm instantly — trading, scraping, creating while you sleep.",
  },
  {
    step: "04",
    title: "ROI in 30 days",
    body: "Five leads a week. Trades at 3am. The box pays for itself — then prints.",
  },
] as const;

export const forgeExamplePrompt =
  "Create a Claw that monitors Twitter for 'need a new website', drafts a pitch from their bio, and drops it in my Outbox.";

export const shareLines = [
  "126 TOPS on my desk. $0 to OpenAI.",
  "I unplugged the internet and killed every agent.",
  "Mint autonomous employees on bare metal → curxor.ai",
] as const;
