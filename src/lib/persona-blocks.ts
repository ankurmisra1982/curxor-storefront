import { g3Screenshots } from "@/lib/g3-demo";

export const whoItsForSection = {
  headline: "Built for operators who feel the grammar gap",
  intro:
    "You already use AI every day — drafts, research, replies. But it still feels shallow. Nothing runs while you sleep. CurXor is for solo founders, consultants, and creator-operators who want Capital, Creator, and Outreach working 24/7 on a desk you own — not another cloud tab.",
  columns: [
    {
      title: "Solo operators",
      body: "Founders and consultants stitching five tools together. You want pipeline, content, and capital rules on one appliance — $3,999 once, not another subscription stack.",
    },
    {
      title: "Creators who ship",
      body: "YouTube, newsletters, X, LinkedIn. Draft, repurpose, schedule, and publish from one desk — with approval gates before anything goes live on egress.",
    },
    {
      title: "Wealth-curious builders",
      body: "Rules-bound trading and portfolio automation on your metal. Alpha stays local; outbound trades cross egress only when you wire the bridges.",
    },
  ],
  footer:
    "$3,999 once · $0/mo API for the operate plane. Frontier LLM is opt-in — local inference is the default.",
} as const;

export type PersonaCard = {
  id: "alex" | "sam" | "jordan";
  eyebrow: string;
  title: string;
  quote: string;
  body: string;
  claws: string;
  cta: string;
  ctaHref: string;
  demo: string;
  tourHref: string;
  personaHref: string;
  shareLine: string;
  glyph: string;
};

export const homepagePersonas: PersonaCard[] = [
  {
    id: "alex",
    eyebrow: "Primary · L2–L3",
    title: "The solo operator",
    quote: "I use AI every day — but nothing stays on when I close the laptop.",
    body: "Run Outreach sequences, Creator pipelines, and Capital rules from one desk. Local inference. Outbound on egress you control.",
    claws: "Outreach · Creator · Capital",
    cta: "See how it works",
    ctaHref: "#how-it-works",
    demo: g3Screenshots.home,
    tourHref: "/outreach",
    personaHref: "/for/agencies",
    shareLine:
      "Nothing stayed on when I closed the laptop — until the desk ran Outreach and Creator while I slept. @curxorai",
    glyph: "A",
  },
  {
    id: "sam",
    eyebrow: "Creator · L2–L3",
    title: "The creator who ships",
    quote: "I want a headless content engine — not five more tabs.",
    body: "Draft, adapt, and schedule across channels. Creator Claw runs on your metal; publishes through egress when you approve.",
    claws: "Creator · Claw Cafe",
    cta: "See Creator workflow",
    ctaHref: "/creator",
    demo: g3Screenshots.creatorQueue,
    tourHref: "/creator",
    personaHref: "/for/creators",
    shareLine:
      "Headless content engine on my metal — Creator Claw with approval before publish. @curxorai",
    glyph: "S",
  },
  {
    id: "jordan",
    eyebrow: "Wealth · L2–L4",
    title: "The rules-first builder",
    quote: "I don't want my keys on someone else's cloud.",
    body: "Capital Claw runs rules-bound desk workflows on bare metal. Paper trading when configured; live bridges are yours to wire.",
    claws: "Capital",
    cta: "See Capital desk",
    ctaHref: "/capital",
    demo: g3Screenshots.capitalPaper,
    tourHref: "/capital",
    personaHref: "/for/traders",
    shareLine:
      "Paper book on metal — rules stay local, fills egress only when I wire Alpaca. @curxorai",
    glyph: "J",
  },
];

export const personaFaqItems = [
  {
    question: "Who is CurXor for?",
    answer:
      "Solo founders, consultants, and creator-operators who already use AI daily but want always-on workflows — outbound, content, and capital rules — on hardware they own. If you've never used AI, start with the chat tools first. If you're stitching five SaaS products and nothing stays on 24/7, you're our buyer.",
  },
  {
    question: "Who is CurXor NOT for?",
    answer:
      "Enterprise teams needing SSO and fleet admin. Hobbyists looking for a cheap chat box. Buyers who need all ten Claws production-complete on day one — five are honest Coming Soon previews.",
  },
  {
    question: "I'm technical — why not build it myself?",
    answer:
      "You can. CurXor sells the two hundred hours back — appliance, OS, ten desks, egress boundary, and updates. OpenClaw proved the desire; we ship the product.",
  },
  {
    question: "Which Claws actually work today?",
    answer:
      "Outreach, Creator, Capital, and The Forge are flagship depth with exit-demo proof. Kin, Vital, Signal, Swarm, and Arbitrage include preview or Coming Soon surfaces — labeled honestly in Flight Command. Claw Cafe is the universal spatial home (pixel room, ascension); Engage is the Creator inbox tab.",
  },
] as const;
