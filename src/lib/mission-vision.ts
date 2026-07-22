/**
 * Mission, Vision & Purpose — locked 2026-07-14 · Purpose horizon + pillars 2026-07-21.
 * Source: curxor-os/docs/founder/MISSION-PRINCIPLES.md · profile.json → formalStatements
 * Plain map: curxor-os/docs/founder/profile-json-plain.md
 * Rule: About / below pricing / footer only. Do not replace GTM hero H1.
 * Horizon = building toward — never claim unsupervised personal algorithm ships today.
 * Never surface D13 / USER.md / Box v2 / internal wave codes on the site.
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
  purpose: {
    label: "Purpose",
    body: "Your personal algorithm — built with your companion AI — that you own.",
    gloss:
      "The rules and taste that run your desk — co-authored with a companion on metal you own.",
  },
  /** Building toward — same section, not a new product SKU */
  purposeHorizon: {
    label: "Where Purpose goes",
    body: "Today you buy the desk and the Claws that run on it. After we prove those jobs — and raise for the next era of the box — Purpose becomes something you feel: a personal algorithm on your metal that Claws compound with. Not another cloud that rents who you are.",
    honesty: "Building toward. Act I proves the jobs first.",
  },
  /** Dream-state / after-fundraise moat pattern — plain English, no internal codes */
  purposePillars: [
    {
      title: "Durable you",
      body: "Rules, taste, and memory stay on your desk. You stop re-explaining yourself every session.",
    },
    {
      title: "Jobs that learn you",
      body: "Claws don't stay blank forever — they mint and deepen under your approval so capital, creation, and outreach fit how you work.",
    },
    {
      title: "Models come and go",
      body: "Inference swaps. Your algorithm doesn't leave with the vendor.",
    },
    {
      title: "You stay principal",
      body: "Opt-in when something leaves the box. Local stays source of truth. Trust is earned, not assumed.",
    },
  ],
  buyToday: {
    label: "What you buy today",
    body: "A desk appliance with CurXor OS — ten AI agents, local inference, Flight Command on your network. $3,999 once · $0/mo API for the operate plane.",
  },
  /** Compact footer / tight About trio */
  shortPair: {
    mission: "Make the operator the principal of their AI — on a desk they own.",
    vision: "Your AI team as an extension of you. Not a rented tab.",
    purpose:
      "Your personal algorithm — built with your companion AI — that you own.",
  },
} as const;
