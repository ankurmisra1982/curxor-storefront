# CurXor — Loop Positioning (GTM)

> **Audience:** Storefront copy, pitch deck, founder content  
> **Source of truth (appliance):** `../curxor-os/docs/curxor-os/UNIVERSAL-OS-LAYER.md` · `../curxor-os/docs/guides/18-agent-runtime.md`  
> **Roadmap gaps:** `../curxor-os/docs/curxor-os/FUTURE-ROADMAP.md` — IDEA-G11–G13 · IDEA-F12–F13  
> **Status:** Scoped · hero rewrite at **G3** (after on-device captures) · copy blocks usable in deck now

---

## Why this doc exists

Buyers are flooded with “better prompts” and chat subscriptions. CurXor’s moat is **closed loops on sovereign metal** — discover → act → remember → verify → repeat — not a bigger context window.

This doc translates that architecture into **storefront-safe language**. No dev-tooling jargon on the main landing.

---

## Category reframe

| Old frame (avoid leading with) | CurXor frame |
|--------------------------------|--------------|
| Local LLM / chatbot | **Digital employees on bare metal** |
| Agent orchestration | **Operating system for autonomous work** |
| Prompt engineering | **Work, memory, and trust loops** |
| SaaS subscription | **Pay once · $0/mo API · your box remembers** |

---

## Hero candidates (G3 A/B only — locked until captures)

**CEO lock (pre-G3 / control):** Keep live hero — **“Mint autonomous employees on bare metal.”** Subscribe-first · category-first · no hero swap before G3.

| Role | Copy |
|------|------|
| **Control (live · keep)** | **Mint autonomous employees on bare metal.** · *They keep working, remembering, and asking before they act.* |
| **Challenger (G3 A/B only)** | **Stop renting chat. Run a team on your metal.** · *Not a chatbot. An operating system where work keeps moving between sessions.* |

Do not replace the control headline until G3 hardware captures land and CEO approves A/B. Loop section (three columns) can ship at G3 **below** hero without changing H1.

**Challenger sub (if tested):**

> CurXor OS gives you sovereign digital employees that remember, coordinate, and wait for your approval — $3,999 once, $0/mo API.

---

## The three loops (main landing section)

Use as **“How CurXor works”** — three columns or a simple vertical story. Each loop maps to shipped appliance behavior.

### 1. Work loop — *They keep going while you live your life*

| Buyer line | Appliance proof (internal — don’t put filenames on landing) |
|------------|--------------------------------------------------------------|
| Scheduled checks on your schedule | Per-Claw heartbeat + system scheduler |
| Replies when you message from phone | Channels gateway → correct Claw desk |
| Cafe shows real activity, not fake banter | App events → pixel room · cross-Claw sync |
| Bridges only when you allow egress | eno2 digital action layer |

**Safe marketing:** *“Your Claws don’t reset when you close the tab — they keep checking, routing, and reacting on your metal.”*

### 2. Memory loop — *Nothing important lives in a chat that forgets*

| Buyer line | Appliance proof |
|------------|-----------------|
| Strategies and history stay on the box | `/etc/curxor` operator data survives deploys |
| Claws share context with permission | Claw Context Protocol mesh |
| Each employee has identity and skills | Per-Claw workspace memory |
| Your progress compounds over time | Claw Cafe ascension · L1–L5 growth per desk |

**Safe marketing:** *“Every Claw remembers who you are, what you approved, and what happened last week — on your server, not in a vendor’s cloud.”*

### 3. Trust loop — *Autonomy earns its way in*

| Buyer line | Appliance proof |
|------------|-----------------|
| Nothing goes live by accident | Go Live checklists per flagship Claw |
| Money moves and posts need your OK | Approval strip · sovereign confirm |
| Cross-Claw reads need consent | CCP consent matrix |
| Pull the plug on outbound AI | eno2 egress · physical kill-switch story |

**Safe marketing:** *“Autonomy with boundaries — you stay the principal; the box earns delegation over time.”*

### Diagram (deck / landing)

```text
  Discover  →  channels · heartbeat · real app events
       ↓
  Act       →  Claw desk · eno2 bridges (when allowed)
       ↓
  Remember  →  on-box stores · shared context mesh · Cafe ledger
       ↓
  Verify    →  Go Live · your approval · consent gates
       ↓
  Repeat
```

---

## Comparison block (vs chat SaaS)

| | Chat subscription | CurXor OS |
|--|-------------------|-----------|
| Memory | Thread window / vendor cloud | **On-appliance stores + shared context mesh** |
| Team shape | One general assistant | **9 Claw verticals + The Forge** |
| Always-on | Tab open / per-token API | **Scheduler + channels on your box** |
| Before money moves | Hope the model behaves | **Go Live + approval gates** |
| Cost | Per-token rent | **Pay once · local inference default** |

---

## Flagship proof points (persona / Claw pages)

Each operate Claw demonstrates one loop end-to-end in demo copy:

| Claw | Loop story |
|------|------------|
| **Outreach** | Inbound → sequence → approval → sent |
| **Capital** | Rules → paper/live gate → trade approval |
| **Creator** | Draft → publish checklist → outbound post |
| **The Forge** | Mint → Cafe event → new desk |
| **Claw Cafe** | Real activity → ascension → deeper OS unlocks |

Tier C previews (Signal, Swarm, Vital depth, etc.) stay **Coming Soon** — do not claim loops you cannot demo on hardware.

---

## Differentiators to add (pairs with [PRODUCT-POSITIONING.md](PRODUCT-POSITIONING.md))

7. **Three loops baked in** — work, memory, and trust are OS primitives, not plugins  
8. **Specialists, not one assistant** — Capital doesn’t pretend to be your outreach team  
9. **Cafe as living mirror** — see your team react to *real* use (screenshot/video at G3)

---

## Paste-ready paragraph (About · Press · deck)

> CurXor OS isn’t a chatbot you prompt and forget. It’s a sovereign appliance built around **work, memory, and trust loops**: specialized Claws that keep checking and acting on your schedule, persist everything that matters on your metal and the Claw Context mesh, and only go live on work that matters after **Go Live** checklists and your explicit approval. Ten digital employees, one Forge to mint more, and Claw Cafe as the living mirror of real use — pay once, run local inference by default, optional frontier keys when you choose. Autonomy that earns its way in, not autonomy that runs away.

---

## Words to use · words to avoid

| Use on storefront | Avoid on main landing |
|-------------------|------------------------|
| Digital employees · sovereign metal · approval · Go Live | Loop engineering · orchestration · MCP |
| Always-on · remembers · your box | Delegation queue · heartbeat · scheduler |
| Ten specialists · Forge · Cafe | Build Plane · Master AI (until G4+ demo) |
| $0/mo API · eno2 egress | Self-hosted n8n · “fully autonomous” without gates |

**Optional `/for-builders` page (G3+):** extend the OS with your dev subscription — two-plane story for power users only. See IDEA-G13 in appliance roadmap.

---

## Implementation checklist (storefront repo)

| # | Task | Gate | Roadmap |
|---|------|------|---------|
| L1 | Add three-loop section to homepage (`Hero` follow-on or new `HowItWorks`) | G3 | IDEA-G11 |
| L2 | Hero A/B copy from this doc | G3 | IDEA-G11 |
| L3 | Cafe screenshot/video in hero or demo band | G3 | IDEA-G01 + G11 |
| L4 | Trust-loop graphic (Go Live + approval) | G3 | IDEA-G12 |
| L5 | Update persona pages with per-Claw loop one-liner | G3 | IDEA-G11 |
| L6 | Pitch deck speaker notes — three loops slide | G3 | IDEA-G11 |
| L7 | `/for-builders` optional route | G3+ | IDEA-G13 |
| L8 | Honest live status feed (optional public) | G3–G4 | IDEA-G10 |

**Do not block pre-order on L1–L8.** Copy in this doc is valid for founder conversations before hardware captures.

---

## Sync with appliance

When appliance ships new loop-visible features, update this doc and run `npm run sync:appliance`:

- New Go Live steps on flagships → Trust loop table  
- Cafe ascension gates → Trust loop · Master AI tease (G4+ only)  
- Channels added → Work loop table  
- Build Plane runtime (BP5+) → `/for-builders` only · not main hero

Cross-repo pointer: [SYNC.md](SYNC.md) · [GTM-CHECKLIST.md](GTM-CHECKLIST.md)
