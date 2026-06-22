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
    lead: "Capital Claw runs a one-click demo tour — armed rule, simulated fill, Go Live progress without broker keys. Paper via Alpaca on eno2 when you exit demo.",
    painPoints: [
      "$500+/mo API tokens for agentic trading research",
      "Strategies and prompts stored on someone else's servers",
      "No physical kill switch when agents go outbound",
    ],
    claws: [
      {
        name: "Capital Claw",
        body: "Go Live checklist, Setup Wizard, rule engine, demo tour, portfolio health, and execute_now — paper receipts on eno2 when Alpaca is configured.",
      },
      {
        name: "Signal Claw",
        body: "Ingest feeds and social triggers — spin agents when alpha appears (demo canvas today).",
      },
      {
        name: "The Forge",
        body: "Describe a niche strategy monitor in plain language and deploy a custom Claw in one session.",
      },
    ],
    demoSrc: "/demo/03-capital-claw.png",
    demoAlt: "Capital Claw workspace",
    outcomes: [
      "Demo desk day one — no broker keys required to explore rules and simulated fills",
      "Paper trading via Alpaca bridge on eno2 when you exit demo and add credentials",
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
    lead: "Creator Claw runs a one-click demo tour — draft, pre-flight, schedule, and simulated publish without OAuth. Full 5-step Creation Wizard, 10 live publish bridges, and closed-loop engage → analytics when you scale.",
    painPoints: [
      "Token rent on every draft and rewrite",
      "Platform lock-in on cloud schedulers",
      "No unified approve-before-publish on your own metal",
    ],
    claws: [
      {
        name: "Creator Claw",
        body: "Demo tour, 5-step Creation Wizard, Go Live checklist, bridge health, publish recovery, and 10 live platform bridges on eno2.",
      },
      {
        name: "Engage Claw",
        body: "Triage DMs and thread replies — pairs with Creator publish paths.",
      },
      {
        name: "The Forge",
        body: "Mint a custom content or research Claw for your niche workflow.",
      },
    ],
    demoSrc: "/demo/08-creator-claw.png",
    demoAlt: "Creator Claw Go Live and queue",
    outcomes: [
      "One-click demo tour to scheduled post — simulated publish counts toward Go Live",
      "10 live publish bridges with strict ready semantics when you connect OAuth",
      "Approve-before-publish via dashboard, Telegram, or Slack operators",
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
    lead: "Outreach Claw runs a one-click demo tour — demo lead, A/B sequence, activate, and simulated send without SMTP. Tier B adds CSV import, reply intent, send policy, and open/reply analytics on the same appliance.",
    painPoints: [
      "Stack of CRM, sequencer, and AI SaaS tools",
      "Client data scattered across cloud vendors",
      "No single kill switch for outbound agents",
    ],
    claws: [
      {
        name: "Outreach Claw",
        body: "Demo tour, Go Live checklist, pipeline, sequences, outbound queue, CSV import, and SMTP send via eno2 when configured.",
      },
      {
        name: "Arbitrage Claw",
        body: "Margin alerts and fulfillment ops for e-com clients (demo UI today).",
      },
      {
        name: "The Forge",
        body: "White-label a vertical Claw for a client niche — deploy from the appliance.",
      },
    ],
    demoSrc: "/demo/07-unified-inbox.png",
    demoAlt: "Outreach Claw desk — Go Live, pipeline, sequences",
    outcomes: [
      "Demo tour to simulated send — no SMTP required on day one",
      "A/B subjects, CSV import, pause-on-reply, and send policy on-appliance",
      "eno2 unplug stops outbound while local inference continues",
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
