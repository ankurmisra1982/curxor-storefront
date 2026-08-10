/** Open-weight hardware tier compare — keep public copy free of repo paths and bench theater. */

export const openWeightComputeLadder = {
  eyebrow: "OPEN-WEIGHT COMPUTE LADDER",
  hero: "The open-weight frontier moves fast. Your appliance shouldn't rent it — it should grow into it.",
  subhead:
    "CurXor OS — mint autonomous employees on bare metal. Standard 64 GB today. Pro and CurXor Studio tomorrow. Same sovereignty. Stronger models as memory allows.",
  paragraph:
    "CurXor is a sovereign AI appliance: flagship desks day one, one local operating system, zero monthly inference rent on the operate plane. Today that starts on the MINISFORUM MS-S1 Max — 64 GB unified memory and a Qwen3 stack sized for real multi-crewmate workloads. Open-weight AI keeps advancing; CurXor OS evolves with it through model catalogs and tier profiles, so you update the stack on hardware you own instead of rebuying the story every six months. Standard for flagship operators, Pro 128 for heavier local models, and CurXor Studio — post-traction custom compute built to CurXor OS specs — for the largest open-weight models when your work demands it. Optional frontier BYOK exists; the default is still mint on metal, not API rent.",
  footnote:
    "$0/mo operate inference means the local LLM on the appliance for chat, planning, and Forge assist. It does not cover optional third-party BYOK, trading or social bridges, or electricity.",
  pricingRoles: {
    standard: "Flagship desks — 3 demo-ready · daily operate",
    pro: "Power operators — heavier local models · dual hot-load",
    studio: "Horizon — largest open weights when memory demands it (waitlist path)",
  },
} as const;

/** The one thing a buyer came to /pricing for. Price intent — waitlist only until charge path reopens. */
export const priceCard = {
  eyebrow: "CURXOR STANDARD 64",
  price: "$3,999",
  cadence: "once",
  sub: "Price intent · no CurXor subscription · $0/mo CurXor API on the operate plane",
  includes: [
    "curXor appliance — 64 GB LPDDR5X UMA · 126 TOPS NPU class",
    "CurXor OS + Flight Command — Home hub, Settings, Simple and Expert modes",
    "Desk crew of ten + The Forge — enable any combination in Settings",
    "Local inference by default; frontier models optional on your own keys",
    "Dual 10GbE — eno1 command, eno2 egress with a physical kill switch",
    "Messaging gateways — Telegram, Slack, WhatsApp, iMessage, user-configured",
  ],
  honesty:
    "We’re not taking pre-orders yet. Join the waitlist. Capital, Creator and Outreach are demo-ready desks; eight further crewmates ship as labelled previews. Outbound stays simulated until you wire your own bridges on eno2.",
  shipping:
    "Join the waitlist for launch updates. Ship dates are announced by email as production batches are scheduled — no delivery date is promised today.",
} as const;

/** Pricing page — evolving business model (INVESTOR-MEMO § Business model) */
export const pricingEvolutionBlurb = {
  eyebrow: "EVOLVING MODEL",
  paragraphs: [
    "Hardware purchase is the anchor — $3,999 once, $0/mo operate-plane API on the appliance. CurXor does not bill per token for local inference or bundled crewmates.",
    "CurXor OS evolves on metal you already own via OTA: compute tiers from Standard to Pro 128 to CurXor Studio as open weights advance, crewmate depth unlocks as flagship desks mature, and The Forge lets you mint custom operators without a new subscription per workflow.",
    "Frontier models and bridge connectors stay optional BYOK — additive, never required to run the desk. We are not building another API rent trap.",
  ],
} as const;

export const hardwareTierCompare = {
  columns: [
    {
      id: "standard",
      name: "Standard",
      price: "$3,999",
      memory: "64 GB UMA",
      status: "Waitlist",
      highlight: true,
    },
    {
      id: "pro128",
      name: "Pro 128",
      price: "$4,999 indicative",
      memory: "128 GB UMA",
      status: "Roadmap · waitlist path",
      highlight: false,
    },
    {
      id: "studio",
      name: "CurXor Studio",
      price: "TBD",
      memory: "256 GB+ UMA",
      status: "Horizon · waitlist path",
      highlight: false,
    },
  ],
  rows: [
    {
      label: "Platform",
      standard: "MS-S1 Max · Ryzen AI Max+ 395",
      pro128: "Same platform · 128 GB SKU",
      studio: "CurXor-branded custom box",
    },
    {
      label: "Default local stack",
      standard: "moondream:1.8b + qwen3.5:9b",
      pro128: "Above + qwen3-vl:8b · qwen3:14b · qwen3.6-35b:q4",
      studio: "Largest open-weight models at usable quant",
    },
    {
      label: "Best for",
      standard: openWeightComputeLadder.pricingRoles.standard,
      pro128: openWeightComputeLadder.pricingRoles.pro,
      studio: openWeightComputeLadder.pricingRoles.studio,
    },
    {
      label: "Operate inference",
      standard: "$0/mo on appliance",
      pro128: "$0/mo on appliance",
      studio: "$0/mo on appliance",
    },
  ],
} as const;
