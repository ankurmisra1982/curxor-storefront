/** Wave 2 homepage narrative — Act I (buy) + Act II (horizon). */

import { g3Screenshots } from "@/lib/g3-demo";

export const actOneStory = {
  eyebrow: "ACT I · WHAT YOU BUY",
  headline: "Three Claws you'll run in week one",
  subhead:
    "CurXor ships ten Claws and The Forge. Capital, Creator, and Outreach are your buy decision — G3 demo depth on MS-S1 metal, local context, egress you control.",
  flagships: [
    {
      claw: "Capital Claw",
      tier: "Flagship",
      body: "Rules-bound wealth desk — paper to live when you wire bridges on eno2.",
      href: "/capital",
      demo: g3Screenshots.capitalPaper,
    },
    {
      claw: "Creator Claw",
      tier: "Flagship",
      body: "Draft, repurpose, schedule — publish through egress when you approve.",
      href: "/creator",
      demo: g3Screenshots.creatorQueue,
    },
    {
      claw: "Outreach Claw",
      tier: "Flagship",
      body: "Pipeline, sequences, deliverability — outbound when bridges are wired.",
      href: "/outreach",
      demo: g3Screenshots.workPipeline,
    },
  ],
  forge: {
    claw: "The Forge",
    tier: "Forge",
    body: "One sentence → custom Claw deployed on your appliance, wired to your egress policy.",
    demo: "/demo/04-forge.png",
    href: "/architecture#claw-tiers",
  },
  honestyFooter:
    "Five additional Claws ship as honest previews — clearly labeled Coming Soon on the dashboard. We don't dress mock depth as production at $3,999.",
} as const;

export const actTwoStory = {
  eyebrow: "ACT II · THE HALL",
  headline: "The box grows with you on metal.",
  subhead:
    "Your orchestra earns cross-app momentum on the appliance — not in a cloud leaderboard. The symphony plays while you live your life.",
  cafeProof: {
    kicker:
      "Your Claws live on your metal. Your desk conducts when they're ready to venture out.",
    title: "Claw Cafe — the hall on your desk",
    body: "Where the ensemble has presence — pixel room, ascension XP, and streaks tied to real Flagship activity. Capital rules, Creator publishes, Outreach sends. Proof from Flight Command, not a rebrand.",
  },
  evolutionTease:
    "Ascends with you — same appliance, deeper desks over time. No subscription tier names on the tin.",
} as const;
