# CTO Status Report — CurXor OS ↔ Storefront Sync

> **As of:** July 1, 2026  
> **Source:** `../curxor-os/docs/curxor-os/UNBOX-FIELD-LOG.md` (golden path **COMPLETE 2026-06-29**)  
> **Audience:** Storefront GTM, copy, deploy decisions  
> **Appliance version:** `0.9.1` stable (pre-v1.0.0)  
> **Refresh:** After gate changes or major appliance milestone — **this file is canonical**; storefront mirrors from here

**Related:** [SYNC.md](SYNC.md) · [GTM-CHECKLIST.md](GTM-CHECKLIST.md) · [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) · `../curxor-os/docs/curxor-os/UNBOX-FIELD-LOG.md`

---

## Headline (storefront-relevant)

**G1 is closed. G2 and G3 are next.**

MS-S1 MAX unboxed **2026-06-28**. Golden path **closed 2026-06-29**: COMMAND/EGRESS cabled, captive portal + mesh scripts run, `verify-unbox-day.sh --post-models` **PASS** (0 failures, 4 warnings), smile test **PASS**, telemetry broker **active** on mesh.

Flight Command home: **`http://10.0.0.1:3080/home`** (COMMAND port · captive). SSH: **`ssh ankur@10.0.0.1`** (laptop `10.0.0.2/24` on COMMAND cable).

**Still blocked until later gates:** v1.0.0 tag, signed production OTA, published mesh latency benchmarks, box-IP demo re-capture on storefront (G3), hero product photography, LinkedIn brochure flip (needs honest box screenshot first).

---

## Gate status

| Gate | Meaning | Status | Storefront impact |
|------|---------|--------|-------------------|
| **G0** | Dev `pre-unbox:gate` green | **Green** (last pass Jun 27) | Safe to deploy copy synced to 0.9.1 |
| **G1** | On-device golden path | **Green** (closed Jun 29) | P0 mirror done — merge PR #3 when ready |
| **G2** | v1.0.0 + signed OTA | **Open** — next engineering gate | Changelog stays 0.9.1 until tag; no "production OTA ready" |
| **G3** | Appliance demo captures from box IP | **Unblocked** — not started on storefront | Re-capture `public/demo/` · first honest box screenshots |
| **G4** | Operator UAT smile at scale | Blocked on G2/G3 | Tier C go-live, rebrand, fundraise polish |

---

## What shipped on appliance (0.9.1 — do not oversell gaps)

Validated on box (Jun 28–29):

| Area | Shipped | Storefront-safe line |
|------|---------|----------------------|
| 10 Claw routes + Forge | UI + agent runtime | *Ten Claw workspaces + The Forge — enable any combination in Settings* |
| Build Plane BP0–BP4 | Settings overlay, delegation list | *Build Plane overlay for power users* — not hero until G3 `/for-builders` |
| Patron Ask CH0–CH5 | FAB, `/ask`, mobile `/m/ask` | *Ask your patron from desktop or phone on your LAN* — not App Store |
| Claw Cafe C4–C13 | Pixel room, ascension | Dev captures OK until G3; then label *Flight Command on MS-S1* after box re-capture |
| Mobile Patron Link | `/m` PWA shell | Park on `/signal` card only — see GTM-CHECKLIST |
| Local inference | Ollama ROCm on box | *Local inference on your metal* — validated: `moondream:1.8b` + `qwen3:8b` on Standard 64 |
| COMMAND captive portal | `10.0.0.1` · dnsmasq + iptables | *Command port captive portal* — validated on box (G1) |
| EGRESS mesh + telemetry | `10.77.0.1` · broker `9100–9201` | *Dual-port topology live on hardware* — **not** sub-ms benchmarks until published |
| CI / smoke | 184 smoke + checklists | Internal — not a marketing claim |

**Not shipped / not validated (GTM rules unchanged):**

| Gap | GTM rule |
|-----|----------|
| Published mesh latency numbers | Do **not** claim sub-millisecond ZeroMQ telemetry — wiring validated, benchmarks not published |
| Production OTA URL | Pre-order OK; OTA install readiness is G2 |
| Tier C live bridges | Honest Coming Soon / preview — see APPLIANCE-AUDIT |
| Real box screenshots in `public/demo/` | Still dev/seed captures — **G3 action** (IDEA-A04) |
| v1.0.0 release tag | Stay on 0.9.1 in badges until G2 |

---

## Hardware session scorecard

### Done (G1 closed)

| Item | Detail |
|------|--------|
| BIOS UMA 48 GB | `gpuHeapGb: 48` confirmed on dashboard |
| Ubuntu 24.04.4 · hostname `curxor` | Standard 64 GB SKU |
| `install-all.sh` + model pull | Ollama ROCm · `moondream:1.8b` · `qwen3:8b` |
| FRE green | Capital, Creator, Work (`my-capital`, `my-content-creator`, `my-work`) |
| COMMAND + EGRESS cabling | See interface map below |
| Captive portal + mesh scripts | `setup-captive-portal.sh` + mesh on verified ifaces |
| `verify-unbox-day.sh --post-models` | **PASS** — 0 failures, 4 warnings |
| Smile test | **PASS** |
| Telemetry broker | `curxor-telemetry-broker` active · `10.77.0.1:9100–9201` listening |

### Pending (G2 / G3 / G4)

| Item | Gate |
|------|------|
| v1.0.0 tag + signed OTA | G2 |
| Re-capture `public/demo/` from `10.0.0.1:3080` | G3 |
| Published mesh latency benchmarks | After G1 — honest numbers only |
| On-box qa-smoke in CI artifact trail | Ops hygiene |
| Hero product photography | G3+ |
| Factory USB / operator PDF | G2/G4 |

**Box quick reference (current ops — not bootstrap DHCP):**

| Field | Value |
|-------|--------|
| Hostname | `curxor` |
| User | `ankur` |
| COMMAND (CurXor name) | `enp98s0` @ **`10.0.0.1/24`** |
| EGRESS / mesh (CurXor name) | `enp97s0` @ **`10.77.0.1/24`** |
| Dashboard | `http://10.0.0.1:3080/home` |
| SSH | `ssh ankur@10.0.0.1` (laptop static `10.0.0.2/24`, gateway blank) |
| SKU | Standard 64 GB · UMA 48 GB |
| Inference | Ollama ROCm · `moondream:1.8b` · `qwen3:8b` |

**Naming note for GTM:** Buyer-facing copy may keep **eno1 · COMMAND** / **eno2 · EGRESS** as product port names. On MS-S1 MAX Linux ifaces are **`enp98s0`** / **`enp97s0`** — do not put kernel names on the homepage; ops docs and this report use both.

**Obsolete:** `192.168.86.211` was USB dongle → router DHCP during first install only. Do not reference on storefront.

---

## Four-pillar deployment reality

| Pillar | Dev | On box (post-G1) |
|--------|-----|------------------|
| P1 Compute | CI green | Ollama ROCm live · models pulled |
| P2 Engine | CI green | systemd installed · FRE validated |
| P3 Telemetry | Mock in QA | **Live** — broker on `10.77.0.1:9100–9201` |
| P4 Dashboard | `qa:local` green | Live · FRE done · `/api/setup/status` OK |

**Verify snapshot (2026-06-29):**

```text
verify-unbox-day.sh --post-models : PASS (0 failures, 4 warnings)
  Warnings: rocm-smi, curxor-compute/engine not installed (Ollama Docker OK)
curxor-telemetry-broker : active
10.77.0.1:9100-9201     : listening
Ollama                  : qwen3:8b, moondream:1.8b
Dashboard               : /api/setup/status OK, gpuHeapGb 48
```

---

## GTM & narrative (channel policy)

| Channel | Mode | Action now |
|---------|------|------------|
| **X @ankurmisra** | Public | OK: G1 close thread, captive/mesh proof, honest pitfalls (Windows COMMAND cable, CRLF) |
| **X @curxorai** | Public | OK: ship log; prefer box-IP screenshots once G3 capture lands |
| **LinkedIn** | Stealth | **Still hold** until first honest Flight Command screenshot from box IP in `public/demo/` — G1 alone is not enough for brochure flip |
| **curxor.ai** | Live | **Mirror G1 green** — validation badge, trust strip, press kit, changelog intro |
| **Demo pack** | Dev captures | G3: replace seed PNGs with `10.0.0.1:3080` captures |

### Safe to say today (storefront / X / product account)

- MS-S1 MAX unboxed; CurXor OS 0.9.1 on Standard 64
- G1 golden path **closed** — verify script + smile test pass
- FRE complete; Capital, Creator, Work provisioned
- Local inference on ROCm (`qwen3:8b`, `moondream:1.8b`)
- Dual-port topology **wired and verified** on hardware (COMMAND captive + EGRESS mesh)
- Telemetry broker **running** on mesh — topology proof, not latency marketing

### Do not say yet

- **Sub-millisecond** or published mesh latency benchmarks
- Production OTA or factory USB **ready for customers**
- Hero/product photography from real unit (until G3 capture)
- LinkedIn product brochure mode (until box screenshot in demo pack)
- v1.0.0 / "shipping firmware" (G2)
- Evolution tier names (Sprout→Infinity) on site
- Public bench log during validation week (stay quiet until green)

---

## Storefront priority stack (canonical — mirror in build chat)

### P0 — G1 mirror (storefront code **required now**)

Single wave: align all buyer-facing surfaces to this doc. **Do not** change homepage hero spine or add loop section in this wave.

| File / surface | Action |
|----------------|--------|
| `src/lib/architecture.ts` | Flip `hardwareValidation`: G1 items → done; telemetry/mesh → wired, benchmarks pending; update badge copy |
| `src/lib/marketing.ts` | `socialProofLine` → G1 closed wording |
| `src/lib/press.ts` | Press kit headline, fact sheet, disclaimers, milestones |
| `src/app/changelog/page.tsx` | Intro paragraph |
| `data/changelog-entries.json` | Latest entry bullet for G1 close (then `npm run sync:appliance`) |
| `docs/GTM-CHECKLIST.md` | Check G1 closed; update header |
| `docs/SYNC.md` | Status line date + G1 green |
| `docs/TECHNICAL-HANDOFF.md` | Header refresh |
| `docs/APPLIANCE-AUDIT.md` | Hardware validation row + executive summary |
| `README.md` | Hardware status line |
| `public/llms.txt` | Validation line if present |

**Copy guardrails for P0:**

- Say **G1 closed** / **golden path complete** / **dual-port topology verified on box**
- Say mesh telemetry broker is **live on hardware** — benchmarks **pending publication**
- Keep **eno1/eno2** in buyer copy; no `enp98s0` on marketing pages
- Keep pre-v1.0.0 and no production OTA claims

### P1 — G3 capture sprint (after P0 deploy)

| Action | Doc |
|--------|-----|
| Re-capture `public/demo/` from `http://10.0.0.1:3080` | IDEA-A04 |
| Update demo section labels: *Flight Command on MS-S1* where appropriate | GTM-CHECKLIST |
| LinkedIn stealth exit review | `../curxor-os/docs/founder/STEALTH-MODE.md` |
| Hero product photo when batch shot | GTM-CHECKLIST |

### P2 — Parked (G3+)

| Action | Gate |
|--------|------|
| Loop homepage section | G3 · [LOOP-POSITIONING.md](LOOP-POSITIONING.md) |
| Trust loop graphic | G3 · IDEA-G12 |
| `/for-builders` page | G3+ · IDEA-G13 |

### P3 — Ops (parallel, not copy)

- Verify Resend env on Vercel Production; smoke `POST /api/subscribe`
- Run `npm run sync:appliance` after changelog JSON edit
- `npm run qa` before deploy

---

## Build freeze (appliance → affects GTM timing)

G1 passed. **curxor-os** is bug-fix + G2 release work until v1.0.0 tags. Do not expect on storefront before G3 captures:

- BP5 Cursor OAuth / live worker (G2)
- Inter-Claw Handshakes HS (G2)
- Firecrawl bridge FC (G2)
- Tier C live bridges (G4)
- Loop hero UI (G3)

---

## Doc drift (P0 cleared Jul 1 — remaining)

| Doc / file | Status |
|------------|--------|
| P0 mirror (`src/`, press, changelog, GTM docs) | **Cleared** — G1 closed copy live on `sync/g1-green-mirror-p0` (PR #3 open; prod deployed from branch) |
| `docs/TECHNICAL-HANDOFF.md` | **Cleared** — holding-pattern language removed Jul 1 |
| `docs/CTO-STATUS-REPORT.md` | This section updated post-P0 |

**Appliance-side (CTO repo, not storefront P0):**

| Doc | Issue |
|-----|--------|
| `curxor-os` FUTURE-ROADMAP | Gate table still says G1 blocked — flip to G1 green, G2 current |

---

## Working tree note (appliance repo)

Unbox field log and network pitfall fixes landed in `curxor-os`. Storefront `version.json` sync unchanged at **0.9.1**. No `ootb-apps.ts` changes required for P0.

---

## Bottom line for GTM

**Software:** 0.9.1 is real product depth. G0 + **G1 green**. Four pillars live on box including P3 broker.

**Hardware:** Phase change from "closing golden path" to **"golden path closed."** Proof: verify PASS, smile PASS, captive + mesh on real COMMAND/EGRESS cabling.

**Gap:** Storefront buyer copy mirrors G1. **G2** (OTA/tag) and **G3** (box-IP demo captures) are the next gates — not more G1 mirror work.

**Discipline:** Topology verified ≠ benchmark marketing. Pre-order and G1-close narrative are fine. Sub-ms telemetry, production OTA, LinkedIn flip, and hero photography still wait.

---

## Changelog (this doc)

| Date | Change |
|------|--------|
| 2026-06-28 | Initial sync — MS-S1 unbox day, G1 in progress |
| 2026-07-01 | **G1 closed** per UNBOX-FIELD-LOG (Jun 29 verify + smile PASS); box ops → `10.0.0.1`; storefront P0 mirror stack defined |
