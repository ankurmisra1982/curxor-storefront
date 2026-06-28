import {
  applianceVersion,
  clawRosterLabel,
  productIdentity,
  siteConfig,
} from "@/lib/config";
import { clawHeadlines } from "@/lib/claw-headlines";
import { qaMetricsLine } from "@/lib/qa-metrics";

export const supportEmail = siteConfig.contactEmail;

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

export const socialProofLine = `CurXor OS ${applianceVersion} · ${qaMetricsLine} · MS-S1 unboxed · G1 golden path in progress`;

export const setupClaim =
  "Flight Command on day one — pick Claws in Settings, chat or tap skills. Live bridges need your credentials on eno2.";

export const priceIncludes = {
  headline: "What $3,999 includes",
  subhead:
    "MS-S1 MAX class silicon is the engine. CurXor ships the crew — OS, Claws, comms, and OTA on day one.",
  items: [
    {
      title: `${productIdentity.boxName} · 64GB UMA`,
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

/** Full illustrative matrix for /compare and deep-dive pages — not homepage. */
export const tcoScenarios = {
  headline: "Illustrative spend scenarios",
  subhead:
    "Planning estimates across different compute classes and buyer profiles. No single “winner” column — compare like with like.",
  methodology:
    "Illustrative only — not quotes. USD rows exclude tax; ClawBox row in EUR. CurXor four-year uses hardware only (~$3,999); add ~$12/mo power (~$576 over 4y) for a loaded estimate (~$4,575). Perplexity uses Max tier (~$200/mo) per FAQ. ClawBox is 8GB assistant class — not a 64GB UMA peer. BYOK, broker, and subscription tier changes not modeled.",
  rows: [
    {
      id: "cloud-api",
      label: "Heavy operator — cloud API",
      upfront: "$0",
      monthly: "$500+/mo",
      fourYear: "~$24,000+",
      note: "Per-token billing · orchestration in vendor cloud · data egress",
    },
    {
      id: "curxor",
      label: productIdentity.boxName,
      upfront: "$3,999",
      monthly: "$0 CurXor fees",
      fourYear: "~$3,999",
      note: "Hardware only in headline · ~$12/mo power → ~$4,575 over 4y · optional BYOK",
      highlight: true,
    },
    {
      id: "perplexity",
      label: "Perplexity Max + Mac mini",
      upfront: "~$499 Mac",
      monthly: "~$200/mo Max",
      fourYear: "~$10,099+",
      note: "Frontier models orchestrated in Perplexity cloud · Mac for 24/7 runs",
    },
    {
      id: "clawbox",
      label: "Light assistant — ClawBox",
      upfront: "~€549",
      monthly: "€49/mo Max (optional)",
      fourYear: "~€2,901",
      note: "8GB assistant class · different compute tier — not a 64GB UMA peer",
    },
  ],
} as const;

export const creatorFlowShots = [
  {
    src: "/demo/creator/16-content-planner.png",
    title: "Content planner",
    body: "Queue, slots, and platform mix — plan a week without leaving the desk.",
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
