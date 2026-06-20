# CurXor Storefront

GTM site and marketing workspace for **CurXor OS** — sovereign edge appliance on the MINISFORUM MS-S1 MAX.

> **Holding pattern:** MS-S1 MAX not yet on hand. Appliance engineering: [`../curxor-os/`](../curxor-os/). This repo is **landing page, pre-order, and GTM docs**.

## Site (this repo)

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build |

**Live stack:** Next.js 15 · Tailwind · Resend email capture · Stripe pre-order · 3D hardware hero · seven-app ecosystem grid (`src/lib/config.ts`).

## GTM docs (from appliance audit)

| Document | Use |
|----------|-----|
| [Appliance audit](docs/APPLIANCE-AUDIT.md) | Full stack status, gaps, first-boot checklist |
| [Product positioning](docs/PRODUCT-POSITIONING.md) | Messaging, personas, guardrails |
| [Technical handoff](docs/TECHNICAL-HANDOFF.md) | Spec sheet for accurate copy |
| [GTM checklist](docs/GTM-CHECKLIST.md) | Done vs todo while waiting for hardware |
| [Marketing ↔ appliance sync](docs/SYNC.md) | Naming map (Invest Agent vs My Capital, etc.) |

## Repo split

```
C:\Users\ankur\curxor storefront\   ← this repo (GTM + curxor.ai)
C:\Users\ankur\curxor-os\           ← appliance software → /opt/curxor/
```

Appliance operator guides: `../curxor-os/docs/README.md`
