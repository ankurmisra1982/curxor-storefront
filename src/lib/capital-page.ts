import { clawHeadlines } from "@/lib/claw-headlines";
import { g3Honesty, g3Screenshots } from "@/lib/g3-demo";

export const capitalWalkthrough = {
  src: "/demo/capital-walkthrough.webm",
  ariaLabel: "Play Capital desk walkthrough — paper book honesty",
  label: "DESK CREW · CAPITAL WALKTHROUGH",
  caption:
    "Paper Capital honesty on the appliance — rules and Crew Cafe proof are real; live broker book not shown.",
} as const;

export const capitalDemoHero = {
  src: g3Screenshots.capitalPaper,
  alt: "Capital desk — paper book, rules, and portfolio panels",
  caption: "Demo capture — Capital paper book on CurXor OS.",
  label: "PRACTICE MODE · PAPER BOOK",
} as const;

export const capitalSetupSteps = [
  {
    step: "01",
    title: "Risk profile",
    body: "Pick conservative, balanced, or aggressive — FRE stores it locally on the appliance.",
  },
  {
    step: "02",
    title: "Paper mode",
    body: "Start in demo or paper — Alpaca warning is OK without keys; portfolio seeds automatically.",
  },
  {
    step: "03",
    title: "Watchlist",
    body: "Seed tickers for intel digest, movers, and rule triggers.",
  },
  {
    step: "04",
    title: "Rule + arm",
    body: "WHEN/THEN builder in Rule engine — or rebalance rule from Portfolio health hints.",
  },
  {
    step: "05",
    title: "First fill",
    body: "Demo tour or Execute now logs simulated fills — counts toward Go Live.",
  },
] as const;

export const capitalGoLiveChecks = [
  "FRE setup complete — risk profile, paper mode, seed watchlist",
  "Demo portfolio seeded — no broker keys required to explore",
  "At least one rule created and armed in Rule engine",
  "Demo tour or Execute now for first simulated fill",
  "EXIT-DEMO guide when ready to add Alpaca keys on eno2",
] as const;

export const capitalEgressPaths = [
  "Alpaca paper",
  "Alpaca live",
  "Plaid PFM",
  "SnapTrade link",
  "Webull MCP",
  "E*TRADE MCP",
  "Robinhood MCP",
] as const;

export const capitalFlowShots = [
  {
    src: "/demo/cafe/18-ascension-tab.png",
    title: "Crew Cafe · Ascension",
    body: "Crew Cafe ascension tied to real Flagship activity — captured on MS-S1.",
  },
  {
    src: "/demo/cafe/19-pixel-room.png",
    title: "Crew Cafe · Pixel room",
    body: "Ensemble presence on your metal — captured on MS-S1.",
  },
  {
    src: g3Screenshots.systemHealthToks,
    title: "System Health · tok/s",
    body: "38 tok/s qwen3:8b on box — local inference metrics from demo capture.",
  },
  {
    src: "/demo/capital/17-setup-wizard.png",
    title: "Setup Wizard",
    body: "Risk → rule → arm → first fill in under a minute on day one.",
  },
] as const;

export const capitalHonesty = g3Honesty.capitalPractice;

export const capitalPageMeta = {
  title: "Capital — Sovereign Trading Desk",
  description:
    "Capital on CurXor OS — Setup Wizard, Go Live checklist, one-click demo tour, rule engine, and paper path via Alpaca on eno2. Demo desk day one; broker keys when you exit demo.",
  ...clawHeadlines.capital,
} as const;
