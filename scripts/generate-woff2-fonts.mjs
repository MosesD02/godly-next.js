#!/usr/bin/env node
/**
 * Converts fonts in src/assets/fonts to WOFF2 under public/fonts.
 * wawoff2 expects TrueType outlines; CFF/OTF may fail — those files are skipped with a warning.
 * After a successful run, add each WOFF2 as the first `url()` in the matching @font-face in globals.css.
 */
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { compress } = require("wawoff2");

const root = fileURLToPath(new URL("..", import.meta.url));
const srcDir = join(root, "src/assets/fonts");
const outDir = join(root, "public/fonts");

async function main() {
  if (!existsSync(srcDir)) {
    console.log("generate-woff2-fonts: no src/assets/fonts — skip");
    return;
  }

  const entries = await readdir(srcDir);
  const fontFiles = entries.filter((f) => /\.(otf|ttf)$/i.test(f));

  if (fontFiles.length === 0) {
    console.log(
      "generate-woff2-fonts: no .otf/.ttf in src/assets/fonts — skip",
    );
    return;
  }

  await mkdir(outDir, { recursive: true });

  for (const file of fontFiles) {
    const inPath = join(srcDir, file);
    const base = file.replace(/\.(otf|ttf)$/i, "");
    const outPath = join(outDir, `${base}.woff2`);
    try {
      const input = await readFile(inPath);
      const woff2 = await compress(input);
      await writeFile(outPath, woff2);
      console.log("Wrote", outPath);
    } catch (err) {
      console.warn(
        `generate-woff2-fonts: skip ${file} (${err?.message || err})`,
      );
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
