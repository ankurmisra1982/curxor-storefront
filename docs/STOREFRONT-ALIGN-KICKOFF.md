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
- Two films on /signal, diligence on /press:
  - **hero-category-badge-v4.mp4 (~62s)** = category vision · XOR wake · **DEFAULT** on /signal#category-film
  - **g3-inception-reel-v1.mp4 (~89s)** = warm product intro (Swap A of locked v3)
  - **g3-investor-proof-v1.mp4 (~2:50)** = diligence · /press + deck (not a /signal tab)
- Honesty: badge film is comp Layer A + VO · live badge shoot still open (HERO-v2)
- See [STOREFRONT-FILM-PROMOTE.md](./STOREFRONT-FILM-PROMOTE.md)

## Key live URLs (must all work)

| Asset | URL |
|-------|-----|
| **Category vision (~62s)** | https://curxor.ai/demo/hero-category-badge-v4.mp4 |
| Product proof (~89s) | https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4 |
| Investor proof (~2:50) | https://curxor.ai/demo/investor/g3-investor-proof-v1.mp4 |
| Both embedded | https://curxor.ai/signal#category-film |
| Press kit | https://curxor.ai/press |

## Tasks (in order)

1. **Prod smoke** — HEAD/GET these URLs; report status + content-length:
   - https://curxor.ai/demo/hero-category-badge-v4.mp4  ← primary vision cut
   - https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4
   - https://curxor.ai/demo/investor/g3-investor-proof-v1.mp4
   - https://curxor.ai/signal#category-film (vision ~62s tab must be default)
   - https://curxor.ai/press (badge + product + diligence rows + zip)

2. **Local sync audit** — run `npm run sync:g3-assets` · confirm badge v4 + Swap A inception/investor · press zip includes v4

3. **UI/copy drift check** — CategoryFilmSection tabs, press.ts, PITCH-DECK.md, HERO-FILM-HANDOFF all cite badge v4 + inception *-v1

4. **PPTX gap** — regenerate speaker notes deck:
   - `npm run export:pitch-deck` (or python scripts/export-pitch-deck-pptx.py)
   - Confirm badge URL in Ask+links slide: https://curxor.ai/demo/hero-category-badge-v4.mp4
   - Commit regenerated .pptx if diff is clean

5. **Build gate** — `npm run build` green

6. **Report** — short alignment matrix: URL | expected | actual | fix needed Y/N

## Out of scope (explicit)

- G11 three-loop homepage · G12 trust graphic · G13 /for-builders
- HERO-v2 live badge shoot · full 90s A+B+C merge
- Homepage hero swap · paid ads · rebrand
- Overwriting hero-category-badge-v1.mp4 without explicit ask
- curxor-os product code

## Done when

- hero-category-badge-v4.mp4 verified 200 on prod
- /signal defaults to ~62s vision tab with working MP4
- /press lists badge v4 + inception + diligence; zip downloadable
- PITCH-DECK.md + exported PPTX include hero-category-badge-v4 URL
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
