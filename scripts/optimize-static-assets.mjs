#!/usr/bin/env node
/**
 * Raster optimizations for public assets (hero banner WebP).
 * Requires source `public/assets/heroBanner.jpg` when present.
 */
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const heroJpg = join(root, "public/assets/heroBanner.jpg");
const heroWebp = join(root, "public/assets/heroBanner.webp");

async function main() {
  if (!existsSync(heroJpg)) {
    console.log("optimize-static-assets: no public/assets/heroBanner.jpg — skip");
    return;
  }

  await mkdir(dirname(heroWebp), { recursive: true });

  await sharp(heroJpg)
    .resize({ width: 2048, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(heroWebp);

  console.log("optimize-static-assets: wrote", heroWebp);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
