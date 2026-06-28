# CTO Status Report — CurXor OS ↔ Storefront Sync

> **As of:** June 28, 2026  
> **Source:** `../curxor-os/` full inspection (Vision & Strategy room)  
> **Audience:** Storefront GTM, copy, deploy decisions  
> **Appliance version:** `0.9.1` stable (pre-v1.0.0)  
> **Refresh:** After G1 closes or major appliance milestone — mirror updates here when `curxor-os` gate state changes

**Related:** [SYNC.md](SYNC.md) · [GTM-CHECKLIST.md](GTM-CHECKLIST.md) · [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) · `../curxor-os/docs/curxor-os/UNBOX-FIELD-LOG.md`

---

## Headline (storefront-relevant)

**The box is real. G1 is not closed.**

MS-S1 MAX unboxed **2026-06-28**. Ubuntu installed, `install-all.sh` ran, Ollama pulled `moondream:1.8b` + `qwen3:8b`, FRE completed (Capital / Creator / Work), Flight Command live at `http://192.168.86.211:3080` (browser). SSH: **`ssh curxor`**.

**G1 (on-device golden path) is still open:** eno1/eno2 cabling pending, `verify-unbox-day.sh --post-models` not run, full flagship click-through incomplete.

Until G1 closes: **no v1.0.0, no production OTA, no real-hardware hero screenshots on storefront, LinkedIn stays stealth.**

---

## Gate status

| Gate | Meaning | Status | Storefront impact |
|------|---------|--------|-------------------|
| **G0** | Dev `pre-unbox:gate` green | **Green** (last pass Jun 27) | Safe to deploy copy synced to 0.9.1 |
| **G1** | On-device golden path | **In progress** — FRE done; network + verify open | Do **not** claim mesh/captive/telemetry validated |
| **G2** | v1.0.0 + signed OTA | Blocked on G1 | Changelog stays 0.9.1 until tag |
| **G3** | Appliance demo captures | Blocked | Loop homepage (IDEA-G11), trust graphic (G12), real hero photo |
| **G4** | Operator UAT smile | Blocked | Tier C go-live, rebrand, fundraise polish |

---

## What shipped on appliance (0.9.1 — do not oversell gaps)

Software on dev and partially validated on box:

| Area | Shipped | Storefront-safe line |
|------|---------|----------------------|
| 10 Claw routes + Forge | UI + agent runtime | *Ten Claw workspaces + The Forge — enable any combination in Settings* |
| Build Plane BP0–BP4 | Settings overlay, delegation list | *Build Plane overlay for power users* — not hero until G3 `/for-builders` |
| Patron Ask CH0–CH5 | FAB, `/ask`, mobile `/m/ask` | *Ask your patron from desktop or phone on your LAN* — not App Store |
| Claw Cafe C4–C13 | Pixel room, ascension | Dev captures OK; label *Flight Command UI* not *MS-S1 verified* until G3 |
| Mobile Patron Link | `/m` PWA shell | Park on `/signal` card only — see GTM-CHECKLIST |
| Local inference | Ollama ROCm on box | *Local inference on your metal* — validated for 2 models on Standard 64 |
| CI / smoke | 184 smoke + checklists | Internal — not a marketing claim |

**Not shipped / not validated on hardware:**

| Gap | GTM rule |
|-----|----------|
| eno1/eno2 captive + mesh | Do **not** claim sub-ms telemetry or live mesh benchmarks |
| Pillar 3 ZMQ broker on eno2 | *Low-latency local mesh; benchmarks pending* |
| Production OTA URL | Pre-order OK; OTA install readiness separate |
| Tier C live bridges | Honest Coming Soon / preview — see APPLIANCE-AUDIT |
| Real box screenshots in `public/demo/` | Still dev/seed captures — re-capture at G3 (IDEA-A04) |

---

## Hardware session scorecard (2026-06-28)

| Done | Pending |
|------|---------|
| BIOS UMA 48 GB | eno1/eno2 cable + captive/mesh scripts |
| Ubuntu 24.04 · hostname `curxor` | `verify-unbox-day.sh --post-models` |
| `install-all.sh` + model pull | Full flagship smile test |
| FRE green (Capital, Creator, Work) | On-box qa-smoke confirmation |
| Dashboard :3080 live | Appliance screenshot re-capture for storefront |

**Box quick reference:**

| Field | Value |
|-------|--------|
| Hostname | `curxor` |
| LAN IP | `192.168.86.211` (router DHCP; update `HostName` in `~/.ssh/config` if it changes) |
| SSH | **`ssh curxor`** (founder laptop) |
| SKU | Standard 64 GB · UMA 48 GB |
| Inference | Ollama ROCm · `moondream:1.8b` · `qwen3:8b` |

Install used USB LAN dongle (`enp97s0`) — fine for bootstrap; product network model needs built-in COMMAND/EGRESS ports.

---

## Four-pillar deployment reality

| Pillar | Dev | On box |
|--------|-----|--------|
| P1 Compute | — | Ollama ROCm live |
| P2 Engine | CI green | systemd installed, unverified |
| P3 Telemetry | Mock in QA | **Blocked** — no eno2 |
| P4 Dashboard | `qa:local` green | Live, FRE done |

---

## GTM & narrative (channel policy)

| Channel | Mode | Action now |
|---------|------|------------|
| **X @ankurmisra** | Public | OK: unbox milestone, FRE green, honest build notes |
| **X @curxorai** | Public | OK: ship log; wait for box screenshots until G1/G3 |
| **LinkedIn** | Stealth | **No flip** until G1 + real Flight Command screenshot from box IP |
| **curxor.ai** | Live | Loop doc shipped; **homepage loop section still G3** |
| **Demo pack** | Dev captures | Git shows updated PNGs — still mostly seed, not box IP |

### Safe to say today (X / product account)

- Box unboxed; CurXor OS 0.9.1 installed on MS-S1 MAX Standard 64
- FRE completed; Capital, Creator, Work provisioned
- Local inference running (Qwen3 8B + Moondream on ROCm)

### Do not say yet (storefront / ads / hero)

- Captive portal or eno2 mesh **validated**
- Sub-millisecond ZeroMQ telemetry
- Production OTA or factory USB ready
- Hero/product photography from real unit (until G3 capture)
- LinkedIn product brochure mode

---

## Storefront priority stack (synced with appliance)

### P0 — Blocked on appliance G1 (no storefront code required)

Appliance team closes: eno cables → captive/mesh scripts → `verify-unbox-day.sh --post-models` → smile test.

### P1 — After G1 green (storefront actions)

| Action | Gate | Doc |
|--------|------|-----|
| Re-capture `public/demo/` from box IP | G3 min · G1 for first honest shot | IDEA-A04 |
| LinkedIn stealth exit | G1 | `../curxor-os/docs/founder/STEALTH-MODE.md` |
| Update validation badge on `/architecture` | G1 | soft → hardware-validated copy |
| Loop homepage section | G3 | [LOOP-POSITIONING.md](LOOP-POSITIONING.md) |
| Trust loop graphic | G3 | IDEA-G12 |
| `/for-builders` page | G3+ | IDEA-G13 |

### P2 — Narrative now (copy only, no deploy blockers)

- Founder X: unbox thread — layer 1–2 hook, not orchestrator-only cold traffic
- Keep LinkedIn quiet per stealth policy
- Run `npm run sync:appliance` after any `version.json` bump

---

## Build freeze (appliance → affects GTM timing)

Until G1 passes, **curxor-os** is bug-fix only. Do not expect:

- BP5 Cursor OAuth / live worker (G2)
- Inter-Claw Handshakes HS (G2)
- Firecrawl bridge FC (G2)
- Tier C live bridges (G4)
- Storefront loop hero UI before G3 captures

---

## Doc drift to fix (cross-repo)

| Doc | Issue |
|-----|--------|
| Storefront `README.md` | Was "holding pattern / hardware pending" — **update to G1 in progress** |
| Storefront `APPLIANCE-AUDIT.md` | Header still "not yet received" — **superseded by this report until audit refresh** |
| Storefront `GTM-CHECKLIST.md` | "MS-S1 in transit" — **update** |
| `curxor-os` FUTURE-ROADMAP | Line 42 still "G1 blocked until session" — session started Jun 28 |

---

## Working tree note (appliance repo)

Large uncommitted surface in `curxor-os`: unbox log, compute hardening, demo screenshots, dev-qa `forged-exit-demo-*` pollution. Storefront sync unaffected until `version.json` or `ootb-apps.ts` changes.

---

## Bottom line for GTM

**Software:** 0.9.1 is real product depth. G0 solid. Patron Ask and Build Plane UI exceed typical appliance buyer expectations for day one.

**Hardware:** FRE on bare metal with local inference is the proof point. Phase change from "waiting for box" to "closing golden path."

**Gap:** Network topology (eno1/eno2), verify script, and smile test block G1 → G2 → G3 storefront assets (real photos, loop section, validation copy).

**Discipline:** Do not let storefront get ahead of G1 on mesh/captive/OTA claims. Pre-order and narrative on X are fine; hero photography and LinkedIn flip wait for honest captures.

---

## Changelog (this doc)

| Date | Change |
|------|--------|
| 2026-06-28 | Initial sync from curxor-os CTO inspection — MS-S1 unbox day, G1 in progress |
