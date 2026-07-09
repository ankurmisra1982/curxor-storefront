# CTO Status Report — CurXor OS ↔ Storefront Sync

> **As of:** July 8, 2026  
> **Source:** `../curxor-os/docs/curxor-os/UNBOX-FIELD-LOG.md` (golden path **COMPLETE 2026-06-29** · G2 depth + FC deploy **Jul 2026** · box stamp **`d5353fa`**)  
> **Audience:** Storefront GTM, copy, deploy decisions  
> **Appliance version:** `1.0.3` stable  
> **Refresh:** After gate changes or major appliance milestone — **this file is canonical**; storefront mirrors from here

**Related:** [SYNC.md](SYNC.md) · [GTM-CHECKLIST.md](GTM-CHECKLIST.md) · [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) · `../curxor-os/docs/curxor-os/UNBOX-FIELD-LOG.md`

---

## Headline (storefront-relevant)

**G1, G2, and G3 are closed. G4 is next.**

MS-S1 MAX unboxed **2026-06-28**. Golden path **closed 2026-06-29**: COMMAND/EGRESS cabled, captive portal + mesh scripts run, `verify-unbox-day.sh --post-models` **PASS** (0 failures, 4 warnings), smile test **PASS**, telemetry broker **active** on mesh.

**G2 depth wave closed Jul 2026** — CurXor OS **v1.0.3** on box: power management (PM1–PM2), inter-Claw handshakes (HS H1–H3), Tier C shells (GM/LR/ES), SkillSpector (SS0), Firecrawl bridge FC1–FC3 deployed at stamp **`d5353fa`**.

**G3 demo captures closed Jul 8** — storefront investor pack, desk strips, and 8-screenshot gallery on curxor.ai from MS-S1 box IP. Category badge film (~61s) + inception reel (~90s) live on `/signal` and `/press`.

Flight Command home: **`http://10.0.0.1:3080/home`** (COMMAND port · captive). SSH: **`ssh ankur@10.0.0.1`** (laptop `10.0.0.2/24` on COMMAND cable).

**Still blocked until G4:** production OTA release URL for customer fleet, factory USB / operator PDF, published mesh latency benchmarks, MS-S1 batch product photography, LinkedIn brochure flip, Ops Wave 1 live bridges at scale, first external operator UAT.

---

## Gate status

| Gate | Meaning | Status | Storefront impact |
|------|---------|--------|-------------------|
| **G0** | Dev `pre-unbox:gate` green | **Green** (last pass Jun 27) | Safe to deploy copy synced to 1.0.3 |
| **G1** | On-device golden path | **Green** (closed Jun 29) | Validation badge, trust strip, architecture — live |
| **G2** | v1.0.x depth wave on box | **Green** (closed Jul 2026) | v1.0.3 badges, FC bridge, SkillSpector, handshakes — no fleet OTA claim |
| **G3** | Appliance demo captures → storefront | **Green** (closed Jul 8) | G3 asset pack on prod · inception reel · desk strips · press zip |
| **G4** | Operator UAT + fleet artifacts | **Open** — next gate | Live bridges at scale, production OTA URL, external UAT, hero photography |

**Honesty scope on G3:** Flagship desk strips and investor proof pack are MS-S1 captures. `public/demo/cafe/` Wave A remains **dev Flight Command UI — not MS-S1 verified**.

---

## What shipped on appliance (1.0.3 — do not oversell gaps)

Validated on box (Jun 28–29 + Jul 2026 depth wave):

| Area | Shipped | Storefront-safe line |
|------|---------|----------------------|
| 10 Claw routes + Forge | UI + agent runtime | *Ten Claw workspaces + The Forge — enable any combination in Settings* |
| Build Plane BP0–BP4 | Settings overlay, delegation list | *Build Plane overlay for power users* |
| Patron Ask CH0–CH5 | FAB, `/ask`, mobile `/m/ask` | *Ask your patron from desktop or phone on your LAN* — not App Store |
| Claw Cafe C4–C13 | Pixel room, ascension | G3 desk strips on site; Cafe pixel room captures still Wave A dev until re-shot |
| Mobile Patron Link | `/m` PWA shell | Park on `/signal` card only — see GTM-CHECKLIST |
| Local inference | Ollama ROCm on box | *Local inference on your metal* — validated: `moondream:1.8b` + `qwen3:8b` · **38 tok/s** on Standard 64 |
| COMMAND captive portal | `10.0.0.1` · dnsmasq + iptables | *Command port captive portal* — validated on box (G1) |
| EGRESS mesh + telemetry | `10.77.0.1` · broker `9100–9201` | *Dual-port topology live on hardware* — **not** sub-ms benchmarks until published |
| Firecrawl bridge FC1–FC3 | Work/Creator desks | *URL scrape and lead enrich on your desk* — demo mode without BYOK |
| SkillSpector SS0 | Forge import scan | Internal CI gate — not hero marketing |
| CI / smoke | **239** smoke + 40 user flows | Internal — cite count in diligence, not as product feature |

**Not shipped / not validated (GTM rules unchanged):**

| Gap | GTM rule |
|-----|----------|
| Published mesh latency numbers | Do **not** claim sub-millisecond ZeroMQ telemetry — wiring validated, benchmarks not published |
| Production OTA URL for customer fleet | Pre-order OK; fleet OTA install readiness is **G4** |
| Tier C live bridges at scale | Honest Coming Soon / preview — see APPLIANCE-AUDIT |
| Cafe Wave A in `public/demo/cafe/` | Dev captures — label honestly; not MS-S1 verified |
| MS-S1 batch product photography | G4 — hero still uses composites / G3 desk strips |
| LinkedIn brochure flip | Hold until honest box hero photo lands |

---

## Hardware session scorecard

### Done (G1 + G2 + G3)

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
| G2 depth wave | PM1–PM2 · HS H1–H3 · GM/LR/ES shells · SS0 SkillSpector |
| FC1–FC3 Firecrawl | Deploy stamp **`d5353fa`** · box-smoke PASS |
| G3 storefront pack | Inception reel · investor proof · 8 screenshots · 3 desk strips · Jul 8 |

### Pending (G4)

| Item | Gate |
|------|------|
| Production OTA release URL | G4 |
| Factory USB / operator PDF | G4 |
| Published mesh latency benchmarks | G4 |
| Ops Wave 1 live bridges on box | G4 |
| First external operator UAT | G4 |
| MS-S1 batch product photography | G4 |
| Cafe Wave A re-capture from box IP | G4 |
| LinkedIn stealth exit | G4 |

**Box quick reference (current ops — not bootstrap DHCP):**

| Field | Value |
|-------|--------|
| Hostname | `curxor` |
| User | `ankur` |
| COMMAND (CurXor name) | `enp98s0` @ **`10.0.0.1/24`** |
| EGRESS / mesh (CurXor name) | `enp97s0` @ **`10.77.0.1/24`** |
| Dashboard | `http://10.0.0.1:3080/home` |
| SSH | `ssh ankur@10.0.0.1` (laptop static `10.0.0.2/24`, gateway blank) |
| Deploy stamp | `d5353fa` |
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
| P4 Dashboard | `qa:local` green (**239** smoke) | Live · FRE done · FC bridge · `/api/setup/status` OK |

**Verify snapshot (2026-06-29 + Jul 2026 re-verify):**

```text
verify-unbox-day.sh --post-models : PASS (0 failures, 4 warnings)
  Warnings: rocm-smi, curxor-compute/engine not installed (Ollama Docker OK)
curxor-telemetry-broker : active
10.77.0.1:9100-9201     : listening
Ollama                  : qwen3:8b, moondream:1.8b
Dashboard               : /api/setup/status OK, gpuHeapGb 48
box-smoke + FC1-FC3     : PASS @ d5353fa
qa:local                : 239 smoke + 40 user flows green
```

---

## GTM & narrative (channel policy)

| Channel | Mode | Action now |
|---------|------|------------|
| **X @ankurmisra** | Public | OK: velocity thread · G1/G2/G3 close · honest pitfalls |
| **X @curxorai** | Public | OK: ship log · G3 desk strips · category film links |
| **LinkedIn** | Stealth | **Still hold** until MS-S1 batch product photography — G3 desk strips not enough for brochure flip |
| **curxor.ai** | Live | **G1/G2/G3 mirror** — validation badge, films, press kit, changelog v1.0.3 |
| **Demo pack** | G3 closed | Inception reel + investor proof + desk strips on prod |

### Safe to say today (storefront / X / product account)

- MS-S1 MAX unboxed; CurXor OS **1.0.3** on Standard 64
- G1 golden path **closed** — verify script + smile test pass
- G2 depth wave **closed** — Firecrawl bridge, handshakes, SkillSpector on box
- G3 demo captures **closed Jul 8** — investor pack and desk strips from MS-S1 on curxor.ai
- FRE complete; Capital, Creator, Work provisioned
- Local inference on ROCm (`qwen3:8b` · 38 tok/s on validated metal)
- Dual-port topology **wired and verified** on hardware (COMMAND captive + EGRESS mesh)
- Telemetry broker **running** on mesh — topology proof, not latency marketing
- **239** smoke + 40 user-flow QA green in curxor-os

### Do not say yet

- **Sub-millisecond** or published mesh latency benchmarks
- Production OTA or factory USB **ready for customer fleet**
- MS-S1 batch hero/product photography (until shoot lands)
- LinkedIn product brochure mode (until box hero photo)
- Cafe Wave A captures as MS-S1 verified proof
- Evolution tier names (Sprout→Infinity) on site
- Public bench log theater during validation week

---

## Storefront priority stack (canonical — mirror in build chat)

### P0 — G1/G2/G3 mirror (**cleared Jul 8**)

Buyer-facing surfaces aligned to this doc. Homepage hero spine unchanged.

| File / surface | Status |
|----------------|--------|
| `src/lib/architecture.ts` | G1/G2/G3 closed · v1.0.3 |
| `src/lib/marketing.ts` | G3 captures closed wording |
| `src/lib/press.ts` | Press kit · fact sheet · films · milestones |
| `src/app/changelog/page.tsx` | v1.0.3 entry live |
| `data/changelog-entries.json` | Jul 8 highlights |
| `docs/GTM-CHECKLIST.md` | Track C deploy + prod UAT closed |
| `docs/SYNC.md` | Status line Jul 8 |
| `docs/TECHNICAL-HANDOFF.md` | v1.0.3 · ownership H1 |
| `docs/APPLIANCE-AUDIT.md` | G1/G2/G3 rows |
| `docs/FEATURE-FUNCTION.md` | v1.0.3 live feature table |
| `docs/PRODUCT-POSITIONING.md` | Ownership H1 · category spine |
| `docs/DREAM-STATE-OVERVIEW.md` | Act I H1 matches config |
| `docs/LOOP-POSITIONING.md` | Live control hero · G11 deferred |
| `docs/CTO-STATUS-REPORT.md` | This doc — doc mirror Jul 8 closed |
| `README.md` | Hardware status line |
| `public/llms.txt` | v1.0.3 · G1/G2/G3 closed |

### P1 — G4 sprint (current engineering + GTM)

| Action | Doc |
|--------|-----|
| Production OTA release URL | GTM-CHECKLIST |
| Factory USB + operator PDF | GTM-CHECKLIST |
| Published mesh benchmarks | architecture.ts · press disclaimers |
| MS-S1 batch product photography | GTM-CHECKLIST |
| Cafe Wave A re-capture from box IP | GTM-CHECKLIST |
| LinkedIn stealth exit review | `../curxor-os/docs/founder/STEALTH-MODE.md` |
| External operator UAT | G4 gate |

### P2 — Parked (post-fundraise)

| Action | Gate |
|--------|------|
| Loop homepage section | G11 · [LOOP-POSITIONING.md](LOOP-POSITIONING.md) |
| Trust loop graphic | G12 |
| `/for-builders` page | G13 |

### P3 — Ops (parallel, not copy)

- Resend waitlist prod smoke — **green Jul 8**
- Resend welcome email E2E — **green Jul 8** (CEO confirmed)
- Prod UAT — **green Jul 8** (20 pages · 12 assets · subscribe · films · press zip)
- `npm run sync:appliance` after version bump
- `npm run qa` before deploy

---

## Build freeze (appliance → affects GTM timing)

G1/G2/G3 passed. **curxor-os** is G4 fleet-readiness + operator UAT until production OTA URL ships. Do not expect on storefront before G4:

- Ops Wave 1 live bridges at scale
- Factory USB production batch
- LinkedIn brochure flip
- Loop hero UI (G11)
- Full 90s A+B+C film merge (HERO-v2)

---

## Doc drift (doc mirror Jul 8 — closed)

| Doc / file | Status |
|------------|--------|
| P0 mirror (`src/`, press, changelog, GTM docs) | **Cleared** — prod on `main` · STORE-C-DEPLOY + prod UAT closed Jul 8 |
| `docs/CTO-STATUS-REPORT.md` | **Cleared** — this doc |
| `docs/APPLIANCE-AUDIT.md` | **Cleared** — v1.0.3 · G1/G2/G3 |
| `docs/TECHNICAL-HANDOFF.md` | **Cleared** — v1.0.3 · ownership H1 + category spine |
| `docs/SYNC.md` | **Cleared** — status line Jul 8 |
| `docs/FEATURE-FUNCTION.md` | **Cleared** — v1.0.3 · live feature table Jul 8 |
| `docs/PRODUCT-POSITIONING.md` | **Cleared** — ownership H1 live · category in meta |
| `docs/DREAM-STATE-OVERVIEW.md` | **Cleared** — Act I H1 matches `config.ts` |
| `docs/LOOP-POSITIONING.md` | **Cleared** — live control hero · G11 challenger deferred |
| `docs/GTM-CHECKLIST.md` | **Cleared** — prod UAT + Resend E2E logged |
| `README.md` | **Cleared** — hardware status line |
| `public/llms.txt` | **Cleared** — v1.0.3 · G1/G2/G3 closed |

**Appliance-side (CTO repo — still CTO action):**

| Doc | Issue |
|-----|--------|
| `curxor-os` FUTURE-ROADMAP | Gate table may still lag — flip to G1/G2/G3 green, G4 current |
| `UNBOX-FIELD-LOG` | Older section still says G3 deferred — superseded by Jul 8 storefront close |

---

## Working tree note (appliance repo)

Box at deploy stamp **`d5353fa`**. Storefront `version.json` sync at **1.0.3** (`applianceSyncedAt` Jul 8). Untracked `docs/CurXor-Pitch-Deck-Speaker-Notes-v1.1.0.pptx` in storefront — commit or discard per CEO decision.

---

## Bottom line for GTM

**Software:** 1.0.3 is real product depth. G0 + **G1/G2/G3 green**. Four pillars live on box including P3 broker and FC bridge.

**Hardware:** Phase change from "closing golden path" to **"proof pack on curxor.ai."** G3 desk strips and investor films are MS-S1 sourced; Cafe Wave A and hero photography still honest gaps.

**Gap:** **G4** — production OTA URL, fleet artifacts, external UAT, published benchmarks, batch photography. Not more G1/G2/G3 mirror work.

**Discipline:** Topology verified ≠ benchmark marketing. G1/G2/G3-close narrative is fine for fundraise. Sub-ms telemetry, fleet OTA, LinkedIn flip, and batch hero photography still wait.

---

## Changelog (this doc)

| Date | Change |
|------|--------|
| 2026-06-28 | Initial sync — MS-S1 unbox day, G1 in progress |
| 2026-07-01 | **G1 closed** per UNBOX-FIELD-LOG; storefront P0 mirror stack defined |
| 2026-07-08 | **Doc mirror closed** — v1.0.3 · G2 depth + G3 captures · ownership H1 aligned across docs · prod UAT + Resend E2E green · G4 next |
