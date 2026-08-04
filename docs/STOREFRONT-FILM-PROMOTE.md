# Storefront film promote — Aug 2026

> **Wave (2026-08-04):** Hero badge **v5.01** → curxor.ai as LIVE SEND category vision  
> **Prior wave (2026-08-02):** investor v3 · inception v3 · hero badge v4  
> **Owner:** CDO / storefront · masters remain in curxor-os  
> **Homepage cold hero:** unchanged (GTM still) · quiet “Watch category film” links into `/signal#category-film`  
> **Prod:** verify Content-Length after deploy — badge-v5.01 ≈ 18931045

---

## What went live where (current)

| Job | Master | Public URL strategy | Surfaces |
|-----|--------|---------------------|----------|
| Category / hype | hero-category-badge-v5.01 | **Versioned URL** `…/hero-category-badge-v5.01.mp4` | `/signal` default tab, `/press`, press zip, journal update, hero film links |
| Category short | hero-category-badge-v4 | Keep `…/hero-category-badge-v4.mp4` | Cold / short asks · `/signal` “Short cut” · press |
| Diligence | investor-proof-v3 | Swap A → `…/g3-investor-proof-v1.mp4` (+ `*-v3` sibling) | `/press`, pitch deck links |
| Warm intro | inception-reel-v3 | Swap A → `…/g3-inception-reel-v1.mp4` (+ `*-v3` sibling) | `/signal` product tab, `/press` |

Jul `hero-category-badge-v1.mp4` bytes left in place for rollback — not overwritten.  
v4 kept as short alternate — not deleted.

---

## Creative decisions

- **v5.01** = live category send (~91s) · night settle · Kin on night (not egress) · Cap/Work/Creator egress.
- **v4** = short alternate (~62s).
- `/signal` = two tabs only (vision + warm). Diligence stays `/press`.
- Homepage: text + industrial chip → `/signal#category-film` · no autoplay · no cold hero film.
- Journal: `/journal/category-vision-film` — honest concept framing (added 2026-08-04 align pass).
- Nouns: desk crew · crewmate · Crew Cafe. No G-milestone codes in public copy.

---

## Sync / code touchpoints

- `scripts/sync-g3-assets.ts` — stage badge v5.01 + v4; press zip prefers v5.01
- `src/lib/g3-demo.ts` — `heroCategoryBadge` + `heroCategoryBadgeShort`
- `src/components/CategoryFilmSection.tsx` — ~91s + short-cut link
- `src/components/Hero.tsx` · `HeroProductVisual.tsx` — Watch category film
- `src/lib/press.ts` · `src/lib/journal.ts`
- Docs: `HERO-FILM-HANDOFF.md`, `PITCH-DECK.md`, `GTM-CHECKLIST.md`

---

## Residual risks

1. CDN may stick old MP4 bytes — hard-refresh / re-probe Content-Length after deploy.
2. Bookmarks to `hero-category-badge-v4.mp4` still get the short cut (intentional).
3. Do not put dream/category film as homepage cold hero autoplay without CEO gate.

---

## Rollback

1. Point `categoryFilmAssets.heroCategoryBadge` back to `/demo/hero-category-badge-v4.mp4`.
2. Revert journal slug / press labels if needed.
3. Redeploy prior asset commit for bytes if CDN stuck.
