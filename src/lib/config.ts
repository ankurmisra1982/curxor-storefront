export const siteConfig = {
  name: "CurXor",
  siteUrl: "https://curxor.ai",
  pageTitle: "CurXor — 126 TOPS · 64GB UMA AI Powerhouse | $0/mo API",
  metaDescription:
    "Sovereign AI hardware with 126 TOPS NPU and 64GB unified memory. Run local LLM agents on bare metal — $3,999 once, zero monthly API fees.",
  keywords: [
    "sovereign AI hardware",
    "local LLM appliance",
    "edge AI agent server",
    "on-premise AI agents",
    "agentic AI hardware",
    "64GB unified memory AI",
    "Ryzen AI Max+ 395",
    "zero API fees",
  ],
  ogTagline: "126 TOPS · 64GB UMA · $0/mo API · $3,999 once",
  viralHook: "ChatGPT bills per token. CurXor bills once.",
  computeHook:
    "126 TOPS NPU · 64GB unified memory · outpaces most cloud API tiers.",
  tagline:
    "A sovereign 64GB compute appliance that runs an infinite swarm of digital Claws — trade, create, scrape, and scale 24/7 without sending your strategies to OpenAI.",
  heroSubtext:
    "Not a PC. A money printer with 126 TOPS of local inference, dual 10GbE, and alpha that never leaves your building.",
  preOrderPrice: "$3,999",
  preOrderPriceUsd: 3999,
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
  clawCategoryLabels,
  clawCategoryOrder,
  type StorefrontApp,
} from "./generated/appliance-sync";

import { apps as syncedApps } from "./generated/appliance-sync";

/** Claw workspaces excluding The Forge — synced from curxor-os ootb-apps. */
export const clawVerticalCount = syncedApps.filter(
  (app) => app.applianceId !== "claw-forge"
).length;

export const clawRosterLabel = `${clawVerticalCount} Claw verticals + The Forge`;

export const clawPickStackLabel = `${clawVerticalCount} Claws + The Forge · pick your stack`;

export const dayOneSteps = [
  {
    title: "1 · Pick your Claws",
    body: "Enable the digital employees you want on day one — Capital, Creator, Outreach, and more. Add or remove anytime in Settings.",
  },
  {
    title: "2 · Chat or tap",
    body: "Ask in plain language, or tap a skill button when you know the action. No coding required.",
  },
  {
    title: "3 · Local by default",
    body: "Reasoning runs on your box. Optional frontier LLMs in Settings — OAuth sign-in for OpenAI or your own API keys. Trades and posts egress only through eno2.",
  },
  {
    title: "4 · Make it yours",
    body: "Settings → Appearance: Simple or Expert mode, light/dark, and accent themes (CurXor, Ocean, Amber, Mono).",
  },
] as const;

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
      "Home hub — pick a Claw, chat or tap skills",
      "Settings — enable Claws, intelligence, themes",
      "Simple/Expert UI · light/dark · four accent schemes",
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

export const faqItems = [
  {
    question: "What is CurXor?",
    answer: `CurXor is a sovereign 64GB AI compute appliance with 126 TOPS NPU. It runs CurXor OS — ${clawRosterLabel}. Enable the Claws you want, chat in plain language, and scale 24/7 with local inference by default.`,
  },
  {
    question: "How is CurXor different from a Mac Studio plus Ollama?",
    answer:
      "A Mac Studio gives you inference hardware. CurXor gives you inference plus a complete agent platform: pre-built Claw workspaces, The Forge wizard, dual-port networking with an eno2 kill switch, digital bridges for trading and social, and a Settings hub to customize everything — ready on day one.",
  },
  {
    question: "What is included for $3,999?",
    answer: `The CurXor Edge Nexus appliance, CurXor OS, Flight Command (Home hub, Settings, Simple/Expert modes, light/dark themes), ${clawRosterLabel} (enable any combination), chat workspaces with one-tap skills, local LLM on 64GB UMA, optional frontier LLM via your own API keys, and OTA updates. No CurXor subscription or per-token fees.`,
  },
  {
    question: "Do I need to code to use CurXor?",
    answer:
      "No. Each Claw opens a workspace with plain-language chat and skill buttons. Pick verticals in setup or Settings, describe what you want, and tap when you're ready. The Forge also uses natural language.",
  },
  {
    question: "Are there monthly fees or API costs?",
    answer:
      "CurXor charges $3,999 once for the hardware — no monthly appliance fee and no per-token billing from us. All included Claws run local models by default. If you optionally connect OpenAI (OAuth or API key), Anthropic, Google, Cursor, or OpenRouter in Settings, those providers bill your account directly.",
  },
  {
    question: "Can I use GPT, Claude, or other cloud models?",
    answer:
      "Yes, optionally. Settings → Intelligence lets you stay local-only, use frontier models only, or auto-fallback. OpenAI supports OAuth sign-in (ChatGPT subscription) or API keys; other providers accept API keys or guided subscription linking. Trades and social posts still egress only through eno2 bridges — cloud LLMs are for chat and planning when you choose them.",
  },
  {
    question: "When does it ship?",
    answer:
      "CurXor is available for pre-order now. Pre-order customers receive launch updates by email as production batches are scheduled. Subscribe on curxor.ai or follow @curxorai on X for ship-date announcements.",
  },
  {
    question: "Can I disconnect my agents from the internet?",
    answer:
      "Yes. eno1 is Command (Flight Command UI). eno2 is Egress for outbound agent actions. Unplug eno2 to kill outbound Claws instantly. Keep intelligence on local-only in Settings for fully offline reasoning.",
  },
  {
    question: "How is CurXor different from Perplexity Personal Computer?",
    answer:
      "Perplexity Personal Computer is agent software on your Mac — often a Mac mini on the Perplexity Max plan (~$200/month) — that orchestrates frontier models via Perplexity's cloud. CurXor is a dedicated appliance: local inference on 64GB UMA, pre-built Claw verticals, Settings to pick your stack, and an eno2 kill switch. You pay $3,999 once instead of ~$2,400/year in subscriptions, and your prompts and playbooks stay on your metal by default.",
  },
  {
    question: "Where are your privacy policy and trading disclaimers?",
    answer:
      "Privacy policy: curxor.ai/privacy. Terms, pre-order conditions, and Capital Claw trading disclaimers: curxor.ai/terms.",
  },
] as const;

export const comparisonOptions = [
  {
    id: "cloud",
    label: "CLOUD API STACK",
    price: "$500+/mo",
    highlights: [
      "Per-token billing forever",
      "Your data sent to OpenAI",
      "Rate limits and downtime",
      "No bundled agent platform",
    ],
    negative: true,
  },
  {
    id: "diy",
    label: "MAC STUDIO DIY",
    price: "~$3,500+",
    highlights: [
      "Inference hardware only",
      "You build the agent stack",
      "No egress kill switch",
      "Weeks of integration work",
    ],
    negative: true,
  },
  {
    id: "perplexity",
    label: "PERPLEXITY MAX + MAC",
    price: "$200/mo",
    highlights: [
      "~$2,400/yr on Max tier",
      "Frontier models orchestrated in the cloud",
      "You supply the Mac mini for 24/7 runs",
      "General automation — no bundled Claws",
    ],
    negative: true,
  },
  {
    id: "curxor",
    label: "CURXOR NEXUS",
    price: "$3,999 once",
    highlights: [
      "126 TOPS · 64GB UMA included",
      clawPickStackLabel,
      "Settings hub · themes & LLM choice",
      "eno2 kill switch for agents",
      "Zero CurXor API fees",
    ],
    negative: false,
  },
] as const;
