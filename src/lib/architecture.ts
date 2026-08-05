import { productStills } from "@/lib/product-stills";

/** MS-S1 unbox day + golden-path gate — shared by ValidationBadge and /architecture#validation. */
export const hardwareValidation = {
  unboxDate: "2026-06-28",
  g1ClosedDate: "2026-06-29",
  badgeAriaLabel: "curXor — MS-S1 unboxed · golden path closed",
  badgeSummary:
    "MS-S1 MAX unboxed Jun 28, 2026. Golden path closed Jun 29 — demo captures closed Jul 2026. CurXor OS v1.0.3, flagship desks, local inference, COMMAND captive portal, and EGRESS mesh validated on Standard 64.",
  /** Elevated product still — not factory photography. */
  deskStill: {
    src: productStills.a.src,
    alt: productStills.a.alt,
    caption: productStills.honesty,
    width: productStills.a.width,
    height: productStills.a.height,
  },
  /** Close etch still — LinkedIn / brochure flip source. */
  brochureStill: {
    src: productStills.d.src,
    alt: productStills.d.alt,
    caption: productStills.honesty,
    width: productStills.d.width,
    height: productStills.d.height,
  },

  computeBenchNote:
    "126 TOPS local NPU — ROCm inference validated on Standard 64 (moondream:1.8b, qwen3:8b); published mesh benchmarks pending",
  telemetryNote:
    "Telemetry broker live on the local mesh — dual-port topology verified on box; published latency numbers pending",
  doneOnBox: {
    eyebrow: "DONE ON BOX",
    items: [
      "Ubuntu 24.04 install · UMA 48 GB · CurXor OS v1.0.3 on MS-S1 MAX Standard 64",
      "Ollama ROCm live — moondream:1.8b + qwen3:8b (Standard 64 stack)",
      "Flagship desks complete — Capital, Creator, Work · Flight Command live on bare metal",
      "eno1/eno2 cabling — COMMAND captive portal + EGRESS mesh on verified ports",
      "Unbox verification passed",
      "Operator walkthrough passed",
      "Telemetry broker active on the local mesh",
    ],
  },
  g1Closed: {
    eyebrow: "GOLDEN PATH",
    items: [
      "Golden path complete — closed Jun 29, 2026",
      "Dual-port topology verified on MS-S1 MAX hardware",
      "COMMAND captive portal + EGRESS mesh live on box",
    ],
  },
  afterG1: {
    eyebrow: "NEXT UP",
    items: [
      "More design-partner sessions — feedback stays private; not closed traction",
      "Published mesh latency benchmarks — not marketing guesses",
      "Production customer-fleet OTA when ready",
    ],
  },
  opsWave1: {
    eyebrow: "PRIORITY BRIDGES",
    items: [
      "Priority bridges green on MS-S1 — Google · Alpaca paper · Bluesky · Telegram · Discord · X (quota-sensitive FinTwit)",
      "Seven bridges proven Jul 9 on the founder MS-S1 — not a customer fleet · Capital stays paper",
      "Design partners have completed remote golden-path sessions on the founder MS-S1 (creator and trader desks) — private feedback only",
      "Live brokerage fills and autonomous publish fleets are not claimed",
    ],
  },
} as const;

export const architectureContent = {
  eyebrow: "SOVEREIGN STACK",
  title: "Four Pillars. Two Ports. Zero Cloud Rent.",
  lead:
    "CurXor OS is an edge appliance stack: local inference, agent engine with workspace memory and messaging gateways, ZeroMQ telemetry mesh, and Flight Command UI — outbound trades and posts isolated on eno2.",
  pillars: [
    {
      id: "compute",
      number: "01",
      name: "Compute",
      path: "pillar-1-compute/",
      role: "ROCm Docker inference — Ollama and vLLM on localhost. Cloud URLs rejected at startup.",
      detail: "64GB UMA runs open-weight models sized for each tier profile — CurXor OS evolves with the frontier on metal you own.",
    },
    {
      id: "engine",
      number: "02",
      name: "Engine",
      path: "pillar-2-engine/",
      role: "OpenClaw agent loop — workspace memory, skills, heartbeat scheduler, and channel gateway.",
      detail: "Capital, Creator, Outreach, and Forge crewmates execute via dedicated bridges. Crew Cafe tracks cross-crew growth from real operator events. Dashboard chat and Telegram, Slack, WhatsApp, or iMessage share one router synced to crew context — you configure which gateways to enable.",
    },
    {
      id: "telemetry",
      number: "03",
      name: "Telemetry",
      path: "pillar-3-telemetry/",
      role: "ZeroMQ XSUB/XPUB mesh broker for vision, motor, and swarm signals.",
      detail: hardwareValidation.telemetryNote,
    },
    {
      id: "dashboard",
      number: "04",
      name: "Flight Command",
      path: "pillar-4-dashboard/",
      role: "Next.js operator UI — Home hub, unified inbox, crewmate workspaces, chat, and skill buttons.",
      detail: "Settings controls your desk crew, intelligence, appearance, messaging gateways, and agent runtime — wearables and health apps connect via OAuth you authorize, not a fixed vendor list.",
    },
  ],
  ports: [
    {
      id: "eno1",
      name: "eno1 · Command Port",
      body: "User LAN (10.0.0.1). Flight Command UI, captive portal, and local operator access. Firewalled from the public internet.",
    },
    {
      id: "eno2",
      name: "eno2 · Egress Port",
      body: "Outbound bridge lane for agent actions — Alpaca trades, X posts, CRM webhooks, browser automation. Unplug eno2 to kill every outbound crewmate instantly while local inference keeps running.",
    },
  ],
  bridges: [
    "Capital trade path → Alpaca paper/live via bridge on eno2",
    "Creator publish path → X, LinkedIn, Meta, YouTube, TikTok, and more via bridges on eno2",
    "Channel router → Telegram, Slack, WhatsApp, iMessage — local inference, crew-context inbox sync",
    "Your LLM never talks to the internet — dedicated bridges and gateways handle egress",
  ],
  principles: [
    "Sovereign edge — inference and agent control stay on localhost",
    "Network isolation — eno1 (operators) and eno2 (egress) are separate concerns",
    "User-configured integrations — crewmates and channels you enable, not a preset vendor bundle",
    "OTA golden image — flash once, iterate locally, rollback on failure",
    "Open-weight tier profiles — Standard, Pro 128, and Studio each run the best models their memory allows; update the stack without rebuying the story",
  ],
} as const;
