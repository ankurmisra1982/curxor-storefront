/**
 * Symphony metaphor — locked Jun 2026 · desk crew rebrand Jul 2026.
 * Canonical spec: docs/DREAM-STATE-OVERVIEW.md · ../curxor-os/docs/curxor-os/DREAM-STATE-OVERVIEW.md
 */

export const symphonyPayoff = "The symphony plays." as const;

export const symphonyBridgeLine =
  "The orchestrator on your desk — the conductor for your desk crew." as const;

export const symphonyEssayLine =
  "CurXor is the orchestrator on your desk. Your desk crew is the team it runs." as const;

/** Five roles — operator → desk → desk crew → signal → cafe */
export const symphonyRoles = [
  {
    id: "operator",
    label: "You",
    metaphor: "Composer / principal",
    body: "You own the score — rules, desk setup, approvals.",
  },
  {
    id: "desk",
    label: "CurXor desk",
    metaphor: "Conductor + orchestrator",
    body: "Same desk, two registers — conducts your desk crew on metal you own.",
  },
  {
    id: "claws",
    label: "Desk crew",
    metaphor: "Orchestra / sections",
    body: "Digital employees on your metal — specialists that play in parallel: capital, content, outreach, and more.",
  },
  {
    id: "signal",
    label: "Signal",
    metaphor: "Acoustic reach",
    body: "How the performance reaches rooms, devices, and VR.",
  },
  {
    id: "cafe",
    label: "Crew Cafe",
    metaphor: "The hall",
    body: "Where the ensemble has presence — XP, ascension, real activity.",
  },
] as const;

export const symphonySection = {
  eyebrow: "THE SYMPHONY MODEL",
  headline: "One desk conducts. The symphony plays.",
  subhead:
    "Chat SaaS gives you one assistant. CurXor gives you a desk crew — a conductor on your desk, and a hall where your operators live.",
  payoff: symphonyPayoff,
  bridgeLine: symphonyBridgeLine,
} as const;

export const symphonyWhatIsThis = {
  box: {
    title: "The box",
    body: "A MINISFORUM MS-S1-class appliance. Plug into your network. You own the hardware.",
  },
  os: {
    title: "CurXor OS",
    body: "Agents, intelligence, and control stay on your metal — not a cloud subscription.",
  },
  claws: {
    title: "Desk crew",
    body: "Digital employees on your metal — a desk crew of ten. Capital, content, outreach, and more. Mint sections in The Forge.",
  },
  footer: "You compose the score. Unplug egress — the hall keeps thinking. The symphony plays on your metal.",
} as const;
