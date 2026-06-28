export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavLink[];
};

/** Primary header IA — changelog lives in footer only; Signal via hero accent, not nav. */
export const navGroups: NavGroup[] = [
  {
    id: "claws",
    label: "CLAWS",
    items: [
      { href: "/capital", label: "Capital Claw", description: "Sovereign trading desk" },
      { href: "/creator", label: "Creator Claw", description: "Content & growth loops" },
      { href: "/outreach", label: "Outreach Claw", description: "Pipeline & sequences" },
    ],
  },
  {
    id: "why",
    label: "WHY CURXOR",
    items: [
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
  { href: "/pricing", label: "PRICING" },
  { href: "/#faq", label: "FAQ" },
];
