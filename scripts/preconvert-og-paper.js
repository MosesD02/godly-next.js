#!/usr/bin/env node
/**
 * Prepare OG image assets for production.
 * - Pre-convert paper texture WebP → PNG
 * - Copy fonts and logo to public/og-assets for fetch fallback in serverless
 * Run before build: npm run preconvert-og-paper
 */
const { readFile, writeFile, mkdir, copyFile } = require("node:fs/promises");
const { join, dirname } = require("node:path");
const sharp = require("sharp");

const root = join(__dirname, "..");
const outDir = join(root, "public/og-assets");

const OG_ASSETS = [
  { src: "src/assets/fonts/Satoshi-Bold.otf", dest: "Satoshi-Bold.otf" },
  { src: "src/assets/fonts/Satoshi-Regular.otf", dest: "Satoshi-Regular.otf" },
  { src: "src/assets/fonts/Satoshi-Medium.otf", dest: "Satoshi-Medium.otf" },
  { src: "src/assets/fonts/MarltonSans.otf", dest: "MarltonSans.otf" },
  { src: "src/assets/logo-new.png", dest: "logo-new.png" },
];

async function main() {
  try {
    await mkdir(outDir, { recursive: true });

    // Pre-convert paper texture
    const paperSrc = join(root, "public/assets/vintage-paper-16.webp");
    const outPath = join(root, "public/assets/vintage-paper-16-og.png");
    const webpBuffer = await readFile(paperSrc);
    const pngBuffer = await sharp(webpBuffer).png().toBuffer();
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, pngBuffer);
    console.log("Pre-converted OG paper texture:", outPath);

    // Copy fonts and logo for production fetch fallback
    for (const { src, dest } of OG_ASSETS) {
      const srcPath = join(root, src);
      const destPath = join(outDir, dest);
      await copyFile(srcPath, destPath);
      console.log("Copied OG asset:", dest);
    }
  } catch (err) {
    console.error("Failed to prepare OG assets:", err.message);
    process.exit(1);
  }
}

main();
