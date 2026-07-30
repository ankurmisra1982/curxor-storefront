import { g3Screenshots } from "@/lib/g3-demo";

/** Fictional operator personas — pre-launch storytelling, not customer testimonials. */
export type ClawOperator = {
  id: "alex" | "sam" | "jordan";
  name: string;
  role: string;
  claw: string;
  eyebrow: string;
  title: string;
  quote: string;
  hook: string;
  body: string;
  claws: string;
  cta: string;
  ctaHref: string;
  shareLine: string;
  tourHref: string;
  personaHref: string;
  demo: string;
  glyph: string;
};

export const clawOperators: ClawOperator[] = [
  {
    id: "alex",
    name: "Alex",
    role: "Agency founder · NYC",
    claw: "Outreach",
    eyebrow: "WORK · L2–L3",
    title: "The solo operator",
    hook: "Pipeline on metal. Pull eno2 when you need cold.",
    quote:
      "Twelve clients, one appliance. Outreach pauses sequences on reply before I pour coffee — no HubSpot rent, no token meter.",
    body: "Run Outreach sequences, Creator pipelines, and Capital rules from one desk. Local inference. Outbound on egress you control.",
    claws: "Outreach · Creator · Capital",
    cta: "See how it works",
    ctaHref: "#how-it-works",
    shareLine:
      "Unplug eno2, outbound stops cold. That's the whole pitch. @curxorai",
    tourHref: "/outreach",
    personaHref: "/for/agencies",
    demo: g3Screenshots.workPipeline,
    glyph: "A",
  },
  {
    id: "sam",
    name: "Sam",
    role: "Indie creator · Berlin",
    claw: "Creator",
    eyebrow: "GROWTH · L2–L3",
    title: "The creator who ships",
    hook: "Draft local. Ship on your signal.",
    quote:
      "Draft at 2am. Schedule at 8. Creator never ships my hooks to OpenAI — eno2 posts only when I tap go.",
    body: "Draft, adapt, and schedule across channels. Creator runs on your metal; publishes through egress when you approve.",
    claws: "Creator · Crew Cafe",
    cta: "See Creator workflow",
    ctaHref: "/creator",
    shareLine:
      "Scheduler cancelled. Creator runs the tour on my metal. @curxorai",
    tourHref: "/creator",
    personaHref: "/for/creators",
    demo: g3Screenshots.creatorQueue,
    glyph: "S",
  },
  {
    id: "jordan",
    name: "Jordan",
    role: "Solo quant · Austin",
    claw: "Capital",
    eyebrow: "WEALTH · L2–L4",
    title: "The rules-first builder",
    hook: "Rules on metal. No API invoice.",
    quote:
      "I stopped renting alpha from the cloud. Capital backtests on localhost — paper book on my desk, live only if I flip it, or nowhere if I pull the plug.",
    body: "Capital runs rules-bound desk workflows on bare metal. Paper book when Alpaca is configured; live fills only if you flip live and wire your own keys.",
    claws: "Capital",
    cta: "See Capital desk",
    ctaHref: "/capital",
    shareLine:
      "My edge doesn't file an API invoice. Capital on bare metal. @curxorai",
    tourHref: "/capital",
    personaHref: "/for/traders",
    demo: g3Screenshots.capitalPaper,
    glyph: "J",
  },
] as const;

export const operatorsSection = {
  eyebrow: "MEET YOUR OPERATORS",
  headline: "Alex, Sam, and Jordan",
  subhead:
    "Composite operator stories — the grammar gap in human terms. Not paid endorsements; product proof in the desk tour above.",
} as const;

export function getOperator(id: ClawOperator["id"]): ClawOperator | undefined {
  return clawOperators.find((op) => op.id === id);
}

export function getOperatorByPersonaSlug(
  slug: string
): ClawOperator | undefined {
  const map: Record<string, ClawOperator["id"]> = {
    traders: "jordan",
    creators: "sam",
    agencies: "alex",
  };
  const id = map[slug];
  return id ? getOperator(id) : undefined;
}
