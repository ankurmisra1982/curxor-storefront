import {
  applianceChannel,
  applianceSyncedAt,
  applianceVersion,
} from "./generated/appliance-sync";
import { clawRosterLabel } from "./config";

export const changelogMeta = {
  version: applianceVersion,
  channel: applianceChannel,
  syncedAt: applianceSyncedAt,
} as const;

export const changelogEntries = [
  {
    version: "0.1.0",
    date: "2026-06-19",
    channel: "stable" as const,
    highlights: [
      `CurXor OS 0.1.0 — Flight Command dashboard with Home hub and ${clawRosterLabel}`,
      "Life & family verticals — Vital Claw (longevity desk) and Kin Claw (household profiles)",
      "Simple/Expert UI modes, grouped Claw navigation, Settings hub, and chat workspaces with skill buttons",
      "The Forge — natural-language agent factory wired to eno2 egress bridges",
      "Dual-port networking: eno1 Command · eno2 Egress kill switch",
      "Storefront pre-order at curxor.ai — $3,999 once, $0/mo API · /pricing UMA tiers",
    ],
  },
] as const;
