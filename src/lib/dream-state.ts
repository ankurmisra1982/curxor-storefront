/**
 * Dream-state copy + naming lock — vision tier (not cold-traffic hero until G4).
 * Canonical spec: docs/DREAM-STATE-OVERVIEW.md
 * Appliance source: ../curxor-os/docs/founder/profile.json → dreamState
 */

export const dreamStateHero = {
  h1: "Designed around you. Owned by you.",
  subhead:
    "CurXor is a sovereign AI system — custom hardware, CurXor OS, and an autonomous desk crew that runs on your metal. Mint crewmates. Conduct your devices. No API rent.",
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
  "CurXor is a sovereign AI system — not a chat app, not a cloud subscription. Custom desk hardware runs CurXor OS, a full vertical stack built for local inference, autonomous agents, and operator control from the metal up. Flagship crewmates are your digital employees day one — capital, creation, outreach — with The Forge to mint more and honest previews for the rest of the roster. Coordinated through Flight Command and Crew Cafe. Outbound action crosses a physical egress boundary you control; cognition stays local by default. Today we prove the stack on MS-S1-class metal. After investment, we ship CurXor-designed hardware. The long-term destination is a fully sovereign OS — no Linux dependency, no rented intelligence — so your AI team isn't a feature on someone else's platform. It's yours, from silicon to crewmate.";

/** Locked Jul 2026 — symphony metaphor + desk crew naming. */
export const dreamStateNaming = {
  productNoun: "crewmate",
  essayOneLiner: "CurXor is the orchestrator on your desk. Your desk crew is the team it runs.",
  symphonyEssayLine: "CurXor is the orchestrator on your desk. Your desk crew is the team it runs.",
  symphonyPayoff: "The symphony plays.",
  symphonyBridgeLine: "The orchestrator on your desk — the conductor for your desk crew.",
  gtmConductorAccent: "Interfaces drift. Your desk conducts.",
  gtmConductorNote:
    "Conductor = GTM verb · orchestrator = essay noun — same desk. Desk crew = orchestra sections.",
  coldTrafficLead: ["digital employees", "AI agents"] as const,
  gtmGlossExample:
    "Ten autonomous AI agents on your metal — a desk crew for capital, content, outreach, and more.",
  hierarchy: {
    operator: "Composer / principal — owns the score",
    desk: "Conductor + orchestrator — same desk, two registers",
    claw: "Orchestra / sections — ten vertical crewmates + Forge",
    signal: "Acoustic reach — devices, VR, rooms",
    cafe: "The hall — ensemble presence",
    masterAi: "Horizon patron above the ten",
  },
  neverSay: [
    "Ten orchestrators on your desk",
    "Lead with crewmate alone without desk crew context",
    "Claw / Claws / Claw Cafe in public copy",
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
