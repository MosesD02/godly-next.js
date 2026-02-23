#!/usr/bin/env node
/**
 * Pre-convert paper texture to PNG for OG images.
 * Run before build: npm run preconvert-og-paper
 * Saves conversion at runtime.
 */
const { readFile, writeFile, mkdir } = require("node:fs/promises");
const { join, dirname } = require("node:path");
const sharp = require("sharp");

const root = join(__dirname, "..");
const srcPath = join(root, "public/assets/vintage-paper-16.webp");
const outPath = join(root, "public/assets/vintage-paper-16-og.png");

async function main() {
  try {
    const webpBuffer = await readFile(srcPath);
    const pngBuffer = await sharp(webpBuffer).png().toBuffer();
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, pngBuffer);
    console.log("Pre-converted OG paper texture:", outPath);
  } catch (err) {
    console.error("Failed to pre-convert paper texture:", err.message);
    process.exit(1);
  }
}

main();
