export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavLink[];
  /** Muted link under items — e.g. full roster with Preview-tier crewmates. */
  footer?: NavLink;
};

/** Primary header IA — changelog lives in footer only; Signal via hero accent, not nav. */
export const navGroups: NavGroup[] = [
  {
    id: "claws",
    label: "DESK CREW",
    items: [
      { href: "/capital", label: "Capital", description: "Sovereign trading desk" },
      { href: "/creator", label: "Creator", description: "Content & growth loops" },
      { href: "/outreach", label: "Outreach", description: "Pipeline & sequences" },
    ],
    footer: {
      href: "/architecture#desk-crew-roster",
      label: "Full roster →",
      description: "Flagship · Forge · Cafe · Preview",
    },
  },
  {
    id: "why",
    label: "WHY CURXOR",
    items: [
      { href: "/about", label: "Mission, Vision & Purpose", description: "Principal · companion · ownable metal" },
      { href: "/journal", label: "Journal", description: "Founder essays on owning the desk" },
      { href: "/compare", label: "Compare alternatives", description: "Honest buyer tables" },
      { href: "/architecture", label: "Stack & architecture", description: "OS · ports · tiers" },
      { href: "/#operators", label: "Meet operators", description: "Persona stories on home" },
    ],
  },
  {
    id: "proof",
    label: "PROOF",
    items: [
      { href: "/#demo", label: "Flight Command demo", description: "Real appliance UI captures" },
      { href: "/press", label: "Press & facts", description: "Boilerplate · traction · deck" },
    ],
  },
];

export const navTopLinks: NavLink[] = [
  { href: "/press", label: "PRESS" },
  { href: "/pricing", label: "PRICING" },
  { href: "/#faq", label: "FAQ" },
];
