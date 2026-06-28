/** MS-S1 unbox day + G1 gate — shared by ValidationBadge and /architecture#validation. */
export const hardwareValidation = {
  unboxDate: "2026-06-28",
  badgeAriaLabel: "curXor — MS-S1 unboxed · G1 golden path in progress",
  badgeSummary:
    "MS-S1 MAX unboxed Jun 28, 2026. CurXor OS 0.9.1, FRE, and local inference validated on Standard 64. G1 golden path open — eno mesh, verify script, and published benchmarks after G1 closes.",
  computeBenchNote:
    "126 TOPS local NPU — ROCm inference validated on Standard 64; mesh benchmarks pending eno2 wiring (G1)",
  telemetryNote:
    "Low-latency local mesh — eno2 wiring and benchmarks pending G1 close (not validated on box yet)",
  doneOnBox: {
    eyebrow: "DONE ON BOX",
    items: [
      "Ubuntu 24.04 install · UMA 48 GB · CurXor OS 0.9.1 on MS-S1 MAX Standard 64",
      "Ollama ROCm live — moondream:1.8b + qwen3:8b (Standard 64 stack)",
      "FRE complete — Capital, Creator, Work · Flight Command live on bare metal",
    ],
  },
  g1InProgress: {
    eyebrow: "G1 IN PROGRESS",
    items: [
      "eno1/eno2 cabling + captive portal / mesh scripts",
      "verify-unbox-day.sh --post-models",
      "Full flagship smoke test + on-box qa confirmation",
    ],
  },
  afterG1: {
    eyebrow: "AFTER G1 / G2",
    items: [
      "Published mesh latency benchmarks — not marketing guesses",
      "Factory USB + production OTA artifact (pre-v1.0.0 today)",
      "Storefront demo re-capture from box IP (G3)",
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
      detail: "Capital, Creator, Outreach, and Forge Claws execute via dedicated bridges. Claw Cafe tracks cross-Claw growth from real operator events. Dashboard chat and Telegram, Slack, WhatsApp, or iMessage share one router synced to CCP — you configure which gateways to enable.",
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
      role: "Next.js operator UI — Home hub, unified inbox, Claw workspaces, chat, and skill buttons.",
      detail: "Settings controls Claws, intelligence, appearance, messaging gateways, and agent runtime — wearables and health apps connect via OAuth you authorize, not a fixed vendor list.",
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
      body: "Outbound bridge lane for agent actions — Alpaca trades, X posts, CRM webhooks, browser automation. Unplug eno2 to kill every outbound Claw instantly while local inference keeps running.",
    },
  ],
  bridges: [
    "capital.execute_trade → Alpaca paper/live via Python bridge on eno2",
    "content.publish_post → X, LinkedIn, Meta, YouTube, TikTok, and more via Python bridges on eno2",
    "Channel router → Telegram, Slack, WhatsApp, iMessage — local inference, CCP inbox sync",
    "Your LLM never talks to the internet — dedicated bridges and gateways handle egress",
  ],
  principles: [
    "Sovereign edge — inference and agent control stay on localhost",
    "Network isolation — eno1 (operators) and eno2 (egress) are separate concerns",
    "User-configured integrations — Claws and channels you enable, not a preset vendor bundle",
    "OTA golden image — flash once, iterate locally, rollback on failure",
    "Open-weight tier profiles — Standard, Pro 128, and Studio each run the best models their memory allows; update the stack without rebuying the story",
  ],
} as const;
