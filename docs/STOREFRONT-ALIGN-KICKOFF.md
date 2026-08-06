# Storefront film + deck alignment — Agent kickoff

> **Room:** Agent build chat · `curxor storefront` repo  
> **Goal:** Fundraise-ready category film + deck mirror on curxor.ai · awareness polish only  
> **Sibling:** `../curxor-os` · film promote [STOREFRONT-FILM-PROMOTE.md](./STOREFRONT-FILM-PROMOTE.md) · handoff [HERO-FILM-HANDOFF.md](./HERO-FILM-HANDOFF.md)  
> **Deck pin:** **v1.7.2** founder-edited leave-behind — never blind-regenerate PPTX

Copy everything inside the fence into a new **Agent build chat** in `curxor storefront`.

---

## Agent kickoff (copy/paste)

```
Sprint: STOREFRONT-FILM-ALIGN — v5.01 LIVE SEND + deck v1.7.2 mirror
Goal: Confirm curxor.ai kickoff click path · close residual gaps · no scope creep
Baseline: main @ latest · sibling curxor-os master @ latest

@ docs/STOREFRONT-FILM-PROMOTE.md
@ docs/HERO-FILM-HANDOFF.md
@ docs/GTM-CHECKLIST.md
@ docs/PITCH-DECK.md
@ src/components/CategoryFilmSection.tsx
@ src/lib/g3-demo.ts
@ src/lib/press.ts
@ ../curxor-os/docs/founder/pitch-deck/PITCH-DECK.md
@ ../curxor-os/docs/founder/PITCH-DECK-VOICE.md

## North star (do not violate)

- Homepage H1 stays GTM — quiet “Watch category film” → /signal#category-film only
- **NO homepage category-film autoplay** · no cold hero MP4
- **NO public raise copy** on site (no $3M SAFE / seed ask on curxor.ai pages)
- Films on /signal, diligence on /press:
  - **hero-category-badge-v5.01.mp4 (~91s)** = category vision · **LIVE SEND DEFAULT** on /signal#category-film
  - **hero-category-badge-v4.mp4 (~62s)** = short alternate (link under vision tab · press)
  - **g3-inception-reel-v1.mp4 (~89s)** = warm product intro (second /signal tab)
  - **g3-investor-proof-v1.mp4 (~2:50)** = diligence · /press + deck (not a /signal tab)
- Nouns: desk crew · crewmate · Crew Cafe — no Claw in new copy
- Deck: v1.7.2 founder-edited PPTX — mirror from curxor-os; **never** `npm run export:pitch-deck` without Ankur confirm (wipes hand-edit)
- See [STOREFRONT-FILM-PROMOTE.md](./STOREFRONT-FILM-PROMOTE.md)

## Key live URLs (must all work)

| Asset | URL |
|-------|-----|
| **Category vision (~91s LIVE SEND)** | https://curxor.ai/demo/hero-category-badge-v5.01.mp4 |
| Category short (~62s) | https://curxor.ai/demo/hero-category-badge-v4.mp4 |
| Product proof (~89s) | https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4 |
| Investor proof (~2:50) | https://curxor.ai/demo/investor/g3-investor-proof-v1.mp4 |
| Both embedded | https://curxor.ai/signal#category-film |
| Journal | https://curxor.ai/journal/category-vision-film |
| Press kit | https://curxor.ai/press |

## Tasks (in order)

1. **Mirror check** — byte/hash compare storefront `docs/PITCH-DECK.md` + `docs/CurXor-Pitch-Deck-Speaker-Notes.pptx` vs `curxor-os/docs/founder/pitch-deck/`. Confirm version pin **v1.7.2**. If PPTX drifts, copy from OS — **do not** run `npm run export:pitch-deck` without Ankur confirm.

2. **Prod smoke** — timed HEAD/GET; report status + content-length:
   - https://curxor.ai/demo/hero-category-badge-v5.01.mp4  ← LIVE SEND (~18931045)
   - https://curxor.ai/demo/hero-category-badge-v4.mp4
   - https://curxor.ai/demo/investor/g3-inception-reel-v1.mp4
   - https://curxor.ai/signal#category-film (vision ~91s tab default + captions)
   - https://curxor.ai/journal/category-vision-film
   - https://curxor.ai/press (v5.01 + v4 + inception + diligence rows + zip)
   - https://curxor.ai/ — Watch category film → #category-film · no autoplay

3. **Ban scan (public pages)** — no Claw Cafe · CurXor 2.0 · $3M SAFE / seed ask on live HTML

4. **UI/copy drift check** — CategoryFilmSection, g3-demo.ts, press.ts, journal.ts, PITCH-DECK.md, HERO-FILM-HANDOFF, GTM-CHECKLIST all cite v5.01 default + v4 short + inception *-v1 · deck v1.7.2

5. **Build gate** — only if code changed: `npm run build` green

6. **Report** — PASS / NOTES / FAIL for kickoff path (X → /signal → film → optional press/journal). Gaps only. Propose edits; wait for execute unless Ankur says ship.

## Out of scope (explicit)

- Homepage category-film autoplay · public raise copy
- Blind `npm run export:pitch-deck` / rewriting founder-edited PPTX
- OS box deploy · DM/X copy · new features
- HERO-v2 live badge shoot · full 90s A+B+C merge
- Overwriting hero-category-badge-v1.mp4 without explicit ask
- curxor-os product code

## Done when

- Mirror: PITCH-DECK.md + PPTX match OS · pin v1.7.2
- hero-category-badge-v5.01.mp4 verified 200 on prod (Content-Length ≈ 18931045)
- /signal defaults to ~91s vision tab; shorter → v4; product tab → inception
- /press lists v5.01 + v4 + inception + diligence; journal category-vision-film live
- Homepage Watch category film → /signal#category-film · no autoplay
- GTM-CHECKLIST deck item = v1.7.2 founder-edited · no blind regen
- Commit only if fixes needed · push / deploy only if I say
```

---

## Related

| Doc | Purpose |
|-----|---------|
| [STOREFRONT-FILM-PROMOTE.md](./STOREFRONT-FILM-PROMOTE.md) | LIVE SEND film map · v5.01 / v4 / inception |
| [HERO-FILM-HANDOFF.md](./HERO-FILM-HANDOFF.md) | MP4 inventory · sync commands |
| [GTM-CHECKLIST.md](./GTM-CHECKLIST.md) | Done vs deferred · deck pin |
| [PITCH-DECK.md](./PITCH-DECK.md) | Deck copy + live URLs (mirror of OS) |
| [../curxor-os/docs/founder/jcal-path/KICKOFF.md](../curxor-os/docs/founder/jcal-path/KICKOFF.md) | J-Cal execution kickoff (sibling) |
