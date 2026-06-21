import { applianceVersion } from "@/lib/config";
import { creatorFlowShots } from "@/lib/marketing";

export const creatorWalkthrough = {
  src: "/demo/creator-walkthrough.webm",
  poster: "/demo/08-creator-claw.png",
  durationLabel: "~90 sec",
  caption:
    "Live Flight Command capture — Creator Claw Go Live, queue, wizard, bridge health, and calendar on CurXor OS " +
    applianceVersion +
    ".",
} as const;

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
  "Publish bridges ready in Bridge Health (digital.env on eno2)",
  "Public media URL probe OK when IG/Pinterest/TikTok need asset URLs",
  "Optional Telegram/Slack operators for approve-before-publish",
  "First post scheduled via Creation Wizard or calendar",
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
    "Creator Claw on CurXor OS — 5-step Creation Wizard, Go Live checklist, 10 publish bridges on eno2, engage loop, and analytics. Draft locally, publish on your terms.",
} as const;

export { creatorFlowShots };
