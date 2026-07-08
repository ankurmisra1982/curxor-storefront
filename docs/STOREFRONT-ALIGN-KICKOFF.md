# Storefront film alignment — Agent kickoff

> **Room:** Agent build chat · `curxor storefront` repo  
> **Goal:** Fundraise-ready category film on curxor.ai · no scope creep  
> **Sibling:** `../curxor-os` · handoff [HERO-FILM-HANDOFF.md](./HERO-FILM-HANDOFF.md)

Copy everything inside the fence into a new **Agent build chat** in `curxor storefront`.

---

## Agent kickoff (copy/paste)

```
Sprint: STOREFRONT-FILM-ALIGN — post badge-film deploy verification
Goal: Confirm curxor.ai is fundraise-ready for category film · close residual gaps · no scope creep
Baseline: main @ latest · sibling curxor-os master @ latest

@ docs/HERO-FILM-HANDOFF.md
@ docs/GTM-CHECKLIST.md
@ docs/PITCH-DECK.md
@ scripts/sync-g3-assets.ts
@ scripts/export-pitch-deck-pptx.py
@ src/components/CategoryFilmSection.tsx
@ src/lib/g3-demo.ts
@ src/lib/press.ts
@ ../curxor-os/docs/gtm/MASTER-FILM-ASSET.md
@ ../curxor-os/docs/founder/OUTREACH-FORWARDABLE.md

## North star (do not violate)

- Homepage H1 stays GTM: *Your AI team. On a box you own.* — NO category film on cold homepage until G4
- Two films, two jobs:
  - **hero-category-badge-v1.mp4 (~61s)** = category vision · XOR wake · **DEFAULT** on /signal#category-film
  - **g3-inception-reel-v1.mp4 (~90s)** = product proof · TWIST/J-Cal LEAD async asset (hero-category-v1.mp4 alias)
- Honesty: badge film is comp Layer A + G3 + VO · live badge shoot still open (HERO-v2)

## Key live URLs (must all work)

| Asset | URL |
|-------|-----|
| **Category vision (~61s)** | https://curxor.ai/demo/hero-category-badge-v1.mp4 |
| Product proof (~90s) | https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4 |
| Both embedded | https://curxor.ai/signal#category-film |
| Press kit | https://curxor.ai/press |

## Tasks (in order)

1. **Prod smoke** — HEAD/GET these URLs; report status + content-length:
   - https://curxor.ai/demo/hero-category-badge-v1.mp4  ← primary vision cut
   - https://curxor.ai/demo/hero-category-v1.mp4
   - https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4
   - https://curxor.ai/signal#category-film (vision ~61s tab must be default)
   - https://curxor.ai/press (badge + product film rows + zip)

2. **Local sync audit** — run `npm run sync:g3-assets` · confirm `public/demo/hero-category-badge-v1.mp4` exists · press zip includes badge

3. **UI/copy drift check** — CategoryFilmSection tabs, press.ts entries, PITCH-DECK.md honesty matrix, HERO-FILM-HANDOFF checklist all reference hero-category-badge-v1 as vision default

4. **PPTX gap** — regenerate speaker notes deck:
   - `npm run export:pitch-deck` (or python scripts/export-pitch-deck-pptx.py)
   - Confirm badge URL in Ask+links slide: https://curxor.ai/demo/hero-category-badge-v1.mp4
   - Commit regenerated .pptx if diff is clean

5. **Build gate** — `npm run build` green

6. **Report** — short alignment matrix: URL | expected | actual | fix needed Y/N

## Out of scope (explicit)

- G11 three-loop homepage · G12 trust graphic · G13 /for-builders
- HERO-v2 live badge shoot · full 90s A+B+C merge
- Homepage hero swap · paid ads · rebrand
- curxor-os product code

## Done when

- hero-category-badge-v1.mp4 verified 200 on prod
- /signal defaults to ~61s vision tab with working MP4 + direct download link
- /press lists badge film + inception; zip downloadable
- PITCH-DECK.md + exported PPTX include hero-category-badge-v1 URL
- GTM-CHECKLIST reflects truth (check off or note gaps)
- Build green · commit only if fixes needed · push only if I say
```

---

## Related

| Doc | Purpose |
|-----|---------|
| [HERO-FILM-HANDOFF.md](./HERO-FILM-HANDOFF.md) | MP4 inventory · sync commands |
| [GTM-CHECKLIST.md](./GTM-CHECKLIST.md) | Done vs deferred |
| [PITCH-DECK.md](./PITCH-DECK.md) | Deck copy + live URLs |
| [../curxor-os/docs/founder/jcal-path/KICKOFF.md](../curxor-os/docs/founder/jcal-path/KICKOFF.md) | J-Cal execution kickoff (sibling) |
