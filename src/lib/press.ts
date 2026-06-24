import {
  applianceVersion,
  clawRosterLabel,
  productIdentity,
  siteConfig,
  socialProfiles,
} from "./config";

export const pressKit = {
  headline: "Mint AI Employees on Bare Metal.",
  boilerplate: `${productIdentity.companyName} builds sovereign AI appliances that run digital employees — called Claws — on local hardware with zero monthly API fees. ${productIdentity.boxName} is the chassis name on every box — 126 TOPS NPU, 64GB unified memory, ${productIdentity.osName}, and ${clawRosterLabel} spanning wealth, work, signals, and life & family. Message Claws from Flight Command or Telegram, Slack, WhatsApp, and iMessage — local inference by default, integrations you configure. Pre-order at curxor.ai for $3,999.`,
  founderQuote:
    "ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.",
  contactEmail: siteConfig.contactEmail,
  facts: [
    { label: "Product", value: `${productIdentity.boxName} (${productIdentity.boxDescriptor})` },
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
    {
      label: "Hardware badge (SVG)",
      path: "/brand/curxor-hardware-badge.svg",
      note: "MS-S1 sticker source — curXor is the chassis name, not just a logo",
    },
    {
      label: "Logo lockup (SVG)",
      path: "/brand/curxor-lockup.svg",
      note: "Diamond mark + curXor wordmark + cursor bar — primary horizontal logo",
    },
    {
      label: "Logo mark (SVG)",
      path: "/brand/curxor-mark.svg",
      note: "Hardware badge / favicon / social avatar source",
    },
    {
      label: "Logo mark (PNG 512)",
      path: "/brand/curxor-mark-512.png",
      note: "Raster mark — Apple touch icon, slide decks",
    },
    {
      label: "Hardware badge (PNG)",
      path: "/brand/curxor-hardware-badge.png",
      note: "Full lockup raster — email signatures, non-SVG contexts",
    },
    {
      label: "Wordmark (SVG)",
      path: "/brand/curxor-wordmark.svg",
      note: "Text-only — tight spaces, dark backgrounds",
    },
    { label: "Open Graph image", path: "/opengraph-image", note: "Auto-generated at curxor.ai/opengraph-image" },
    { label: "Flight Command demo", path: "/#demo", note: "Home, Settings, Capital, Forge, Vital, Kin, Creator Claw, unified inbox" },
    { label: "Outreach Claw tour", path: "/outreach", note: "Demo tour path, Go Live, pipeline, sequences, Tier B analytics" },
    { label: "Capital Claw tour", path: "/capital", note: "Flight Command screenshots, Setup Wizard, Go Live, rule engine, demo tour" },
    { label: "Creator Claw tour", path: "/creator", note: "Flight Command screenshots, wizard steps, Go Live, publish bridges" },
    { label: "Install video", path: "/architecture#validation", note: "Coming with production hardware batch" },
    { label: "Operator PDF", path: "/architecture#validation", note: "Exported from CurXor OS guides when hardware ships" },
  ],
} as const;
