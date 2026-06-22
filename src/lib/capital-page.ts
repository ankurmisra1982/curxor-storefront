import { applianceVersion } from "@/lib/config";

export const capitalWalkthrough = {
  src: "/demo/capital-walkthrough.webm",
  poster: "/demo/03-capital-claw.png",
  durationLabel: "~90 sec",
  caption:
    "Live Flight Command capture — Capital Claw Go Live, rule engine, demo tour, and portfolio desk on CurXor OS " +
    applianceVersion +
    ". Demo mode — no broker keys required.",
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
    src: "/demo/capital/19-capital-go-live.png",
    title: "Go Live checklist",
    body: "Demo vs paper path — strict ready semantics before you exit demo mode.",
  },
  {
    src: "/demo/capital/17-setup-wizard.png",
    title: "Setup Wizard",
    body: "Risk → rule → arm → first fill in under a minute on day one.",
  },
  {
    src: "/demo/capital/18-analytics-tab.png",
    title: "Analytics tab",
    body: "Standard+ scorecard, walk-forward backtest, and NL portfolio Q&A.",
  },
  {
    src: "/demo/03-capital-claw.png",
    title: "Capital desk",
    body: "Trade · Research · Risk · Agents tabs — 27 panels with rule engine and demo tour.",
  },
] as const;

export const capitalPageMeta = {
  title: "Capital Claw — Sovereign Trading Desk",
  description:
    "Capital Claw on CurXor OS — Setup Wizard, Go Live checklist, rule engine, demo tour, and paper path via Alpaca on eno2. Demo desk day one; broker keys when you exit demo.",
} as const;
