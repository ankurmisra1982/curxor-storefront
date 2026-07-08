# Storefront handoff — Hero film v5.1 (G3)

> **Source:** `../curxor-os` commit **`46f9257`** · Jul 3 2026  
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

## Assets in this repo

**Comp plates:** `public/demo/hero-film/` (7 × @2x PNG)

| File | Beat |
|------|------|
| `01-conductor-glance@2x.png` | Conductor glance |
| `02-badge-command@2x.png` | Patron Badge · XOR |
| `03-forge-notification@2x.png` | Forge · Narrative Claw |
| `04-egress-push@2x.png` | Egress push |
| `05-final-metal@2x.png` | Payoff 1 |
| `06-final-mint@2x.png` | Payoff 2 |
| `07-final-dream@2x.png` | Dream H1 |

**Re-sync:**

```powershell
Copy-Item ..\curxor-os\docs\gtm\hero-film-figma\exports\*.png public\demo\hero-film\ -Force
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
☑ /signal — Category film section + category/inception film tabs
☑ /press — comp plate downloads + investor proof MP4 + script ref
☑ hero-category-v1.mp4 — synced to public/demo/ (~90s · Act I alias = g3-inception-reel-v1)
☑ CategoryFilmSection — tab/chyron ~90s Act I · not ~61s badge film · v2 deferred post-validation
☑ G3 /home capture — _capture-home.png → g3/01-home.png
☐ Deck — insert payoff frame or 15s loop when cut
☐ Do NOT swap homepage H1 until G4
☐ HERO-v2 — full Layer A badge + Layer C payoff merge (post-close film chat)
```

---

## 90s spine

Cold open → Badge XOR → conductor glance → Cafe → three Claws → Home → egress → Forge → box pullback.

VO + cards: `../curxor-os/docs/gtm/HERO-FILM-SCRIPT-v5.md`
