import {
  applianceVersion,
  clawRosterLabel,
  siteConfig,
  socialProfiles,
} from "./config";

export const pressKit = {
  headline: "Mint AI Employees on Bare Metal.",
  boilerplate: `CurXor Systems builds sovereign AI appliances that run digital employees — called Claws — on local hardware with zero monthly API fees. The CurXor Edge Nexus ships with 126 TOPS NPU, 64GB unified memory, CurXor OS, and ${clawRosterLabel} spanning wealth, work, signals, and life & family. Message Claws from Flight Command or Telegram, Slack, WhatsApp, and iMessage — local inference by default, integrations you configure. Pre-order at curxor.ai for $3,999.`,
  founderQuote:
    "ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.",
  contactEmail: "hello@curxor.ai",
  facts: [
    { label: "Product", value: "CurXor Edge Nexus" },
    { label: "Price", value: "$3,999 pre-order (one-time hardware)" },
    { label: "Compute", value: "AMD Ryzen AI Max+ 395 · 126 TOPS NPU · 64GB LPDDR5X UMA" },
    { label: "Networking", value: "Dual 10GbE — eno1 Command · eno2 Egress" },
    {
      label: "Software",
      value: `CurXor OS ${applianceVersion} — Flight Command + ${clawRosterLabel}`,
    },
    {
      label: "Claw roster",
      value:
        "Capital · Creator · Outreach · Arbitrage · Signal · Swarm · Engage · Vital · Kin · The Forge",
    },
    { label: "Website", value: siteConfig.siteUrl },
    {
      label: "Social",
      value: socialProfiles.map((p) => `${p.label} (${p.handle})`).join(" · "),
    },
  ],
  assets: [
    { label: "Logo mark (PNG)", path: "/favicon.svg", note: "SVG favicon — PNG in docs/assets for decks" },
    { label: "Open Graph image", path: "/opengraph-image", note: "Auto-generated at curxor.ai/opengraph-image" },
    { label: "Flight Command demo", path: "/#demo", note: "Home, Settings, Capital, Forge, Vital, Kin, Creator Claw, unified inbox" },
    { label: "Creator Claw tour", path: "/creator", note: "Walkthrough video, wizard steps, Go Live, publish bridges" },
    { label: "Install video", path: "/architecture#validation", note: "Coming with production hardware batch" },
    { label: "Operator PDF", path: "/architecture#validation", note: "Exported from CurXor OS guides when hardware ships" },
  ],
} as const;
