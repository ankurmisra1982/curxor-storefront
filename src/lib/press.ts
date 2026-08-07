import {
  applianceVersion,
  clawRosterLabel,
  productIdentity,
  siteConfig,
  socialProfiles,
} from "./config";
import { categoryFilmAssets } from "./g3-demo";

export const metricsCiteCard = `Box: MINISFORUM MS-S1 MAX · 64 GB unified memory
OS: Ubuntu 24.04 · CurXor OS v${applianceVersion}
Inference: Ollama ROCm · qwen3:8b · 38 tok/s measured on MS-S1 MAX
Dashboard: Flight Command on the appliance LAN
QA: Appliance suite green on CurXor OS
Pricing: $3,999 once · $0/mo operate-plane API
Stage: Working product on MS-S1 MAX · priority bridges proven on the appliance · design-partner sessions done (private) · pre-revenue
Velocity: ~20 days from first commit to first stable · proof pack on site Jul 8 · seven bridges proven Jul 9`;

export const investorDeckMailto =
  "mailto:hello@curxor.ai?subject=Investor%20inquiry%20%E2%80%94%20CurXor";

export const pressKit = {
  headline: "Your AI team. On a box you own.",
  boilerplate: `${productIdentity.companyName} builds sovereign AI appliances that run digital employees — a desk crew on local hardware — with zero monthly API fees. ${productIdentity.boxName} is the chassis name on every box — 126 TOPS NPU, 64GB unified memory, ${productIdentity.osName}, and ${clawRosterLabel} spanning wealth, creation, outreach, signals, and life & family. Message your desk crew from Flight Command or Telegram, Slack, WhatsApp, and iMessage — local inference by default, integrations you configure. Join the waitlist at curxor.ai; pre-order is $3,999 when you are ready.`,
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
      { href: "/journal", label: "Journal" },
    ],
  },

  investorIntro: {
    eyebrow: "COMPANY",
    headline: "Sovereign agent appliance — working product on real MS-S1 metal.",
    body: `CurXor Systems builds curXor — a 64GB sovereign AI appliance that runs a desk crew of digital employees on bare metal. Buyers pay once for hardware; CurXor does not bill per token. MS-S1 MAX unboxed 2026-06-28; first full end-to-end run on the box the next day; demo captures closed 2026-07-08. Current release: CurXor OS ${applianceVersion} — flagship desks (Capital, Creator, Outreach), local inference (qwen3:8b · 38 tok/s measured on ROCm on MS-S1 MAX), investor proof pack, and desk strips on Standard 64. Priority bridges are green on the appliance (Google · Alpaca paper · Bluesky · Telegram · Discord · X — Capital stays paper). Design partners have completed remote walkthrough sessions on MS-S1 MAX (creator and trader desks). Feedback is private. Not a customer fleet. Not closed traction. Not live brokerage fills.`,
  },

  founders: {
    fundraisingStatus:
      "Bootstrapped and selectively meeting aligned angels and seed investors.",
    bios: [
      {
        name: "Ankur",
        role: "Founder & CEO",
        bio: "Vision, go-to-market, and customer trust. Building the category: mint autonomous employees on bare metal — not another chat subscription.",
      },
    ],
    technicalCoFounderLine:
      "Appliance software, production OTA, and factory artifacts are led by a technical co-founder — details shared in diligence conversations.",
  },

  traction: {
    headline: "Traction",
    rows: [
      {
        status: "Shipped" as const,
        milestone:
          "MS-S1 MAX **unboxed** (2026-06-28) — Ubuntu, CurXor OS **v1.0.3**, Ollama ROCm on Standard 64 (qwen3:8b · 38 tok/s measured on MS-S1 MAX)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**Flagship desks green** on bare metal — Capital, Creator, Outreach provisioned · Flight Command live on box",
      },
      {
        status: "Shipped" as const,
        milestone:
          `CurXor OS **v${applianceVersion}** — four-pillar stack, Flight Command UI, desk crew of ten + The Forge, Crew Cafe ascension tied to Flagship desks`,
      },
      {
        status: "Shipped" as const,
        milestone:
          "**Demo captures closed** (2026-07-08) — product proof film, investor proof, desk strips, screenshot pack on MS-S1",
        href: "/#demo",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Agent runtime, unified comms gateways, and build-delegation queue in software",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Appliance QA suite green on CurXor OS — automated and user-flow coverage on box",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Storefront at curxor.ai — investor press kit, validation surfaces, waitlist + Stripe pre-order",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**First full run end to end on the box** (2026-06-29) — eno1/eno2 captive portal + EGRESS mesh on box, unbox verification passed, operator walkthrough passed, telemetry broker on local mesh",
      },
      {
        status: "Shipped" as const,
        milestone:
          "**Priority bridges green** (2026-07-08/09) — Google · Alpaca paper · Bluesky · Telegram · Discord · X OAuth1 + FinTwit on MS-S1 MAX (seven bridges proven; Capital paper-only)",
      },
      {
        status: "Shipped" as const,
        milestone:
          "Design partners completed remote walkthrough sessions on MS-S1 MAX (creator and trader desks) — feedback private; not a customer fleet; not closed traction",
      },
      {
        status: "Pending" as const,
        milestone: "Published mesh benchmarks, production OTA fleet artifact",
      },
    ],
    footnote:
      "Desk captures on curxor.ai are from MS-S1 MAX — paper Capital, approval-gated Creator, honest Outreach pipeline. Priority bridges are proven on the appliance — not a customer fleet. Live broker fills stay off until the operator flips Capital live and wires their own keys on eno2. See Terms — Software maturity.",
    footnoteLink: { href: "/terms", label: "Terms — Software maturity" },
  },

  businessModel: {
    headline: "Hardware wedge today. Platform expansion tomorrow.",
    now: [
      "$3,999 one-time hardware (MS-S1 MAX class, CurXor OS pre-flash)",
      "Stripe pre-order at /pricing",
      "No CurXor subscription for local inference or bundled crewmates",
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

  vsMarket:
    "The market splits between chat tabs, cloud agents with monthly rent, self-hosted home clouds, and lightweight assistant appliances. CurXor is the operator desk category: vertical digital employees for wealth, creation, and work — outcomes on metal you own, not another app store or messaging bot. Hardware is the anchor; software evolves OTA without mandatory API rent.",

  whyCurXor: [
    "Category creation — independent computer for digital employees, not DIY Ollama or SaaS agents",
    "Sovereignty story — eno1 command · eno2 egress only · physical kill switch",
    "Software-led proof — flagship desks, local inference, and a full end-to-end run on unboxed MS-S1",
    "Honest depth tiers — Flagship · Forge · Cafe · Preview on every crewmate",
    "Viral loop — The Forge mints custom crewmates without per-token billing",
  ],

  changelog: {
    headline: "Recent releases",
    lead: "CurXor OS ship velocity. Full history at",
    link: { href: "/changelog", label: "/changelog" },
    /** How many version blocks to surface on press (newest first). */
    showCount: 3,
  },

  diligencePath: {
    headline: "Diligence path",
    links: [
      {
        href: "/#demo",
        label: "Desk gallery",
        why: "MS-S1 Flight Command captures — Capital paper · Creator queue · Outreach pipeline",
      },
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
        why: "Four pillars, eno1/eno2, desk-crew tiers, MS-S1 validation status",
      },
      {
        href: "/changelog",
        label: "Changelog",
        why: "Ship velocity — CurXor OS release notes",
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
      "Production flash image + customer OTA pipeline when ready",
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
    "CurXor does not guarantee investment returns, trading performance, or benchmark superiority over cloud APIs. Published mesh latency benchmarks are not yet available — topology is verified on box, not sub-millisecond marketing. MS-S1 unboxed Jun 28, 2026 — by Jul 8: flagship desks, local inference, investor proof pack, and desk strips validated on Standard 64. Capital supports paper and live trading via operator-configured Alpaca bridges — strategy risk is yours. Creator and Outreach outbound actions require explicit operator approval. Preview-tier crewmates are working shells with local data — production depth ships on the appliance roadmap.",

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
      value: "Appliance QA suite green on CurXor OS",
    },
    {
      label: "Hardware",
      value:
        "MS-S1 MAX Standard 64 — unboxed 2026-06-28 · 48 GB UMA allocated in BIOS on the 64 GB SKU · flagship desks + ROCm inference validated on box",
    },
    {
      label: "Validation",
      value:
        "First full run end to end on the box Jun 29 — dual-port topology verified · see /architecture#validation",
    },
    {
      label: "Desk crew roster",
      value:
        "Capital · Creator · Outreach · Arbitrage · Signal · Swarm · Vital · Kin · Learn · Gamer (Engage inbox under Creator)",
    },
    {
      label: "Crew Cafe",
      value: "Hall — not a roster seat",
    },
    {
      label: "The Forge",
      value: "Factory — not a roster seat",
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
      label: "Category vision film (~99s MP4)",
      path: categoryFilmAssets.heroCategoryBadge,
      note: "Desk crew · always-on life · approval gate — vision comps with voiceover · 1080p",
    },
    {
      label: "Category vision short (~62s MP4)",
      path: categoryFilmAssets.heroCategoryBadgeShort,
      note: "Shorter version of the category vision film",
    },
    {
      label: "Product proof film (~89s MP4)",
      path: categoryFilmAssets.inceptionReel,
      note: "Onboarding through Capital, Creator, and Outreach on real MS-S1 metal",
    },
    {
      label: "Category film (/signal)",
      path: "/signal#category-film",
      note: "Category vision (~91s) + product proof — watch on site",
    },
    {
      label: "Investor proof (~2:50 MP4)",
      path: categoryFilmAssets.investorProof,
      note: "Longer desk montage with voiceover — for media and investor outreach",
    },
    {
      label: "Pitch deck background loop (15s MP4)",
      path: categoryFilmAssets.deckLoop,
      note: "Silent background loop for decks — open → mark → conductor → box",
    },
    {
      label: "Press kit (ZIP)",
      path: "/press/curxor-press-kit.zip",
      note: "Press kit ZIP — film plates + metrics cite card",
    },
    {
      label: "Operator quick reference (PDF)",
      path: "/press/operator-quick-reference.pdf",
      note: "Operator guide export · 2026-08-02",
    },
    {
      label: "CurXor OS complete guide (PDF)",
      path: "/press/curxor-os-complete.pdf",
      note: "Full OS guide export · 2026-08-02",
    },
    {
      label: "Product still A",
      path: "/demo/hardware/product-still-a-act1.png",
      note: "MS-S1 class elevated still — not factory photography",
    },
    {
      label: "Product still B (dream)",
      path: "/demo/hardware/product-still-b-dream.png",
      note: "Soft secondary · /about — not factory photography",
    },
    {
      label: "Product still D (hero etch)",
      path: "/demo/hardware/product-still-d-hero.png",
      note: "Close / LinkedIn brochure flip — not factory photography",
    },
    {
      label: "Hero film stills",
      path: "/demo/hero-film/01-conductor-glance@2x.png",
      note: "Film stills in /demo/hero-film/",
    },
    { label: "Open Graph image", path: "/opengraph-image", note: "Auto-generated at curxor.ai/opengraph-image" },
    { label: "Desk gallery", path: "/#demo", note: "MS-S1 captures — Capital paper · Creator queue · Outreach pipeline" },
    { label: "Outreach tour", path: "/outreach", note: "Desk strip · pipeline honesty" },
    { label: "Capital tour", path: "/capital", note: "Desk strip · paper book honesty" },
    { label: "Creator tour", path: "/creator", note: "Desk strip · approval / schedule honesty" },
    { label: "Install video", path: "/architecture#validation", note: "Factory USB production batch — not published yet" },
  ],
} as const;
