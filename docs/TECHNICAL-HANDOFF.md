# Technical Handoff — Marketing Accuracy Sheet

Copy-paste facts for storefront, datasheets, and pitch decks. Source of truth: `../curxor-os/`.

## Storefront (this repo)

| Item | Value |
|------|-------|
| Site URL | `https://curxor.ai` (config) |
| X / Twitter | `@curxorai` |
| Pre-order | Stripe checkout URL in `src/lib/config.ts` |
| Email capture | `POST /api/subscribe` (Resend) |
| Stack | Next.js 15, Tailwind, R3F hardware scene |

## Product name

- **CurXor OS** — software stack (appliance)
- **CurXor** — brand / storefront
- **Flight Command Desktop** — Pillar 4 UI on device
- **Master Claw** — sidebar agent + wizard

## Hardware SKU

- **MINISFORUM MS-S1 MAX**
- AMD Ryzen AI Max+ **395**
- **64 GB** LPDDR5X **UMA**
- **126 TOPS NPU** (verify on datasheet before paid ads)
- ROCm **gfx1151**
- Dual **10GbE**

## Spec matrix (matches `src/lib/config.ts`)

**COMPUTE:** Ryzen AI Max+ 395 · 64GB UMA · 126 TOPS NPU  
**SPINE:** Dual 10GbE · ZeroMQ telemetry · Offline-sovereign  
**OS:** CurXor OS · Next.js captive portal · OpenClaw engine

## OOTB apps — marketing IDs

Ten Claw workspaces (9 verticals + The Forge) synced from `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` into `src/lib/generated/appliance-sync.ts`:

| Storefront slug | Appliance ID | Display name |
|-----------------|--------------|--------------|
| `claw-forge` | `claw-forge` | The Forge |
| `capital-claw` | `my-capital` | Capital Claw |
| `creator-claw` | `my-content-creator` | Creator Claw |
| `outreach-claw` | `my-work` | Outreach Claw |
| `arbitrage-claw` | `my-shop` | Arbitrage Claw |
| `signal-claw` | `tesla-optimus-engine` | Signal Claw |
| `swarm-claw` | `robotaxi-fleet-manager` | Swarm Claw |
| `engage-claw` | `claw-cafe` | Engage Claw |
| `vital-claw` | `my-vital` | Vital Claw |
| `kin-claw` | `my-family` | Kin Claw |

Full naming table: [SYNC.md](SYNC.md)

## Appliance ports & paths

| Service | Port / path |
|---------|-------------|
| Dashboard | `:3080` |
| Ollama | `127.0.0.1:11434` |
| vLLM | `127.0.0.1:8000/v1` |
| Install root | `/opt/curxor/` |
| One-command install | `sudo /opt/curxor/scripts/install-all.sh` |

Full mesh/digital table: [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md)

## Flight Command Settings (`/settings`)

| Tab | Capability |
|-----|------------|
| Claws | Enable/disable OOTB modules (Forge always on) |
| Intelligence | `local` / `frontier` / `auto`; Ollama model; OpenAI (OAuth PKCE or API key), Anthropic, Google (OAuth when configured), Cursor, OpenRouter |
| Appearance | Simple/Expert, light/dark/system, accent schemes (CurXor, Ocean, Amber, Mono) |
| Agent runtime | Workspace memory, skills, heartbeat scheduler, MCP servers |
| Channels | Telegram, Slack, WhatsApp, iMessage gateways — unified inbox on Home |

Persistence: `/etc/curxor/user-settings.json`, `/etc/curxor/llm-credentials.json` (0600), `/etc/curxor/provider-link-sessions.json`, `/etc/curxor/channels/`.

OAuth: OpenAI uses PKCE (Codex-compatible public client). Google OAuth optional via `CURXOR_GOOGLE_OAUTH_CLIENT_ID`. Tokens stored on-appliance with refresh support.

## Claw Context Protocol

| Topic | Detail |
|-------|--------|
| Mesh topic | `telemetry/claw_context` |
| Vital Claw | `/my-vital` — wearables, labs, longevity protocol (user-configured OAuth) |
| Kin Claw | `/my-family` — household profiles, devices, personalities, channel handles |
| Optimus | Signal Claw subscribes to personal, health, work, family, hardware scopes |

Persistence: `/etc/curxor/claw-context.json`, `/etc/curxor/family-profiles.json`, `/etc/curxor/vital-health.json`

## Agent runtime (v0.2)

| Topic | Detail |
|-------|--------|
| Workspace | SOUL / USER / MEMORY / HEARTBEAT per Claw under `/etc/curxor/agent-workspace/` |
| Channels | Telegram, Slack, WhatsApp, iMessage → one router → CCP `work/inbox.*` |
| Scheduler | Heartbeat daemon + cron tasks (`curxor-scheduler.service`) |
| Extensibility | MCP tool protocol, browser automation on eno2 — user-configured |

Persistence: `/etc/curxor/channels/`, `/etc/curxor/agent-workspace/`

## Digital tools (appliance engine)

- `capital.execute_trade` → Alpaca paper (bridge)
- `content.publish_post` → X API (bridge)

## Version

Appliance: **0.2.0** (`../curxor-os/version.json`)  
Storefront package: **0.1.0** (`package.json`) — marketing site semver; appliance version from sync

## Screenshots

Capture with `pillar-4-dashboard/scripts/capture-demo-screenshots.mjs` → `docs/demo-pack/screenshots/`. Copy to storefront `public/demo/` for GTM.
