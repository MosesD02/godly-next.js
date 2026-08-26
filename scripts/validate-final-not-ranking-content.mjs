import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { runInNewContext } from "node:vm";

const CONTENT_DIRECTORY = join(
  process.cwd(),
  "src",
  "data",
  "cityServicesData",
  "finalNotRankingPages",
);

const EXPECTED = {
  "pressure-washing": {
    pages: 19,
    included: 4,
    essential: 3,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
  "gutter-cleaning": {
    pages: 18,
    included: 3,
    essential: 3,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
  "paver-sealing": {
    pages: 16,
    included: 4,
    essential: 3,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
  "house-washing": {
    pages: 16,
    included: 4,
    essential: 4,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
  "window-cleaning": {
    pages: 4,
    included: 5,
    essential: 4,
    nearYou: 5,
    chooseUs: 4,
    faqs: 4,
  },
  "holiday-lighting": {
    pages: 1,
    included: 5,
    essential: 3,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
  "soft-washing": {
    pages: 1,
    included: 5,
    essential: 3,
    nearYou: 4,
    chooseUs: 4,
    faqs: 4,
  },
};

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function nonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function extractModuleJson(source, filename) {
  const match = source.match(/export const \w+Content = (\{[\s\S]*\});\s*$/);
  invariant(match, `Could not parse generated module ${filename}`);
  return runInNewContext(`(${match[1]})`, Object.create(null), {
    timeout: 1_000,
  });
}

const requestedServiceIndex = process.argv.indexOf("--service");
const requestedService =
  requestedServiceIndex >= 0 ? process.argv[requestedServiceIndex + 1] : null;
const requireComplete = process.argv.includes("--complete");

const filenames = (await readdir(CONTENT_DIRECTORY))
  .filter((filename) => filename.endsWith(".js") && filename !== "index.js")
  .filter(
    (filename) => !requestedService || filename === `${requestedService}.js`,
  )
  .sort();

invariant(
  filenames.length > 0,
  "No generated content modules found to validate.",
);
if (requestedService) {
  invariant(EXPECTED[requestedService], `Unknown service: ${requestedService}`);
  invariant(
    filenames.length === 1,
    `Generated module missing for ${requestedService}.`,
  );
}
if (requireComplete) {
  invariant(
    filenames.length === Object.keys(EXPECTED).length,
    `Expected ${Object.keys(EXPECTED).length} service modules, found ${filenames.length}.`,
  );
}

const seenUrls = new Set();
let totalPages = 0;

for (const filename of filenames) {
  const serviceSlug = filename.replace(/\.js$/, "");
  const expected = EXPECTED[serviceSlug];
  invariant(expected, `Unexpected generated service module: ${filename}`);

  const source = await readFile(join(CONTENT_DIRECTORY, filename), "utf8");
  const content = extractModuleJson(source, filename);
  let servicePages = 0;

  for (const [citySlug, services] of Object.entries(content)) {
    const page = services[serviceSlug];
    invariant(page, `Missing ${citySlug}/${serviceSlug} page object.`);
    servicePages += 1;
    totalPages += 1;

    const expectedUrl = `https://godlywindows.com/${citySlug}/${serviceSlug}`;
    invariant(
      page.sourceUrl === expectedUrl,
      `Unexpected URL: ${page.sourceUrl}`,
    );
    invariant(
      !seenUrls.has(page.sourceUrl),
      `Duplicate URL: ${page.sourceUrl}`,
    );
    seenUrls.add(page.sourceUrl);

    for (const key of [
      "metaTitle",
      "metaDescription",
      "h1",
      "hero",
      "localCta",
    ]) {
      invariant(nonEmpty(page[key]), `Missing ${key} for ${page.sourceUrl}`);
    }

    for (const [key, count] of Object.entries({
      included: expected.included,
      essential: expected.essential,
      nearYou: expected.nearYou,
      chooseUs: expected.chooseUs,
      faqs: expected.faqs,
    })) {
      invariant(
        Array.isArray(page[key]) && page[key].length === count,
        `${page.sourceUrl} expected ${count} ${key} items.`,
      );
    }

    page.included.forEach((item, index) => {
      invariant(
        item.number === String(index + 1).padStart(2, "0"),
        `Bad included number for ${page.sourceUrl}`,
      );
      invariant(
        nonEmpty(item.title) && nonEmpty(item.text),
        `Bad included item for ${page.sourceUrl}`,
      );
    });
    page.essential.forEach((item, index) => {
      invariant(
        item.number === `${String(index + 1).padStart(2, "0")}.`,
        `Bad essential number for ${page.sourceUrl}`,
      );
      invariant(
        nonEmpty(item.title) && nonEmpty(item.text),
        `Bad essential item for ${page.sourceUrl}`,
      );
    });
    page.nearYou.forEach((item) => {
      invariant(
        nonEmpty(item.text),
        `Bad Areas We Serve item for ${page.sourceUrl}`,
      );
      invariant(
        item.title === undefined || nonEmpty(item.title),
        `Empty Areas We Serve title for ${page.sourceUrl}`,
      );
    });
    page.chooseUs.forEach((item) => {
      invariant(
        nonEmpty(item.name) && nonEmpty(item.description),
        `Bad Why Choose Us item for ${page.sourceUrl}`,
      );
    });
    page.faqs.forEach((item) => {
      invariant(
        nonEmpty(item.question) && nonEmpty(item.answer),
        `Bad FAQ for ${page.sourceUrl}`,
      );
    });

    if (serviceSlug === "window-cleaning") {
      invariant(
        page.interiorSection?.heading === "Interior Window Cleaning",
        `Missing interior heading for ${page.sourceUrl}`,
      );
      invariant(
        page.interiorSection?.body?.length === 2,
        `Expected two interior paragraphs for ${page.sourceUrl}`,
      );
    } else {
      invariant(
        page.interiorSection === undefined,
        `Unexpected interior section for ${page.sourceUrl}`,
      );
    }
  }

  invariant(
    servicePages === expected.pages,
    `${serviceSlug} expected ${expected.pages} pages, found ${servicePages}.`,
  );
  console.log(`Validated ${servicePages} ${serviceSlug} pages.`);
}

if (requireComplete) {
  invariant(totalPages === 75, `Expected 75 total pages, found ${totalPages}.`);
}

console.log(`Validated ${totalPages} unique final-content pages.`);
