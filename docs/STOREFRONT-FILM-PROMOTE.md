# Storefront film promote — Aug 2026

> **Wave (2026-08-06):** Hero badge **v6** → curxor.ai as LIVE SEND category vision  
> **Prior wave (2026-08-04):** hero badge v5.01 · **Before that (2026-08-02):** investor v3 · inception v3 · badge v4  
> **Owner:** CDO / storefront · masters remain in curxor-os  
> **Homepage cold hero:** unchanged (GTM still) · quiet “Watch category film” links into `/signal#category-film`  
> **Prod:** verify Content-Length after deploy — badge-v6 ≈ **29419799** (v5.01 ≈ 19210433 stays served)

---

## What went live where (current)

| Job | Master | Public URL strategy | Surfaces |
|-----|--------|---------------------|----------|
| Category / hype | hero-category-badge-**v6** | **Versioned URL** `…/hero-category-badge-v6.mp4` | `/signal` default tab, `/press`, press zip, journal update, hero film links |
| Category prior | hero-category-badge-v5.01 | Keep `…/hero-category-badge-v5.01.mp4` **served** | Rollback + every link already sent to an investor |
| Category short | hero-category-badge-v4 | Keep `…/hero-category-badge-v4.mp4` | Cold / short asks · `/signal` “Short cut” · press |
| Diligence | investor-proof-v3 | Swap A → `…/g3-investor-proof-v1.mp4` (+ `*-v3` sibling) | `/press`, pitch deck links |
| Warm intro | inception-reel-v3 | Swap A → `…/g3-inception-reel-v1.mp4` (+ `*-v3` sibling) | `/signal` product tab, `/press` |

Jul `hero-category-badge-v1.mp4` bytes left in place for rollback — not overwritten.  
v4 kept as short alternate — not deleted.

---

## Creative decisions

- **v6** = live category send (~89s) · **first cut at 1920x1080** · adds the phone-Approve beat,
  a moving egress, a Cafe pixel-room reveal and a Flight Command scroll · night settle and the
  Cap/Work/Creator egress carry over from v5.01.
- **v5.01** = prior send (~91s, 1440x900). Not retired — bytes stay served under their own URL.
- **v4** = short alternate (~62s).
- `/signal` = two tabs only (vision + warm). Diligence stays `/press`.
- Homepage: text + industrial chip → `/signal#category-film` · no autoplay · no cold hero film.
- Journal: `/journal/category-vision-film` — honest concept framing (added 2026-08-04 align pass).
- Nouns: desk crew · crewmate · Crew Cafe. No G-milestone codes in public copy.

---

## Sync / code touchpoints

- `scripts/sync-g3-assets.ts` — stages every badge cut under its own versioned URL; press zip
  takes the newest available
- `src/lib/g3-demo.ts` — `heroCategoryBadge` + `heroCategoryBadgePrior` + `heroCategoryBadgeShort`
- `src/components/CategoryFilmSection.tsx` — runtime label, and **per-film aspect ratio**: v6 is
  16:9 while the product cut is still 16:10, so a single shared frame letterboxes one of them
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

1. Point `categoryFilmAssets.heroCategoryBadge` at `categoryFilmAssets.heroCategoryBadgePrior`
   (v5.01). Its bytes are already staged and served, so this is a one-line code change with no
   re-sync and no asset redeploy.
2. Restore `aspect: "aspect-[16/10]"` on the badge entry in `CategoryFilmSection.tsx` — v5.01 is
   1440x900 and will letterbox inside the 16:9 frame.
3. Revert runtime labels ~89s → ~91s in `press.ts`, `journal.ts`, `CategoryFilmSection.tsx`.
4. Redeploy prior asset commit for bytes only if the CDN is stuck.
