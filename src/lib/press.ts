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
    headline: "Sovereign agent appliance — on bare metal, G1 golden path closed.",
    body: "CurXor Systems builds curXor — a 64GB sovereign AI appliance that runs digital employees called Claws on bare metal. Buyers pay once for hardware; CurXor does not bill per token. MS-S1 MAX unboxed 2026-06-28; G1 golden path closed 2026-06-29: CurXor OS v0.9.1, FRE (Capital, Creator, Work), local inference (moondream:1.8b + qwen3:8b on ROCm), COMMAND captive portal, and EGRESS mesh validated on Standard 64. v1.0.0, production OTA, and published mesh benchmarks are G2.",
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
      "Appliance software, production OTA (G2), and factory artifacts are led by a technical co-founder — details shared in diligence conversations.",
  },

  traction: {
    headline: "Traction",
    rows: [
      {
        status: "Shipped" as const,
        milestone:
          "MS-S1 MAX **unboxed** (2026-06-28) — Ubuntu, CurXor OS **0.9.1**, Ollama ROCm on Standard 64 (moondream:1.8b + qwen3:8b)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**FRE green** on bare metal — Capital, Creator, Work provisioned · Flight Command live on box",
      },
      {
        status: "Shipped" as const,
        milestone:
          "CurXor OS **0.9.1** — four-pillar stack, Flight Command UI, 10 Claws + The Forge, Claw Cafe ascension tied to Flagship desks",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Flagship desks demo-ready — Capital, Creator, Outreach (Go Live paths, eno2 bridges; storefront screenshots are dev/seed until G3 re-capture)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Agent runtime, unified comms gateways, Build Plane BP4 delegation queue in software",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**180** smoke + **40** user-flow QA checks in curxor-os (`qa:local` suite)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Storefront GTM at curxor.ai — category-first hero, compare hub, compute ladder, press kit, Resend waitlist + Stripe pre-order",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**G1 golden path closed** (2026-06-29) — eno1/eno2 captive portal + EGRESS mesh on box, `verify-unbox-day.sh` PASS, smile test PASS, telemetry broker on 10.77.0.1",
      },
      {
        status: "Pending" as const,
        milestone: "Published mesh benchmarks, golden image freeze, factory USB, production OTA (G2 — pre-v1.0.0 today)",
      },
      {
        status: "Pending" as const,
        milestone: "Customer pilots, case studies, Engage demo unit, box-IP demo re-capture (G3)",
      },
    ],
    footnote:
      "Flight Command screenshots on curxor.ai are dev/seed Flight Command UI captures — not concept art, but not yet re-captured from the unboxed unit (G3). Many workspaces use demo data until operators connect their own bridges and credentials. See Terms — Software maturity.",
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
    "Software-led proof — FRE, local inference, and G1 golden path on unboxed MS-S1",
    "Honest depth tiers — Flagship · Forge · Cafe · Preview on every Claw",
    "Viral loop — The Forge mints custom Claws without per-token billing",
  ],

  changelog: {
    headline: "Recent releases",
    lead: "CurXor OS ship velocity — synced from appliance. Full history at",
    link: { href: "/changelog", label: "/changelog" },
    /** How many version blocks to surface on press (newest first). */
    showCount: 3,
  },

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
        why: "Four pillars, eno1/eno2, claw tiers, MS-S1 G1 validation status",
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
      "v1.0.0 tag + golden image + production OTA pipeline (G2)",
      "first 100 units",
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
    "CurXor does not guarantee investment returns, trading performance, or benchmark superiority over cloud APIs. Published mesh latency benchmarks are not yet available — topology is verified on box, not sub-millisecond marketing. MS-S1 unboxed Jun 28, 2026 — G1 closed Jun 29: FRE, local inference, COMMAND captive portal, and EGRESS mesh validated on Standard 64. Pre-v1.0.0 today; production OTA is G2. Capital Claw supports paper and live trading via operator-configured Alpaca bridges — strategy risk is yours. Creator and Outreach outbound actions require explicit operator approval. Preview-tier Claws are working shells with local data — production depth ships on the appliance roadmap.",

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
      label: "Hardware",
      value:
        "MS-S1 MAX Standard 64 — unboxed 2026-06-28 · UMA 48 GB · FRE + ROCm inference validated on box",
    },
    {
      label: "Validation",
      value:
        "G1 closed Jun 29 — dual-port topology verified · see /architecture#validation",
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
    { label: "Flight Command demo", path: "/#demo", note: "Dev/seed Flight Command captures — G3 re-capture from box IP planned" },
    { label: "Outreach Claw tour", path: "/outreach", note: "Demo tour path, Go Live, pipeline, sequences — dev/seed screenshots" },
    { label: "Capital Claw tour", path: "/capital", note: "Flight Command screenshots, Setup Wizard, Go Live — dev/seed until G3" },
    { label: "Creator Claw tour", path: "/creator", note: "Flight Command screenshots, wizard steps, Go Live — dev/seed until G3" },
    { label: "Install video", path: "/architecture#validation", note: "After G2 — factory USB production batch" },
    { label: "Operator PDF", path: "/architecture#validation", note: "After G2 — export from CurXor OS guides" },
  ],
} as const;
