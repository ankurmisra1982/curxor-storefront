export const siteConfig = {
  name: "CurXor",
  siteUrl: "https://curxor.ai",
  tagline: "The Sovereign Edge Nexus for Physical AI",
  stripeCheckoutUrl:
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ??
    "https://buy.stripe.com/00w4gzb5U6gKc6igCZabK00",
  twitterUrl: "https://x.com/curxorai",
  twitterHandle: "@curxorai",
  emailEndpoint: "/api/subscribe",
};

export const specColumns = [
  {
    id: "compute",
    label: "COMPUTE",
    items: [
      "AMD Ryzen AI Max+ 395",
      "64GB LPDDR5X UMA",
      "126 TOPS NPU",
    ],
  },
  {
    id: "spine",
    label: "SPINE",
    items: [
      "Dual 10GbE LAN",
      "Sub-millisecond ZeroMQ telemetry",
      "Offline-Sovereign",
    ],
  },
  {
    id: "os",
    label: "OS",
    items: [
      "CurXor OS",
      "Next.js Captive Portal",
      "OpenClaw Agent Engine",
    ],
  },
] as const;

export const apps = [
  {
    id: "my-work",
    name: "My Work",
    description: "Local-first productivity suite. No cloud sync required.",
    icon: "⌘",
  },
  {
    id: "my-shop",
    name: "My Shop",
    description: "Edge-native commerce and inventory for physical retail.",
    icon: "◈",
  },
  {
    id: "optimus",
    name: "Tesla Optimus Engine",
    description: "Direct motor control and motion planning for humanoids.",
    icon: "⊕",
  },
  {
    id: "robotaxi",
    name: "Robotaxi Fleet Manager",
    description: "Orchestrate autonomous fleets from your local nexus.",
    icon: "◎",
  },
  {
    id: "claw-cafe",
    name: "Claw Cafe",
    description: "Deploy clawbots for service automation on-prem.",
    icon: "⎔",
  },
  {
    id: "invest-agent",
    name: "Invest Agent",
    description: "Claw-agent market research and sovereign trading workflows.",
    icon: "↗",
  },
  {
    id: "content-creator",
    name: "Content Creator",
    description: "Claw-agent media pipelines — video, copy, and social from the edge.",
    icon: "✦",
  },
] as const;
