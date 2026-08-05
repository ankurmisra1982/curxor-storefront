export const siteConfig = {
  name: "CurXor",
  siteUrl: "https://curxor.ai",
  pageTitle: "CurXor — Your AI team on a box you own",
  metaDescription:
    "Desk appliance + CurXor OS. Mint autonomous employees on bare metal — Capital, Creator, Outreach demo-ready day one, local inference, $3,999 once, $0/mo API rent.",
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
  heroHeadline: "Your AI team. On a box you own.",
  heroSubhead:
    "CurXor is a desk appliance with CurXor OS — Capital, Creator, and Outreach demo-ready on your metal, local inference, and a command dashboard on your network. $3,999 once · $0/mo API for the operate plane.",
  /** Layer 4 · links to /signal. Conductor verb — pairs with orchestrator in essays/deck. */
  heroAccent: "Interfaces drift. Your desk conducts.",
  computeHook:
    "126 TOPS local NPU — ROCm inference validated on Standard 64; published mesh benchmarks pending",
  tagline:
    "One desk conducts your desk crew — trade, create, and outbound without shipping your playbook to the cloud.",
  heroDemoLine: "Demo tour day one — not a weekend project.",
  /** Above-fold honesty — 3 flagships demo-ready; previews labeled; outbound until eno2 wired. */
  heroHonestyLine:
    "3 desks demo-ready · 8 previews labeled · simulated outbound until you wire eno2",
  heroSubtext:
    "126 TOPS local inference · dual 10GbE · eno2 kill switch · $0 CurXor API fees.",
  heroCreatorBadge:
    "Capital · Creator · Outreach — demo tour day one",
  preOrderPrice: "$3,999",
  preOrderPriceUsd: 3999,
  stripeCheckoutUrl:
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ??
    "https://buy.stripe.com/00w4gzb5U6gKc6igCZabK00",
  twitterUrl: "https://x.com/curxorai",
  twitterHandle: "@curxorai",
  emailEndpoint: "/api/subscribe",
  /** Public contact — hello@curxor.ai (Resend domain verified on curxor.ai). */
  contactEmail: "hello@curxor.ai",
};

/** curXor is the chassis name — same wordmark as the MS-S1 badge / logo lockup. */
export const productIdentity = {
  boxName: "curXor",
  boxDescriptor: "64GB sovereign appliance",
  companyName: "CurXor Systems",
  osName: "CurXor OS",
  chassisNote: "Name on the box — badge ships on production MS-S1 units",
} as const;

export const socialProfiles = [
  {
    id: "x",
    label: "X",
    handle: "@curxorai",
    url: "https://x.com/curxorai",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "CurXor Systems",
    url: "https://www.linkedin.com/in/curxor-systems-222648418/",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "CurXor",
    url: "https://www.facebook.com/profile.php?id=61590859873651",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@curxorsystems",
    url: "https://www.instagram.com/curxorsystems/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@curxorai",
    url: "https://www.tiktok.com/@curxorai",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@curxorai",
    url: "https://www.youtube.com/@curxorai",
  },
] as const;

export const socialSameAs = socialProfiles.map((profile) => profile.url);

export const computePower = {
  badge: "126 TOPS · 64GB UMA · RYZEN AI MAX+ 395",
  headline: "The Powerhouse",
  subhead:
    "126 TOPS NPU on your desk — validated on Standard 64. Published mesh benchmarks pending.",
  stats: [
    { value: "126", unit: "TOPS", label: "NPU INFERENCE" },
    { value: "64", unit: "GB", label: "LPDDR5X UMA" },
    { value: "2×", unit: "10GbE", label: "DUAL PORT" },
    { value: "$0", unit: "/MO", label: "API FEES" },
  ],
  comparison: [
    { cloud: "$500+/mo in API tokens", curxor: "$3,999 — pay once" },
    { cloud: "Your prompts → OpenAI", curxor: "Your alpha → your metal" },
    { cloud: "Rate limits & downtime", curxor: "Local inference on your UMA budget" },
  ],
} as const;

export {
  applianceVersion,
  applianceChannel,
  applianceSyncedAt,
  clawCategoryLabels,
  clawCategoryOrder,
} from "./generated/appliance-sync";

import { apps as syncedApps } from "./generated/appliance-sync";

type SyncedApp = (typeof syncedApps)[number];

/** Public app card — description may be buyer-overlaid vs appliance sync. */
export type StorefrontApp = Omit<SyncedApp, "description"> & {
  description: string;
};

/** Buyer overlay — appliance sync may still carry internal milestone codes in descriptions. */
export const apps: StorefrontApp[] = syncedApps.map((app) =>
  app.applianceId === "my-learn"
    ? {
        ...app,
        description:
          "Tutor desk — pick a learner from Kin, track curriculum progress, and earn Cafe XP when depth ships. Honest Preview shell today.",
      }
    : app,
);

/** Synced workspace count excluding The Forge — internal only; includes Cafe/horizon apps. */
export const clawVerticalCount = syncedApps.filter(
  (app) => app.applianceId !== "forge"
).length;

/** Public GTM roster — locked 2026-08-02; do not derive from syncedApps length. */
export const clawRosterLabel = "desk crew of ten + The Forge";

export const clawPickStackLabel =
  "desk crew of ten + The Forge · pick your stack";

export const shareLines = [
  "126 TOPS on my desk. $0 to OpenAI.",
  "I unplugged the internet and killed every agent.",
  "Mint autonomous employees on bare metal → curxor.ai",
] as const;

export const faqItems = [
  {
    question: "What is CurXor?",
    answer: `CurXor is the sovereign AI box — 64GB compute with 126 TOPS NPU on your desk. CurXor Systems builds the hardware and CurXor OS: ${clawRosterLabel}. Enable the crewmates you want, chat in plain language, and scale 24/7 with local inference by default. Category brief: curxor.ai/journal/mint-autonomous-employees.`,
  },
  {
    question: "How is CurXor different from a Mac Studio plus Ollama?",
    answer:
      "A Mac Studio gives you inference hardware. CurXor gives you inference plus a complete agent platform: pre-built crewmate desks, The Forge wizard, dual-port networking with an eno2 kill switch, digital bridges for trading and social, and a Settings hub to customize everything — ready on day one. Compare: curxor.ai/compare/mac-studio-ollama · Longer take: curxor.ai/journal/appliance-not-diy.",
  },
  {
    question: "How is CurXor different from OpenClaw?",
    answer:
      "OpenClaw is a free assistant runtime — you supply hardware, install the stack, and harden security yourself. CurXor is the appliance product: CurXor OS, vertical desks (Capital, Creator, Outreach), The Forge, Crew Cafe, and an eno2 egress kill switch OOTB. Not OpenClaw packaging on a Mac Mini. Deep dive: curxor.ai/compare · Status: curxor.ai/journal/working-product-on-real-metal.",
  },
  {
    question: "How is CurXor different from a €549 assistant box?",
    answer:
      "€549-class boxes are chat and messaging appliances on light compute. CurXor is operator desk depth — 64GB UMA, flagship crewmates, Forge, and Crew Cafe. $3,999 is a filter for outcomes, not a race to assistant price. Compare: curxor.ai/compare/clawbox · Appliance brief: curxor.ai/journal/appliance-not-diy.",
  },
  {
    question: "What is included for $3,999?",
    answer: `The CurXor box, CurXor OS, Flight Command (Home hub, Settings, Simple/Expert modes, light/dark themes), ${clawRosterLabel} (enable any combination), chat workspaces with one-tap skills, optional messaging gateways (Telegram, Slack, WhatsApp, iMessage), local LLM on 64GB UMA, optional frontier LLM via your own API keys, and software updates (production customer-fleet OTA pending — see Press). No CurXor subscription or per-token fees.`,
  },
  {
    question: "Do I need to code to use CurXor?",
    answer:
      "No. Each crewmate opens a workspace with plain-language chat and skill buttons. Pick lanes in setup or Settings, describe what you want, and tap when you're ready. The Forge also uses natural language.",
  },
  {
    question: "Are there monthly fees or API costs?",
    answer:
      "CurXor charges $3,999 once for the hardware — no monthly appliance fee and no per-token billing from us. All included crewmates run local models by default. If you optionally connect OpenAI (OAuth or API key), Anthropic, Google, Cursor, or OpenRouter in Settings, those providers bill your account directly.",
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
    question: "Can I message my desk crew from Telegram, WhatsApp, or Slack?",
    answer:
      "Yes. CurXor OS routes dashboard chat and external messaging through one local channel router synced to the crew context inbox. Connect the gateways you want in Settings — Telegram, Slack, WhatsApp, iMessage, and more. Reasoning stays on your appliance; outbound actions still egress only through eno2 when a crewmate needs the internet.",
  },
  {
    question: "What do Flagship, Forge, Cafe, and Preview mean?",
    answer:
      "Honest depth labels on every crewmate. Flagship desks (Capital, Creator, Outreach) are demo-ready with Go Live paths and eno2 bridges. The Forge mints custom agents in natural language. Crew Cafe is the cross-crew growth home — XP, streaks, and ascension from real activity. Preview modules (Arbitrage, Signal, Swarm, Vital, Kin) are working shells with local data — not fake production pipelines. Crew Cafe note: curxor.ai/journal/crew-cafe.",
  },
  {
    question: "What does Creator do on day one?",
    answer:
      "Creator is a Flagship desk: 5-step Creation Wizard, Go Live checklist, publish bridges on eno2, engage loop, and planner/analytics at Standard and Expert levels. Demo tour runs day one; live posts need your credentials on eno2.",
  },
  {
    question: "What does Capital do on day one?",
    answer:
      "Capital is a Flagship desk: demo tour, Go Live checklist, rule engine, paper trading via Alpaca on eno2, and Capital Alpha analytics. Live broker credentials stay on your appliance — we do not hold your keys in the cloud.",
  },
  {
    question: "What does Outreach do on day one?",
    answer:
      "Outreach is a Flagship desk: sequences, CSV import, deliverability checks, approval flows, and outbound analytics. Demo tour simulates sends until you connect mail and CRM bridges on eno2.",
  },
  {
    question: "Can Vital sync with my smartwatch or health apps?",
    answer:
      "Vital is a Preview module today — Longevity Lab, literature RAG, and clinician export work on-box. Wearable and lab PDF bridges connect via OAuth you authorize in Settings when eno2 validation completes. CurXor does not lock you to one watch brand.",
  },
  {
    question: "Can I disconnect my agents from the internet?",
    answer:
      "Yes. eno1 is Command (Flight Command UI). eno2 is Egress for outbound agent actions. Unplug eno2 to kill outbound crewmates instantly. Keep intelligence on local-only in Settings for fully offline reasoning.",
  },
  {
    question: "How is CurXor different from NVIDIA NemoClaw?",
    answer:
      "NemoClaw is an alpha governance layer for DIY OpenClaw deployments — sandboxing, policies, and model routing on hardware you bring. CurXor is a complete appliance product: curated OOTB crewmates, local inference by default, optional frontier LLMs in Settings, and a physical eno2 egress kill switch — without assembling the stack yourself.",
  },
  {
    question: "How is CurXor different from Perplexity Personal Computer?",
    answer:
      "Perplexity Personal Computer is agent software on your Mac — often a Mac mini on the Perplexity Max plan (~$200/month) — that orchestrates frontier models via Perplexity's cloud. CurXor is a dedicated appliance: local inference on 64GB UMA, pre-built crewmate desks, Settings to pick your stack, and an eno2 kill switch. You pay $3,999 once instead of ~$2,400/year in subscriptions, and your prompts and playbooks stay on your metal by default.",
  },
  {
    question: "How is CurXor different from MIKY or other “independent computer for agents” NAS boxes?",
    answer:
      "MIKY-class and Minisforum NAS-style boxes target always-on agent hosts with bundled messaging and calendar skills — great for general automation. CurXor matches the independence story and adds serious local inference (64GB UMA, 126 TOPS), wealth/work/life crewmates, Telegram/Slack/WhatsApp/iMessage gateways, dual-port eno1/eno2 isolation, and The Forge to customize anything — not a fixed skill bundle.",
  },
  {
    question: "Where are your privacy policy and trading disclaimers?",
    answer:
      "Privacy policy: curxor.ai/privacy. Terms, pre-order conditions, and Capital trading disclaimers: curxor.ai/terms.",
  },
  {
    question: "Who is CurXor for?",
    answer:
      "Solo founders, consultants, and creator-operators who already use AI daily but want always-on workflows — outbound, content, and capital rules — on hardware they own. If you've never used AI, start with the chat tools first. If you're stitching five SaaS products and nothing stays on 24/7, you're our buyer.",
  },
  {
    question: "Who is CurXor NOT for?",
    answer:
      "Enterprise teams needing SSO and fleet admin. Hobbyists looking for a cheap chat box. Buyers who need every crewmate production-complete on day one — five are honest Coming Soon previews; Capital, Creator, and Outreach are the demo-ready desks.",
  },
  {
    question: "Which crewmates actually work today?",
    answer:
      "Outreach, Creator, Capital, and The Forge are flagship depth with demo-tour proof on metal. Kin, Vital, Signal, Swarm, and Arbitrage include preview or Coming Soon surfaces — labeled honestly in Flight Command. Crew Cafe is the universal spatial home (pixel room, ascension); Engage is the Creator inbox tab.",
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
      "General automation — no bundled crewmates",
    ],
    negative: true,
  },
  {
    id: "openclaw-diy",
    label: "OPENCLAW DIY",
    price: "$150–700+",
    highlights: [
      "Free runtime — you build everything",
      "Weeks of setup, skills, and bridges",
      "No bundled wealth or life verticals",
      "Security hardening is on you",
    ],
    negative: true,
  },
  {
    id: "clawbox",
    label: "CLAWBOX / JETSON",
    price: "~€549",
    highlights: [
      "8GB RAM · ~67 TOPS class",
      "Great for light assistants",
      "Optional cloud model plans",
      "Not built for 64GB local models",
    ],
    negative: true,
  },
  {
    id: "miky",
    label: "MIKY / AGENT NAS",
    price: "Varies",
    highlights: [
      "Independent computer for agents",
      "Messaging & calendar automation",
      "General skills — not wealth/life verticals",
      "Compute class varies by SKU",
    ],
    negative: true,
  },
  {
    id: "curxor",
    label: "CurXor",
    price: "$3,999 once",
    highlights: [
      "126 TOPS · 64GB UMA included",
      clawPickStackLabel,
      "Telegram · Slack · WhatsApp · iMessage gateways",
      "OpenClaw engine · turnkey Flight Command OS",
      "eno2 kill switch · user-configured integrations",
      "Zero CurXor API fees",
    ],
    negative: false,
  },
] as const;
