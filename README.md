# Handoff: Y.T.M. Homes & More — Bento Property Portfolio Website

## Overview

A boutique, **bento-grid property portfolio** website for **Y.T.M. Homes & More**, a small, family-run holiday-apartment and private-home brand operating in **Saranda, Albania** (3 coastal holiday apartments) and **Prishtina, Kosovo** (2 urban private/commercial properties).

The product deliberately rejects the standard real-estate layout (top nav → hero → property grid → footer). Instead it is a **curated, draggable, card-based "board"** — part property portfolio, part travel moodboard, part boutique-hospitality site. Navigation happens *through the cards themselves*. Each property opens into a larger bento canvas of modular widgets (photos, description, amenities, map, Airbnb/Spotify previews, booking, reviews, etc.).

There are **three screens**:
1. **Homepage** — the bento "board" of the whole portfolio.
2. **Property detail page** — a per-property bento canvas (one shared template; Saranda example = *YTM Dreamy*, Prishtina example = *YTM Center*).
3. **Design System reference page** — documents tokens & components (not a user-facing screen; internal reference).

---

## About the Design Files

The files in this bundle are **design references created in HTML/React-via-Babel** — high-fidelity prototypes that demonstrate the intended look, layout, content and behaviour. **They are not production code to copy directly.**

They run with no build step: React + Babel are loaded from CDN and JSX is transpiled in the browser; the design-system components come from a pre-compiled bundle on `window.YTMHomesMoreDesignSystem_3b4e5e`; content lives in a plain `window.YTM` object.

**Your task is to recreate these designs in the target codebase's environment** (e.g. a real React/Next.js app, Vue, SwiftUI, etc.) using its established patterns, component library, routing and data layer. If no environment exists yet, choose the most appropriate modern framework (Next.js + TypeScript is a natural fit) and implement there. Lift the **exact** design tokens, spacing, type, copy and interaction specs documented below — that is the source of truth.

---

## Fidelity

**High-fidelity (hifi).** Final colours, typography, spacing, radii, shadows, motion and copy are all specified and should be reproduced pixel-faithfully. The bento layout, drag interaction, per-collection theming and the Tweaks panel are all working in the prototype. Photography is intentionally represented by **clearly-marked drop-slots** (the client supplies real photos later) — see *Image Style* and *Assets*.

---

## Design Tokens

All tokens come from the bound Y.T.M. design system (`_ds/.../tokens/*.css`). Reproduce them as your codebase's token layer (CSS variables, Tailwind theme, or design-token JSON).

### Colour

The palette is built from three **logo pastels**, each extended to a 9-step scale, plus a coastal support cast and warm neutrals. **Page canvas is warm cream `#FBF8F1`, never pure white. Text is warm charcoal `#2E2A24`, never black.**

**Brand scales** (`-50 … -900`; `-500` is the logo value):

| Step | Sun | Lavender | Sage | Sea blue | Terracotta (clay) |
|------|-----|----------|------|----------|--------------------|
| 50  | `#FCFAEC` | `#F8F4FB` | `#F6F7EE` | `#EFF4F6` | `#FBF1EC` |
| 100 | `#F8F2CF` | `#EFE6F4` | `#EAEDD7` | `#D7E3E8` | `#F4DDD0` |
| 200 | `#F2E7A9` | `#E1D0EC` | `#D6DDB2` | `#AFC8D1` | `#E8BCA3` |
| 300 | `#EEDF92` | `#D5C0E3` | `#C2CC93` | `#84A9B7` | `#DB9B78` |
| 400 | `#EBDB89` | `#CFB8DF` | `#B8C285` | `#6B96A6` | `#D2855D` |
| **500** | `#E9D985` | `#CDB4DB` | `#B2BD7E` | `#548196` | `#C97B5A` |
| 600 | `#D6C25C` | `#AE8FC4` | `#94A05C` | `#45697B` | `#B0613F` |
| 700 | `#B49E3B` | `#8B68A6` | `#717C44` | `#385664` | `#8E4D33` |
| 800 | `#8A782B` | `#654A7A` | `#545C33` | `#2C434E` | `#6B3B28` |
| 900 | `#5E5220` | `#443352` | `#3A4024` | `#20313A` | `#4A291C` |

**Warm neutrals:** cream `#FBF8F1` (page) · shell `#F5EFE3` (secondary surface) · sand-100 `#EFE7D6` · sand-200 `#E5D9C2` · sand-300 `#D8C8AB` · stone-300 `#B9B2A4` · stone-400 `#948D7E` · stone-500 `#736C5F` · ink-700 `#4A453D` · ink-800 `#38332C` · ink-900 `#2E2A24` (primary text) · white `#FFFFFF` · logo-grey `#C6C6C7`.

**Functional:** success `#6E9A63` / bg `#EEF3EA` · warning `#D6A23E` / bg `#FBF3DF` · error `#C25742` / bg `#F8E8E3` · info = sea-500.

**Semantic roles (reach for these, not raw hex):**
- `--surface-page` = cream · `--surface-card` = white · `--surface-sunk` = shell · `--surface-inverse` = ink-900 · `--surface-sand` = sand-100
- `--text-strong` = ink-900 · `--text-body` = ink-800 · `--text-muted` = stone-500 · `--text-soft` = stone-400 · `--text-link` = sea-600
- `--border-soft` = sand-200 · `--border-default` = sand-300 · `--border-strong` = stone-300
- **Primary action = sage** (`--action-bg` = sage-600, hover sage-700, active sage-800, fg white). Secondary = lavender. Sun = warmth/highlights. Sea = links/trust. Terracotta = sparing accent.

### Typography

Three families. (In the prototype these are Google-Font stand-ins — confirm/replace with licensed brand fonts.)

- **Display — Newsreader** (warm editorial serif). Hero & headings. Weight **300 (light)** for display, **400** for headings. Often *italic* on the one emphasised word. Tracking `-0.02em`, line-height ~1.05.
- **Body / UI — Hanken Grotesk**. Everything functional. Body 16px / line-height 1.6. Eyebrow = 600 weight, uppercase, tracking `0.14em`.
- **Accent — Sacramento** (signature script). **Sign-offs only, once per piece** (e.g. "Enjoy Saranda ♥", "Yllka & family"). Never for information.

Font stacks: `--font-display: 'Newsreader', Georgia, serif` · `--font-body: 'Hanken Grotesk', system-ui, sans-serif` · `--font-script: 'Sacramento', cursive`.

**Type scale (rem):** 2xs .6875 (11px) · xs .75 (12) · sm .875 (14) · base 1 (16) · md 1.125 (18) · lg 1.375 (22) · xl 1.75 (28) · 2xl 2.25 (36) · 3xl 3 (48) · 4xl 3.75 (60) · 5xl 4.75 (76, hero). Line-heights: tight 1.08 · snug 1.22 · normal 1.5 · relaxed 1.65. Tracking: tight -.02em · snug -.01em · wide .04em · caps .14em.

### Spacing — 8px base grid, used generously

`space-1`=4 · `2`=8 · `3`=12 · `4`=16 · `5`=24 · `6`=32 · `7`=40 · `8`=48 · `9`=64 · `10`=80 · `11`=104 · `12`=128 (px).
Semantic: `--pad-card`=32 · `--pad-card-sm`=24 · `--section-y`=104 (vertical rhythm) · `--content-max`=1200px · `--prose-max`=68ch · `--doc-max`=760px. Touch targets ≥ 44px (`--control-h`=44, sm 36, lg 54).

### Radii — soft, never sharp

xs 6 · sm 10 · **md 16** (default card/input) · **lg 24** (feature cards, image frames) · xl 32 · **pill 999** (buttons, chips, badges). All px.

### Shadows — warm-tinted (charcoal, low opacity), never hard grey

- `--shadow-xs` `0 1px 2px rgba(46,42,36,.06)`
- `--shadow-sm` `0 2px 8px rgba(46,42,36,.06)`
- `--shadow-md` `0 6px 20px rgba(46,42,36,.08)`
- `--shadow-lg` `0 16px 40px rgba(46,42,36,.10)`
- `--shadow-xl` `0 28px 64px rgba(46,42,36,.14)`
- `--shadow-card` `0 10px 30px rgba(74,58,40,.09)` — the workhorse for tiles
- `--shadow-focus` `0 0 0 3px rgba(84,129,150,.35)` — sea-blue focus ring

### Gradients & scrims

- `--wash-coast` `linear-gradient(135deg, #EFF4F6 0%, #FBF8F1 55%, #F6F7EE 100%)` (sea→cream→sage)
- `--wash-sunrise` `linear-gradient(135deg, #F8F2CF 0%, #F5EFE3 60%, #FBF8F1 100%)` (sun→shell)
- `--wash-dusk` `linear-gradient(135deg, #EFE6F4 0%, #FBF8F1 70%)` (lavender→cream)
- `--scrim-bottom` `linear-gradient(to top, rgba(32,30,26,.72) 0%, rgba(32,30,26,.30) 38%, rgba(32,30,26,0) 70%)` — dark scrim under photo captions

### Motion — calm, gentle. No bounces, no springs, no infinite loops.

Easing `--ease-out: cubic-bezier(0.22, 0.61, 0.36, 1)`; durations fast 140ms / base 240ms / slow 420ms. Hover = darker brand step or a soft `translateY(-4px)` lift. **Respect `prefers-reduced-motion`.** Blur is used only over photography (glass controls) and the sticky header.

---

## Screens / Views

### 1. Homepage — the bento board (`index.html`)

**Purpose.** Let a visitor visually browse the whole portfolio and tap into any property. No menu — the cards *are* the navigation.

**Layout.** A 4-column CSS grid, `grid-auto-rows` at a fixed row unit, `grid-auto-flow: row dense`, gap 14–24px (density-dependent). Max content width 1200px, centred, with page padding (44px/32px spacious → 24px/18px compact). Each tile declares a **column span** and **row span** to build the composed rhythm. Tiles are wrapped in a draggable shell.

**Three selectable arrangements** (Tweak "Arrangement"; reorders/respans the same tiles):
- **editorial** (default) — brand card 2×2, intro 2×1, then a varied mix.
- **gallery** — larger photo-led tiles, imagery foregrounded.
- **compact** — denser, smaller spans, more tiles in view.

**Tiles on the board** (the card vocabulary — see *Components*):
- **Brand identity card** (feature 2×2): the tri-colour YTM logo, eyebrow "Albanian Riviera & beyond", display headline *"Homes by the sea, and in the **city**."*, intro paragraph, the tri-colour-dots + "Homes & More" script motif.
- **Intro / portfolio card** (wide): *"Three stays by the coast. Two homes in the city."* + "All managed with care by the same family — the warmth of a host, the ease of a hotel."
- **Collection cards** ×2 (Saranda, Prishtina): full-bleed wash + scrim, eyebrow, big serif place name, "N stays" + mood line, up-right arrow. Clicking is *contextual* (scrolls/filters to that collection's properties).
- **Property thumbnail cards** ×5 (Dreamy, Lovely, Horizon, Taslixhe, Center): photo slot + bottom scrim, badges (top-left), rating (top-right, ★), title, mood line, "Sleeps N" + "€X / night" footer. **Click → property detail page.**
- **Map / location card**: stylised illustrative map (cream/sage landmass on sea-tinted water, dashed route) with **Saranda** and **Prishtina** pins.
- **Atmospheric tiles**: "300+ sunny days a year on the Riviera" stat (sun icon); "The sea — Five minutes down"; **Spotify playlist** card (dark green, "Slow coast mornings", green "Open in Spotify" → real playlist URL).
- **Contact / trust** content lives in the footer.

**Footer.** Square logo (click → home), "Y.T.M. Homes & More / Saranda, Albania · Prishtina, Kosovo · managed with care", WhatsApp link, email link, and a "Design system →" link.

**Persistent chrome.** A **drag hint** toast ("Drag any card to rearrange your board.") shown once (dismissal stored in `localStorage` key `ytm:draghint`); the **Tweaks panel** (see below).

### 2. Property detail page (one template; `app/detail.jsx` + widgets)

**Purpose.** Present a single property as a composed bento canvas. Reached by tapping a thumbnail; a top bar allows return and prev/next sibling navigation within the same collection.

**Top bar (`DetailBar`).** Left: pill "← All stays" (→ home). Centre: eyebrow (collection name) · dot · property name in serif. Right: ‹ › chevron icon-buttons to cycle siblings (only if collection has >1 property).

**Layout.** Same 4-column bento grid but with a **finer row unit (~76px)** and per-widget row spans so each card sizes close to its content. Tiles, in order:

| Tile | Span (col×row) | Content |
|------|----------------|---------|
| Title | 2×3 | eyebrow, big serif name, mood one-liner, badges, ★ rating · reviews |
| Gallery | 2×5 | big hero photo slot + 2 small slots; "+ photos" pill |
| Capacity | 1×2 | users icon, "Sleeps N", bedrooms detail |
| Location | 1×2 | wash + map glyph, "Location", place, "approximate area" |
| Booking | 1×4 | dark tile: €/night, "Direct rate" badge, "You won't be charged yet — we'll confirm by WhatsApp", **primary "Request these dates"** (opens confirm modal), "Ask a question" WhatsApp link |
| Description | 2×3 | "About this stay", paragraph (host voice), one script sign-off "Enjoy your stay ♥" |
| Amenities | 2×3 | "What's here", 2-col grid of soft icon-tile + label + detail |
| Practical | 2×3 | "Good to know", 2-col key/value with icon tiles (beach/city distance, Wi-Fi, parking, elevator, aspect) |
| Spotify | 1×3 | dark green playlist tile → real playlist |
| Nearby | 1×3 | "Nearby" list rows: icon · place · walking time |
| Recommend | 1×4 | "From your hosts" — Morning/Afternoon/Evening picks |
| Airbnb | 1×3 | "Airbnb listing", ★ rating, "See the full listing →" outbound |
| Check-in | 1×3 | "Easy self check-in" steps |
| Rules | 1×3 | "House, with care" — rules framed warmly |
| Quote | 2×3 | sand tile, quote glyph, italic serif testimonial, avatar + name + stay meta |

**Per-collection theming.** The page's accent is driven by the property's `accent` field (Saranda = sun/sage/sea; Prishtina = **stone**, a warm urban grey). This makes Prishtina feel ~50% more urban/architectural while remaining the same brand. The same widgets re-skin via CSS vars `--accent`, `--accent-deep`, `--accent-soft`, `--accent-tint`.

**Booking modal (`BookingModal`).** Centred card over a scrim: success check, "Request sent!", reassurance naming the property, script "Yllka & family", "Back to the board" button.

### 3. Design System reference page (`Design System.html`)

Internal, editorial documentation page (sticky logo header + "Back to the board"). Sections: 01 Colour (all scales + neutrals + semantic roles), 02 Typography (specimens + scale), 03 The bento grid (span demo + rules), 04 Card types (sizes, radii, shadows), 05 Buttons & links (live DS components), 06 Image style (frames, scrim, photo slot), 07 Iconography (Lucide grid), 08 Spacing (8px ruler), 09 Bento component vocabulary (12-card catalogue), 10 Mobile behaviour (phone mocks). Rebuild only if you want a living styleguide in the target app; otherwise it's reference.

---

## Interactions & Behavior

- **Card navigation.** Property thumbnail / collection cards are clickable; thumbnails route to the detail view (prototype uses React state `view`/`curId`, not URLs — **in production, give each property a real route**, e.g. `/saranda/dreamy`). `window.scrollTo(0,0)` on every view change.
- **Drag-to-rearrange.** Each tile has a top-centre grip handle (visible on hover). Pointer-drag reorders tiles within the board; order **persists** (prototype: `localStorage` per board id). A "Reset card order" control restores defaults. Disable drag on touch in favour of native scroll; keep cards tappable.
- **Sibling navigation.** Detail top-bar ‹ › cycles prev/next property in the same collection (wraps around).
- **Booking.** "Request these dates" → confirmation modal (no real charge; copy promises WhatsApp confirmation). Wire to real availability/enquiry backend in production.
- **Outbound links.** Airbnb (`property.airbnb`), Spotify (real playlist URL), WhatsApp (`wa.me/<digits>`), email (`mailto:`) — all `target="_blank" rel="noopener"`.
- **Hover.** Interactive cards lift `translateY(-4px)` + shadow→`--shadow-lg` (240ms ease-out). Buttons darken one brand step. Arrow affordances may nudge.
- **Drag hint toast.** Shown once, dismissible, remembered in `localStorage`.
- **Reduced motion.** Honour `prefers-reduced-motion`: no lifts/transitions.

## State Management

Prototype state (lift into your router/store):
- `view`: `"home" | "detail"`; `curId`: current property id; `booked`: property awaiting booking-confirm modal; `reset`: increments to reset board order.
- **Tweaks** state (persisted): `arrangement`, `density`, `radius`, `shadow`, `displayFont`, `accent`, `dark`. The Tweaks panel is a **prototype/demo affordance** — it likely does NOT ship to end users; treat its options as the design's configuration space (it documents the supported arrangements, densities, accents and a warm-dark theme).
- Per-board **tile order** (persisted) for the drag feature.
- Data is static (`window.YTM`); in production fetch properties/collections from a CMS or API. Each property object shape is documented in `app/data.js` (collection, name, kind, eyebrow, location, mood, glance, sleeps, bedrooms, price, rating, reviews, wash, accent, badges[], airbnb, description, amenities[], practical[], checkin[], rules[], nearby[], recommendations[], review{}).

## Image Style

Warm, natural, golden-hour; calm and lived-in. **Avoid** over-edited HDR real-estate shots, cold/blue tones, empty corporate staging. Photos sit in **rounded frames (24px)** or full-bleed under `--scrim-bottom` for legible captions.

**Photography is not yet supplied.** Every photo area is a **drop-slot placeholder**: a soft coastal **wash** background with a **dashed inset frame**, a centred image icon and a caption ("Hero photo", "Terrace", "Interior", etc.). In the prototype these are `<image-slot>` web components the user can drag images onto (persisted). **In production, replace slots with real `<img>`/`<picture>` using the property's photos**; keep the rounded-frame + scrim treatment. Real photography is the single highest-value next asset.

## Icons

**Lucide** line icons, ~2px stroke, rounded caps. Usually in a soft rounded tile (brand `-100` background, `-700` icon). Names used include: `waves, sun, bed-double, wifi, coffee, square-parking, wind, key-round, map-pin, utensils, footprints, car-front, ship, shield-check, message-circle, star, users, building-2, arrow-up-down, flower-2, waves-ladder, washing-machine, tv, briefcase, trees, plane, shopping-bag, landmark, umbrella, arrow-left, arrow-right, arrow-up-right, chevron-left, chevron-right, move, x, check, music, images, image, quote`. No emoji as icons; only an occasional ♥/☀ as a warm sign-off in copy.

## Responsive / Mobile behaviour

Keep the bento feel — don't collapse to a plain list. **One column below 560px, two columns 560–820px**, four above. Order is preserved from the desktop arrangement. Drag disabled on touch (native scroll); every card stays tappable at ≥44px. Sticky header collapses to the logo mark + a single back affordance. Use `backdrop-filter: blur(14px)` on the translucent cream sticky header.

## Content Tone

Warm, concise, boutique-hospitality. "We" (the family) to "you" (the guest); sign off "Yllka & family". Sentence case everywhere except the tracked uppercase eyebrow. House rules framed as care, not prohibition. All sample copy in `app/data.js` is final-quality and on-brand — reuse it.

---

## Files (in this bundle)

- `index.html` — homepage shell: loads DS tokens + bundle, React/Babel, Lucide; defines the bento grid CSS (`.bento`, `.bento-tile`, `.bento-grip`, `.ytm-lift`), image-slot `::part` styling, chrome styles; mounts the app.
- `Design System.html` — the design-system reference page (self-contained).
- `app/data.js` — all content: collections, 5 properties (full data shape), contact, Spotify URL → `window.YTM`.
- `app/bento.jsx` — `BentoBoard`: the draggable fixed-span grid (grip handles, reorder, persistence, density/roundness vars).
- `app/home.jsx` — composes the homepage tiles + the 3 arrangements.
- `app/widgets.jsx` — core bento widget library (`BentoCard`, brand, intro, collection, thumbnail, map, contact, spotify, mood, trust, booking helpers, etc.) + shared helpers (`eyebrow`, `serif`, `body`, `script`, `I` icon, `Photo`).
- `app/widgets2.jsx` — detail-page widgets (gallery, amenities, practical, nearby, recommendations, airbnb, check-in, rules, capacity, quote).
- `app/detail.jsx` — `PropertyDetail`: assembles a property's tiles with their spans on the finer detail grid.
- `app/app.jsx` — app shell: routing/state, accent + density + dark-mode theming maps, detail top bar, footer, booking modal, drag hint, and the full **Tweaks panel** wiring (the authoritative list of arrangements/densities/accents).
- `image-slot.js` — the drop-slot web component used for photo placeholders.
- `tweaks-panel.jsx` — the Tweaks panel scaffold (prototype affordance).
- `assets/logo/` — `ytm-logo.png` (primary lockup), `ytm-logo-square.png` (square), `ytm-mark.png` (letters mark).
- `assets/photography/saranda-sunset-terrace.png` — the one supplied real photo (golden-hour Bougainvillea Bay terrace; signature hero).

> The full design-system source (token CSS, the React component primitives `Button/Badge/Card/IconButton/Tag/Input/Select/Checkbox/AmenityItem/Avatar/ListingCard`, and the compiled `_ds_bundle.js`) lives in the bound design-system project under `_ds/y-t-m-homes-more-design-system-…/`. Reproduce those primitives in your component library, or load the bundle as the prototype does. The exact token values are all transcribed above so the README is self-sufficient.
