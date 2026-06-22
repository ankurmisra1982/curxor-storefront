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
    lead: "Stop renting inference and leaking playbooks to cloud APIs. Capital Claw v0.3 runs on localhost — demo desk day one, paper via Alpaca on eno2 when you configure keys.",
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
      "Creator Claw — draft, adapt, and publish across TikTok, Instagram, YouTube, and X. Local inference, eno2 bridges only.",
    eyebrow: "FOR CREATORS",
    headline: "Draft locally. Publish on eno2 only.",
    lead: "Creator Claw v0.3 is a sovereign social operator — 5-step Creation Wizard, Go Live checklist with strict bridge-ready semantics, 10 live publish bridges, and closed-loop engage → analytics → planner growth.",
    painPoints: [
      "Token rent on every draft and rewrite",
      "Platform lock-in on cloud schedulers",
      "No unified approve-before-publish on your own metal",
    ],
    claws: [
      {
        name: "Creator Claw",
        body: "5-step Creation Wizard, Go Live checklist, bridge health, publish recovery, and 10 live platform bridges on eno2.",
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
      "5-step Creation Wizard with pre-flight and learned best-time scheduling",
      "10 live publish bridges with Go Live strict-ready semantics",
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
      "Outreach Claw plus unified inbox — scrape, sequence, CRM, and message clients from one sovereign appliance.",
    eyebrow: "FOR AGENCIES",
    headline: "Outbound that never sleeps — on your metal.",
    lead: "Outreach Claw v0.3.1 adds sequences, CSV import, A/B subjects, reply intent tagging, and send policy — plus unified inbox on the same appliance.",
    painPoints: [
      "Stack of CRM, sequencer, and AI SaaS tools",
      "Client data scattered across cloud vendors",
      "No single kill switch for outbound agents",
    ],
    claws: [
      {
        name: "Outreach Claw",
        body: "Go Live checklist, pipeline, sequences, outbound queue, CSV import, and SMTP send via eno2 when configured.",
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
      "One appliance per client stack — or segmented Claws in Settings",
      "Messaging gateways you configure — not a fixed vendor bundle",
      "eno2 unplug stops outbound while local inference continues",
    ],
    compareLinks: [
      { href: "/compare/miky", label: "vs MIKY" },
      { href: "/compare/nemoclaw", label: "vs NemoClaw" },
    ],
  },
];

export function getPersonaPage(slug: string): PersonaPage | undefined {
  return personaPages.find((page) => page.slug === slug);
}
