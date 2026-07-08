# CurXor — Investor Pitch Deck

**Version:** 1.0.3 · **Date:** July 2026  
**Category:** Sovereign Agent Appliance  
**Tagline:** Mint Autonomous Employees on Bare Metal.

### PowerPoint export (speaker notes)

- **File:** `docs/CurXor-Pitch-Deck-Speaker-Notes.pptx` — regenerate after edits
- **Regenerate:** `npm run export:pitch-deck` (or `python scripts/export-pitch-deck-pptx.py`)
- **Python deps:** `pip install -r scripts/requirements-pitch-deck.txt`
- **Logo asset:** `docs/assets/curxor-logo-mark.png` (generated from favicon palette)
- **Site diligence:** [curxor.ai/press](https://curxor.ai/press) — traction table matches Slide 12

---

## Slide 1 — Title

**CurXor OS**  
Mint autonomous employees. On a box you own.

| Metric | Value |
|--------|-------|
| Price | **$3,999** once |
| Recurring API | **$0/mo** |
| Local NPU | 126 TOPS |
| Unified memory | 64 GB UMA |

> ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.

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
| **Pillar 4 — Flight Command** | FRE, 10 Claws, Forge, SSE telemetry |

**Four customer promises:**
1. **Local LLM** — inference never leaves localhost
2. **Digital employees** — five flagship Claws day one + full roster on metal
3. **Kill switch** — eno1 command · eno2 egress only · unplug stops agents
4. **The Forge** — describe a Claw → deploy on-box in one session

---

## Slide 4 — Product

### Two repos · one promise

| Repo | Purpose | Status |
|------|---------|--------|
| **curxor-os** | Appliance software (`/opt/curxor/`, systemd, OTA) | v1.0.3 · 239 smoke + 40 user-flow QA |
| **curxor storefront** | GTM at curxor.ai (Stripe, Resend, synced catalog) | Live pre-order · investor press kit |

**Honest guardrail:** Five flagship Claws ship with G3 demo depth. Five preview-tier Claws are labeled Coming Soon in Flight Command. Live broker fills and outbound sends require operator-configured bridges on eno2 (G4).

---

## Slide 5 — The Forge (Crown Jewel)

**Mint custom operators** without per-token billing.

| Step | Action |
|------|--------|
| 1 | Describe niche (text, photo, or live vision) |
| 2 | Local LLM recommends model stack by UMA budget tier |
| 3 | One tap forges Claw profile → engine |
| 4 | Claw runs on your metal under your egress policy |

The Forge is the viral loop: buyers become operators who mint more Claws.

---

## Slide 6 — Ten Claws (Digital Employees)

| Claw | Function | Depth |
|------|----------|-------|
| **Capital Claw** | Algo trading & rules — Alpaca bridge on eno2 | Flagship |
| **Creator Claw** | Content pipeline — X bridge on eno2 | Flagship |
| **Outreach Claw** | Outbound sequences & CRM-style desk | Flagship |
| **The Forge** | Mint custom Claws from natural language | Forge |
| **Signal Claw** | Neural Link — humanoid preview tier | Preview |
| **Swarm · Vital · Kin · Arbitrage · Engage** | Fleet, health, household, margin, inbox | Preview / roadmap |

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

**G1 closed (2026-06-29):** eno1/eno2 captive portal + EGRESS mesh verified on MS-S1.

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
| Unboxed | **2026-06-28** |

Not a PC — sovereign inference + agent stack on your desk. UMA carve-out in BIOS is the primary lever for running 7B–35B models alongside the agent stack.

---

## Slide 9 — Business Model

### Hardware (now)
- **$3,999** MS-S1 MAX bundle — one-time purchase
- CurXor OS pre-flash path included
- Stripe pre-order live on curxor.ai
- No CurXor subscription for local inference or bundled Claws

### Expansion (future)
- OTA channel subscriptions (optional)
- Partner bridge marketplace
- Enterprise fleet with eno2 policy packs
- White-label Forge for agencies

**Wedge math:** Power users spending **$500+/mo** on cloud agents can offset hardware in under 8 months vs API burn alone — illustrative; see curxor.ai/compare#tco.

---

## Slide 10 — Target Buyers

| Segment | Operator story | CurXor answer |
|---------|----------------|---------------|
| Algo trader / crypto operator | **Jordan** — rules on metal | Capital Claw on localhost |
| Creator / indie hacker | **Sam** — draft local, ship on signal | Creator Claw, $0/mo inference |
| Outbound / agency | **Alex** — pipeline on one appliance | Outreach Claw on-box |
| Sovereignty-maximalist | Alpha exfil to cloud LLMs | Pull eno2 = kill switch |

---

## Slide 11 — Why CurXor Wins

| vs | CurXor advantage |
|----|------------------|
| **DIY Ollama box** | FRE, Forge, mesh, OTA, bridges — complete stack |
| **SaaS agents** | Alpha stays local; outbound is skill → bridge, not LLM → internet |
| **Cloud-only tiers** | 126 TOPS on desk for 24/7 workloads without rate limits |
| **NAS agent hosts** | 64GB UMA + wealth/work/life Claws + physical kill switch |
| **Security story** | Two-port architecture enterprises understand |

---

## Slide 12 — Traction

*Mirrors [curxor.ai/press](https://curxor.ai/press) traction table.*

### Shipped
- MS-S1 MAX **unboxed** (2026-06-28) — Ubuntu, CurXor OS **v1.0.3**, Ollama ROCm on Standard 64 (qwen3:8b · 38 tok/s)
- **FRE green** on bare metal — Capital, Creator, Work provisioned · Flight Command live on box
- CurXor OS **v1.0.3** — four-pillar stack, Flight Command UI, 10 Claws + The Forge, Claw Cafe ascension tied to Flagship desks
- **G3 demo captures closed** (2026-07-08) — inception reel, investor proof, desk strips, 8-screenshot pack — [curxor.ai/#demo](https://curxor.ai/#demo)
- Agent runtime, unified comms gateways, Build Plane BP4 delegation queue in software
- **239** smoke + **40** user-flow QA checks in curxor-os (`qa:local` suite)
- Storefront GTM at curxor.ai — symphony model, investor press kit, Resend waitlist + Stripe pre-order
- **G1 golden path closed** (2026-06-29) — eno1/eno2 captive portal + EGRESS mesh on box, `verify-unbox-day.sh` PASS

### Pending
- Ops Wave 1 live bridges on box · first external operator UAT (G4)
- Published mesh benchmarks, production OTA fleet artifact

| Metric | Value |
|--------|-------|
| OS version | **v1.0.3** |
| QA (`qa:local`) | **239** smoke · **40** user flows |
| Stage | Bootstrapped · selectively meeting angels/seed |
| Pre-order | Live |

---

## Slide 13 — Roadmap

| Phase | Milestones |
|-------|------------|
| **Now (v1.0.3)** | G1/G2/G3 closed on MS-S1 · G3 investor pack · storefront GTM live |
| **Next 90 days** | G4 external UAT · live bridges · production OTA fleet artifact |
| **H2 2026** | Customer pilots · case studies · published mesh benchmarks |
| **2027+** | Fleet OTA · partner bridges · enterprise eno2 policies |

---

## Slide 14 — The Ask

### Stage
Bootstrapped and selectively meeting aligned angels and seed investors.

### Use of funds / focus
- v1.0.0 tag + golden image + production OTA pipeline (G2 fleet artifact)
- First 100 customer units
- Field engineer for support and factory flash at scale

### Contact
- **Site:** [curxor.ai](https://curxor.ai) · **Press:** [curxor.ai/press](https://curxor.ai/press)
- **Email:** hello@curxor.ai
- **X:** @curxorai
- **Deck:** Email hello@curxor.ai — subject "Investor inquiry — CurXor"

> Sovereign metal. Mint the rest. One invoice.

---

## Appendix — Maturity & Disclaimers

| Area | Status |
|------|--------|
| Software v1.0.3 | FRE, Flight Command, 10 Claws + Forge on MS-S1 Standard 64 |
| Five flagship Claws | G3 demo depth — Capital paper, Creator queue, Work pipeline |
| Five preview Claws | Honest Coming Soon surfaces in Flight Command |
| Local LLM | qwen3:8b · 38 tok/s ROCm validated on box |
| Digital bridges (Alpaca/X) | Coded; needs operator `digital.env` credentials on eno2 |
| MS-S1 MAX hardware | **Unboxed 2026-06-28** — G1/G2/G3 closed Jul 8 |
| Published mesh benchmarks | Not yet — topology verified, not sub-ms marketing |
| Production OTA fleet artifact | G4 / G2 fleet freeze pending |

**No guaranteed returns.** Capital Claw supports paper and live trading via Alpaca; performance depends on operator strategy. Creator and Outreach outbound actions require explicit operator approval via skills.

---

*Sources: `curxor-os` appliance sync · `src/lib/press.ts` · curxor.ai/press traction table*
