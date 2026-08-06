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
    body: "Natural-language agent factory — mint custom crewmates wired to your egress policy.",
  },
  {
    id: "cafe",
    label: "Cafe",
    body: "Crew Cafe — cross-crew growth home: XP, ascension, and a pixel room tied to real operator activity.",
  },
  {
    id: "preview",
    label: "Preview",
    body: "Eight honest Preview crewmates — local data and useful on-box shells; production depth ships on the appliance roadmap.",
  },
] as const;

const tierBadgeClass: Record<StorefrontApp["gtmTier"], string> = {
  flagship: "border-neon-purple/40 text-neon-purple/90",
  forge: "border-white/25 text-white/70",
  cafe: "border-amber-400/30 text-amber-200/80",
  preview: "border-white/15 text-white/55",
};

export function gtmTierBadgeClass(tier: StorefrontApp["gtmTier"]): string {
  return tierBadgeClass[tier];
}
