import { clawRosterLabel, productIdentity, siteConfig } from "@/lib/config";

export type CompareRow = {
  label: string;
  them: string;
  curxor: string;
};

export type ComparePage = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  themLabel: string;
  positioning: string;
  whoShouldBuyThem: string;
  whoShouldBuyCurxor: string;
  rows: CompareRow[];
};

export const comparePages: ComparePage[] = [
  {
    slug: "clawbox",
    title: "CurXor vs ClawBox",
    metaDescription:
      `Compare ${productIdentity.boxName} (64GB UMA, 126 TOPS, ten Claws) with ClawBox (€549 Jetson assistant, 8GB, messaging bots).`,
    eyebrow: "COMPARE · LIGHT ASSISTANT",
    headline: "ClawBox is a desk assistant. CurXor is an employee appliance.",
    lead: "ClawBox (~€549) is an excellent always-on OpenClaw box for Telegram, WhatsApp, and light automations. CurXor targets a different buyer: 64GB local inference, wealth/work/life Claws, and dual-port egress control.",
    themLabel: "ClawBox",
    positioning:
      "ClawBox wins on price and 5-minute setup for messaging-first assistants. CurXor wins when you need large local models, Capital/Creator/Outreach verticals, and a physical eno2 kill switch.",
    whoShouldBuyThem:
      "Buy ClawBox if you want a €549 always-on messaging bot, browser automations, and optional frontier tiers — not 70B-class local models or trading bridges.",
    whoShouldBuyCurxor:
      "Buy CurXor if you are an operator, creator, or agency running digital employees on serious silicon with Flight Command and eno2-isolated egress.",
    rows: [
      { label: "Price", them: "~€549 one-time (+ optional €9–49/mo)", curxor: `${siteConfig.preOrderPrice} once · $0 CurXor API fees` },
      { label: "Memory / AI", them: "8GB · 67 TOPS Jetson", curxor: "64GB UMA · 126 TOPS Ryzen AI Max+ 395" },
      { label: "OOTB verticals", them: "OpenClaw assistant · messaging", curxor: clawRosterLabel },
      { label: "Wealth / Creator", them: "General automation", curxor: "Capital Claw · Creator Claw · Outreach Claw" },
      { label: "Network kill switch", them: "Software-only", curxor: "Unplug eno2 → stop outbound agents" },
      { label: "Setup story", them: "~5 minutes · ships configured", curxor: "Flight Command day one · bridges need your credentials" },
    ],
  },
  {
    slug: "perplexity-personal-computer",
    title: "CurXor vs Perplexity Personal Computer",
    metaDescription:
      "Compare CurXor sovereign appliance ($3,999 once) with Perplexity Personal Computer ($20–200/mo + your Mac).",
    eyebrow: "COMPARE · CLOUD ORCHESTRATION",
    headline: "Perplexity rents orchestration. CurXor bills once.",
    lead: "Perplexity Personal Computer turns your Mac into an always-on agent host — with frontier models orchestrated through Perplexity's cloud. CurXor is dedicated appliance hardware with local inference by default.",
    themLabel: "Perplexity PC",
    positioning:
      "Perplexity wins if you already live in Apple's ecosystem and want cross-app Mac automation with a familiar subscription. CurXor wins when you want prompts, playbooks, and bridges on your metal — not a recurring orchestration bill.",
    whoShouldBuyThem:
      "Choose Perplexity if you want Mac-native file and app control, iPhone-initiated tasks, and are fine with $20–200/mo plus cloud routing for heavy workflows.",
    whoShouldBuyCurxor:
      "Choose CurXor if you want turnkey Claws, 64GB local models, eno2 egress isolation, and zero CurXor subscription fees.",
    rows: [
      { label: "Hardware", them: "Your Mac / Mac mini (~$499+)", curxor: `${productIdentity.boxName} included` },
      { label: "Subscription", them: "$20/mo Pro · $200/mo Max tier", curxor: "$0/mo CurXor fees" },
      { label: "Inference default", them: "Cloud-orchestrated frontier models", curxor: "Local LLM on 64GB UMA" },
      { label: "Wealth / trading", them: "General automation", curxor: "Capital Claw · Alpaca bridge on eno2" },
      { label: "Creator pipeline", them: "General Mac workflows", curxor: "Creator Claw · multi-platform publish bridges" },
      { label: "Kill switch", them: "Software kill switch", curxor: "Physical eno2 unplug + local-only mode" },
    ],
  },
  {
    slug: "miky",
    title: "CurXor vs MIKY",
    metaDescription:
      "Compare CurXor (64GB UMA, ten Claws, Flight Command) with MIKY independent computer for agents (~€490).",
    eyebrow: "COMPARE · INDEPENDENT COMPUTER",
    headline: "Same category. Different compute class.",
    lead: "MIKY and CurXor both sell an independent computer for AI agents — not a human-first PC. MIKY emphasizes mobile app control and secure-element trust at ~€490. CurXor adds 64GB UMA, dual 10GbE, and ten OOTB Claws.",
    themLabel: "MIKY",
    positioning:
      "MIKY wins on category branding, fanless trust-node narrative, and lower reservation price. CurXor wins on memory, NPU class, wealth/work verticals, and Flight Command depth.",
    whoShouldBuyThem:
      "Reserve MIKY if you want a screenless trust node, app-controlled agents, and general independence at a lower price point — with compute suited to lighter workloads.",
    whoShouldBuyCurxor:
      "Pre-order CurXor if you need 64GB local models, Capital/Creator/Outreach Claws, messaging gateways, and eno1/eno2 networking on day one.",
    rows: [
      { label: "Price", them: "~€490 (reservation)", curxor: `${siteConfig.preOrderPrice} pre-order` },
      { label: "Memory", them: "8–16GB class", curxor: "64GB LPDDR5X UMA" },
      { label: "Control surface", them: "Miky mobile app", curxor: "Flight Command + phone gateways" },
      { label: "OOTB Claws", them: "General agent host", curxor: clawRosterLabel },
      { label: "Networking", them: "Wi-Fi · USB-C power", curxor: "Dual 10GbE · eno2 egress kill switch" },
      { label: "Security story", them: "Secure element · no data ports", curxor: "Local inference · eno2-isolated bridges" },
    ],
  },
  {
    slug: "mac-studio-ollama",
    title: "CurXor vs Mac Studio + Ollama",
    metaDescription:
      "Compare turnkey CurXor agent appliance with DIY Mac Studio or Mac mini plus Ollama integration work.",
    eyebrow: "COMPARE · DIY INFERENCE",
    headline: "Mac Studio gives you inference. CurXor gives you employees.",
    lead: "A Mac Studio with Ollama is excellent inference hardware — if you enjoy building the agent stack yourself. CurXor bundles CurXor OS, Flight Command, Claws, bridges, and OTA on MS-S1 MAX class silicon.",
    themLabel: "Mac Studio + Ollama",
    positioning:
      "Mac wins on ecosystem, resale, and Apple's polish for general computing. CurXor wins when you want agent verticals, eno2 kill switch, and messaging gateways without weeks of integration.",
    whoShouldBuyThem:
      "Buy Mac + Ollama if you already own the hardware, prefer macOS, and want to DIY agents, skills, and security yourself.",
    whoShouldBuyCurxor:
      "Buy CurXor if you want a turnkey independent computer for digital employees — OpenClaw engine under the hood, Flight Command on day one.",
    rows: [
      { label: "Total entry", them: "~$3,500+ Mac + your time", curxor: `${siteConfig.preOrderPrice} appliance + OS` },
      { label: "Agent platform", them: "DIY — you wire skills & bridges", curxor: `${clawRosterLabel} OOTB` },
      { label: "Egress control", them: "Software firewall / VPN", curxor: "Dedicated eno2 egress port" },
      { label: "Messaging gateways", them: "Integrate yourself", curxor: "Telegram · Slack · WhatsApp · iMessage" },
      { label: "Wealth / Creator", them: "Build or buy separately", curxor: "Capital · Creator · Outreach Claws" },
      { label: "Time to first Claw", them: "Days to weeks", curxor: "Same session · Settings → enable Claws" },
    ],
  },
  {
    slug: "nemoclaw",
    title: "CurXor vs NVIDIA NemoClaw",
    metaDescription:
      "NemoClaw hardens DIY OpenClaw deployments. CurXor ships the turnkey appliance product with Flight Command and Claws.",
    eyebrow: "COMPARE · GOVERNANCE STACK",
    headline: "NemoClaw secures DIY OpenClaw. CurXor ships the product.",
    lead: "NVIDIA NemoClaw is an open-source reference stack — OpenShell sandboxes, YAML policies, and governed egress for teams rolling their own OpenClaw. CurXor is the appliance: hardware, CurXor OS, Flight Command, and OOTB Claws.",
    themLabel: "NemoClaw",
    positioning:
      "NemoClaw wins for enterprises hardening bespoke agent deployments on hardware they already operate. CurXor wins for buyers who want a complete sovereign employee appliance without assembling the stack.",
    whoShouldBuyThem:
      "Use NemoClaw if you have integrators, existing NVIDIA/DGX infrastructure, and need OpenShell policy sandboxes on your own images.",
    whoShouldBuyCurxor:
      "Pre-order CurXor if you want eno2 physical egress isolation, Flight Command, and wealth/work/life Claws on day one — not a weekend integrator project.",
    rows: [
      { label: "What you buy", them: "Open-source governance stack", curxor: "Hardware + CurXor OS + Claws" },
      { label: "Target buyer", them: "Platform / security teams", curxor: "Operators · creators · agencies" },
      { label: "UI", them: "Bring your own", curxor: "Flight Command dashboard" },
      { label: "Egress model", them: "OpenShell YAML policies", curxor: "eno2 bridges + Settings" },
      { label: "Claw verticals", them: "Configure yourself", curxor: clawRosterLabel },
      { label: "Integration time", them: "Days to weeks per deployment", curxor: "Turnkey pre-order appliance" },
    ],
  },
];

export function getComparePage(slug: string): ComparePage | undefined {
  return comparePages.find((page) => page.slug === slug);
}
