/** Value prop headlines for best-in-class OOTB Claws — used on landing and persona pages. */
export const clawHeadlines = {
  capital: {
    hero: "Rules on localhost.",
    accent: "Fills egress on eno2 only.",
    oneLiner:
      "Demo tour → armed rule → simulated fill. Paper via Alpaca when you exit demo — no token rent, no cloud playbook leak.",
    personaCard:
      "Capital Claw — demo desk day one, rule engine, and Go Live tour. Paper on eno2 when you add keys.",
  },
  creator: {
    hero: "Go Live in one session.",
    accent: "Demo tour to scheduled post — bridges optional.",
    oneLiner:
      "One click runs draft → pre-flight → best-time schedule → simulated publish. Ten live bridges on eno2 when you connect OAuth.",
    personaCard:
      "Creator Claw — demo tour, 5-step Creation Wizard, Go Live checklist, and 10 publish bridges on eno2.",
  },
  outreach: {
    hero: "Pipeline to send — one desk.",
    accent: "Demo tour to simulated outbound — SMTP when you wire eno2.",
    oneLiner:
      "Lead → A/B sequence → activate → simulated send without a CRM + sequencer SaaS stack. Pause-on-reply and send policy built in.",
    personaCard:
      "Outreach Claw — demo tour, sequences, CSV import, A/B subjects, reply intent, and send policy on eno2.",
  },
} as const;

export type ClawHeadlineKey = keyof typeof clawHeadlines;
