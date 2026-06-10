# Y.T.M. Homes & More — Design System

A complete, practical brand and UI system for **Y.T.M. Homes & More**, a family-run holiday-apartment brand on the Albanian Riviera. It exists to make every guest-facing touchpoint — website, booking, guest guides, social, signage, printed documents — feel **warm, clean, coastal, family-owned and professionally managed**.

---

## 1. Company & product context

**Who.** Y.T.M. Homes & More is a small, family-run business in **Saranda, Albania**. It manages two holiday apartments inside **Bougainvillea Bay**, a private seaside resort with residences and holiday accommodation on the Albanian Riviera.

**Apartments (sample data used across the kits).**
- **Sea-View Suite · Apt 12** — one-bedroom, sunset terrace, sea view. ~€95/night.
- **Garden Studio · Apt 7** — studio with pool access. ~€72/night.

**The job.** Turn the warmth and care of a thoughtful host into a credible, repeatable brand that works equally well on **Airbnb / Booking.com listings, a direct-booking site, WhatsApp messages, printed welcome guides and small in-apartment notices**. It should feel like boutique hospitality, not a generic real-estate listing.

**Brand personality.** Welcoming · trustworthy · sunny · relaxed — but never cheap or childish. Sits between *boutique hospitality*, *coastal lifestyle* and a *modern family-owned rental brand*.

### Sources provided
The only existing asset was the logo, supplied as three PNGs (now in `assets/`):
- `uploads/Logo_main.png` → `assets/logo/ytm-logo.png` (primary lockup) and `assets/logo/ytm-mark.png` (letters-only mark, cropped programmatically).
- `uploads/Group 13.png` → `assets/logo/ytm-logo-square.png` (square lockup).
- `uploads/Artboard - 1.png` → `assets/photography/saranda-sunset-terrace.png` (the logo set over a golden-hour photo of the Bougainvillea Bay terrace — our one piece of real photography and the signature hero image).

There is **no codebase, Figma file or prior brand guideline** — everything else here is built fresh from the logo.

---

## 2. Brand foundation: reading the logo

The logo is **"YTM"** in bold, friendly, slightly geometric block letters — each a different pastel: **sun yellow (Y)**, **lavender (T)**, **sage olive (M)** — with small grey dots punctuating each letter and a thin grey **signature script** reading *"Homes & More"* beneath. A small triangular notch in the T nods to the Albanian flag's eagle.

We kept the three pastels as the heart of the palette, added a coastal support cast (sea blue, terracotta, warm neutrals), refined the type into a usable three-font system, and turned the dots / colour-blocks / script into a small motif language.

---

## 3. Content fundamentals — how Y.T.M. writes

**Voice:** a thoughtful host, not a hotel chain. Friendly, helpful, clear and calm. Warm but organised — it should reassure guests the apartment is clean and professionally run.

- **Person.** Speak as **"we"** (the family) to the guest as **"you"**. Sign off as *"Yllka & family"*. Never corporate "the management".
- **Tone.** Calm and generous. Lead with welcome, then be precise about the practical thing. *"We're so happy to have you. Your key is in the black lockbox by the door — code 2480."*
- **Casing.** Sentence case everywhere — headings, buttons, labels. The only ALL-CAPS is the tracked **eyebrow/overline** (e.g. `BOUGAINVILLEA BAY · SARANDA`). Never shout in body copy.
- **Length.** Short sentences. One idea per line in guides and notices. Generous white space over dense paragraphs.
- **Numbers & specifics.** Be exact where it helps a guest act — times (`3:00 pm`), codes (`2480`), network names (`YTM-Apt12`), walking minutes (`5 minutes down`). Avoid vague filler.
- **Reassurance over rules.** Frame house rules as care for the next guest and the neighbours, not prohibitions. Pair any "no" with a "yes": *"You're welcome to smoke on the terrace — please never inside."* End rules with *"Something broke or spilled? It happens — just tell us."*
- **Emoji & symbols.** Used **sparingly and warmly** — a single `♥` or `☀` to sign off a note or sticker. Never multiple emoji, never as bullet icons (we use Lucide line icons for that). The `&` is written as an ampersand (it echoes the logo).
- **Script flourish.** The handwritten *"Homes & More"* / *"Thank you ♥"* / *"Enjoy Saranda"* line appears **once** per piece as a warm human sign-off — never for information.

**Sample copy blocks**
- Hero: *"Your home by the sea."* / *"Two warm, well-kept holiday apartments on the Albanian Riviera — looked after by our family, ready for yours."*
- Booking reassurance: *"You won't be charged yet — we'll confirm by WhatsApp."*
- Welcome note: *"Make yourself at home. Here are the essentials for a calm, comfortable stay — and please message us any time, day or night."*
- Direct-booking pitch: *"The warmth of a host, the ease of a hotel."*

---

## 4. Visual foundations

**Colour.** Built from the three logo pastels, each extended into a 9-step scale so the signature soft tones stay decorative while deeper steps do the working UI jobs.
- **Sun** `#E9D985`, **Lavender** `#CDB4DB`, **Sage olive** `#B2BD7E` (logo values at `-500`).
- **Sage is the primary action colour** (most grounded, best contrast at `-600/-700`). Lavender is the soft secondary; sun is for warmth/highlights.
- **Coastal support:** **Sea blue** `#548196` (links, info, trust) and **Terracotta** `#C97B5A` (sparing — urgency, sale tags, sunset accents).
- **Warm neutrals:** page canvas is **Cream `#FBF8F1`**, never pure white; surfaces step Cream → Shell → Sand; text is **warm Charcoal `#2E2A24`**, never black.
- Rule of thumb: large fields use pastels/neutrals; type and buttons use the `-600/-700/-800` steps. Tokens in `tokens/colors.css`.

**Type.** Three families (`tokens/typography.css`):
- **Display — Newsreader** (warm editorial serif, light weight, often *italic* for the emphasised word). Hero & headings.
- **Body/UI — Hanken Grotesk** (clean, friendly, highly readable). Everything functional.
- **Accent — Sacramento** (monoline signature script echoing the logo). Sign-offs only, one per piece.
- Display sets tight (`-0.02em`, line-height ~1.05); body is relaxed (line-height 1.6–1.7). *Substitution note — see §7.*

**Spacing & layout.** 8px grid, **generous and airy**. Page sections breathe (`--section-y` ≈ 104px). Content max 1200px; readable prose ≤ 68ch; documents 760px. Clean, calm, lots of negative space — closer to a travel magazine than a listings portal.

**Shape & radius.** Soft and rounded, never sharp. Inputs/cards 16–24px; buttons, chips and badges are full **pills**. Image frames 24–32px.

**Backgrounds.** Warm cream base. Decorative sections use soft diagonal **washes** (`--wash-coast / --wash-sunrise / --wash-dusk`) and occasional oversized pastel **dots/circles** drawn from the logo. Photography appears in rounded frames or full-bleed with a bottom **scrim** for legible text. No harsh gradients, no noise/grain, no busy patterns.

**Shadows.** Soft, warm-tinted (charcoal at low opacity), never hard grey UI drop-shadows. `--shadow-card` for listings, `--shadow-lg` on hover/modals. Borders are hairline sand (`--border-soft/-default`).

**Cards.** White (or tinted) surface, 24px corners, 1px sand border, soft warm shadow. Interactive cards lift gently (`translateY(-4px)`) on hover.

**Motion.** Calm and gentle — short fades and a soft `translateY`. Easing `--ease-out` (cubic-bezier(.22,.61,.36,1)), 140–420ms. **No bounces, no springy or playful motion, no infinite loops** on content. Respect `prefers-reduced-motion`.

**Interaction states.** Hover = slightly darker brand step (primary button `-600 → -700`) or a gentle lift on cards. Press = darker step (`-800`), no aggressive shrink. Focus = sea-blue ring (`--shadow-focus`). Disabled = 50% opacity.

**Transparency & blur.** Used only where it earns its place: frosted **glass** controls and pills over photography (`backdrop-filter: blur`), and the sticky site header (translucent cream + blur). Never blur on flat backgrounds.

**Imagery vibe.** Warm, natural light; golden-hour tones; calm, lived-in, family-friendly. Clean interiors, sea views, terraces, slow-coffee details. **Avoid** over-edited HDR real-estate shots, cold/blue tones, empty corporate staging.

---

## 5. Iconography

- **System:** [**Lucide**](https://lucide.dev) — friendly, rounded line icons at ~2px stroke that match the soft, calm tone. Loaded from CDN (`unpkg.com/lucide`) and rendered via `<i data-lucide="name"></i>` + `lucide.createIcons()`. There is no custom icon font; Lucide is the single source.
- **Why Lucide:** even stroke weight and rounded caps echo the logo's soft geometry without feeling childish. Used for amenities (wifi, coffee, square-parking, wind, waves, key-round, sun, bed-double), nav, form fields and document sheets.
- **Treatment:** icons usually sit in a soft rounded **tile** tinted with a brand `-100` background and `-700` icon (see `AmenityItem`). Inline icons take `currentColor`.
- **Emoji** are not part of the icon set — only the occasional `♥`/`☀` as a warm sign-off in copy (see §3).
- **Brand motifs** (not icons): the tri-colour blocks, the signature grey dot, a sun arc, and a sea-wave divider — see `guidelines/cards/brand-motif.html`.

> **Substitution flag:** Lucide stands in as the brand icon set. If Y.T.M. later commissions custom icons, swap them in and update this section.

---

## 6. What's in here (index / manifest)

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so the system is usable from Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`assets/`**
- `logo/` — `ytm-logo.png` (primary), `ytm-mark.png` (letters mark), `ytm-logo-square.png`.
- `photography/` — `saranda-sunset-terrace.png` (signature hero).

**`components/`** (React primitives — `window.YTMHomesMoreDesignSystem_3b4e5e`)
- `core/` — **Button, IconButton, Badge, Tag, Card**
- `forms/` — **Input, Select, Checkbox**
- `hospitality/` — **AmenityItem, ListingCard, Avatar**

**`ui_kits/`**
- `website/` — interactive marketing site: homepage → listing page → direct-booking confirmation.
- `guest-guide/` — digital in-stay welcome guide (Wi-Fi, check-in, house help, host/WhatsApp).
- `print/` — printable A4 **welcome-guide**, **house-rules**, **invoice**, plus an **apartment notices/stickers** sheet.
- `social/` — **Instagram post** (1080²), **Instagram story** (1080×1920), **booking ad** (1200×628).

**`guidelines/cards/`** — foundation specimen cards (Colours, Type, Spacing, Brand) shown in the Design System tab.

---

## 7. Caveats & substitutions (please confirm)

1. **Fonts are Google-Font stand-ins**, not licensed brand fonts: **Newsreader** (display), **Hanken Grotesk** (body), **Sacramento** (script). They're close to the brand feel but should be confirmed or replaced — supply files and we'll wire real `@font-face` rules.
2. **Photography is a single branded composite.** The only supplied image already has the logo baked over it. Apartment interiors, bedrooms, kitchens and detail shots are shown as tasteful **brand-wash placeholders** in the kits. Real, warm, natural-light photography is the highest-value next asset.
3. **Icons are Lucide** as a substitute for a bespoke set (see §5).
4. **Sample content** (names, prices, codes, reviews, IBAN) is illustrative — replace with real details.
