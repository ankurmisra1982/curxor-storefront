# CurXor social media assets

Industrial brand: black `#000000`, neon purple `#BF5AF2`, JetBrains Mono.

**Logo source:** `docs/assets/CurXor-Hardware-Badge.svg` → `npm run sync:brand` regenerates `public/brand/` and profile PNGs below.

## Live profiles

| Platform | URL | Handle |
|----------|-----|--------|
| X | https://x.com/curxorai | @curxorai |
| LinkedIn | https://www.linkedin.com/in/curxor-systems-222648418/ | CurXor Systems |
| Facebook | https://www.facebook.com/profile.php?id=61590859873651 | CurXor |
| Instagram | https://www.instagram.com/curxorsystems/ | @curxorsystems |
| TikTok | https://www.tiktok.com/@curxorai | @curxorai |
| YouTube | https://www.youtube.com/@curxorai | @curxorai |

Site footer and JSON-LD `sameAs` pull from `src/lib/config.ts` → `socialProfiles`.

## Profile photos (square)

| File | Use |
|------|-----|
| `curxor-profile-logo.png` | **Default** — X, LinkedIn, Facebook, YouTube icon |
| `curxor-profile-instagram.png` | Instagram (circle crop) |
| `curxor-profile-tiktok.png` | TikTok (optimized for small circular crop) |

Recommended upload size: **1024×1024** (platforms downscale).

## Cover / banner images

| File | Platform | Target dimensions |
|------|----------|-------------------|
| `curxor-banner-x.png` | X header | 1500×500 |
| `curxor-banner-linkedin.png` | LinkedIn cover | 1584×396 (1128×191 min) |
| `curxor-banner-facebook.png` | Facebook cover | 820×312 display (upload 1640×624+) |
| `curxor-banner-youtube.png` | YouTube channel art | 2560×1440 — keep text in **center safe zone** |

Generated for build mode — refine with product photography when MS-S1 assets are ready.
