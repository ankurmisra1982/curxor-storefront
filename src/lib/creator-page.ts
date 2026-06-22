import { applianceVersion } from "@/lib/config";
import { clawHeadlines } from "@/lib/claw-headlines";

export const creatorWalkthrough = {
  src: "/demo/creator-walkthrough.webm",
  poster: "/demo/08-creator-claw.png",
  durationLabel: "~90 sec",
  caption:
    "Live Flight Command capture — Creator Claw Go Live, demo tour, queue, wizard, bridge health, and calendar on CurXor OS " +
    applianceVersion +
    ".",
} as const;

export const creatorDemoTourSteps = [
  {
    step: "01",
    title: "FRE ready",
    body: "Channels configured in Creator Claw FRE — demo tour picks your first platform automatically.",
  },
  {
    step: "02",
    title: "Draft",
    body: "Demo post created and staged locally — sovereign copy, no cloud draft storage.",
  },
  {
    step: "03",
    title: "Pre-flight",
    body: "Char limits, brand kit, bridge readiness, and media URL checks before schedule.",
  },
  {
    step: "04",
    title: "Schedule",
    body: "Best-time slot from your own metrics — queued on-appliance, not a SaaS calendar.",
  },
  {
    step: "05",
    title: "Publish",
    body: "Simulated publish when bridges are unconfigured — counts toward Go Live day one.",
  },
] as const;

export const creatorWizardSteps = [
  {
    step: "01",
    title: "Channel",
    body: "Pick TikTok, Instagram, YouTube, X, LinkedIn, or your FRE channel set.",
  },
  {
    step: "02",
    title: "Draft",
    body: "Local LLM writes platform-aware copy — no token meter from CurXor.",
  },
  {
    step: "03",
    title: "Media",
    body: "Upload, AI image, or skip — attach assets before pre-flight.",
  },
  {
    step: "04",
    title: "Pre-flight",
    body: "Char limits, brand kit, bridge readiness, and public media URL checks.",
  },
  {
    step: "05",
    title: "Schedule",
    body: "Queue at learned best time from your own metrics — or pick a slot.",
  },
] as const;

export const creatorGoLiveChecks = [
  "Channels configured in Creator Claw FRE",
  "Run demo tour for first scheduled post — simulated publish counts toward Go Live",
  "Publish bridges ready in Bridge Health when you exit demo (digital.env on eno2)",
  "Public media URL probe OK when IG/Pinterest/TikTok need asset URLs",
  "Optional Telegram/Slack operators for approve-before-publish on live sends",
] as const;

export const creatorPublishBridges = [
  "X",
  "LinkedIn",
  "Instagram",
  "Threads",
  "Facebook",
  "YouTube",
  "TikTok",
  "Pinterest",
  "Bluesky",
  "Mastodon",
] as const;

export const creatorPageMeta = {
  title: "Creator Claw — Sovereign Social Operator",
  description:
    "Creator Claw on CurXor OS — one-click demo tour, 5-step Creation Wizard, Go Live checklist, 10 publish bridges on eno2, engage loop, and analytics. Draft locally, publish on your terms.",
  ...clawHeadlines.creator,
} as const;

export { creatorFlowShots } from "@/lib/marketing";
