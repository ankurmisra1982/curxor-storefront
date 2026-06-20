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

export {
  apps,
  applianceVersion,
  applianceChannel,
  applianceSyncedAt,
} from "./generated/appliance-sync";

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
