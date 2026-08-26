import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { runInNewContext } from "node:vm";

const CURRENT_DIRECTORY = join(
  process.cwd(),
  "src",
  "data",
  "cityServicesData",
  "finalNotRankingPages",
);

const expectedDirectoryIndex = process.argv.indexOf("--expected-directory");
const expectedDirectory =
  expectedDirectoryIndex >= 0
    ? resolve(process.argv[expectedDirectoryIndex + 1])
    : null;

assert.ok(
  expectedDirectory,
  "Pass the freshly generated workbook output with --expected-directory.",
);

function extractModuleData(source, filename) {
  const match = source.match(/export const \w+Content = (\{[\s\S]*\});\s*$/);
  assert.ok(match, `Could not parse generated module ${filename}`);

  const value = runInNewContext(`(${match[1]})`, Object.create(null), {
    timeout: 1_000,
  });

  return JSON.parse(JSON.stringify(value));
}

async function serviceFilenames(directory) {
  return (await readdir(directory))
    .filter((filename) => filename.endsWith(".js") && filename !== "index.js")
    .sort();
}

const currentFilenames = await serviceFilenames(CURRENT_DIRECTORY);
const expectedFilenames = await serviceFilenames(expectedDirectory);

assert.deepEqual(
  currentFilenames,
  expectedFilenames,
  "The current and workbook-generated service module lists differ.",
);

let totalPages = 0;

for (const filename of currentFilenames) {
  const [currentSource, expectedSource] = await Promise.all([
    readFile(join(CURRENT_DIRECTORY, filename), "utf8"),
    readFile(join(expectedDirectory, filename), "utf8"),
  ]);
  const currentData = extractModuleData(currentSource, filename);
  const expectedData = extractModuleData(expectedSource, filename);

  assert.deepEqual(
    currentData,
    expectedData,
    `${filename} does not exactly match the current workbook.`,
  );

  const serviceSlug = filename.replace(/\.js$/, "");
  const pageCount = Object.values(currentData).filter(
    (services) => services[serviceSlug],
  ).length;
  totalPages += pageCount;
  console.log(`Exact workbook match: ${filename} (${pageCount} pages).`);
}

assert.equal(totalPages, 75, `Expected 75 pages, found ${totalPages}.`);
console.log(`Exact workbook match confirmed for all ${totalPages} pages.`);
