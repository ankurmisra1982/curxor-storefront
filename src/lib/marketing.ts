import {
  applianceVersion,
  clawRosterLabel,
  siteConfig,
} from "@/lib/config";
import { clawHeadlines } from "@/lib/claw-headlines";

export const supportEmail = "hello@curxor.ai";

export const trustSignals = [
  {
    label: "PRE-ORDER",
    value: siteConfig.preOrderPrice,
    detail: "One-time hardware · no CurXor subscription",
  },
  {
    label: "SHIP WINDOW",
    value: "Batch updates",
    detail: "Dates announced by email as production schedules",
  },
  {
    label: "SUPPORT",
    value: supportEmail,
    detail: "Pre-order and technical questions",
  },
  {
    label: "TERMS",
    value: "Pre-order policy",
    detail: "Ship dates, trading disclaimers, refunds",
    href: "/terms",
  },
] as const;

export const socialProofLine = `CurXor OS ${applianceVersion} · 124 smoke + 17 user-flow QA checks · MS-S1 MAX validation in progress`;

export const setupClaim =
  "Flight Command on day one — pick Claws in Settings, chat or tap skills. Live bridges need your credentials on eno2.";

export const priceIncludes = {
  headline: "What $3,999 includes",
  subhead:
    "MS-S1 MAX class silicon is the engine. CurXor ships the crew — OS, Claws, comms, and OTA on day one.",
  items: [
    {
      title: "64GB UMA appliance",
      body: "AMD Ryzen AI Max+ 395 · 126 TOPS NPU · dual 10GbE · eno1 Command · eno2 Egress kill switch",
    },
    {
      title: `CurXor OS ${applianceVersion}`,
      body: `${clawRosterLabel} · Flight Command · Settings · unified messaging · OTA updates`,
    },
    {
      title: "Digital bridges scaffold",
      body: "Capital, Creator, Outreach, and Forge egress paths — you add broker and social credentials",
    },
    {
      title: "No token meter",
      body: "Local inference by default. Optional frontier LLMs are bring-your-own-key in Settings.",
    },
  ],
  bareMetalAnchor: {
    label: "Bare MS-S1 MAX 64GB (hardware only)",
    price: "~$2,639",
    note: "No CurXor OS, Claws, bridges, or Flight Command — weeks of DIY integration",
  },
} as const;

export const personaCards = [
  {
    id: "traders",
    eyebrow: "WEALTH",
    title: "Algo traders & operators",
    body: clawHeadlines.capital.personaCard,
    claw: "Capital Claw",
    href: "/for/traders",
    demo: "/demo/03-capital-claw.png",
    tourHref: "/capital",
  },
  {
    id: "creators",
    eyebrow: "GROWTH",
    title: "Creators & indie hackers",
    body: clawHeadlines.creator.personaCard,
    claw: "Creator Claw",
    href: "/for/creators",
    demo: "/demo/08-creator-claw.png",
    tourHref: "/creator",
  },
  {
    id: "agencies",
    eyebrow: "WORK",
    title: "Agencies & outbound teams",
    body: clawHeadlines.outreach.personaCard,
    claw: "Outreach Claw",
    href: "/for/agencies",
    demo: "/demo/07-unified-inbox.png",
    tourHref: "/outreach",
  },
] as const;

export const tcoComparison = {
  headline: "Four-year total cost",
  subhead:
    "CurXor is a capital expense once. Cloud orchestration and assistant subscriptions compound every month.",
  rows: [
    {
      id: "curxor",
      label: "CurXor Edge Nexus",
      upfront: "$3,999",
      monthly: "$0 CurXor fees",
      fourYear: "~$4,050",
      note: "Hardware + ~$12/mo power · optional BYOK only",
      highlight: true,
    },
    {
      id: "perplexity",
      label: "Perplexity Pro + Mac mini",
      upfront: "~$499 Mac",
      monthly: "$20/mo Pro",
      fourYear: "~$1,459+",
      note: "Orchestration in the cloud · heavy workflows burn credits",
    },
    {
      id: "clawbox-max",
      label: "ClawBox + Max tier",
      upfront: "~€549",
      monthly: "€49/mo Max",
      fourYear: "~€2,901",
      note: "8GB assistant class · frontier models via subscription",
    },
    {
      id: "cloud-api",
      label: "Cloud API stack",
      upfront: "$0",
      monthly: "$500+/mo",
      fourYear: "$24,000+",
      note: "Per-token billing · data leaves your network",
    },
  ],
} as const;

export const creatorFlowShots = [
  {
    src: "/demo/creator/09-go-live-checklist.png",
    title: "Go Live checklist",
    body: "Day-one onboarding — demo tour, channels, bridges, and first scheduled post.",
  },
  {
    src: "/demo/creator/10-content-calendar.png",
    title: "Content calendar",
    body: "Scheduling with learned best times from your own metrics.",
  },
  {
    src: "/demo/creator/12-creation-wizard.png",
    title: "Creation wizard",
    body: "5 steps — channel, draft, media, pre-flight, best-time schedule.",
  },
  {
    src: "/demo/creator/13-bridge-health.png",
    title: "Bridge health",
    body: "Per-platform OAuth status, token hints, and fix suggestions.",
  },
  {
    src: "/demo/creator/15-engage-inbox.png",
    title: "Engage inbox",
    body: "Comment → draft reply → publish loop on eno2.",
  },
  {
    src: "/demo/creator/14-analytics-funnel.png",
    title: "Analytics",
    body: "Funnel metrics and recommendation-driven next actions.",
  },
] as const;
