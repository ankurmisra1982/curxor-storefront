# Technical Handoff — Marketing Accuracy Sheet

Copy-paste facts for storefront, datasheets, and pitch decks. **Source of truth:** `../curxor-os/` (version, appliance behavior) + `src/lib/config.ts` + `src/lib/generated/appliance-sync.ts` (synced storefront surface).

Last refreshed: July 1, 2026 · Appliance **0.9.1** · **G1 closed** (Jun 29 verify + smile PASS; captive portal + mesh on box) — [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md)

---

## Storefront (this repo)

| Item | Value |
|------|-------|
| Site URL | `https://curxor.ai` (`siteConfig.siteUrl`) |
| X / Twitter | `@curxorai` |
| Contact | `hello@curxor.ai` (`siteConfig.contactEmail`) |
| **Primary CTA** | Subscribe / waitlist — `POST /api/subscribe` (Resend) |
| **Secondary CTA** | Stripe pre-order — URL in `siteConfig.stripeCheckoutUrl` |
| Stack | Next.js 15, Tailwind, R3F hardware scene |
| Storefront package semver | **0.1.0** (`package.json`) — marketing site only; not appliance OTA version |

### GTM surface (live)

| Surface | Purpose |
|---------|---------|
| `/` | Category hero — **“Mint autonomous employees on bare metal.”** (CEO lock — do not change `siteConfig.heroHeadline`) |
| `/pricing` | Standard 64 flagship ($3,999) + compute ladder; Pro 128 parked until SKU ships |
| `/signal` | Signal Claw · **The Neural Link** — device-class horizon (glance, VR, robot, fleet, home, ambient); preview honesty; subscribe-first CTAs |
| `/capital` · `/creator` · `/outreach` | Flagship Claw landing pages |
| `/architecture` | Four pillars + eno1/eno2 + validation badge (G1 closed on MS-S1; mesh benchmarks pending) |
| Personas | `/for/traders` · `/for/creators` · `/for/agencies` |
| Compare hub | `/compare/*` competitor pages |

**Subscribe flow:** `POST /api/subscribe` → Resend (`src/lib/email.ts`). Requires `RESEND_API_KEY` (+ segment/from env) on Vercel Production.

**Pre-order flow:** `siteConfig.stripeCheckoutUrl` — default `https://buy.stripe.com/00w4gzb5U6gKc6igCZabK00` (override via `NEXT_PUBLIC_STRIPE_CHECKOUT_URL`).

**Parked GTM (document only — not live pages):**

| Program | Storefront home when it ships | Copy source |
|---------|------------------------------|-------------|
| **CurXor Pro 128** ($4,999) | `/pricing` only — not hero | `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` |
| **Patron Link** (mobile PWA on appliance `/m`) | `/signal` device-class card (`patron_mobile`) — not App Store, not hero | `../curxor-os/docs/curxor-os/MOBILE-PATRON-LINK.md` |
| **Loop homepage section** (IDEA-G11) | Cross-link only at G3 — do not build in this wave | [LOOP-POSITIONING.md](LOOP-POSITIONING.md) |

See [GTM-CHECKLIST.md](GTM-CHECKLIST.md) for roadmap rows and ops checklist.

---

## Product identity

Canonical naming — full table in [SYNC.md](SYNC.md).

| Token | Usage |
|-------|-------|
| **curXor** | Chassis / box name (`productIdentity.boxName`) — badge on production MS-S1 |
| **CurXor** | Brand, storefront wordmark (`siteConfig.name`) |
| **CurXor Systems** | Company (`productIdentity.companyName`) |
| **CurXor OS** | Appliance software stack (`productIdentity.osName`) |
| **Flight Command** / **Flight Command Desktop** | Pillar 4 dashboard UI on device (`:3080`) |
| **Master Claw** | Sidebar agent shell + FRE wizard (appliance) |

**Hero (locked):** *Mint autonomous employees on bare metal.* — `siteConfig.heroHeadline`

**Evolution tease (site-safe):** abstract only — *ascends with you* / grows on your metal. **Do not** use Sprout→Infinity tier names in marketing copy.

---

## Hardware SKUs

| Tier | Price | RAM | GTM status |
|------|-------|-----|------------|
| **CurXor Standard 64** (flagship) | **$3,999** once · $0/mo CurXor API | 64 GB LPDDR5X UMA | Live — hero, pre-order, all primary GTM |
| **CurXor Pro 128** | **$4,999** once (roadmap) | 128 GB LPDDR5X UMA (factory SKU) | **Parked** — `/pricing` only when SKU + ROCm validated; see cheat sheet |

**Platform (both SKUs):**

- **MINISFORUM MS-S1 MAX**
- AMD Ryzen AI Max+ **395**
- **126 TOPS NPU** (verify on MINISFORUM datasheet before paid ads)
- ROCm **gfx1151** (Radeon 8060S)
- Dual **10GbE** — eno1 Command · eno2 Egress

Pro 128 operator path: `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` (BIOS ~96 GB UMA heap, `compute.env` profile). **No 70B-class hard claims until bench green.**

---

## Spec matrix (matches `src/lib/config.ts`)

**COMPUTE:** Ryzen AI Max+ 395 · 64GB UMA · 126 TOPS NPU  
**SPINE:** Dual 10GbE · local mesh telemetry · offline-sovereign  
**OS:** CurXor OS · captive portal · OpenClaw-style agent runtime

Use *“low-latency local mesh; benchmarks pending”* — not “sub-millisecond ZeroMQ” until published on-box numbers land. G1 golden path closed Jun 29; topology verified on MS-S1 — latency marketing waits on benchmark publication.

---

## OOTB apps — marketing IDs

Nine Claw verticals + The Forge — synced from `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` into `src/lib/generated/appliance-sync.ts` via `npm run sync:appliance`:

| Storefront slug | Appliance ID | Display name | GTM tier |
|-----------------|--------------|--------------|----------|
| `claw-forge` | `claw-forge` | The Forge | Forge |
| `capital-claw` | `my-capital` | Capital Claw | Flagship |
| `creator-claw` | `my-content-creator` | Creator Claw | Flagship |
| `outreach-claw` | `my-work` | Outreach Claw | Flagship |
| `arbitrage-claw` | `my-shop` | Arbitrage Claw | Preview |
| `signal-claw` | `tesla-optimus-engine` | Signal Claw | Preview |
| `swarm-claw` | `robotaxi-fleet-manager` | Swarm Claw | Preview |
| `engage-claw` | `claw-cafe` | Engage Claw | Cafe |
| `vital-claw` | `my-vital` | Vital Claw | Preview |
| `kin-claw` | `my-family` | Kin Claw | Preview |

Full naming table + sync rules: [SYNC.md](SYNC.md)

### Engage Claw vs Claw Cafe

| Layer | Name |
|-------|------|
| Storefront + Flight Command nav | **Engage Claw** (slug `engage-claw`) |
| Appliance ID + route | `claw-cafe` → `/claw-cafe` |
| Growth / ascension subsystem (pixel room, XP, G-tiers) | **Claw Cafe** (appliance UI — e.g. pixel room aria-label) |

Marketing line: *Engage Claw* for the desk module; *Claw Cafe* for the living mirror / ascension layer inside it. Do not conflate with a separate product SKU.

---

## `/signal` page facts

Source: `src/lib/signal-page.ts` · `src/app/signal/page.tsx`

| Item | Copy / fact |
|------|-------------|
| Hub name | **The Neural Link** (avoids Signal messenger collision) |
| Positioning | Humanoid preview today; every AI device class on sovereign metal tomorrow |
| Device classes | Glance · VR · Robot (SIG0 preview) · Vehicle · Home · Ambient |
| Honesty | No live robot motion or device pairing beyond preview; registry slots = Coming Soon |
| CTA | Subscribe-first (`SubscribeFirstCtas`) — pre-order secondary |
| **Patron Link (parked)** | Future `patron_mobile` card on this page — PWA on appliance `/m`, LAN pair, sovereign tokens; **not** App Store day one |

---

## First-boot honesty

CurXor OS is a **real install session**, not sealed plug-and-play:

- Ubuntu 24.04 + `install-all.sh` + BIOS UMA carve-out + model pull
- **~2–4 hours** for operator first-boot session (hardware + install + verify) — see `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` § Fine print and `../curxor-os/docs/curxor-os/HW-READINESS-CHECKLIST.md`
- Model pull (`deploy.sh --pull-models`) can add **30+ minutes** on first boot
- **Do not** claim “works in 5 minutes” or iPhone-style OOTB

Install root: `/opt/curxor/` · One-command: `sudo /opt/curxor/scripts/install-all.sh`

---

## Appliance ports & paths

| Service | Port / path |
|---------|-------------|
| Flight Command dashboard | `:3080` |
| Ollama | `127.0.0.1:11434` |
| vLLM | `127.0.0.1:8000/v1` |
| Install root | `/opt/curxor/` |

Full mesh/digital table: [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md)

---

## Flight Command Settings (`/settings`)

| Tab | Capability |
|-----|------------|
| Claws | Enable/disable OOTB modules (Forge always on) |
| Intelligence | `local` / `frontier` / `auto`; Ollama model; OpenAI (OAuth PKCE or API key), Anthropic, Google (OAuth when configured), Cursor, OpenRouter, Sakana Fugu |
| Appearance | Simple/Expert, light/dark/system, accent schemes (CurXor, Ocean, Amber, Mono) |
| Agent runtime | Workspace memory, skills, heartbeat scheduler, MCP servers |
| Build Plane | Remote worker wizard, delegation queue (BP4 @ 0.9.1), MCP event bus |
| Channels | Telegram, Slack, WhatsApp, iMessage gateways — unified inbox on Home |

Persistence: `/etc/curxor/user-settings.json`, `/etc/curxor/llm-credentials.json` (0600), `/etc/curxor/provider-link-sessions.json`, `/etc/curxor/channels/`.

OAuth: OpenAI uses PKCE (Codex-compatible public client). Google OAuth optional via `CURXOR_GOOGLE_OAUTH_CLIENT_ID`. Tokens stored on-appliance with refresh support.

---

## Claw Context Protocol

| Topic | Detail |
|-------|--------|
| Mesh topic | `telemetry/claw_context` |
| Vital Claw | `/my-vital` — wearables, labs, longevity protocol (user-configured OAuth) |
| Kin Claw | `/my-family` — household profiles, devices, personalities, channel handles |
| Signal Claw | Subscribes to personal, health, work, family, hardware scopes |

Persistence: `/etc/curxor/claw-context.json`, `/etc/curxor/family-profiles.json`, `/etc/curxor/vital-health.json`, `/etc/curxor/ccp-consent.json`

Guide: `../curxor-os/docs/guides/15-claw-context-protocol.md`

---

## Agent runtime (CurXor OS 0.9.1)

OpenClaw-inspired patterns on sovereign metal — guide: `../curxor-os/docs/guides/18-agent-runtime.md`

| Topic | Detail |
|-------|--------|
| Workspace | SOUL / USER / MEMORY / HEARTBEAT per Claw under `/etc/curxor/agent-workspace/` |
| Skills | `agent-workspace/{appId}/skills/*.md` (agentskills.io pattern) |
| Channels | Telegram, Slack, WhatsApp, iMessage, dashboard webchat → one router → CCP `work/inbox.*` |
| Scheduler | Heartbeat daemon + cron (`curxor-scheduler.service`) |
| MCP | Live JSON-RPC tool protocol + egress allowlist |
| Browser automation | Headless fetch + Playwright on eno2 (user-configured) |
| Build Plane | Delegation queue, worker wizard, Cafe Master AI suggest gate (0.9.1) |
| Wearables bridge | Garmin OAuth PKCE, Oura PAT, Apple Health export path |

Persistence: `/etc/curxor/channels/`, `/etc/curxor/agent-workspace/`, `/etc/curxor/scheduler/jobs.json`

Safe marketing line: *“Message your Claws from phone or desktop — every reply stays local, egress only through eno2.”*

---

## Digital tools (appliance engine)

- `capital.execute_trade` → Alpaca paper (bridge on eno2)
- `content.publish_post` → X API (bridge on eno2)

Default: local inference; trades and posts egress only through eno2 bridges when you arm Go Live + credentials.

Details: `../curxor-os/docs/guides/12-digital-action-layer.md`

---

## QA / validation posture

**curxor-os** pillar-4-dashboard local QA (`npm run qa:local`):

| Suite | Count (0.9.1 scripts) |
|-------|----------------------|
| Smoke (`qa-smoke.mjs`) | **184** API checks |
| User flows (`qa-user-flows.mjs`) | **40** end-to-end flows |

**Hardware validation:** G1 golden path **closed** Jun 29 on MS-S1 Standard 64 — FRE, ROCm inference, captive portal, and EGRESS mesh verified on box. **Published mesh latency benchmarks** still pending; storefront badge reflects G1 complete, not sub-ms claims.

**Storefront:** `npm run qa` = lint + build.

---

## Version

| Artifact | Version | Source |
|----------|---------|--------|
| **Appliance (CurXor OS)** | **0.9.1** stable | `../curxor-os/version.json` → `appliance-sync.ts` |
| **Storefront package** | **0.1.0** | `package.json` (marketing semver — independent of OTA) |
| **Last sync** | See `applianceSyncedAt` in `appliance-sync.ts` | `npm run sync:appliance` |

When appliance bumps: run `npm run sync:appliance`, refresh this doc, update changelog via sync.

0.9.1 highlights: Build Plane BP4 delegation queue UI; Cafe Master AI chamber suggest with confirm gate.

---

## Screenshots / demo pack

| Asset | Status |
|-------|--------|
| Capture script | `../curxor-os/pillar-4-dashboard/scripts/capture-demo-screenshots.mjs` → `docs/demo-pack/screenshots/` |
| Storefront `public/demo/` | Home through Creator + creator flows — **dev captures** |
| `public/demo/cafe/` | **Wave A** — dev Flight Command UI; **not MS-S1 verified** |
| Product photography / MS-S1 box-IP captures | **G3 pending** — G1 closed on box; re-capture `public/demo/` from `10.0.0.1:3080` before claiming production screenshots |
| Next Interface film (GTM-FILM) | Program scoped — G2/G4 gates in `../curxor-os/docs/curxor-os/FUTURE-ROADMAP.md` |

Copy captured assets to storefront `public/demo/` for GTM. Label dev captures honestly in decks.

---

## Cross-links

| Doc | Use |
|-----|-----|
| [SYNC.md](SYNC.md) | App naming, sync workflow, copy guardrails |
| [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md) | Maturity matrix, mock/stub honesty, architecture |
| [LOOP-POSITIONING.md](LOOP-POSITIONING.md) | Three-loop narrative · hero A/B at G3 · comparison blocks |
| [PRODUCT-POSITIONING.md](PRODUCT-POSITIONING.md) | Category · personas · differentiators |
| [GTM-CHECKLIST.md](GTM-CHECKLIST.md) | Shipped vs roadmap · Pro 128 · Patron Link rows |
| `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` | Pro 128 operator + storefront copy block |
| `../curxor-os/docs/curxor-os/MOBILE-PATRON-LINK.md` | Patron Link vision · pairing · API sketch |
| `../curxor-os/docs/guides/18-agent-runtime.md` | Agent workspace, channels, scheduler |
| `../curxor-os/docs/guides/01-installation.md` | Install paths · first-boot service |
