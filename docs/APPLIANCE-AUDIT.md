# CurXor OS — Full Appliance Audit

**Audit date:** June 2026 (matrix below) · **Hardware update:** Jul 8, 2026 — see [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md)  
**Version:** `1.0.3` (`../curxor-os/version.json`)  
**Hardware status:** MS-S1 MAX **unboxed** — **G1/G2/G3 closed Jul 2026**: golden path Jun 29; G2 depth wave (v1.0.3, FC bridge, SkillSpector); G3 demo captures on storefront Jul 8  
**GTM site:** This repo (`curxor storefront`) — landing + pre-order live; see [SYNC.md](SYNC.md)

---

## Executive summary

CurXor OS is a **coherent, installable appliance stack** with documentation, OTA, captive portal, and a polished Flight Command UI. Architecture is intentionally **sovereign**: inference and agent reasoning stay on localhost; only dedicated Python **digital bridges** perform outbound HTTPS (Alpaca paper, X API).

**Ready for GTM narrative and demo storytelling now.**  
**Hardware validation (G1/G2/G3 closed Jul 2026):** ROCm inference, FRE, dual-port topology, verify script, smile test, G2 depth wave (Firecrawl FC1–FC3, SkillSpector, handshakes), and G3 MS-S1 demo pack on curxor.ai. **Not yet ready** for fleet customer shipments until G4 (production OTA URL, factory USB, external operator UAT at scale).

---

## Maturity matrix

| Area | Status | Notes |
|------|--------|-------|
| Meta-installer | ✅ Complete | `install-all.sh`, systemd target, cloud-init fragment |
| Pillar 1 Compute | ✅ Scaffold + scripts | Ollama default, vLLM experimental; needs gfx1151 proof |
| Pillar 2 Engine | ✅ Functional design | Physical + digital tools; vision-throttled LLM loop |
| Pillar 3 Telemetry | ✅ Complete | Dual ZMQ proxy + digital bridges in `curxor-broker-stack` |
| Pillar 4 Dashboard | ✅ Rich UI | 10 OOTB apps, FRE, unified inbox, agent runtime + Build Plane BP4, OTA terminal |
| **Storefront (this repo)** | ✅ Landing v1 | Hero, spec matrix, 10 Claws + Forge, Stripe, email API |
| Networking | ✅ Documented | eno1 captive `10.0.0.1` · eno2 mesh `10.77.0.1` |
| OTA | ✅ Complete | Backup, SHA256, rollback, cron, System Health log stream |
| Digital layer | ⚠️ Scaffold | Bridges coded; requires `/etc/curxor/digital.env` + live APIs |
| Hardware validation | ✅ G1/G2/G3 closed | MS-S1 unboxed Jun 28 — G1 Jun 29 · G2 depth Jul 2026 (v1.0.3, FC bridge) · G3 storefront captures Jul 8 · published mesh benchmarks pending · Cafe Wave A dev captures not MS-S1 verified · [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md) |
| Reproducible builds | ⚠️ Gap | No committed `pnpm-lock.yaml` in pillar 2/4 |
| Security hardening | ⚠️ Partial | Dashboard on `0.0.0.0:3080`; APIs unauthenticated (LAN/captive OK) |
| Tests / CI | ✅ Local QA | **239** smoke + **40** user-flow checks — `npm run qa:local` (`qa-smoke.mjs`, `qa-user-flows.mjs`) |
| Agent runtime | ✅ Shipped | Workspace memory, skills, heartbeat, MCP, channel router → CCP inbox |
| Messaging gateways | ✅ Shipped | Telegram, Slack, WhatsApp, iMessage — user-configured in Settings |

---

## OOTB apps (10) — appliance routes

| App | Route | Display name | Maturity |
|-----|-------|--------------|----------|
| The Forge | `/claw-forge` | The Forge | Claw provisioning wizard + local LLM recommend |
| Capital | `/my-capital` | Capital | Mock portfolio + live digital receipts |
| Creator | `/my-content` | Creator | v0.3 day-one — 5-step wizard, Go Live, 10 bridges, engage loop, bootstrap API |
| Outreach | `/my-work` | Outreach | Mock outbound / CRM UI |
| Arbitrage Claw | `/my-shop` | Arbitrage Claw | Mock margin / fulfillment UI |
| Signal Claw | `/optimus` | Signal Claw | Humanoid Home Hub preview · Neural Link horizon (glance, VR, fleet) |
| Swarm Claw | `/robotaxi` | Swarm Claw | Mock swarm grid |
| Engage Claw | `/claw-cafe` | Engage Claw | Vision grid (live when mesh feeds) |
| Vital Claw | `/my-vital` | Vital Claw | Longevity desk + user-configured wearables OAuth |
| Kin Claw | `/my-family` | Kin Claw | Household profiles + channel handle routing |

---

## Mock / stub (do not oversell in GTM)

| Feature | Reality |
|---------|---------|
| FRE provisioning | 3 s mock delay; no real cloud provisioner |
| Claw create | 3 s mock delay; writes local JSON + engine env |
| Outreach / Arbitrage / Capital quotes | Mock data tables |
| Ollama tok/s in dashboard | Often null unless vLLM metrics path hit |
| Multimodal inference | Engine sends vision **metadata** in text prompts, not JPEG to LLM |
| Digital trades / posts | Real only after Alpaca/X credentials + bridge running |
| Signal / Swarm pages | Demo shells, not production integrations |

---

## Known gaps (post-G3)

### P0 — G4 / fleet readiness

1. Production OTA release URL for customer fleet
2. Factory USB / cloud-init install video + operator PDF export
3. Published mesh latency benchmarks (topology verified; numbers pending)
4. Product photography — MS-S1 batch hero shoot
5. Cafe Wave A captures in `public/demo/cafe/` — dev Flight Command UI; replace with MS-S1 verified when re-captured

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

## First-boot checklist (MS-S1 MAX — reference)

Hardware unboxed **2026-06-28** · G1 closed **2026-06-29**. Retained for operators flashing new units:

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

**Hold until G4 / fleet proof:** performance benchmark publication, factory OTA install story, live trading/social at scale unless operator BYOK configured, LinkedIn brochure flip (needs honest box hero photo).
