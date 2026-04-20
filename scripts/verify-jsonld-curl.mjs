/**
 * Imitates a simple crawler: GET pages and verify JSON-LD scripts parse as JSON.
 * Usage: node scripts/verify-jsonld-curl.mjs [baseUrl]
 * Default base: http://localhost:3010
 */

const base = process.argv[2] || "http://localhost:3010";
const paths = [
  "/",
  "/fort-lauderdale",
  "/fort-lauderdale/pressure-washing",
  "/blog/window-cleaning-near-me-boca-raton",
];

const scriptRe =
  /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

async function check(path) {
  const url = `${base.replace(/\/$/, "")}${path}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "JSON-LD-verify/1.0" },
  });
  const html = await res.text();
  const scripts = [...html.matchAll(scriptRe)];

  console.log(`\n=== ${path} ===`);
  console.log(`HTTP ${res.status} | ld+json script tags: ${scripts.length}`);

  if (scripts.length === 0) {
    console.log("FAIL: no application/ld+json in HTML");
    return false;
  }

  let ok = true;
  for (let i = 0; i < scripts.length; i++) {
    const raw = scripts[i][1].trim();
    try {
      const data = JSON.parse(raw);
      if (data["@graph"]) {
        const types = data["@graph"].map((n) => n["@type"]).filter(Boolean);
        console.log(`  [${i + 1}] @graph types: ${types.flat().join(", ")}`);
      } else {
        console.log(`  [${i + 1}] @type: ${data["@type"] || "(none)"}`);
      }
    } catch (e) {
      console.log(`  [${i + 1}] FAIL parse: ${e.message}`);
      ok = false;
    }
  }
  return ok;
}

let all = true;
for (const p of paths) {
  const r = await check(p);
  all = all && r;
}
console.log(all ? "\nAll checks passed." : "\nSome checks failed.");
process.exit(all ? 0 : 1);
