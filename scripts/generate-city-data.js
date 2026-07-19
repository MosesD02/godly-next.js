/**
 * Reads all content JSON files and generates src/data/cityServicesData.js
 *
 * Handles different JSON structures across batch files:
 * - boca-raton & batch-2: flat structure with hero_paragraph, why_essential[], faqs[], local_cta
 * - batch-3: nested hero.subheadline, why_essential.items[], faq[], final_cta.body
 * - batch-4: nested hero.subheadline, why_essential.items[], faq[], cta_section.description
 *            also has intro_paragraph as fallback
 * - final-batch: nested hero.subheadline, why_essential.paragraphs (no items), faqs[] with q/a keys
 */

const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "..", "content");
const OUTPUT_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "cityServicesData",
);
const INDEX_FILE = path.join(OUTPUT_DIR, "index.js");

const JSON_FILES = [
  "godly-content-boca-raton.json",
  "godly-content-batch-2.json",
  "godly-content-batch-3.json",
  "godly-content-batch-4.json",
  "godly-content-final-batch.json",
];

// Near-you JSON files (services_near_you only — merged into existing entries)
const NEAR_YOU_DIR = path.join(CONTENT_DIR, "near-you");
const NEAR_YOU_FILES = fs.existsSync(NEAR_YOU_DIR)
  ? fs.readdirSync(NEAR_YOU_DIR).filter((f) => f.endsWith(".json"))
  : [];

const COMMENT_HEADER = `// City-specific content overrides for service pages.
// Structure: cityServicesData[citySlug][serviceSlug] = { hero, essential, faqs, localCta }
//
// citySlug: matches the URL param (e.g. "boca-raton", "fort-lauderdale")
// serviceSlug: matches the URL param (e.g. "window-cleaning", "seal-coating")
//
// All fields are optional — if omitted, the default content from servicesData.js is used.
//
// hero: string — override for the hero description paragraph
// essential: array of { number, title, text } — override for the "Why Essential" cards
// faqs: array of { question, answer } — FAQs shown in the FAQ section
// localCta: string — override for the local CTA text at the bottom of the page
`;

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Extract citySlug from an entry, handling different formats
 */
function getCitySlug(entry) {
  if (entry.city_slug) return entry.city_slug;
  // Some entries have slugified city already (e.g. "boca-raton")
  // Others have display names (e.g. "Delray Beach")
  const city = entry.city || "";
  if (city.includes("-") && city === city.toLowerCase()) return city;
  return slugify(city);
}

/**
 * Extract serviceSlug from an entry
 */
function getServiceSlug(entry) {
  if (entry.service_slug) return entry.service_slug;
  const service = entry.service || "";
  if (service.includes("-") && service === service.toLowerCase())
    return service;
  return slugify(service);
}

/**
 * Extract hero paragraph from an entry
 */
function getHero(entry) {
  // Flat: hero_paragraph (string)
  if (typeof entry.hero_paragraph === "string") return entry.hero_paragraph;
  // Nested: hero.subheadline or hero.paragraph
  if (entry.hero && typeof entry.hero === "object") {
    if (entry.hero.subheadline) return entry.hero.subheadline;
    if (entry.hero.paragraph) return entry.hero.paragraph;
  }
  // Fallback: intro_paragraph
  if (typeof entry.intro_paragraph === "string") return entry.intro_paragraph;
  return null;
}

/**
 * Extract why_essential items and format them
 */
function getEssential(entry) {
  let items = null;

  if (Array.isArray(entry.why_essential)) {
    // Flat array format (boca-raton, batch-2)
    items = entry.why_essential;
  } else if (entry.why_essential && typeof entry.why_essential === "object") {
    if (Array.isArray(entry.why_essential.items)) {
      // Nested object with items array (batch-3, batch-4)
      items = entry.why_essential.items;
    } else if (Array.isArray(entry.why_essential.paragraphs)) {
      // final-batch: paragraphs are plain strings — split into sentence-based items
      const paragraphs = entry.why_essential.paragraphs.slice(0, 4);
      return paragraphs.map((text, i) => {
        // Use the first sentence as the title, rest as text
        const sentenceMatch = text.match(/^([^.!?]+[.!?])\s*(.*)/s);
        let title, body;
        if (sentenceMatch && sentenceMatch[2]) {
          title = sentenceMatch[1].replace(/[.!?]$/, "");
          body = text;
        } else {
          title = text.substring(0, 60).replace(/\s+\S*$/, "");
          body = text;
        }
        return {
          number: String(i + 1).padStart(2, "0") + ".",
          title,
          text: body,
        };
      });
    }
  }

  if (!items || items.length === 0) return null;

  // Take up to 4 items
  return items.slice(0, 4).map((item, i) => ({
    number: String(i + 1).padStart(2, "0") + ".",
    title: item.title,
    text: item.description,
  }));
}

/**
 * Extract FAQs from an entry
 */
function getFaqs(entry) {
  // Could be "faqs" or "faq"
  const faqArray = entry.faqs || entry.faq;
  if (!Array.isArray(faqArray) || faqArray.length === 0) return null;

  return faqArray.map((item) => ({
    question: item.question || item.q || "",
    answer: item.answer || item.a || item.description || "",
  }));
}

/**
 * Extract services_near_you items
 */
function getNearYou(entry) {
  if (
    !Array.isArray(entry.services_near_you) ||
    entry.services_near_you.length === 0
  )
    return null;
  return entry.services_near_you.map((item) => ({
    title: item.title,
    text: item.description,
  }));
}

/**
 * Extract local CTA text
 */
function getLocalCta(entry) {
  if (typeof entry.local_cta === "string") return entry.local_cta;
  // batch-3: final_cta.body
  if (entry.final_cta && entry.final_cta.body) return entry.final_cta.body;
  // batch-4: cta_section.description
  if (entry.cta_section && entry.cta_section.description)
    return entry.cta_section.description;
  // final-batch: no explicit CTA — build one from hero subheadline
  if (entry.hero && entry.hero.subheadline) {
    const cityName = entry.city || entry.city_slug || "";
    const displayCity = cityName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return `${displayCity} homeowners trust us for professional results. Book your free estimate today.`;
  }
  return null;
}

// Main
const cityServicesData = {};

for (const file of JSON_FILES) {
  const filePath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const entries = JSON.parse(raw);

  for (const entry of entries) {
    const citySlug = getCitySlug(entry);
    const serviceSlug = getServiceSlug(entry);

    if (!citySlug || !serviceSlug) {
      console.warn(`Skipping entry with missing city/service in ${file}`);
      continue;
    }

    const hero = getHero(entry);
    const essential = getEssential(entry);
    const faqs = getFaqs(entry);
    const localCta = getLocalCta(entry);
    const nearYou = getNearYou(entry);

    // Only include entries that have at least one field
    if (!hero && !essential && !faqs && !localCta && !nearYou) {
      console.warn(`Skipping ${citySlug}/${serviceSlug} — no usable fields`);
      continue;
    }

    if (!cityServicesData[citySlug]) {
      cityServicesData[citySlug] = {};
    }

    const serviceData = {};
    if (hero) serviceData.hero = hero;
    if (essential) serviceData.essential = essential;
    if (faqs) serviceData.faqs = faqs;
    if (localCta) serviceData.localCta = localCta;
    if (nearYou) serviceData.nearYou = nearYou;

    cityServicesData[citySlug][serviceSlug] = serviceData;
  }
}

// Merge near-you data into existing entries
for (const file of NEAR_YOU_FILES) {
  const filePath = path.join(NEAR_YOU_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const entries = JSON.parse(raw);

  for (const entry of entries) {
    const citySlug = getCitySlug(entry);
    const serviceSlug = getServiceSlug(entry);
    const nearYou = getNearYou(entry);

    if (!citySlug || !serviceSlug || !nearYou) continue;

    if (!cityServicesData[citySlug]) {
      cityServicesData[citySlug] = {};
    }
    if (!cityServicesData[citySlug][serviceSlug]) {
      cityServicesData[citySlug][serviceSlug] = {};
    }

    cityServicesData[citySlug][serviceSlug].nearYou = nearYou;
  }
}

// Sort cities alphabetically, and within each city sort services alphabetically
const sortedData = {};
const sortedCities = Object.keys(cityServicesData).sort();
for (const city of sortedCities) {
  sortedData[city] = {};
  const sortedServices = Object.keys(cityServicesData[city]).sort();
  for (const service of sortedServices) {
    sortedData[city][service] = cityServicesData[city][service];
  }
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate one file per city
for (const city of sortedCities) {
  const cityData = sortedData[city];
  const jsonStr = JSON.stringify(cityData, null, 2);
  const camelName = city.replace(/-(\w)/g, (_, c) => c.toUpperCase());
  const cityFile = path.join(OUTPUT_DIR, `${city}.js`);
  const content = `export const ${camelName} = ${jsonStr};\n`;
  fs.writeFileSync(cityFile, content, "utf-8");
}

// Generate index.js that re-exports all cities as cityServicesData
const imports = [];
const entries = [];
for (const city of sortedCities) {
  const camelName = city.replace(/-(\w)/g, (_, c) => c.toUpperCase());
  const routeCity = city === "miramar-fl" ? "miramar" : city;
  imports.push(`import { ${camelName} } from "./${city}";`);
  entries.push(`  "${routeCity}": ${camelName},`);
}

// South Florida is a hand-maintained regional fallback rather than a content
// batch entry, so keep it in the generated index when regenerating city data.
if (!sortedCities.includes("south-florida")) {
  imports.push('import { southFlorida } from "./south-florida";');
  entries.push('  "south-florida": southFlorida,');
}

// Golden Beach uses the service-page copy supplied in its dedicated brief,
// so preserve that hand-maintained module when regenerating batch city data.
if (!sortedCities.includes("golden-beach")) {
  imports.push('import { goldenBeach } from "./golden-beach";');
  entries.push('  "golden-beach": goldenBeach,');
}

const indexContent = `${COMMENT_HEADER}
${imports.join("\n")}
import { sealingFaqsByCity } from "./sealingFaqs";

const baseCityServicesData = {
${entries.join("\n")}
};

function mergeSealingFaqs(citySlug, services) {
  const sealingServices = sealingFaqsByCity[citySlug];
  if (!sealingServices) return services;

  return {
    ...services,
    ...Object.fromEntries(
      Object.entries(sealingServices).map(([serviceSlug, faqOverride]) => [
        serviceSlug,
        { ...(services[serviceSlug] ?? {}), ...faqOverride },
      ]),
    ),
  };
}

export const cityServicesData = Object.fromEntries(
  Object.entries(baseCityServicesData).map(([citySlug, services]) => [
    citySlug,
    mergeSealingFaqs(citySlug, services),
  ]),
);
`;

fs.writeFileSync(INDEX_FILE, indexContent, "utf-8");

// Print summary
const cityCount = sortedCities.length;
let serviceCount = 0;
for (const city of sortedCities) {
  serviceCount += Object.keys(sortedData[city]).length;
}
console.log(`Generated ${cityCount} city files + index.js in ${OUTPUT_DIR}`);
console.log(`  Total city/service entries: ${serviceCount}`);
console.log(`  Cities: ${sortedCities.join(", ")}`);
