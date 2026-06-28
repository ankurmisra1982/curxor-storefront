# CurXor Storefront

GTM site and marketing workspace for **CurXor OS** — sovereign edge appliance on the MINISFORUM MS-S1 MAX.

> **Hardware:** MS-S1 MAX unboxed **2026-06-28** — G1 golden path in progress (FRE green; eno cables + verify pending). Appliance: [`../curxor-os/`](../curxor-os/). This repo is **landing page, pre-order, and GTM docs**. Status: [docs/CTO-STATUS-REPORT.md](docs/CTO-STATUS-REPORT.md).

## Site (this repo)

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build |

**Live stack:** Next.js 15 · Tailwind · Resend email capture · Stripe pre-order · 3D hardware hero · synced Claw roster from `appliance-sync.ts` (9 verticals + The Forge).

## GTM docs (from appliance audit)

| Document | Use |
|----------|-----|
| [Appliance audit](docs/APPLIANCE-AUDIT.md) | Full stack status, gaps, first-boot checklist |
| [Product positioning](docs/PRODUCT-POSITIONING.md) | Messaging, personas, guardrails |
| [Technical handoff](docs/TECHNICAL-HANDOFF.md) | Spec sheet for accurate copy |
| [GTM checklist](docs/GTM-CHECKLIST.md) | Done vs todo while waiting for hardware |
| [Feature & function (appliance)](../../curxor-os/docs/FEATURE-FUNCTION.md) | Full product scope, maturity, API catalog |
| [Feature & function (storefront)](docs/FEATURE-FUNCTION.md) | GTM site capabilities |
| [Marketing ↔ appliance sync](docs/SYNC.md) | Canonical Claw naming + sync from `ootb-apps.ts` |
| [CTO status report](docs/CTO-STATUS-REPORT.md) | Cross-repo gate status · GTM do/don't · updated after appliance milestones |
| [Pitch deck (markdown)](docs/PITCH-DECK.md) | 15-slide investor narrative + appendix |
| [Pitch deck (PowerPoint)](docs/CurXor-Pitch-Deck-Speaker-Notes.pptx) | Branded `.pptx` with speaker notes — `npm run export:pitch-deck` |

## Repo split

```
C:\Users\ankur\curxor storefront\   ← this repo (GTM + curxor.ai)
C:\Users\ankur\curxor-os\           ← appliance software → /opt/curxor/
```

Appliance operator guides: `../curxor-os/docs/README.md`
