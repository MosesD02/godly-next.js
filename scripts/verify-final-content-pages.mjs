import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { runInNewContext } from "node:vm";

function argument(name, fallback = null) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function extractModule(source, filename) {
  const match = source.match(/export const \w+Content = (\{[\s\S]*\});\s*$/);
  invariant(match, `Could not parse generated module ${filename}`);
  return runInNewContext(`(${match[1]})`, Object.create(null), {
    timeout: 1_000,
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

const serviceSlug = argument("--service");
const baseUrl = argument("--base-url", "http://localhost:3000").replace(
  /\/$/,
  "",
);

invariant(serviceSlug, "Pass --service <service-slug>.");

const filename = `${serviceSlug}.js`;
const modulePath = join(
  process.cwd(),
  "src",
  "data",
  "cityServicesData",
  "finalNotRankingPages",
  filename,
);
const content = extractModule(await readFile(modulePath, "utf8"), filename);

let verified = 0;
for (const [citySlug, services] of Object.entries(content)) {
  const page = services[serviceSlug];
  invariant(page, `Missing ${citySlug}/${serviceSlug} content.`);

  const requestUrl = `${baseUrl}/${citySlug}/${serviceSlug}`;
  const response = await fetch(requestUrl, {
    headers: { "cache-control": "no-cache" },
    redirect: "follow",
  });
  invariant(
    response.status === 200,
    `${requestUrl} returned ${response.status}`,
  );

  const html = await response.text();
  const decodedHtml = decodeHtml(html);
  invariant(
    html.includes(`<title>${escapeHtml(page.metaTitle)}</title>`),
    `Meta title mismatch at ${requestUrl}`,
  );
  invariant(
    html.includes(
      `<meta name="description" content="${escapeHtml(page.metaDescription)}"/>`,
    ),
    `Meta description mismatch at ${requestUrl}`,
  );
  invariant(
    html.includes(`<link rel="canonical" href="${page.sourceUrl}"/>`),
    `Canonical mismatch at ${requestUrl}`,
  );

  for (const [label, expected] of [
    ["H1", page.h1],
    ["intro", page.hero],
    ["included title", page.included[0].title],
    ["included text", page.included[0].text],
    ["essential title", page.essential[0].title],
    ["essential text", page.essential[0].text],
    ["area text", page.nearYou[0].text],
    ["Why Choose Us title", page.chooseUs[0].name],
    ["Why Choose Us text", page.chooseUs[0].description],
    ["FAQ question", page.faqs[0].question],
    ["FAQ answer", page.faqs[0].answer],
    ["closing line", page.localCta],
  ]) {
    invariant(
      decodedHtml.includes(expected),
      `Missing ${label} at ${requestUrl}`,
    );
  }

  invariant(
    decodedHtml.includes('"@type":"FAQPage"'),
    `Missing FAQ schema at ${requestUrl}`,
  );

  if (page.interiorSection) {
    invariant(
      decodedHtml.includes('data-section="interior-window-cleaning"') &&
        decodedHtml.includes(page.interiorSection.heading) &&
        page.interiorSection.body.every((paragraph) =>
          decodedHtml.includes(paragraph),
        ),
      `Interior section mismatch at ${requestUrl}`,
    );
    invariant(
      (html.match(/data-interior-paragraph=/g) ?? []).length ===
        page.interiorSection.body.length,
      `Interior section paragraph count mismatch at ${requestUrl}`,
    );
  } else {
    invariant(
      !decodedHtml.includes('data-section="interior-window-cleaning"'),
      `Unexpected interior section at ${requestUrl}`,
    );
  }

  verified += 1;
  console.log(`Verified ${requestUrl}`);
}

console.log(
  `Verified ${verified} rendered ${serviceSlug} pages at ${baseUrl}.`,
);
