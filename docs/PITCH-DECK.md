# CurXor — Investor Pitch Deck

**Version:** 0.2.0 · **Date:** June 2026  
**Category:** Sovereign Agent Appliance  
**Tagline:** Mint Autonomous Employees on Bare Metal.

### PowerPoint export (speaker notes)

- **File:** `docs/CurXor-Pitch-Deck-Speaker-Notes.pptx` — 15 slides (14 + appendix), branded, notes on every slide
- **Regenerate:** `npm run export:pitch-deck` (or `python scripts/export-pitch-deck-pptx.py`)
- **Python deps:** `pip install -r scripts/requirements-pitch-deck.txt`
- **Logo asset:** `docs/assets/curxor-logo-mark.png` (generated from favicon palette)

---

## Slide 1 — Title

**CurXor OS**  
Mint Autonomous Employees on Bare Metal.

| Metric | Value |
|--------|-------|
| Price | **$3,999** once |
| Recurring API | **$0/mo** |
| Local NPU | 126 TOPS |
| Unified memory | 64 GB UMA |

> ChatGPT bills per token. CurXor bills once. Alpha stays on your metal.

---

## Slide 2 — Problem

### The cloud tax on autonomous work

**For operators**
- Algo traders, creators, and outbound teams pay **$500+/mo** in API tokens.
- Proprietary prompts, playbooks, and strategies leave the building via third-party LLM APIs.
- CRM, content schedulers, and trading wrappers compress margin without sovereignty.

**For the market**
- Edge AI hardware (126 TOPS on desk) is finally real — but buyers still run cloud agents.
- DIY Linux + Ollama lacks agent orchestration, egress control, OTA, and operator UX.

---

## Slide 3 — Solution

### CurXor: appliance, not another SaaS

CurXor OS is a **four-pillar edge stack** on MINISFORUM MS-S1 MAX:

| Pillar | Role |
|--------|------|
| **Pillar 1 — Compute** | Ollama/vLLM on `127.0.0.1` only |
| **Pillar 2 — Engine** | Vision → inference → motor/digital outputs |
| **Pillar 3 — Mesh** | ZMQ broker on eno2; Alpaca + X bridges |
| **Pillar 4 — Flight Command** | FRE, 8 Claws, Forge, SSE telemetry |

**Four customer promises:**
1. **Local LLM** — inference never leaves localhost
2. **Digital employees** — 8 OOTB Claws + The Forge factory
3. **Kill switch** — eno1 command · eno2 egress only · unplug stops agents
4. **Create-to-Earn** — describe a Claw → deploy on-box in one session

---

## Slide 4 — Product

### Two repos · one promise

| Repo | Purpose | Status |
|------|---------|--------|
| **curxor-os** | Appliance software (`/opt/curxor/`, systemd, OTA) | v0.2.0 · 54 QA checks |
| **curxor storefront** | GTM at curxor.ai (Stripe, Resend, synced catalog) | Live pre-order · holding for hardware |

**Honest guardrail:** Agent runtime v0.2 and unified comms ship in software. MS-S1 MAX on-device validation and golden image freeze are gating items — blocked on hardware receipt, not vapor.

---

## Slide 5 — The Forge (Crown Jewel)

**Create-to-Earn:** operators mint specialized digital employees without per-token billing.

| Step | Action |
|------|--------|
| 1 | Describe niche (text, photo, or live vision) |
| 2 | Local LLM recommends model stack by UMA budget tier |
| 3 | One tap forges Claw profile → engine |
| 4 | Claw earns 24/7 on your metal |

The Forge is the viral loop: buyers become operators who mint more Claws.

---

## Slide 6 — Ten Claws (Digital Employees)

| Claw | Function |
|------|----------|
| **The Forge** | Mint custom Claws from natural language |
| **Capital Claw** | Algo trading & rules — Alpaca bridge on eno2 |
| **Creator Claw** | Content pipeline — X bridge on eno2 |
| **Outreach Claw** | Outbound sequences & CRM-style desk |
| **Arbitrage Claw** | Margin watch & fulfillment ops |
| **Signal Claw** | The Neural Link — humanoid preview today; every AI device class (glance, VR, robot, home, fleet) on sovereign metal tomorrow |
| **Swarm Claw** | Robotaxi fleet preview — autonomous fleet horizon from sovereign metal |
| **Engage Claw** | Community & DM engagement demos |
| **Vital Claw** | Wearables, labs, longevity protocol |
| **Kin Claw** | Household profiles, devices, personalities |

Each workspace: agent console (chat + skills + activity). Trades and posts require explicit skill tap — LLM never calls the internet directly.

---

## Slide 7 — Sovereign Architecture

```
eno1 (10.0.0.1) — Flight Command :3080 · captive portal · operators
  └─ Pillar 4 — FRE · 10 Claws · Forge · CCP mesh · SSE · local LLM client
  └─ Pillar 1 — Ollama/vLLM @ 127.0.0.1:11434
  └─ Pillar 2 — Vision → inference → motor_out / digital_out

eno2 (10.77.0.1) — ZMQ mesh · Alpaca + X bridges only
  └─ Pull cable = kill outbound agents
```

| Mesh | Ports |
|------|-------|
| Vision | 9100 / 9101 |
| Motor | 9200 / 9201 |
| Digital bridge | eno2 only |

---

## Slide 8 — Hardware

### MINISFORUM MS-S1 MAX

| Spec | Value |
|------|-------|
| CPU / NPU | Ryzen AI Max+ 395 |
| NPU inference | **126 TOPS** |
| Memory | 64 GB UMA |
| GPU heap (BIOS carve) | ~48 GB |
| Network | Dual 10GbE |
| Stack | ROCm gfx1151 |

Not a PC — a money printer with local inference. UMA carve-out in BIOS is the primary lever for running 7B–35B models alongside the agent stack.

---

## Slide 9 — Business Model

### Hardware (now)
- **$3,999** MS-S1 MAX bundle — one-time purchase
- CurXor OS pre-flash path included
- Stripe pre-order live on curxor.ai

### Expansion (future)
- OTA channel subscriptions (optional)
- Partner bridge marketplace
- Enterprise fleet with eno2 policy packs
- White-label Forge for agencies

**Wedge math:** Eliminate **$6k+/yr** API burn for power users — payback in under 8 months vs cloud agents alone.

---

## Slide 10 — Target Buyers

| Segment | Pain | CurXor answer |
|---------|------|---------------|
| Algo trader / crypto operator | API fees + strategy leakage | Capital Claw on localhost |
| Creator / indie hacker | Token rent + platform lock-in | Creator Claw, $0/mo inference |
| Outbound / agency | CRM + lead SaaS stack | Outreach Claw on-box |
| E-com / arbitrage | Margin tools + fulfillment SaaS | Arbitrage Claw |
| Sovereignty-maximalist | Alpha exfil to cloud LLMs | Pull eno2 = kill switch |

---

## Slide 11 — Why CurXor Wins

| vs | CurXor advantage |
|----|------------------|
| **DIY Ollama box** | FRE, Forge, mesh, OTA, bridges — complete stack |
| **SaaS agents** | Alpha stays local; outbound is skill → bridge, not LLM → internet |
| **Cloud-only tiers** | 126 TOPS on desk beats rate limits for 24/7 workloads |
| **Robotics novelty** | Digital Wealth pivot — Claws as employees, ROI language buyers use |
| **Security story** | Two-port architecture with physical kill switch enterprises understand |

---

## Slide 12 — Traction

### Shipped (software)
- Four-pillar install · Flight Command UI · 8 Claws + Forge
- Local LLM: engine + Forge + Creator/Capital chat
- Mesh publish · digital bridges · OTA daemon
- Storefront live · appliance sync · CI on both pillars

### Pending (hardware)
- MS-S1 MAX ROCm/UMA proof on gfx1151
- End-to-end mesh latency benchmarks
- Golden image freeze + factory USB
- Production OTA artifact + signed releases

| Metric | Value |
|--------|-------|
| Version | 0.2.0 |
| QA smoke | 14/14 |
| Pre-order | Live |

---

## Slide 13 — Roadmap

| Phase | Milestones |
|-------|------------|
| **Now (v0.2.0)** | Agent runtime · unified comms · 54 QA checks · GTM build mode |
| **Next 90 days** | MS-S1 MAX validation · golden image · production OTA |
| **H2 2026** | Customer pilots · Engage demo unit · case studies |
| **2027+** | Fleet OTA · partner bridges · enterprise eno2 policies |

---

## Slide 14 — The Ask

### Use of funds / focus
- Complete MS-S1 MAX validation and golden image manufacturing run
- First 100 customer units
- Production OTA pipeline
- Field engineer for appliance support and factory flash at scale

### Contact
- **Site:** [curxor.ai](https://curxor.ai)
- **X:** @curxorai
- **Pre-order:** Stripe checkout on site

> Sovereign metal. Infinite Claws. One invoice.

---

## Appendix — Maturity & Disclaimers

| Area | Status |
|------|--------|
| Software v0.2.0 | Agent runtime, channels, 54 QA checks |
| Flight Command + 8 Claws + Forge | Rich UI; many workspaces use mock data |
| Local LLM (engine + dashboard) | Code complete; needs Ollama on appliance |
| Digital bridges (Alpaca/X) | Coded; needs `digital.env` credentials |
| MS-S1 MAX hardware validation | **Blocked** — unit not received |
| Golden image / production OTA | Not done |

**No guaranteed returns.** Capital Claw supports paper and live trading via Alpaca; performance depends on operator strategy. Creator Claw posts require explicit operator approval via skills.

---

*Sources: `curxor-os/docs/FEATURE-FUNCTION.md` · `curxor storefront/docs/PRODUCT-POSITIONING.md`*
