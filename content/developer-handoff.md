# Developer Handoff: City-Specific Content for godlywindows.com

## Overview

Code changes on branch `city-specific-content` add support for per-city content on all 338 service pages (26 cities × 13 services). Each page can now display unique hero text, "Why Essential" items, FAQs, and a local CTA — all driven by a single data file. Pages without city-specific data populated yet continue to render existing default content with no changes.

---

## Step-by-Step Instructions

### Step 1: Review the Branch

**Branch:** `city-specific-content`
**Repo:** https://github.com/MosesD02/godly-next.js

**Files changed:**

| File | What Changed |
|------|-------------|
| `src/godlyComponents/servicesPage.js` | Imports `cityServicesData`, passes city-specific overrides to sub-components, renders FAQ and LocalCta sections |
| `src/godlyComponents/servicesHero.js` | Accepts new `heroOverride` prop to replace the description paragraph |
| `src/godlyComponents/serviceEssential.js` | Accepts new `essentialOverride` prop to replace the 4 "Why Essential" items |
| `src/godlyComponents/faq.js` | Now dynamic — accepts `faqs`, `serviceName`, and `cityName` props |
| `src/godlyComponents/localCta.js` | **NEW** component for city-specific call-to-action blocks |
| `src/data/cityServicesData.js` | **NEW** data file (currently contains sample Boca Raton window cleaning data) |

**Dash/underscore normalization:** URL params arrive as dashes (`boca-raton`), but the internal `Services` and `citiesMap` objects use underscores. `servicesPage.js` normalizes both directions so lookups work regardless of format.

---

### Step 2: Populate cityServicesData.js

The generated content JSON files contain all 338 pages of unique content. Import this content into `src/data/cityServicesData.js` following this structure:

```js
export const cityServicesData = {
  "boca-raton": {
    "window-cleaning": {
      hero: "hero paragraph text...",
      essential: [
        { number: "01.", title: "...", text: "..." },
        { number: "02.", title: "...", text: "..." },
        { number: "03.", title: "...", text: "..." },
        { number: "04.", title: "...", text: "..." }
      ],
      faqs: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      localCta: "city-specific CTA text..."
    },
    "pressure-washing": {
      // same structure
    }
    // ... remaining services
  },
  "coconut-creek": {
    // ... all 13 services
  }
  // ... remaining cities
};
```

**Key formatting rules:**

- Service slugs use **dashes**: `window-cleaning`, `pressure-washing`, etc.
- City slugs use **dashes**: `boca-raton`, `fort-lauderdale`, etc.
- The `essential` array must always have exactly 4 items, numbered `"01."` through `"04."`

---

### Step 3: Content File Mapping

The generated JSON files use slightly different field names than the code expects. Here is the mapping:

| JSON Field (from content generation) | cityServicesData Field | Notes |
|--------------------------------------|----------------------|-------|
| `hero_paragraph` | `hero` | String — replaces the description paragraph only (not the title or image) |
| `why_essential` | `essential` | Array of objects — add a `number` field (`"01."`, `"02."`, etc.) to each item |
| `faqs` | `faqs` | Array of `{ question, answer }` pairs — use as-is |
| `local_cta` | `localCta` | String — the city-specific CTA message |
| `whats_included` | *(not wired up yet)* | Could optionally be added as an `included` override — the plumbing is straightforward to add |
| `meta_title` | *(separate file)* | Add to `customMetaData.js` for SEO |
| `meta_description` | *(separate file)* | Add to `customMetaData.js` for SEO |

---

### Step 4: Test Locally

Run the dev server:

```bash
npm run dev
```

Then verify the following:

1. **City with data populated** — Visit `/boca-raton/window-cleaning`. You should see unique hero text, unique "Why Essential" items, a FAQ accordion, and a local CTA block.
2. **Different city, same service** — Visit `/coconut-creek/window-cleaning`. Content should be distinct from Boca Raton.
3. **Fallback behavior** — Visit any city/service combo that does not have data populated yet. The page should render exactly as it does today with default content, no errors, no empty sections.
4. **FAQ suppression** — On a page without FAQs populated, confirm the FAQ section does not render at all (no empty accordion or broken layout).
5. **LocalCta suppression** — Same check: no empty CTA block on pages without data.

---

### Step 5: Deploy

1. Merge `city-specific-content` into `main`
2. Netlify will auto-deploy from the main branch
3. Verify a few pages on the live site after deploy completes

---

## Important Notes

- The FAQ component renders `null` when no `faqs` data exists, so unpopulated pages will not break.
- The LocalCta component also self-suppresses when its data is empty or undefined.
- All existing pages continue working unchanged until city-specific data is populated for that city/service combination.
- The hero override **only** replaces the description paragraph — the title lines and hero image remain unchanged.
- The essential override replaces **all 4 items** in the "Why Essential" section (partial overrides are not supported; provide all 4 or none).

---

## Wording Rules

These rules apply to the generated content and any future manual edits:

- **7-Day Sparkle Guarantee** — This is plan-specific. Say "available" not "included."
- **Hard water removal** — This is an add-on and plan-specific. Do not present as standard.
- **Rain Shield Technology** — Available as an add-on, not applied automatically.
- **No "eco-friendly"** — Use "professional-grade cleaning solutions" instead.
- **Money-back guarantee** — Applies to all services; safe to reference broadly.
- **RO/DI water** — Always write as "RO/DI" with a slash, never "RODI."
