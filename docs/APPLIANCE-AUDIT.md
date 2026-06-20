# CurXor OS — Full Appliance Audit (Holding Pattern)

**Audit date:** June 2026  
**Version:** `0.1.0` (`../curxor-os/version.json`)  
**Hardware status:** MS-S1 MAX not yet received — **no on-device validation**  
**GTM site:** This repo (`curxor storefront`) — landing + pre-order live; see [SYNC.md](SYNC.md)

---

## Executive summary

CurXor OS is a **coherent, installable appliance stack** with documentation, OTA, captive portal, and a polished Flight Command UI. Architecture is intentionally **sovereign**: inference and agent reasoning stay on localhost; only dedicated Python **digital bridges** perform outbound HTTPS (Alpaca paper, X API).

**Ready for GTM narrative and demo storytelling now.**  
**Not yet ready** for production customer shipments until validated on real MS-S1 MAX hardware (ROCm, UMA BIOS, dual-NIC mesh, end-to-end latency).

---

## Maturity matrix

| Area | Status | Notes |
|------|--------|-------|
| Meta-installer | ✅ Complete | `install-all.sh`, systemd target, cloud-init fragment |
| Pillar 1 Compute | ✅ Scaffold + scripts | Ollama default, vLLM experimental; needs gfx1151 proof |
| Pillar 2 Engine | ✅ Functional design | Physical + digital tools; vision-throttled LLM loop |
| Pillar 3 Telemetry | ✅ Complete | Dual ZMQ proxy + digital bridges in `curxor-broker-stack` |
| Pillar 4 Dashboard | ✅ Rich UI | 7 OOTB apps, FRE, claw wizard, SSE telemetry, OTA terminal |
| **Storefront (this repo)** | ✅ Landing v1 | Hero, spec matrix, 7 apps, Stripe, email API |
| Networking | ✅ Documented | eno1 captive `10.0.0.1` · eno2 mesh `10.77.0.1` |
| OTA | ✅ Complete | Backup, SHA256, rollback, cron, System Health log stream |
| Digital layer | ⚠️ Scaffold | Bridges coded; requires `/etc/curxor/digital.env` + live APIs |
| Hardware validation | ❌ Blocked | No ROCm/UMA/mesh benchmarks on target SKU |
| Reproducible builds | ⚠️ Gap | No committed `pnpm-lock.yaml` in pillar 2/4 |
| Security hardening | ⚠️ Partial | Dashboard on `0.0.0.0:3080`; APIs unauthenticated (LAN/captive OK) |
| Tests / CI | ❌ Missing | No automated test suite |

---

## OOTB apps (7) — appliance routes

| App | Route | Storefront name | Maturity |
|-----|-------|-----------------|----------|
| My Work | `/my-work` | My Work | Mock productivity UI |
| My Shop | `/my-shop` | My Shop | Mock fulfillment UI |
| Optimus | `/optimus` | Tesla Optimus Engine | Placeholder canvas |
| Robotaxi | `/robotaxi` | Robotaxi Fleet Manager | Mock fleet grid |
| Claw Cafe | `/claw-cafe` | Claw Cafe | Vision grid (live when mesh feeds) |
| My Content Creator | `/my-content` | Content Creator | Mock queues + live digital receipts |
| My Capital | `/my-capital` | Invest Agent | Mock portfolio + live digital receipts |

---

## Mock / stub (do not oversell in GTM)

| Feature | Reality |
|---------|---------|
| FRE provisioning | 3 s mock delay; no real cloud provisioner |
| Claw create | 3 s mock delay; writes local JSON + engine env |
| My Work / Shop / Capital quotes | Mock data tables |
| Ollama tok/s in dashboard | Often null unless vLLM metrics path hit |
| Multimodal inference | Engine sends vision **metadata** in text prompts, not JPEG to LLM |
| Digital trades / posts | Real only after Alpaca/X credentials + bridge running |
| Optimus / Robotaxi pages | Demo shells, not production fleet integrations |

---

## Known gaps (priority when hardware arrives)

### P0 — First boot on MS-S1 MAX

1. BIOS UMA carve-out ~48 GB — `../curxor-os/docs/guides/10-ms-s1-max-hardware-bios.md`
2. `verify-gpu.sh` + `deploy.sh --pull-models` on gfx1151
3. Confirm eno1/eno2 naming matches scripts
4. End-to-end: camera → vision SSE → engine → motor → dashboard matrix

### P1 — Hardening

- Commit `pnpm-lock.yaml` for pillar 2 and 4
- Validate or soften storefront "sub-millisecond telemetry" claim
- Optional: bind dashboard to `127.0.0.1` only (captive iptables still works)

---

## Architecture

```
eno1 10.0.0.1  ── captive portal ──► Dashboard :3080
eno2 10.77.0.1 ── ZMQ mesh ──► Broker ──► Engine + Dashboard SSE

Engine ──127.0.0.1──► Ollama :11434 / vLLM :8000/v1  (never internet)
Engine ──JSON──► digital_out :9200 ──► Python bridges ──HTTPS──► Alpaca / X
Bridges ──JSON──► digital_in :9101 ──► Dashboard SSE
```

---

## First-boot checklist (when MS-S1 MAX arrives)

```bash
sudo rsync -a ../curxor-os/ /opt/curxor/
sudo /opt/curxor/scripts/install-all.sh
# BIOS → UMA GPU memory MAX
sudo /opt/curxor/pillar-1-compute/scripts/deploy.sh --pull-models
sudo /opt/curxor/scripts/setup-captive-portal.sh   # optional
sudo /opt/curxor/scripts/install-ota-cron.sh       # optional
systemctl status curxor-os.target
```

---

## GTM implication

**Safe to market today:** sovereign edge positioning, four-pillar architecture, Flight Command UX, offline-first, claw wizard concept, OTA story, dual-LAN topology, digital bridge privacy model, **pre-order funnel (this repo)**.

**Hold until hardware proof:** performance numbers, "works out of the box on MS-S1 MAX", vLLM/OpenVLA production claims, live trading/social unless demo keys configured.
