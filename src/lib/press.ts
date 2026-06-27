import {
  applianceVersion,
  clawRosterLabel,
  productIdentity,
  siteConfig,
  socialProfiles,
} from "./config";

export const investorDeckMailto =
  "mailto:hello@curxor.ai?subject=Investor%20inquiry%20%E2%80%94%20CurXor";

export const pressKit = {
  headline: "Mint AI Employees on Bare Metal.",
  boilerplate: `${productIdentity.companyName} builds sovereign AI appliances that run digital employees — called Claws — on local hardware with zero monthly API fees. ${productIdentity.boxName} is the chassis name on every box — 126 TOPS NPU, 64GB unified memory, ${productIdentity.osName}, and ${clawRosterLabel} spanning wealth, work, signals, and life & family. Message Claws from Flight Command or Telegram, Slack, WhatsApp, and iMessage — local inference by default, integrations you configure. Pre-order at curxor.ai for $3,999.`,
  founderQuote:
    "ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.",
  contactEmail: siteConfig.contactEmail,

  pageIntro: {
    eyebrow: "INVESTORS & MEDIA",
    lead: "Copy-paste boilerplate, facts, and assets for articles, podcasts, and investor diligence.",
    technicalReadPrefix: "For a guided technical read, start with",
    technicalReadLinks: [
      { href: "/architecture#validation", label: "Architecture" },
      { href: "/changelog", label: "Changelog" },
    ],
  },

  investorIntro: {
    eyebrow: "COMPANY",
    headline: "Sovereign agent appliance — software shipped, hardware validating.",
    body: "CurXor Systems builds curXor — a 64GB sovereign AI appliance that runs digital employees called Claws on bare metal. Buyers pay once for hardware; CurXor does not bill per token. CurXor OS v0.9.1 ships Flight Command, ten Claw workspaces, and The Forge agent factory today. MS-S1 MAX silicon validation and golden-image manufacturing are the current gating items — blocked on hardware receipt, not vapor.",
  },

  founders: {
    fundraisingStatus:
      "Bootstrapped and selectively meeting aligned angels and seed investors.",
    bios: [
      {
        name: "Ankur",
        role: "Founder & CEO",
        bio: "Vision, GTM, and customer trust. Building the category: mint autonomous employees on bare metal — not another chat subscription.",
      },
    ],
    technicalCoFounderLine:
      "Appliance software, MS-S1 validation, and production OTA are led by a technical co-founder — details shared in diligence conversations.",
  },

  traction: {
    headline: "Traction",
    rows: [
      {
        status: "Shipped" as const,
        milestone:
          "CurXor OS **0.9.1** — four-pillar stack, Flight Command UI, 10 Claws + The Forge",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Flagship desks demo-ready — Capital, Creator, Outreach (Go Live paths, eno2 bridges)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Agent runtime, unified comms gateways, Build Plane BP4 in software",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**180** smoke + **40** user-flow QA checks in curxor-os (`qa:local` suite)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Storefront live at curxor.ai — Stripe pre-order, Resend waitlist, appliance sync",
      },
      {
        status: "In progress" as const,
        milestone: "MS-S1 MAX on-device ROCm / UMA / mesh benchmarks",
      },
      {
        status: "Pending" as const,
        milestone: "Golden image freeze, factory USB, production OTA artifact",
      },
      {
        status: "Pending" as const,
        milestone: "Customer pilots, case studies, Engage demo unit",
      },
    ],
    footnote:
      "Flight Command screenshots on curxor.ai are live OS captures — not concept art. Many workspaces use demo data until operators connect their own bridges and credentials. See Terms — Software maturity.",
    footnoteLink: { href: "/terms", label: "Terms — Software maturity" },
  },

  businessModel: {
    headline: "Hardware wedge today. Platform expansion tomorrow.",
    now: [
      "$3,999 one-time hardware (MS-S1 MAX class, CurXor OS pre-flash)",
      "Stripe pre-order at /pricing",
      "No CurXor subscription for local inference or bundled Claws",
    ],
    expansion: [
      "OTA channel subscriptions",
      "partner bridge marketplace",
      "enterprise fleet + eno2 policy packs",
      "agency white-label Forge",
    ],
    wedgeNote:
      "Power users spending $500+/mo on cloud agents can offset hardware in under 8 months vs API burn alone — assumes comparable workload; not a guarantee.",
    wedgeNoteLink: { href: "/compare#tco", label: "Compare TCO" },
    wedgeNoteSuffix: "for methodology.",
  },

  whyCurXor: [
    "Category creation — independent computer for digital employees, not DIY Ollama or SaaS agents",
    "Sovereignty story — eno1 command · eno2 egress only · physical kill switch",
    "Software-led proof — OS, UI, and QA shipped before first production silicon batch",
    "Honest depth tiers — Flagship · Forge · Cafe · Preview on every Claw",
    "Viral loop — The Forge mints custom Claws without per-token billing",
  ],

  diligencePath: {
    headline: "Diligence path",
    links: [
      {
        href: "/pricing#compute-ladder",
        label: "Compare tiers",
        why: "Standard · Pro 128 · CurXor Studio — honest open-weight ladder",
      },
      {
        href: "/press#compute-ladder",
        label: "Compute ladder (press)",
        why: "Open-weight frontier copy blocks for media",
      },
      {
        href: "/architecture#validation",
        label: "Architecture",
        why: "Four pillars, eno1/eno2, claw tiers, MS-S1 validation",
      },
      {
        href: "/changelog",
        label: "Changelog",
        why: "Ship velocity — synced from CurXor OS",
      },
      {
        href: "/compare",
        label: "Compare hub",
        why: "vs ClawBox, Perplexity PC, MIKY, Mac Studio, NemoClaw",
      },
      {
        href: "/compare#tco",
        label: "Compare TCO",
        why: "Illustrative four-year spend + methodology",
      },
      {
        href: "/pricing",
        label: "Pricing",
        why: "Hardware price + UMA guidance",
      },
      {
        href: "/terms",
        label: "Terms",
        why: "Pre-order, trading disclaimers, software maturity",
      },
    ],
  },

  focusAsk: {
    headline: "Use of focus / capital",
    bullets: [
      "Complete MS-S1 MAX validation + golden image",
      "first 100 units",
      "production OTA pipeline",
      "field engineer for support and factory flash",
    ],
    contactCta:
      "For deck access, diligence questions, or founder conversations",
    mailto: investorDeckMailto,
  },

  deck: {
    eyebrow: "INVESTOR DECK",
    headline: "Available on request",
    body: "Email hello@curxor.ai with a one-line intro; we reply with the deck and diligence links.",
    ctaLabel: "REQUEST INVESTOR DECK",
    mailto: investorDeckMailto,
  },

  maturityDisclaimer:
    "CurXor does not guarantee investment returns, trading performance, or benchmark superiority over cloud APIs until MS-S1 validation publishes verified numbers. Capital Claw supports paper and live trading via operator-configured Alpaca bridges — strategy risk is yours. Creator and Outreach outbound actions require explicit operator approval. Preview-tier Claws are working shells with local data — production depth ships on the appliance roadmap.",

  facts: [
    { label: "Company", value: "CurXor Systems" },
    { label: "Category", value: "Sovereign agent appliance" },
    { label: "Stage", value: "Bootstrapped" },
    {
      label: "Fundraising",
      value:
        "Bootstrapped and selectively meeting aligned angels and seed investors.",
    },
    { label: "Product", value: `${productIdentity.boxName} (${productIdentity.boxDescriptor})` },
    { label: "Price", value: "$3,999 pre-order (one-time hardware)" },
    { label: "Compute", value: "AMD Ryzen AI Max+ 395 · 126 TOPS NPU · 64GB LPDDR5X UMA" },
    { label: "Networking", value: "Dual 10GbE — eno1 Command · eno2 Egress" },
    {
      label: "Software",
      value: `CurXor OS ${applianceVersion} — Flight Command + ${clawRosterLabel}`,
    },
    {
      label: "QA",
      value: "180 smoke + 40 user-flow checks (curxor-os qa:local)",
    },
    {
      label: "Validation",
      value: "MS-S1 MAX benchmarks in progress — see /architecture#validation",
    },
    {
      label: "Claw roster",
      value:
        "Capital · Creator · Outreach · Arbitrage · Signal · Swarm · Engage · Vital · Kin · The Forge",
    },
    { label: "Website", value: siteConfig.siteUrl },
    {
      label: "Investor contact",
      value: siteConfig.contactEmail,
    },
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
