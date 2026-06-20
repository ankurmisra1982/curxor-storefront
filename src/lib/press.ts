import { siteConfig } from "./config";

export const pressKit = {
  headline: "Mint AI Employees on Bare Metal.",
  boilerplate:
    "CurXor Systems builds sovereign AI appliances that run digital employees — called Claws — on local hardware with zero monthly API fees. The CurXor Edge Nexus ships with 126 TOPS NPU, 64GB unified memory, CurXor OS, and eight bundled verticals for trading, content, outreach, and more. Pre-order at curxor.ai for $3,999.",
  founderQuote:
    "ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.",
  contactEmail: "hello@curxor.ai",
  facts: [
    { label: "Product", value: "CurXor Edge Nexus" },
    { label: "Price", value: "$3,999 pre-order (one-time hardware)" },
    { label: "Compute", value: "AMD Ryzen AI Max+ 395 · 126 TOPS NPU · 64GB LPDDR5X UMA" },
    { label: "Networking", value: "Dual 10GbE — eno1 Command · eno2 Egress" },
    { label: "Software", value: "CurXor OS 0.1.0 — Flight Command dashboard + 8 Claw verticals" },
    { label: "Website", value: siteConfig.siteUrl },
    { label: "Social", value: siteConfig.twitterHandle },
  ],
  assets: [
    { label: "Logo mark (PNG)", path: "/favicon.svg", note: "SVG favicon — PNG in docs/assets for decks" },
    { label: "Open Graph image", path: "/opengraph-image", note: "Auto-generated at curxor.ai/opengraph-image" },
  ],
} as const;
