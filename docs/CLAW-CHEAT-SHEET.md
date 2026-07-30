# Desk Crew Cheat Sheet — GTM + storefront handoff

> **Machine source:** [claw-cheat-sheet.json](./claw-cheat-sheet.json) · synced to `curxor storefront` via `npm run sync:appliance`  
> **Appliance canonical:** [ootb-apps.ts](../../pillar-4-dashboard/lib/ootb-apps.ts) · [TIER-C-PARITY.md](../curxor-os/TIER-C-PARITY.md)

**13 surfaces** · July 2026 post–TC-PARITY + SkillSpector.

## Status key

| Label | Meaning |
|-------|---------|
| **Live** | Flagship or Crew Cafe depth — exit-demo / GTM proof path |
| **Scoped · Under Construction** | Operate desk preview — L1–L5 on-box, production depth later |
| **Scoped · Preview** | Universal shell (Kin, Signal) — hub/household, not employee desk |

---

## Live

### The Forge · `/forge`
- Mint custom crewmates on bare metal
- Framework / Island / Import · forged desks on the appliance
- SkillSpector SS0 blocks malicious bundles
- L1–L5 Sketcher → Foundry

### Capital · `/my-capital`
- Rules + portfolio · paper/live Alpaca path
- Broker bridges via eno2
- Social alpha + approval flows
- L1–L5 Learner → Principal

### Creator · `/my-content`
- Queue, calendar, publish, engage inbox
- Digital bridges on eno2
- L1–L5 Explorer → Studio

### Outreach · `/my-work`
- Sequences, CRM desk, morning brief
- Connector bridges · handshake to Capital/Creator
- L1–L5 Explorer → Executive

### Crew Cafe · `/crew-cafe`
- Pixel room on real cross-crew events
- L1–L5 + G1–G6 ascension
- Not full Engage/DM product

---

## Scoped

### Under Construction (operate desks)

| Lane | Route | One-liner |
|------|-------|-----------|
| Arbitrage | `/my-shop` | Multi-channel margin preview |
| Vital | `/my-vital` | Longevity Lab + bridge preview |
| Gamer | `/my-game` | Play · Stream · Make + Steam receipt |
| Learn | `/my-learn` | Kin-linked tutor preview |
| Estate | `/my-estate` | Legal · Property · Tax vault |
| Swarm | `/robotaxi` | Dispatch grid + Robotaxi horizon |

### Preview (universal shell)

| Lane | Route | One-liner |
|------|-------|-----------|
| Kin | `/my-family` | Household identity hub |
| Signal | `/optimus` | Humanoid Home Hub |

---

## GTM truth

- **Lead with:** Capital, Creator, Outreach, The Forge
- **Moat:** Crew Cafe (real event mirror)
- **Do not say:** all crewmates production-ready; live fleet/clinical/tutoring/robot today

---

## Storefront sync

```bash
cd "../curxor storefront"
npm run sync:appliance
```

Updates `src/lib/generated/claw-cheat-sheet-sync.ts` and roster cards on `/architecture#claw-roster`.
