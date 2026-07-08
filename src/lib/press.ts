import {
  applianceVersion,
  clawRosterLabel,
  productIdentity,
  siteConfig,
  socialProfiles,
} from "./config";
import { categoryFilmAssets } from "./g3-demo";
import { qaMetricsLine } from "./qa-metrics";

export const metricsCiteCard = `Box: MINISFORUM MS-S1 MAX · 64 GB · 48 GB UMA BIOS
OS: Ubuntu 24.04 · CurXor OS v1.0.3
Inference: Ollama ROCm · qwen3:8b · 38 tok/s (System Health)
RAM in use: 4.56 / 64 GB · UMA 7.1%
Dashboard: Flight Command on LAN :3080
QA: 239 smoke · G3 capture unit green
Pricing: $3,999 once · $0/mo operate-plane API
Stage: G1/G2/G3 green · pre-revenue · solo founder
Velocity: 182 commits · 20 days · v0.1.0→v1.0.3 · G3 closed Jul 8`;

export const investorDeckMailto =
  "mailto:hello@curxor.ai?subject=Investor%20inquiry%20%E2%80%94%20CurXor";

export const pressKit = {
  headline: "Your AI team. On a box you own.",
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
    headline: "Sovereign agent appliance — G1/G2/G3 closed on MS-S1.",
    body: "CurXor Systems builds curXor — a 64GB sovereign AI appliance that runs digital employees called Claws on bare metal. Buyers pay once for hardware; CurXor does not bill per token. MS-S1 MAX unboxed 2026-06-28; G1 golden path closed 2026-06-29; G3 demo captures closed 2026-07-08: CurXor OS v1.0.3, FRE (Capital, Creator, Work), local inference (qwen3:8b · 38 tok/s on ROCm), investor proof pack, and desk strips on Standard 64. Ops Wave 1 live bridges and external operator UAT are G4.",
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
          "MS-S1 MAX **unboxed** (2026-06-28) — Ubuntu, CurXor OS **v1.0.3**, Ollama ROCm on Standard 64 (qwen3:8b · 38 tok/s)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**FRE green** on bare metal — Capital, Creator, Work provisioned · Flight Command live on box",
      },
      {
        status: "Shipped" as const,
        milestone:
          "CurXor OS **v1.0.3** — four-pillar stack, Flight Command UI, 10 Claws + The Forge, Claw Cafe ascension tied to Flagship desks",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**G3 demo captures closed** (2026-07-08) — inception reel, investor proof, desk strips, 8-screenshot pack on MS-S1",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Agent runtime, unified comms gateways, Build Plane BP4 delegation queue in software",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**239** smoke + **40** user-flow QA checks in curxor-os (`qa:local` suite)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Storefront GTM at curxor.ai — symphony model, investor press kit, Waves A–E polish, G1 mirror across validation surfaces, Resend waitlist + Stripe pre-order",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**G1 golden path closed** (2026-06-29) — eno1/eno2 captive portal + EGRESS mesh on box, `verify-unbox-day.sh` PASS, smile test PASS, telemetry broker on 10.77.0.1",
      },
      {
        status: "Pending" as const,
        milestone: "Ops Wave 1 live bridges on box · first external operator UAT (G4)",
      },
      {
        status: "Pending" as const,
        milestone: "Published mesh benchmarks, production OTA fleet artifact",
      },
    ],
    footnote:
      "G3 captures on curxor.ai are from MS-S1 box — paper Capital, approval-gated Creator, honest Work pipeline. Live broker fills and outbound sends require operator-configured bridges on eno2. See Terms — Software maturity.",
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
    "CurXor does not guarantee investment returns, trading performance, or benchmark superiority over cloud APIs. Published mesh latency benchmarks are not yet available — topology is verified on box, not sub-millisecond marketing. MS-S1 unboxed Jun 28, 2026 — G1/G2/G3 closed Jul 8: FRE, local inference, G3 investor pack, and desk strips validated on Standard 64. Capital Claw supports paper and live trading via operator-configured Alpaca bridges — strategy risk is yours. Creator and Outreach outbound actions require explicit operator approval. Preview-tier Claws are working shells with local data — production depth ships on the appliance roadmap.",

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
      value: `${qaMetricsLine} (curxor-os qa:local)`,
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
        "Capital · Creator · Outreach · Arbitrage · Signal · Swarm · Vital · Kin · Learn · Gamer · Estate · Claw Cafe · The Forge (Engage inbox under Creator)",
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
    {
      label: "Category hero film",
      path: "/signal#category-film",
      note: "Act I cut ~90s · hero-category-v1 (= g3-inception-reel-v1 alias) · full badge+payoff v2 post-validation",
    },
    {
      label: "G3 investor proof (~3 min MP4)",
      path: categoryFilmAssets.investorProof,
      note: "Desk montage with VO — diligence async follow-up",
    },
    {
      label: "Pitch deck background loop (15s MP4)",
      path: categoryFilmAssets.deckLoop,
      note: "Silent Layer C loop — cold open → XOR → conductor glance → box pullback",
    },
    {
      label: "G3 press kit (ZIP)",
      path: "/press/curxor-press-kit-g3.zip",
      note: "Hero film comp plates + metrics cite card",
    },
    {
      label: "Hero film comp plates",
      path: "/demo/hero-film/01-conductor-glance@2x.png",
      note: "7× @2x PNGs in /demo/hero-film/",
    },
    { label: "Open Graph image", path: "/opengraph-image", note: "Auto-generated at curxor.ai/opengraph-image" },
    { label: "G3 desk gallery", path: "/#demo", note: "MS-S1 captures — Capital paper · Creator queue · Work pipeline" },
    { label: "Outreach Claw tour", path: "/outreach", note: "G3 desk strip + pipeline capture" },
    { label: "Capital Claw tour", path: "/capital", note: "G3 desk strip · Practice mode paper book" },
    { label: "Creator Claw tour", path: "/creator", note: "G3 desk strip · publish approval frame" },
    { label: "Install video", path: "/architecture#validation", note: "After G2 — factory USB production batch" },
    { label: "Operator PDF", path: "/architecture#validation", note: "After G2 — export from CurXor OS guides" },
  ],
} as const;
