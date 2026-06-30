# CurXor — Dream state overview (storefront)

> **Room:** GTM vision tier · investor · `/signal` · pitch deck · founder essay  
> **Status:** Locked Jun 2026  
> **Code:** `src/lib/dream-state.ts`  
> **Appliance canonical:** `../curxor-os/docs/curxor-os/DREAM-STATE-OVERVIEW.md` · `../curxor-os/docs/founder/profile.json` → `dreamState`  
> **GTM hero (ship now):** `src/lib/config.ts` · [LOOP-POSITIONING.md](./LOOP-POSITIONING.md) — do not swap main hero until G4

---

## Two tiers on curxor.ai

| Tier | Main hero today? | H1 |
|------|------------------|-----|
| **GTM · Act I** | **Yes** | Mint autonomous employees on bare metal. (`config.ts`) |
| **Dream state** | No until G4 | Designed around you. Owned by you. (`dream-state.ts`) |

Dream-state copy ships on **`/signal`**, pitch deck, press kit, and founder content — not as the only cold-traffic headline.

---

## Locked hero (dream state)

Import from `src/lib/dream-state.ts` or paste:

### H1
```
Designed around you. Owned by you.
```

### Subhead
```
CurXor is a sovereign AI system — custom hardware, CurXor OS, and an autonomous team that runs on your metal. Mint your Claws. Conduct your devices. No API rent.
```

### Thesis accent (layer 4 · `/signal` · footer · film)
```
The next interface isn't a device. It's the orchestrator on your desk.
```

---

## Naming lock — Claw vs orchestrator

**Locked Jun 2026.** Keep **Claw** as product noun. Do **not** rename to orchestrators.

| Term | Owns |
|------|------|
| **Conducts** (GTM verb) | Homepage accent — *Interfaces drift. Your desk conducts.* |
| **Orchestrator** (essay noun) | `/signal` payoff · deck · essays |
| **Claw** | Each vertical employee — Capital Claw, Creator Claw, … |
| **Signal Claw** | Conducts device/interface layer — robots · VR · home |
| **Master AI** | Horizon patron above the ten (not day-one GTM) |

**GTM accent (live · `config.ts`):**

> Interfaces drift. Your desk conducts.

**Essay one-liner (locked):**

> CurXor is the orchestrator on your desk. Claws are the team it runs.

### Storefront guardrails

| Surface | Rule |
|---------|------|
| **Home hero** | Lead with *employees* / *agents* · accent = conductor line → `/signal` |
| **FAQ / compare** | Say *AI agents* or *digital employees* before *Claws* |
| **App ecosystem grid** | Display names from `appliance-sync` — keep `* Claw` suffix |
| **`/signal`** | Orchestrator + device drift narrative · Claws as team on the desk |
| **Press boilerplate** | `press.ts` — use *Claws* after one plain-English clause |

### Never on buyer-facing copy

- “Ten orchestrators on your desk”
- “Claw” alone above the fold without *AI agents* or *digital employees*
- Rename slugs (`capital-claw`, `signal-claw`) — URLs and appliance IDs stay stable

### Safe gloss lines

- *Ten autonomous AI agents on your metal — Claws for capital, content, outreach, and more.*
- *Mint digital employees in The Forge — each one a Claw.*

---

## Symphony model (locked · live on homepage)

**Code:** `src/lib/symphony-metaphor.ts` · **`SymphonySection`** on `/` after “What is this?”

**Payoff:** *The symphony plays.*

```text
YOU (operator)     →  composer / principal — you own the score
CURXOR DESK        →  conductor + orchestrator — same desk, two registers
CLAWS              →  orchestra / sections — specialists in parallel
SIGNAL             →  acoustic reach — rooms, devices, VR
CLAW CAFE          →  the hall — ensemble presence
```

| Line | Copy |
|------|------|
| **Section H2** | *One desk conducts. The symphony plays.* |
| **Payoff** | *The symphony plays.* |
| **Bridge** | *The orchestrator on your desk — the conductor for your Claws.* |
| **Essay (symphony)** | *CurXor conducts on your desk. Claws are the orchestra.* |

**Also wired:** `WhatIsThisStrip` · `home-story` Act I/II · `NeuralLinkTeaser` · `/signal`

---

| Act | Hardware | OS | When |
|-----|----------|-----|------|
| **I · Prove** | MS-S1-class | CurXor OS on Ubuntu · four pillars | **Now** · pre-order |
| **II · Own the metal** | CurXor-designed desk appliance | Hardware-tuned stack | Post-investment |
| **III · Sovereign** | CurXor silicon + industrial | Fully sovereign CurXor OS | Destination |

**Honesty:** Pre-order copy describes Act I. Acts II–III are vision — say so in deck and `/signal`, not as shipped promises on the pricing block.

---

## Where to use on storefront

| Route / asset | Dream-state content |
|---------------|---------------------|
| `/signal` | Thesis accents · `dreamStateNaming.essayOneLiner` · horizon film |
| `docs/PITCH-DECK.md` | Investor paragraph · three acts slide |
| `src/lib/press.ts` | Boilerplate paragraph (vision clause optional) |
| Homepage | **GTM hero only** until G4 · orchestrator = accent link → `/signal` |
| `docs/PRODUCT-POSITIONING.md` | Category + naming cross-ref |

---

## Investor paragraph (paste)

See `dreamStateInvestorParagraph` in `src/lib/dream-state.ts` or `../curxor-os/docs/founder/profile.json` → `dreamState.investorParagraph`.

---

## Sync checklist

When appliance updates dream state in `curxor-os`:

1. Diff `../curxor-os/docs/curxor-os/DREAM-STATE-OVERVIEW.md`
2. Mirror changes here + `src/lib/dream-state.ts`
3. Skim `PRODUCT-POSITIONING.md` § Naming
4. No main-hero swap until CEO + G4 gate

---

## Related

| Doc | Role |
|-----|------|
| [PRODUCT-POSITIONING.md](./PRODUCT-POSITIONING.md) | GTM category · personas · naming ref |
| [LOOP-POSITIONING.md](./LOOP-POSITIONING.md) | Work · memory · trust loops |
| [SYNC.md](./SYNC.md) | Appliance ↔ storefront sync |
| [PITCH-DECK.md](./PITCH-DECK.md) | Investor slides |
| `../curxor-os/docs/founder/storefront-hero-copy.md` | GTM paste blocks (Act I) |
