/**
 * Mission & Vision — locked 2026-07-14.
 * Source: curxor-os/docs/founder/MISSION-PRINCIPLES.md · profile.json → formalStatements
 * Rule: About / below pricing / footer only. Do not replace GTM hero H1.
 */

export const missionVision = {
  eyebrow: "Principal. Companion. Ownable metal.",
  mission: {
    label: "Mission",
    body: "CurXor exists to make the operator the principal of their AI — shipping companions that extend thought and execution on metal they own.",
  },
  vision: {
    label: "Vision",
    body: "A world where every operator runs an AI team as an extension of themselves — on metal they own, with identity and agency local by default — not as tenants of someone else's cloud.",
  },
  buyToday: {
    label: "What you buy today",
    body: "A desk appliance with CurXor OS — ten AI agents, local inference, Flight Command on your network. $3,999 once · $0/mo API for the operate plane.",
  },
  /** Compact footer / tight About dual-line */
  shortPair: {
    mission: "Make the operator the principal of their AI — on a desk they own.",
    vision: "Your AI team as an extension of you. Not a rented tab.",
  },
} as const;
