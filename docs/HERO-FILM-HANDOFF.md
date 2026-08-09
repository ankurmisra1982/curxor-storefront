# Storefront handoff — Hero film (Aug 2026 promote)

> **Source:** film worktree / sibling `curxor-os` investor-pack · **v8.2 LIVE SEND 2026-08-09**  
> **Canonical status:** `HERO-BADGE-V8.2-STATUS.md` · `LIVE-SEND.md`  
> **Gate:** Category + warm intro on `/signal` · diligence on `/press` · homepage links only (no cold-hero autoplay)

Full tier rule (sync from sibling): [STOREFRONT-HERO-FILM-HANDOFF.md](../curxor-os/docs/gtm/STOREFRONT-HERO-FILM-HANDOFF.md)

Promote log: [STOREFRONT-FILM-PROMOTE.md](STOREFRONT-FILM-PROMOTE.md)

---

## Tier rule

| Surface | Use film? |
|---------|-----------|
| Homepage pre-order | **No autoplay** — quiet “Watch category film” → `/signal#category-film` |
| `/signal` · `/press` · deck · fundraise | **Yes** — v8.2 default |

---

## MP4 assets (sync via `npm run sync:g3-assets`)

| File | Runtime | Use |
|------|---------|-----|
| `hero-category-badge-v8.2.mp4` | ~103s | Category vision · **LIVE SEND** default on `/signal` · 1920x1080 · music @0.45 |
| `hero-category-badge-v8.1.mp4` | ~103s | Voice-only twin (same picture) |
| `hero-category-badge-v8.mp4` | ~103s | Prior candidate — still staged |
| `hero-category-badge-v7.mp4` | ~99s | Storefront prior / already-sent links |
| `hero-category-badge-v6.mp4` | ~89s | Older prior — still served |
| `hero-category-badge-v5.01.mp4` | ~91s | Older prior — still served |
| `hero-category-badge-v4.mp4` | ~62s | Short alternate · cold / short asks |
| `hero-category-badge-v1.mp4` | ~61s | Jul archive — kept for rollback; not cited as vision default |
| `g3-inception-reel-v1.mp4` | ~89s | Warm product intro (Swap A of v3) · `/signal` product tab |
| `g3-investor-proof-v1.mp4` | ~2:50 | Diligence (Swap A of v3) · `/press` + deck links |
| `hero-deck-loop-v1.mp4` | ~15s | Deck background loop |

**Comp plates:** `public/demo/hero-film/` (7 × @2x PNG)

**Re-sync from the film worktree:**

```powershell
$env:CURXOR_OS_ROOT = "C:\Users\ankur\curxor-worktrees\hero-badge-v8"
npm run sync:g3-assets
```

---

## Live Figma

| Asset | URL |
|-------|-----|
| Design | https://www.figma.com/design/HhHzIabz3i1HoCT8q8R8Gv/CurXor-Hero-Film-v5.1 |
| Conductor proto | https://www.figma.com/proto/HhHzIabz3i1HoCT8q8R8Gv/CurXor-Hero-Film-v5.1?starting-point-node-id=3%3A13 |
| FigJam beats | https://www.figma.com/board/rqIXNcul3HG2hrGaD9emtw |

---

## Build checklist (storefront)

```
☑ /signal — CategoryFilmSection · vision (~103s v8.2) default + warm intro (~89s) tab
☑ /press — badge v8.2 + short v4 + inception + investor proof
☑ hero-category-badge-v8.2.mp4 — staged + cited as vision default (v7 prior)
☑ hero-category-badge-v4.mp4 — kept as short alternate
☑ Homepage — Watch category film → `/signal#category-film` (no autoplay)
☑ Journal — `/journal/category-vision-film` links → v8.2
☑ inception + investor — Swap A on stable *-v1 URLs
☑ Direct MP4 links on curxor.ai/demo/
☐ Do NOT autoplay category film on homepage cold hero
☐ Overwrite public hero-category-badge-v1.mp4 — only on explicit ask + archive rename
```

---

## Fundraise URLs (copy-paste)

| Asset | URL |
|-------|-----|
| Category vision (~103s) | https://curxor.ai/demo/hero-category-badge-v8.2.mp4 |
| Category short (~62s) | https://curxor.ai/demo/hero-category-badge-v4.mp4 |
| Product proof (~89s) | https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4 |
| Investor proof (~2:50) | https://curxor.ai/demo/investor/g3-investor-proof-v1.mp4 |
| Both embedded | https://curxor.ai/signal#category-film |
| Journal note | https://curxor.ai/journal/category-vision-film |
