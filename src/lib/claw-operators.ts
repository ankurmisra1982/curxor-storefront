/** Fictional operator personas — pre-launch storytelling, not customer testimonials. */
export type ClawOperator = {
  id: "alpha" | "jules" | "cleo";
  name: string;
  role: string;
  claw: string;
  eyebrow: string;
  /** Homepage / social — punchy, shareable */
  quote: string;
  /** One line under name on cards */
  hook: string;
  /** X / LinkedIn paste */
  shareLine: string;
  tourHref: string;
  personaHref: string;
  demo: string;
  glyph: string;
};

export const clawOperators: ClawOperator[] = [
  {
    id: "alpha",
    name: "Alpha",
    role: "Solo quant · Austin",
    claw: "Capital Claw",
    eyebrow: "WEALTH",
    hook: "Rules on metal. No API invoice.",
    quote:
      "I stopped renting alpha from the cloud. Capital Claw backtests on localhost — arms on my desk, fills on eno2, or nowhere if I pull the plug.",
    shareLine:
      "My edge doesn't file an API invoice. Capital Claw on bare metal. @curxorai",
    tourHref: "/capital",
    personaHref: "/for/traders",
    demo: "/demo/03-capital-claw.png",
    glyph: "α",
  },
  {
    id: "jules",
    name: "Jules",
    role: "Indie creator · Berlin",
    claw: "Creator Claw",
    eyebrow: "GROWTH",
    hook: "Draft local. Ship on your signal.",
    quote:
      "Draft at 2am. Schedule at 8. Creator Claw never ships my hooks to OpenAI — eno2 posts only when I tap go.",
    shareLine:
      "Scheduler cancelled. Creator Claw runs the tour on my metal. @curxorai",
    tourHref: "/creator",
    personaHref: "/for/creators",
    demo: "/demo/08-creator-claw.png",
    glyph: "J",
  },
  {
    id: "cleo",
    name: "Cleo",
    role: "Agency founder · NYC",
    claw: "Outreach Claw",
    eyebrow: "WORK",
    hook: "Pipeline runs while you sleep.",
    quote:
      "Twelve clients, one appliance. Outreach Claw pauses sequences on reply before I pour coffee — no HubSpot rent, no token meter.",
    shareLine:
      "Unplug eno2, outbound stops cold. That's the whole pitch. @curxorai",
    tourHref: "/outreach",
    personaHref: "/for/agencies",
    demo: "/demo/07-unified-inbox.png",
    glyph: "C",
  },
] as const;

export const operatorsSection = {
  eyebrow: "MEET YOUR OPERATORS",
  headline: "Digital employees with names — built for X threads and operator DMs.",
  subhead:
    "Three composite stories for pre-marketing outreach. Each maps to a Flagship desk, a persona page, and a paste-ready share line. Pull eno2 when you need the kill switch.",
} as const;

export function getOperator(id: ClawOperator["id"]): ClawOperator | undefined {
  return clawOperators.find((op) => op.id === id);
}

export function getOperatorByPersonaSlug(
  slug: string
): ClawOperator | undefined {
  const map: Record<string, ClawOperator["id"]> = {
    traders: "alpha",
    creators: "jules",
    agencies: "cleo",
  };
  const id = map[slug];
  return id ? getOperator(id) : undefined;
}
