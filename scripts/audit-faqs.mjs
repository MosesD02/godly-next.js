/**
 * FAQ Audit Agent
 * Checks which services in which city have FAQs defined in cityServicesData.
 *
 * Usage: node scripts/audit-faqs.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { pathToFileURL } from "url";

const CITY_DATA_DIR = join(process.cwd(), "src/data/cityServicesData");

// Parse the cities map from cities.js
const citiesFile = readFileSync(
  join(process.cwd(), "src/data/cities.js"),
  "utf-8",
);
const citiesMatch = citiesFile.match(/\{([\s\S]*)\}/);
const citiesMap = {};
for (const m of citiesMatch[1].matchAll(
  /["']?([a-z-]+)["']?\s*:\s*"([^"]+)"/g,
)) {
  citiesMap[m[1]] = m[2];
}

// Parse service slugs from servicesData.js
const servicesFile = readFileSync(
  join(process.cwd(), "src/data/servicesData.js"),
  "utf-8",
);
const serviceKeys = [];
for (const m of servicesFile.matchAll(/"([a-z-]+)":\s*\{/g)) {
  serviceKeys.push(m[1]);
}

// Parse each city file for faqs
const cityFiles = readdirSync(CITY_DATA_DIR).filter(
  (f) => f.endsWith(".js") && f !== "index.js",
);

const results = {};
let totalWithFaq = 0;
let totalWithoutFaq = 0;

for (const file of cityFiles) {
  const slug = basename(file, ".js");
  const content = readFileSync(join(CITY_DATA_DIR, file), "utf-8");

  // Find all service keys defined in this file
  const serviceBlocks = [...content.matchAll(/"([a-z-]+)":\s*\{/g)];
  const servicesInFile = serviceBlocks.map((m) => m[1]);

  // For each service, check if it has a faqs array
  const cityResult = {};
  for (const svc of servicesInFile) {
    // Check if this service block contains "faqs"
    const svcPattern = new RegExp(
      `"${svc}":\\s*\\{([\\s\\S]*?)(?=\\n  "[a-z-]+":\\s*\\{|\\n\\};)`,
      "g",
    );
    const svcMatch = svcPattern.exec(content);
    if (svcMatch) {
      const hasFaqs = /"faqs"\s*:\s*\[/.test(svcMatch[1]);
      // Count FAQ items
      if (hasFaqs) {
        const faqCount = (svcMatch[1].match(/"question"\s*:/g) || []).length;
        cityResult[svc] = faqCount;
        totalWithFaq++;
      } else {
        cityResult[svc] = 0;
        totalWithoutFaq++;
      }
    }
  }

  results[slug] = cityResult;
}

// Print report
console.log("=".repeat(70));
console.log("FAQ AUDIT REPORT");
console.log("=".repeat(70));
console.log();

// Summary table
const allServices = [
  ...new Set(Object.values(results).flatMap(Object.keys)),
].sort();

console.log("SUMMARY BY CITY:");
console.log("-".repeat(70));

for (const [city, services] of Object.entries(results).sort()) {
  const displayName = citiesMap[city] || city;
  const withFaq = Object.entries(services).filter(([, count]) => count > 0);
  const withoutFaq = Object.entries(services).filter(
    ([, count]) => count === 0,
  );

  console.log(`\n${displayName} (${city}):`);
  if (withFaq.length > 0) {
    console.log(`  HAS FAQs (${withFaq.length}):`);
    for (const [svc, count] of withFaq.sort()) {
      console.log(`    - ${svc}: ${count} questions`);
    }
  }
  if (withoutFaq.length > 0) {
    console.log(`  MISSING FAQs (${withoutFaq.length}):`);
    for (const [svc] of withoutFaq.sort()) {
      console.log(`    - ${svc}`);
    }
  }
}

// Services missing across all cities
console.log("\n" + "=".repeat(70));
console.log("MISSING FAQ MATRIX:");
console.log("=".repeat(70));

const missingMatrix = {};
for (const [city, services] of Object.entries(results)) {
  for (const svc of serviceKeys) {
    if (!services[svc] || services[svc] === 0) {
      if (!missingMatrix[svc]) missingMatrix[svc] = [];
      missingMatrix[svc].push(citiesMap[city] || city);
    }
  }
}

for (const [svc, cities] of Object.entries(missingMatrix).sort()) {
  console.log(`\n${svc} — missing in ${cities.length} cities:`);
  console.log(`  ${cities.join(", ")}`);
}

console.log("\n" + "=".repeat(70));
console.log("TOTALS:");
console.log(`  Service/city combos WITH FAQs:    ${totalWithFaq}`);
console.log(`  Service/city combos WITHOUT FAQs:  ${totalWithoutFaq}`);
console.log(
  `  Total service/city combos:         ${totalWithFaq + totalWithoutFaq}`,
);
console.log("=".repeat(70));
