import { clawHeadlines } from "@/lib/claw-headlines";
import { g3DeskStrips, g3Honesty, g3Screenshots } from "@/lib/g3-demo";

export const outreachDemoHero = {
  src: g3Screenshots.workPipeline,
  alt: "Outreach Claw desk — pipeline and active sequences",
  caption:
    "Demo capture — Work pipeline on CurXor OS. UI and routing are real; outbound sends deferred until bridges are wired.",
} as const;

export const outreachDeskStrip = {
  src: g3DeskStrips.work,
  title: "Work desk strip",
  honestyLabel: g3Honesty.workPipeline,
  poster: g3Screenshots.workPipeline,
} as const;

export const outreachDemoTourSteps = [
  {
    step: "01",
    title: "Desk ready",
    body: "FRE workspace configured — demo tour seeds your Outreach Desk name and focus areas.",
  },
  {
    step: "02",
    title: "Demo lead",
    body: "Pipeline lead created locally — CRM stages stay on-appliance, not in a cloud CRM.",
  },
  {
    step: "03",
    title: "Sequence",
    body: "Multi-step sequence with A/B subject variant — personalization tokens built in.",
  },
  {
    step: "04",
    title: "Activate",
    body: "Sequence armed with pause-on-reply — heartbeat sends due steps on schedule.",
  },
  {
    step: "05",
    title: "Send",
    body: "Simulated outbound when SMTP is unconfigured — counts toward Go Live demo path.",
  },
] as const;

export const outreachGoLiveChecks = [
  "Outreach desk configured in FRE — workspace name and focus areas",
  "Run demo tour for first simulated send — SMTP optional on day one",
  "First lead in pipeline — add manually, import CSV, or use demo tour seed",
  "Multi-step sequence created and activated with pause-on-reply",
  "SMTP in digital.env on eno2 when ready for live bridge sends",
] as const;

export const outreachTierBFeatures = [
  "A/B subject variants",
  "CSV lead import",
  "Reply intent tagging",
  "Send policy + stagger",
  "Open/reply analytics",
  "Unified comms desk",
] as const;

export const outreachFlowShots = [
  {
    src: g3Screenshots.workPipeline,
    title: "Lead pipeline",
    body: "CRM stages, active sequences, and local store — demo capture from MS-S1.",
  },
  {
    src: "/demo/outreach/22-sequences.png",
    title: "Sequences",
    body: "Multi-step outbound with delay days, A/B subjects, and pause-on-reply.",
  },
  {
    src: "/demo/outreach/23-analytics.png",
    title: "Outreach analytics",
    body: "Open/reply rates, send limits, and reply intent breakdown on Standard+.",
  },
] as const;

export const outreachPageMeta = {
  title: "Outreach Claw — Sovereign Outbound Desk",
  description:
    "Outreach Claw on CurXor OS — demo tour, Go Live checklist, lead pipeline, sequences, CSV import, A/B subjects, reply intent, and send policy. Simulated sends day one; SMTP on eno2 when configured.",
  ...clawHeadlines.outreach,
} as const;
