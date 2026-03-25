# Test Coverage Analysis

## Current State

**The codebase currently has zero automated test coverage.** There are no testing frameworks installed, no test configuration files, and no test files anywhere in the project. The `package.json` has no `test` script.

### Summary

| Metric | Value |
|---|---|
| Test frameworks installed | 0 |
| Test files | 0 |
| Source files | ~151 |
| Components | ~111 |
| Pages/Routes | 12 |
| Utility modules | 4 |
| Test coverage | 0% |

---

## Recommended Testing Setup

**Framework:** [Vitest](https://vitest.dev/) — fast, native ESM support, works seamlessly with Next.js.

**Additional libraries needed:**
- `vitest` — test runner
- `@testing-library/react` — component testing
- `@testing-library/jest-dom` — DOM matchers
- `jsdom` — browser environment for component tests

---

## Priority Areas for Test Coverage

### Priority 1 — Critical Business Logic (High Impact, Easy to Test)

#### 1. Lead Webhook System (`src/app/lib/leadWebhooks.js`)
- **Why:** This is the revenue pipeline. `sendLeadWebhook()` normalizes phone numbers, validates inputs, and fires webhooks. A regression here means lost leads.
- **What to test:**
  - Phone number normalization (strips non-digits correctly)
  - Empty name/phone short-circuits without sending
  - Optional `pageUrl` is included in payload when provided
  - `fetch` is called with correct URL, method, headers, and body
  - Network errors are caught and logged (don't throw)

#### 2. Blog Pagination (`src/lib/blog-pagination.js`)
- **Why:** Pure logic with no dependencies — ideal unit test target. Broken pagination = broken blog navigation and bad SEO (duplicate/missing pages).
- **What to test:**
  - `paginateBlogPosts()`: empty array returns `{ currentPage: 1, totalPages: 0 }`
  - Correct slicing for page 1, middle pages, and last page
  - Out-of-range page numbers clamp to valid range
  - Array input for `rawPage` uses first element
  - Non-numeric/negative/zero `rawPage` defaults to page 1
  - `BLOG_POSTS_PER_PAGE` constant is 10
  - `redirectIfBlogListPageMismatch()`: redirects when requested page differs from clamped page
  - No redirect when `rawPage` is `undefined`

#### 3. Quote Form Submission Logic (`src/godlyComponents/quoteForm.js`)
- **Why:** This is the primary conversion mechanism. Form validation, Airtable submission, multi-webhook dispatch, and analytics tracking all live here.
- **What to test:**
  - `formatPhoneNumber()` — formats `1234567890` as `123-456-7890`, handles partial inputs
  - Form validation: blocks submit when `agree` is unchecked or no services selected
  - Correct webhook is selected based on pathname (`/landing/*` → GOOGLE_ADS, `/fort-lauderdale/*` → FORT_LAUDERDALE, etc.)
  - Airtable payload shape matches expected field names
  - Form resets after successful submission
  - Error states are set correctly on failure

### Priority 2 — Routing & State Management (Medium Impact)

#### 4. City Context (`src/context/godlyContext.js`)
- **Why:** Controls which city content appears site-wide. Incorrect city resolution = wrong phone numbers, service areas, and SEO metadata.
- **What to test:**
  - `getCityFromCookie()`: returns city name from cookie, defaults to "SOUTH FLORIDA" when no cookie or invalid slug
  - Landing pages (`/landing/*`) extract city from URL, never from cookie
  - Home (`/`) and `/blog` always use "SOUTH FLORIDA"
  - Other pages read from cookie

#### 5. Cities Data Mapping (`src/data/cities.js`)
- **Why:** Slug-to-city mapping drives routing, SEO, and content. Missing or misspelled entries break city pages.
- **What to test:**
  - All expected city slugs exist in `citiesMap`
  - All values are uppercase city names
  - No duplicate values
  - Key slugs match their URL patterns (e.g., `fort-lauderdale` → `FORT LAUDERDALE`)

#### 6. Services Data (`src/data/servicesData.js`)
- **Why:** Drives service pages, navigation, and SEO. Structural issues (missing fields) cause runtime errors.
- **What to test:**
  - All service entries have required fields (`hero`, `included`, `essential`)
  - Hero arrays have the expected length/structure
  - Service slugs match expected URL patterns

### Priority 3 — UI Components (Lower Impact, Higher Effort)

#### 7. Landing Page Quote Form (`src/components/landing/quoteForm.js`)
- A second quote form variant used on landing pages — same business-critical logic as the main form.
- Test the same validation and submission behaviors.

#### 8. Header Navigation (`src/godlyComponents/header/`)
- City selector popup, mobile nav toggle, desktop nav links.
- Smoke tests to ensure they render without crashing.

#### 9. UI Primitives (`src/components/ui/`)
- Accordion, Button, Calendar, Dialog, Form, etc.
- These wrap Radix UI — low priority since Radix is well-tested upstream. Only test custom behavior added on top.

---

## Suggested Implementation Order

1. **Install Vitest + Testing Library** and add a `test` script to `package.json`
2. **Write unit tests for `blog-pagination.js`** — pure functions, no mocking needed, quick win
3. **Write unit tests for `leadWebhooks.js`** — mock `fetch`, verify payloads
4. **Write unit tests for `formatPhoneNumber` and form validation logic** — extract from quoteForm if needed
5. **Write unit tests for `getCityFromCookie` and city context logic**
6. **Write data integrity tests for `cities.js` and `servicesData.js`**
7. **Add component smoke tests** for critical pages (home, city pages, quote form rendering)

---

## Security Note

The codebase contains a **hardcoded Airtable API key** in `src/godlyComponents/quoteForm.js` (line 262). This should be moved to an environment variable (`NEXT_PUBLIC_AIRTABLE_API_KEY`) regardless of testing — but tests should verify that the form submission works with a mocked Airtable client, never with real credentials.
