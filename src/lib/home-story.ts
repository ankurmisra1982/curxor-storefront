/** Wave 2 homepage narrative — Act I (buy) + Act II (horizon). */

export const actOneStory = {
  eyebrow: "ACT I · WHAT YOU BUY",
  headline: "Flagship sections. One Forge. Your metal.",
  subhead:
    "Capital, Creator, and Outreach ship demo-ready on day one — sections of your orchestra. The Forge mints anything else you describe. All local; egress only on eno2.",
  flagships: [
    {
      claw: "Capital Claw",
      tier: "Flagship",
      body: "Demo tour · rules · paper path on eno2 · Go Live when Alpaca is yours.",
      href: "/capital",
      demo: "/demo/03-capital-claw.png",
    },
    {
      claw: "Creator Claw",
      tier: "Flagship",
      body: "Creation Wizard · Go Live · publish bridges · engage loop.",
      href: "/creator",
      demo: "/demo/08-creator-claw.png",
    },
    {
      claw: "Outreach Claw",
      tier: "Flagship",
      body: "L1–L3 persona · sequences · deliverability · pause-on-reply.",
      href: "/outreach",
      demo: "/demo/07-unified-inbox.png",
    },
  ],
  forge: {
    claw: "The Forge",
    tier: "Forge",
    body: "One sentence → custom Claw deployed on your appliance, wired to your egress policy.",
    demo: "/demo/04-forge.png",
    href: "/architecture#claw-tiers",
  },
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
