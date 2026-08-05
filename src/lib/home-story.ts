/** Wave 2 homepage narrative — Act I (buy) + Act II (horizon). */

import { g3Screenshots } from "@/lib/g3-demo";

export const actOneStory = {
  eyebrow: "ACT I · WHAT YOU BUY",
  headline: "Three crewmates you'll run in week one",
  subhead:
    "Digital employees on your metal — a desk crew of ten plus The Forge. Capital, Creator, and Outreach are your buy decision — demo-ready on MS-S1 metal, local context, egress you control.",
  flagships: [
    {
      claw: "Capital",
      tier: "Flagship",
      body: "Rules-bound wealth desk — paper book on camera; live broker only when you wire your own keys on eno2.",
      href: "/capital",
      demo: g3Screenshots.capitalPaper,
    },
    {
      claw: "Creator",
      tier: "Flagship",
      body: "Draft, repurpose, schedule — publish through egress when you approve.",
      href: "/creator",
      demo: g3Screenshots.creatorQueue,
    },
    {
      claw: "Outreach",
      tier: "Flagship",
      body: "Pipeline, sequences, deliverability — outbound when bridges are wired.",
      href: "/outreach",
      demo: g3Screenshots.workPipeline,
    },
  ],
  forge: {
    claw: "The Forge",
    tier: "Forge",
    body: "One sentence → custom crewmate deployed on your appliance, wired to your egress policy.",
    demo: "/demo/04-forge.png",
    href: "/architecture#claw-tiers",
  },
  honestyFooter:
    "Five additional crewmates ship as honest previews — clearly labeled Coming Soon on the dashboard. We don't dress mock depth as production at $3,999.",
} as const;

export const actTwoStory = {
  eyebrow: "THE HALL",
  headline: "The box grows with you on metal.",
  subhead:
    "Your orchestra earns cross-app momentum on the appliance — not in a cloud leaderboard. The symphony plays while you live your life.",
  cafeProof: {
    kicker:
      "Your desk crew lives on your metal. Your desk conducts when they're ready to venture out.",
    title: "Crew Cafe — the hall on your desk",
    body: "Where the ensemble has presence — pixel room, ascension XP, and streaks tied to real Flagship activity. Capital rules, Creator publishes, Outreach sends. Proof from Flight Command, not a rebrand.",
  },
  evolutionTease:
    "Ascends with you — same appliance, deeper desks over time. No subscription tier names on the tin.",
} as const;

/** Collapsed homepage vision band — Symphony + Signal + Cafe in one section. */
export const visionBand = {
  eyebrow: "VISION",
  headline: "One desk conducts. The symphony plays.",
  subhead:
    "Chat SaaS gives you one assistant. CurXor gives you a desk crew — a conductor on your desk, acoustic reach when you want it, and a hall where crewmates earn presence from real Flagship activity.",
  signalTeaser:
    "Signal is a concept preview — interfaces drift; your desk conducts. Not day-one integration.",
  cafeTeaser:
    "Crew Cafe is the hall on your metal — XP and ascension tied to real Capital, Creator, and Outreach activity. Stills captured on MS-S1.",
  cafeDisclaimer:
    "Captured on MS-S1 — Cafe UI ships on the appliance; not a live cloud leaderboard.",
} as const;
