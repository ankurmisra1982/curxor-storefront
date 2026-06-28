export type PersonaPage = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  painPoints: string[];
  claws: { name: string; body: string }[];
  demoSrc: string;
  demoAlt: string;
  outcomes: string[];
  compareLinks: { href: string; label: string }[];
};

export const personaPages: PersonaPage[] = [
  {
    slug: "traders",
    title: "CurXor for Algo Traders",
    metaDescription:
      "Capital Claw on sovereign hardware — local inference, Alpaca bridge on eno2, alpha that stays on your metal.",
    eyebrow: "FOR TRADERS",
    headline: "Your alpha stays on bare metal.",
    lead: "Capital Claw demo tour day one — rules, simulated fills, Go Live without broker keys.",
    painPoints: [
      "$500+/mo API tokens for agentic trading research",
      "No physical kill switch when agents go outbound",
    ],
    claws: [
      {
        name: "Capital Claw",
        body: "Demo tour, Setup Wizard, rule engine, portfolio health — paper on eno2 when Alpaca is configured.",
      },
      {
        name: "The Forge",
        body: "Mint a custom strategy monitor in plain language — deploy in one session.",
      },
    ],
    demoSrc: "/demo/03-capital-claw.png",
    demoAlt: "Capital Claw workspace",
    outcomes: [
      "Demo desk day one — no broker keys required",
      "Unplug eno2 to halt outbound trades instantly",
    ],
    compareLinks: [
      { href: "/capital", label: "Capital Claw tour" },
      { href: "/compare/mac-studio-ollama", label: "vs Mac Studio + Ollama" },
      { href: "/compare/perplexity-personal-computer", label: "vs Perplexity PC" },
    ],
  },
  {
    slug: "creators",
    title: "CurXor for Creators",
    metaDescription:
      "Creator Claw — one-click demo tour, 5-step Creation Wizard, Go Live checklist, and 10 publish bridges. Local inference, eno2 egress only.",
    eyebrow: "FOR CREATORS",
    headline: "Go Live in one session.",
    lead: "Creator Claw demo tour — draft, schedule, simulated publish. Full wizard and 10 bridges when you scale.",
    painPoints: [
      "Token rent on every draft and rewrite",
      "No approve-before-publish on your own metal",
    ],
    claws: [
      {
        name: "Creator Claw",
        body: "Demo tour, 5-step wizard, Go Live checklist, 10 publish bridges on eno2.",
      },
      {
        name: "The Forge",
        body: "Mint a custom content or research Claw for your niche.",
      },
    ],
    demoSrc: "/demo/08-creator-claw.png",
    demoAlt: "Creator Claw Go Live and queue",
    outcomes: [
      "One-click demo tour to scheduled post",
      "Approve-before-publish via dashboard, Telegram, or Slack",
    ],
    compareLinks: [
      { href: "/creator", label: "Creator Claw tour" },
      { href: "/compare/clawbox", label: "vs ClawBox" },
      { href: "/compare/perplexity-personal-computer", label: "vs Perplexity PC" },
    ],
  },
  {
    slug: "agencies",
    title: "CurXor for Agencies & Outbound Teams",
    metaDescription:
      "Outreach Claw — demo tour, sequences, CSV import, A/B subjects, reply intent, and send policy on sovereign hardware.",
    eyebrow: "FOR AGENCIES",
    headline: "Pipeline to send — one desk.",
    lead: "Outreach Claw demo tour — demo lead, A/B sequence, simulated send. CSV import and reply intent when you scale.",
    painPoints: [
      "Stack of CRM, sequencer, and AI SaaS tools",
      "No single kill switch for outbound agents",
    ],
    claws: [
      {
        name: "Outreach Claw",
        body: "Demo tour, pipeline, sequences, CSV import — SMTP on eno2 when configured.",
      },
      {
        name: "The Forge",
        body: "White-label a vertical Claw for a client niche.",
      },
    ],
    demoSrc: "/demo/outreach/21-pipeline.png",
    demoAlt: "Outreach Claw desk — Go Live, pipeline, sequences",
    outcomes: [
      "Demo tour to simulated send — no SMTP on day one",
      "eno2 unplug stops outbound while inference continues",
    ],
    compareLinks: [
      { href: "/outreach", label: "Outreach Claw tour" },
      { href: "/compare/miky", label: "vs MIKY" },
      { href: "/compare/nemoclaw", label: "vs NemoClaw" },
    ],
  },
];

export function getPersonaPage(slug: string): PersonaPage | undefined {
  return personaPages.find((page) => page.slug === slug);
}
