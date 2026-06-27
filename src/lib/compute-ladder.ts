/** Open-weight hardware tier compare — source: docs/COMPUTE-LADDER.md */

export const openWeightComputeLadder = {
  eyebrow: "OPEN-WEIGHT COMPUTE LADDER",
  hero: "The open-weight frontier moves fast. Your appliance shouldn't rent it — it should grow into it.",
  subhead:
    "CurXor OS — mint autonomous employees on bare metal. Standard 64 GB today. Pro and CurXor Studio tomorrow. Same sovereignty. Stronger models as memory allows.",
  paragraph:
    "CurXor is a sovereign AI appliance: ten digital employees, one local operating system, zero monthly inference rent on the operate plane. Today that starts on the MINISFORUM MS-S1 Max — 64 GB unified memory and a Qwen3 stack sized for real multi-Claw workloads. Open-weight AI keeps advancing; CurXor OS evolves with it through model catalogs and tier profiles, so you update the stack on hardware you own instead of rebuying the story every six months. Standard for flagship operators, Pro 128 for heavier local models, and CurXor Studio — post-traction custom compute built to CurXor OS specs — for the largest open-weight models when your work demands it. Optional frontier BYOK exists; the default is still mint on metal, not API rent.",
  footnote:
    "$0/mo operate inference = local LLM on the appliance for the operate plane (chat, planning, Forge assist). Does not include optional third-party BYOK, trading/social bridges, or your power bill.",
  evidence: {
    label: "pi-local-coding-bench.dev",
    href: "https://pi-local-coding-bench.dev/",
    note: "Strix Halo / same silicon class evidence — directional, not a guarantee on your SKU until validated.",
  },
  pricingRoles: {
    standard: "Flagship GTM — ten Claws · daily operate",
    pro: "Power operators — heavier local models · dual hot-load",
    studio: "Horizon — largest open weights when memory demands it (no pre-order)",
  },
} as const;

export const hardwareTierCompare = {
  columns: [
    {
      id: "standard",
      name: "Standard",
      price: "$3,999",
      memory: "64 GB UMA",
      status: "Shipping",
      highlight: true,
    },
    {
      id: "pro128",
      name: "Pro 128",
      price: "$4,999",
      memory: "128 GB UMA",
      status: "Coming",
      highlight: false,
    },
    {
      id: "studio",
      name: "CurXor Studio",
      price: "TBD",
      memory: "256 GB+ UMA",
      status: "Future",
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
      standard: "moondream:1.8b + qwen3:8b",
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
