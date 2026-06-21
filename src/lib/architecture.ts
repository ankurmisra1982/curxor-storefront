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
      detail: "64GB UMA runs massive models without sending prompts to OpenAI.",
    },
    {
      id: "engine",
      number: "02",
      name: "Engine",
      path: "pillar-2-engine/",
      role: "OpenClaw agent loop — workspace memory, skills, heartbeat scheduler, and channel gateway.",
      detail: "Capital, Creator, Outreach, and Forge Claws execute via dedicated bridges. Dashboard chat and Telegram, Slack, WhatsApp, or iMessage share one router synced to CCP — you configure which gateways to enable.",
    },
    {
      id: "telemetry",
      number: "03",
      name: "Telemetry",
      path: "pillar-3-telemetry/",
      role: "ZeroMQ XSUB/XPUB mesh broker for vision, motor, and swarm signals.",
      detail: "Low-latency local mesh — benchmark numbers pending MS-S1 MAX validation.",
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
    "content.publish_post → X API via Python bridge on eno2",
    "Channel router → Telegram, Slack, WhatsApp, iMessage — local inference, CCP inbox sync",
    "Your LLM never talks to the internet — dedicated bridges and gateways handle egress",
  ],
  principles: [
    "Sovereign edge — inference and agent control stay on localhost",
    "Network isolation — eno1 (operators) and eno2 (egress) are separate concerns",
    "User-configured integrations — Claws and channels you enable, not a preset vendor bundle",
    "OTA golden image — flash once, iterate locally, rollback on failure",
  ],
} as const;
