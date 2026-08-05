/**
 * Buyer-facing desk-crew roster overlay.
 * Appliance sync (`claw-cheat-sheet-sync`) keeps founder GTM coaching — do not render it raw.
 */

import {
  clawCheatSheetEntries,
  type ClawCheatSheetEntry,
} from "@/lib/generated/claw-cheat-sheet-sync";

export const publicRosterSummary =
  "Thirteen surfaces on CurXor OS — flagship desks, The Forge, Crew Cafe, and eight honest Preview crewmates.";

export const publicRosterLead =
  "Capital, Creator, Outreach, and The Forge are the buy path on $3,999 metal. Crew Cafe is the growth home. Eight Preview crewmates stay labeled honestly — useful on-box shells; production depth ships on the appliance roadmap.";

const publicBullets: Record<string, readonly string[]> = {
  forge: [
    "Mint a custom crewmate from a framework desk, Island profile, or import in one session",
    "Template packs become real desks on the appliance",
    "Malicious import bundles blocked before provision",
    "Go Live checklist and demo tour on the forged desk",
  ],
  "my-capital": [
    "Rule engine and portfolio desk — paper or live Alpaca when you wire broker keys",
    "Broker bridges on egress — Plaid, Robinhood, SnapTrade, TradingView, and more",
    "Social alpha feed with approval before anything leaves",
    "Go Live checklist — explore in paper before live fills",
  ],
  "my-content-creator": [
    "Content ops desk — queue, calendar, multi-platform publish intent, engage inbox",
    "Asset pipeline and channel config — publish through egress when you approve",
    "Go Live checklist and demo tour day one",
    "Crew Cafe XP from real publish and engage activity",
  ],
  "my-work": [
    "Sequences, task matrix, morning brief, and deliverability story",
    "CRM connectors — Google, Microsoft, HubSpot, Notion via egress bridges",
    "Work gamification opt-out in Settings",
    "Handshake paths into Capital and Creator",
  ],
  "crew-cafe": [
    "Pixel room — characters react to real cross-crew events",
    "Ascension tied to real Capital, Creator, Outreach, and Forge activity",
    "Event bus ingests flagship desks and preview crewmates",
    "Play · Ascension · Progress · Host — not a full social network",
  ],
  "my-shop": [
    "Shopify, eBay, Printify read bridges via egress receipts",
    "Margin and fulfillment preview strips on-box",
    "Demo tour on the appliance",
    "Not live: inventory writes, Printify order create, production credentials",
  ],
  "my-vital": [
    "Longevity Lab on-box — expert Q&A, literature, protocol diff, demo vitals",
    "Wearable bridges panel — preview until egress validates",
    "Kin health-context handshake",
    "Not live: full PDF OCR, clinician export, production wearable OAuth",
  ],
  "my-game": [
    "Session journal, library shelf, squad roster from Kin",
    "Steam library sync via egress — honest demo receipt without API keys",
    "Play · Stream · Make tabs on the sovereign play desk",
    "Not live: Twitch OAuth, AI game studio deploy, console bridges",
  ],
  "my-learn": [
    "Learner picker from Kin, lesson stubs, parent digest, study blocks",
    "Cafe XP when tutor depth ships",
    "Honest Preview shell — not accredited coursework today",
    "Not live: accredited coursework, live tutoring, full curriculum depth",
  ],
  "my-estate": [
    "Legal · Property · Tax lanes — checklists, reminders, counsel notes",
    "Legal lane file upload and attorney manifest (local sandbox)",
    "Kin share when you enable it",
    "Not live: e-sign, tax filing, live counsel integration",
  ],
  "robotaxi-fleet-manager": [
    "Geospatial grid — assign/recall, policy pick, workload queue",
    "Handoffs to Work and Capital · simulators and Forge-linked units",
    "Robotaxi horizon panel — fleet vision copy",
    "Not live: Tesla VIN pairing, on-road dispatch, production fleet APIs",
  ],
  "my-family": [
    "Household profiles, devices registry, mesh share flags for other crewmates",
    "Learn and Gamer read the same Kin member IDs",
    "Family context publish across the desk crew",
    "Not live: live Optimus guest recognition — ships with Signal hardware",
  ],
  "tesla-optimus-engine": [
    "Humanoid Home Hub — house rules, knowledge push/audit, routine templates",
    "Five tabs: Home, Fleet, Knowledge, Routines, Control (motor mesh preview only)",
    "Kin-aware policies · pair-day wizard simulation",
    "Not live: BLE/VIN pairing, real motion control — awaits hardware",
  ],
};

export type PublicRosterEntry = Omit<ClawCheatSheetEntry, "bullets" | "status"> & {
  status: "live" | "preview";
  statusLabel: string;
  bullets: readonly string[];
};

function statusLabel(entry: ClawCheatSheetEntry): string {
  if (entry.status === "live") return "Live";
  if (entry.scopedKind === "preview") return "Preview";
  return "Preview · Under construction";
}

export function getPublicRosterEntries(): PublicRosterEntry[] {
  return clawCheatSheetEntries.map((entry) => ({
    ...entry,
    status: entry.status === "live" ? "live" : "preview",
    statusLabel: statusLabel(entry),
    bullets: publicBullets[entry.applianceId] ?? entry.bullets,
  }));
}
