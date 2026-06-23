import type { StorefrontApp } from "@/lib/config";

export const gtmTierLegend = [
  {
    id: "flagship",
    label: "Flagship",
    body: "Capital, Creator, Outreach — demo-ready desks with Go Live paths and eno2 bridges.",
  },
  {
    id: "forge",
    label: "Forge",
    body: "Natural-language agent factory — mint custom Claws wired to your egress policy.",
  },
  {
    id: "cafe",
    label: "Cafe",
    body: "Cross-Claw growth home — XP, streaks, and ascension tied to real operator activity.",
  },
  {
    id: "preview",
    label: "Preview",
    body: "Honest shells for upcoming verticals — local data works; production depth ships later.",
  },
] as const;

const tierBadgeClass: Record<StorefrontApp["gtmTier"], string> = {
  flagship: "border-neon-purple/40 text-neon-purple/90",
  forge: "border-white/25 text-white/70",
  cafe: "border-amber-400/30 text-amber-200/80",
  preview: "border-white/15 text-white/40",
};

export function gtmTierBadgeClass(tier: StorefrontApp["gtmTier"]): string {
  return tierBadgeClass[tier];
}
