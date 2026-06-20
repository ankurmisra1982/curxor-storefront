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

From `src/lib/config.ts` (7 apps): `my-work`, `my-shop`, `optimus`, `robotaxi`, `claw-cafe`, `invest-agent`, `content-creator`

Appliance FRE IDs: see `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` — [SYNC.md](SYNC.md)

## Appliance ports & paths

| Service | Port / path |
|---------|-------------|
| Dashboard | `:3080` |
| Ollama | `127.0.0.1:11434` |
| vLLM | `127.0.0.1:8000/v1` |
| Install root | `/opt/curxor/` |
| One-command install | `sudo /opt/curxor/scripts/install-all.sh` |

Full mesh/digital table: [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md)

## Digital tools (appliance engine)

- `capital.execute_trade` → Alpaca paper (bridge)
- `content.publish_post` → X API (bridge)

## Version

Appliance: **0.1.0** (`../curxor-os/version.json`)  
Storefront: **0.1.0** (`package.json`)

## Screenshots (when hardware arrives)

Capture from appliance `:3080` for storefront — list in prior audit; until then 3D hero + Flight Command mockups.
