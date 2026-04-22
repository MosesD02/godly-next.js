# Structured Data Audit — Godly Windows

**Date:** April 2026
**Scope:** Every JSON-LD block served by `godlywindows.com`
**Reference:** Google Search Central — Structured Data Guidelines, LocalBusiness, Organization, BreadcrumbList, FAQPage, and Review-snippet policies (all fetched live against current Google docs)

---

## Executive summary

The site ships valid, parseable JSON-LD on every significant template, and the April PR 1 fix correctly resolved the Fort Lauderdale de-duplication problem. However, the audit surfaced **15 distinct issues across 6 templates**, falling into three buckets:

1. **Misleading / conflicting markup** (3 city pages declare a LocalBusiness at the wrong street address; ~26 service pages mint duplicate LocalBusiness entities for the same physical office)
2. **Non-compliant rich-result signals** (self-serving review ratings, geo coordinates below Google's minimum precision, FAQ markup on a non-eligible site type)
3. **Missed recommendations** (generic `LocalBusiness` type instead of the specific subtype, missing `logo`, missing `sameAs`, inconsistent phone formats, thin breadcrumbs)

None of these are manual-action triggers on their own. Several, together, explain why individual pages may be losing eligibility for stars, knowledge-panel signals, and breadcrumb rendering even when the Rich Results Test reports "valid."

Estimated remediation effort for all 15 items: **~2–3 hours total**, concentrated in two files (`src/data/metaTitles.js` and `src/app/page.js`) plus one small refactor to the Boca/Weston service templates.

---

## How Google evaluates our structured data

Three rules from the general SD policy dominate this audit:

1. **Truth.** "Your structured data must be a true representation of the page content." A page titled *Pompano Beach* cannot declare a business located in *Fort Lauderdale* without tripping the misleading-content clause.
2. **Specificity.** "Use the most specific applicable type." Declaring a cleaning company as generic `LocalBusiness` when `HomeAndConstructionBusiness` is the documented subtype reduces how confidently Google can place us in category-specific search features.
3. **Canonicalization.** A single real-world entity (one physical office) should have one `@id` across the site. Multiple pages minting new `@id`s for the same business force Google to pick a canonical and drop the rest — exactly the mechanism that caused `/fort-lauderdale` indexing problems last month.

The issues below are sorted by severity (impact × likelihood).

---

## 🔴 Critical issues

### Issue 1 — Three city landing pages declare a LocalBusiness at the wrong street address

**Pages affected:** `/parkland`, `/coral-springs`, `/pompano-beach`

Each of these pages is a service-area city with no physical office. The schema resolver points them at the nearest real branch's street address — Pompano Beach gets the Fort Lauderdale HQ address; Parkland and Coral Springs get the Boca Raton office address. The result is a JSON-LD block on a page titled "Pompano Beach" that declares a local business with `addressLocality: "Fort Lauderdale"`.

**Why it matters:** Google's general SD policy explicitly calls out: *"Don't mark up irrelevant or misleading content … Don't use structured data to deceive or mislead users. Don't impersonate any person or organization, or misrepresent your ownership, affiliation, or primary purpose."* Declaring a Fort Lauderdale business on a Pompano Beach page is the textbook example.

**Why it slipped through:** These three cities were bundled into the "render LocalBusiness on this city page" set because they happened to rank well. The actual-office check and the schema-type check were conflated.

**Fix:** Remove these three from the LocalBusiness-eligible list. They should use the same Service + provider-reference pattern that Hollywood, Sunrise, Oakland Park, etc. use today. Only the three real offices (Fort Lauderdale, Boca Raton, Weston) should render LocalBusiness on their city pages.

**Effort:** 15 minutes. One-line change in `metaTitles.js`.

---

### Issue 2 — Boca Raton and Weston service pages each mint a separate LocalBusiness entity

**Pages affected:** All ~13 `/boca-raton/[service]` pages and ~13 `/weston/[service]` pages (≈26 pages total)

Every one of these pages emits its own `LocalBusiness` JSON-LD with a URL-scoped `@id`. That produces 13 competing `@id`s for the single Boca office and another 13 for the single Weston office — the same de-duplication trap that caused the original Fort Lauderdale indexing problem before it was fixed.

**Why it matters:** Google sees ~26 conflicting claims about "which URL canonically represents this business." It picks one canonical and drops stars, breadcrumbs, and other rich-result signals from the rest. This is the exact failure mode that PR 1 was written to prevent.

**Why it slipped through:** The original brief focused on de-duplication between the Fort Lauderdale service pages and the homepage. The equivalent within-branch duplication for Boca and Weston wasn't in scope.

**Fix:** Declare each branch's LocalBusiness exactly once on its own city page (`/boca-raton` and `/weston`), with a stable branch-scoped `@id`. Service pages under those cities should emit `Service` JSON-LD with `provider` pointing back to that `@id`. Same pattern as the Fort Lauderdale fix, applied at branch level instead of HQ level.

**Effort:** 30 minutes. One template edit.

---

## 🟠 High-severity issues

### Issue 3 — Self-serving 5-star rating on business-owned LocalBusiness nodes

**Pages affected:** Every city landing and service page that currently renders LocalBusiness (roughly 30+ pages).

Google's review-snippet policy states: *"If the entity being reviewed controls the reviews about itself, their pages that use LocalBusiness or any other type of Organization structured data are ineligible for star review feature."* We are the entity; we are also the one writing the rating. Google will strip the stars silently.

Secondary concern: the identical `"5" / "157"` rating copy-pasted across multiple entities is a known spam-signal pattern.

**Fix options:**
- Remove `aggregateRating` from all self-owned LocalBusiness nodes, OR
- Keep it only on the single canonical homepage entity and drop it everywhere else, OR
- Wire real third-party review aggregation (Google Reviews via API) and use that as the source.

**Effort:** 15 minutes to remove; several hours if sourcing from Google Reviews API.

---

### Issue 4 — The homepage declares the same business twice (LocalBusiness + Organization)

The homepage `@graph` contains two separate nodes with two separate `@id`s describing the same entity. Because `LocalBusiness` is a subtype of `Organization`, Google explicitly recommends merging them: *"if your site is about a local business … we recommend providing your administrative details using the most specific subtype(s) of LocalBusiness in addition to the fields recommended in this [Organization] guide."*

**Why it matters:** Two nodes means Google has to reconcile two claims for the same business. Some properties only exist on one node (e.g. `sameAs`, `logo` are missing from both), so the merged node would actually be richer than either individual one.

**Fix:** Collapse into a single `LocalBusiness` node and move any Organization-only fields onto it.

**Effort:** 15 minutes.

---

### Issue 5 — Homepage uses generic `LocalBusiness` instead of the specific subtype

Our city landing pages already use the specific pair `["LocalBusiness", "HomeAndConstructionBusiness"]`. The canonical homepage entity — the one everything else references via `@id` — uses the generic `LocalBusiness` only. That means our canonical node is *less specific* than the pages that reference it, which inverts Google's specificity guidance.

**Fix:** Match the homepage type to the city-page type. One-line change.

**Effort:** 5 minutes.

---

### Issue 6 — Geo coordinates are below Google's minimum precision AND don't match the street address

The homepage LocalBusiness declares coordinates with four decimal places. Google's LocalBusiness documentation states: *"The precision must be at least 5 decimal places."* Four decimals fails the spec.

Compounding problem: the homepage's coordinates point to a spot roughly 5 km south of the actual Fort Lauderdale street address. Meanwhile, the per-city office-geo helper uses a different, more accurate coordinate pair. We're telling Google two different locations for the same building.

**Fix:** Sync the homepage coordinates to the accurate values used elsewhere; pad all coordinates to 5+ decimals. This also improves Maps distance ranking.

**Effort:** 10 minutes.

---

### Issue 7 — `/landing/*` routes emit competing provider LocalBusiness entities

The legacy `/landing/[service]/[city]` routes inline a fresh LocalBusiness node (with a unique per-URL `@id`) as the `provider` for the Service schema. These routes are `noindex, nofollow`, so Google won't pick them up for ranking — but they are still served, still ingested by LLMs and other crawlers, and still count if `noindex` is ever accidentally removed.

**Fix:** Replace the inline LocalBusiness with a reference to the canonical `@id`, or drop JSON-LD entirely on noindex pages.

**Effort:** 10 minutes.

---

## 🟡 Medium-severity issues

### Issue 8 — All FAQPage markup is ineligible for rich results

In August 2023, Google restricted FAQ rich results to "well-known, authoritative websites that are government-focused or health-focused." A residential cleaning business qualifies as neither. Every FAQPage block on the site — homepage, city landings, service pages, Rain Shield, blog posts — is parsed and discarded by Google.

This is not a penalty and does not hurt rankings. It is wasted payload and one more schema that has to be kept in sync with the visible UI.

A secondary FAQ-guide rule: *"If you have FAQ content that is repetitive on your site … mark up only one instance."* The 26 city-landing FAQs are templated variations of the same four questions. Even if we were FAQ-eligible, the per-city FAQ markup technically violates the de-duplication rule.

**Fix options:**
- Remove FAQPage markup entirely (keep the visible HTML accordion — that's the user-facing feature).
- Remove only the per-city city-landing FAQ markup (keep homepage + RainShield + blog, which are unique and answer-rich).

**Effort:** 10 minutes.

---

### Issue 9 — Organization and LocalBusiness missing `logo` and `sameAs`

Google treats `logo` and `image` as different properties. `logo` drives what appears in the knowledge panel and in some search result layouts. We currently only have `image` on the homepage entity.

`sameAs` (links to our profiles on Google Business, Facebook, Instagram, etc.) is populated on the per-city LocalBusiness nodes but not on the canonical homepage entity — backwards, since the canonical one is the one Google uses to build the entity graph.

**Fix:** Add a proper raster `logo` URL and a `sameAs` array of social/business profiles to the homepage entity.

**Effort:** 15 minutes.

---

### Issue 10 — Phone numbers use inconsistent formatting

The homepage phone is in proper international format with country code. The per-city phone helper returns the same number in US-local format without country code. Google recommends: *"Be sure to include the country code and area code in the phone number."*

**Fix:** Normalize all telephone values to a single E.164 format.

**Effort:** 10 minutes.

---

### Issue 11 — Regional cluster pages ship two-item breadcrumbs

The regional cluster pages (e.g. `/window-cleaning`) emit a breadcrumb trail of exactly Home → This Page. Technically legal (Google requires a minimum of two items) but thin. Google's breadcrumb guidance: *"We recommend providing breadcrumbs that represent a typical user path to a page."* A three-item trail (Home → Services → Window Cleaning) is both truer to user navigation and gives Google more categorization signal.

**Fix:** Add an intermediate "Services" node to the regional-page breadcrumb.

**Effort:** 10 minutes.

---

### Issue 12 — Blog posts declare `author = publisher` without a logo

The BlogPosting schema on blog posts uses the same Organization object for both `author` and `publisher`, with no `logo` on the publisher. Article/BlogPosting rich results prefer a distinct Person author and a publisher with a valid logo ImageObject.

**Fix:** Optional. Current form is acceptable; adding a real author (Person) and a publisher `logo` would upgrade Article rich result eligibility.

**Effort:** 20 minutes per-post if we enrich, or 5 minutes to just add the publisher logo.

---

## 🟢 Low-severity / informational

### Issue 13 — `hasOfferCatalog` offers lack price and URL fields

The homepage OfferCatalog lists three services with only `name` and `description`. Not required for rich results and not causing errors. Would only matter if we wanted to appear in merchant/shopping features.

### Issue 14 — Homepage opening hours omit Sunday

Google treats omission as "closed" but explicit `opens: 00:00 / closes: 00:00` is clearer for both Google and for assistant queries like "Are they open Sunday?"

### Issue 15 — Downstream duplication of FTL street address

Multiple service-area cities reuse the Fort Lauderdale office address through the schema resolver. This is correct where we use Service schema (the address appears only via the `provider` reference, not as a per-page claim). It amplifies Issue 1 on the three cities that are wrongly configured to render LocalBusiness — fixing Issue 1 makes this benign.

---

## Recommended remediation order

Highest return-on-time first:

| # | Fix | Effort | Benefit |
|---|-----|--------|---------|
| 1 | Remove Parkland / Coral Springs / Pompano Beach from the LocalBusiness-eligible set | 15 min | Kills misleading-markup risk on three pages |
| 2 | Refactor Boca + Weston service pages to Service + provider-reference pattern | 30 min | Eliminates ~26 duplicate LocalBusiness entities |
| 3 | Merge homepage Organization into LocalBusiness, add subtype, logo, sameAs, fix geo | 30 min | Strengthens canonical entity everyone references |
| 4 | Remove aggregateRating from self-owned LocalBusiness nodes | 15 min | Drops non-compliant review signal |
| 5 | Remove per-city FAQPage JSON-LD (keep visible UI) | 10 min | Removes ineligible / duplicative markup |
| 6 | Normalize all telephone values to E.164 | 10 min | Minor consistency fix |
| | **Total** | **~2 hrs** | |

After remediation, re-run the Rich Results Test against:
- `godlywindows.com`
- `godlywindows.com/fort-lauderdale`
- `godlywindows.com/boca-raton/window-cleaning`
- `godlywindows.com/pompano-beach`
- `godlywindows.com/hollywood/window-cleaning`

All should return valid with zero warnings, and the business entities should collapse to three canonical `@id`s (one per real branch) instead of 60+.

---

## What's working well

Worth calling out explicitly so we don't break it:

- Every JSON-LD block is server-rendered (no `next/script`), so crawlers see the markup on first byte.
- The existing Service + provider-reference pattern on Hollywood, Sunrise, Oakland Park, Pompano Beach, Lighthouse Point, and Lauderhill service pages is textbook-correct.
- Breadcrumbs on city and service pages are well-formed with proper positions and a valid item URL on every non-terminal node.
- BlogPosting uses absolute image URLs and ISO 8601 dates.
- The `generateStaticParams` build already filters reserved slugs correctly so we don't emit schema at conflicting URLs.
- RainShield's Service + BreadcrumbList pair is clean, canonical-first, and correctly wired to the homepage's `#localbusiness` provider.

The foundation is solid. The items above are refinements, not a rewrite.
