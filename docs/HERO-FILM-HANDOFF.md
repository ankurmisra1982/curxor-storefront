# Storefront handoff — Hero film v5.1 (G3)

> **Source:** `../curxor-os` commit **`13b6f26`** · Jul 2026  
> **Canonical script:** `../curxor-os/docs/gtm/HERO-FILM-SCRIPT-v5.md`  
> **Gate:** G3 comp + script · **not** cold homepage hero until G4

Full handoff spec (sync from sibling): [STOREFRONT-HERO-FILM-HANDOFF.md](../curxor-os/docs/gtm/STOREFRONT-HERO-FILM-HANDOFF.md)

---

## Tier rule

| Surface | Use film? |
|---------|-----------|
| Homepage pre-order | **No** — keep GTM hero |
| `/signal` · `/press` · deck | **Yes** |

---

## MP4 assets (sync via `npm run sync:g3-assets`)

| File | Runtime | Use |
|------|---------|-----|
| `hero-category-badge-v1.mp4` | ~61s | Category vision · XOR wake · badge comp + VO |
| `hero-category-v1.mp4` | ~90s | Product proof · Act I alias (= inception reel) |
| `hero-deck-loop-v1.mp4` | ~15s | Deck background loop |

**Comp plates:** `public/demo/hero-film/` (7 × @2x PNG)

**Re-sync:**

```powershell
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
☑ /signal — CategoryFilmSection · vision (~61s) default tab + product (~90s) tab
☑ /press — badge MP4 + comp plates + investor proof + press zip
☑ hero-category-badge-v1.mp4 — synced to public/demo/
☑ hero-category-v1.mp4 — synced (~90s Act I alias)
☑ Direct MP4 links on curxor.ai/demo/
☐ Do NOT swap homepage H1 until G4
☐ HERO-v2 — live Layer A badge shoot + full 90s A+B+C merge (post-validation)
```

---

## Fundraise URLs (copy-paste)

| Asset | URL |
|-------|-----|
| Category vision (~61s) | https://curxor.ai/demo/hero-category-badge-v1.mp4 |
| Product proof (~90s) | https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4 |
| Both embedded | https://curxor.ai/signal#category-film |
