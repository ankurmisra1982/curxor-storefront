/**
 * Symphony metaphor — locked Jun 2026.
 * Canonical spec: docs/DREAM-STATE-OVERVIEW.md · ../curxor-os/docs/curxor-os/DREAM-STATE-OVERVIEW.md
 */

export const symphonyPayoff = "The symphony plays." as const;

export const symphonyBridgeLine =
  "The orchestrator on your desk — the conductor for your Claws." as const;

export const symphonyEssayLine =
  "CurXor conducts on your desk. Claws are the orchestra." as const;

/** Five roles — operator → desk → claws → signal → cafe */
export const symphonyRoles = [
  {
    id: "operator",
    label: "You",
    metaphor: "Composer / principal",
    body: "You own the score — rules, FRE, approvals.",
  },
  {
    id: "desk",
    label: "CurXor desk",
    metaphor: "Conductor + orchestrator",
    body: "Same desk, two registers — conducts your Claws on metal you own.",
  },
  {
    id: "claws",
    label: "Claws",
    metaphor: "Orchestra / sections",
    body: "Specialists that play in parallel — capital, content, outreach, and more.",
  },
  {
    id: "signal",
    label: "Signal",
    metaphor: "Acoustic reach",
    body: "How the performance reaches rooms, devices, and VR.",
  },
  {
    id: "cafe",
    label: "Claw Cafe",
    metaphor: "The hall",
    body: "Where the ensemble has presence — XP, ascension, real activity.",
  },
] as const;

export const symphonySection = {
  eyebrow: "THE SYMPHONY MODEL",
  headline: "One desk conducts. The symphony plays.",
  subhead:
    "Chat SaaS gives you one assistant. CurXor gives you an orchestra of Claws — a conductor on your desk, and a hall where your operators live.",
  payoff: symphonyPayoff,
  bridgeLine: symphonyBridgeLine,
} as const;

export const symphonyWhatIsThis = {
  box: {
    title: "The CurXor box",
    body: "The CurXor box — a desk appliance you own. Act I validated on MS-S1-class metal. Plug into your network.",
  },
  os: {
    title: "CurXor OS",
    body: "The desk that conducts — inference, agents, and control on your metal, not in a cloud subscription.",
  },
  claws: {
    title: "Ten Claws",
    body: "Your orchestra — five flagship operators day one, five preview tiers on the roadmap. Mint sections in The Forge.",
  },
  footer: "You compose the score. Unplug egress — the hall keeps thinking. The symphony plays on your metal.",
} as const;
