/**
 * Dream-state copy + naming lock — vision tier (not cold-traffic hero until G4).
 * Canonical spec: docs/DREAM-STATE-OVERVIEW.md
 * Appliance source: ../curxor-os/docs/founder/profile.json → dreamState
 */

export const dreamStateHero = {
  h1: "Designed around you. Owned by you.",
  subhead:
    "CurXor is a sovereign AI system — custom hardware, CurXor OS, and an autonomous team that runs on your metal. Mint your Claws. Conduct your devices. No API rent.",
  accent: "The next interface isn't a device. It's the orchestrator on your desk.",
  categoryLine: "A sovereign AI system for your desk",
} as const;

/** GTM layer 4 — live on homepage hero accent (curxor.ai today). */
export const gtmConductorAccent = "Interfaces drift. Your desk conducts." as const;

export const dreamStateThesisAccents = [
  "The next interface isn't a device. It's the orchestrator on your desk.",
  "Interfaces drift. Your desk conducts.",
  "Not another device. The desk that runs your world.",
] as const;

export const dreamStateInvestorParagraph =
  "CurXor is a sovereign AI system — not a chat app, not a cloud subscription. Custom desk hardware runs CurXor OS, a full vertical stack built for local inference, autonomous agents, and operator control from the metal up. Ten Claws are your digital employees — capital, creation, outreach, household, devices — minted in The Forge and coordinated through Flight Command and the Claw Cafe. Outbound action crosses a physical egress boundary you control; cognition stays local by default. Today we prove the stack on MS-S1-class metal. After investment, we ship CurXor-designed hardware. The long-term destination is a fully sovereign OS — no Linux dependency, no rented intelligence — so your AI team isn't a feature on someone else's platform. It's yours, from silicon to Claw.";

/** Locked Jun 2026 — symphony metaphor + Claw naming. */
export const dreamStateNaming = {
  productNoun: "Claw",
  essayOneLiner: "CurXor is the orchestrator on your desk. Claws are the team it runs.",
  symphonyEssayLine: "CurXor conducts on your desk. Claws are the orchestra.",
  symphonyPayoff: "The symphony plays.",
  symphonyBridgeLine: "The orchestrator on your desk — the conductor for your Claws.",
  gtmConductorAccent: "Interfaces drift. Your desk conducts.",
  gtmConductorNote:
    "Conductor = GTM verb · orchestrator = essay noun — same desk. Claws = orchestra sections.",
  coldTrafficLead: ["digital employees", "AI agents"] as const,
  gtmGlossExample:
    "Ten autonomous AI agents on your metal — Claws for capital, content, outreach, and more.",
  hierarchy: {
    operator: "Composer / principal — owns the score",
    desk: "Conductor + orchestrator — same desk, two registers",
    claw: "Orchestra / sections — ten vertical employees + Forge",
    signal: "Acoustic reach — devices, VR, rooms",
    cafe: "The hall — ensemble presence",
    masterAi: "Horizon patron above the ten",
  },
  neverSay: [
    "Ten orchestrators on your desk",
    "Claw without plain-English gloss on first touch",
  ] as const,
} as const;

export const dreamStateThreeActs = [
  {
    act: "I",
    name: "Prove",
    hardware: "MS-S1-class appliance",
    os: "CurXor OS on Ubuntu 24.04 — four pillars",
    status: "shipping now",
  },
  {
    act: "II",
    name: "Own the metal",
    hardware: "CurXor-designed desk appliance",
    os: "Hardware-tuned stack",
    status: "post-investment",
  },
  {
    act: "III",
    name: "Sovereign",
    hardware: "CurXor silicon + industrial stack",
    os: "Fully sovereign CurXor OS — not Linux-dependent",
    status: "destination",
  },
] as const;
