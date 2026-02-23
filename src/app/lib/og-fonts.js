import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ASSETS_DIR = join(process.cwd(), "src/assets");
const FONTS_DIR = join(ASSETS_DIR, "fonts");

/**
 * Load fonts for OG ImageResponse.
 * Returns array for ImageResponse fonts option.
 * Keep minimal to stay under 500KB bundle limit.
 */
export async function loadOgFonts() {
  const [satoshiBold, satoshiRegular, satoshiMedium, marlton] = await Promise.all([
    readFile(join(FONTS_DIR, "Satoshi-Bold.otf")),
    readFile(join(FONTS_DIR, "Satoshi-Regular.otf")),
    readFile(join(FONTS_DIR, "Satoshi-Medium.otf")),
    readFile(join(FONTS_DIR, "MarltonSans.otf")),
  ]);

  return [
    { name: "Satoshi", data: satoshiBold, weight: 700, style: "normal" },
    { name: "Satoshi", data: satoshiRegular, weight: 400, style: "normal" },
    { name: "Satoshi", data: satoshiMedium, weight: 500, style: "normal" },
    { name: "Marlton", data: marlton, weight: 400, style: "normal" },
  ];
}

/**
 * Load logo as base64 data URL for OG ImageResponse.
 */
export async function loadOgLogo() {
  const logoPath = join(ASSETS_DIR, "logo-new.png");
  const logoData = await readFile(logoPath, "base64");
  return `data:image/png;base64,${logoData}`;
}

const PAPER_WEBP = join(process.cwd(), "public/assets/vintage-paper-16.webp");
const PAPER_PNG = join(process.cwd(), "public/assets/vintage-paper-16-og.png");

/**
 * Load paper texture as base64 data URL for OG ImageResponse.
 * Prefers pre-converted PNG (run npm run preconvert-og-paper) to avoid runtime conversion.
 * Satori doesn't support WebP, so we convert to PNG via Sharp when pre-converted file is missing.
 */
export async function loadOgPaperBg() {
  try {
    try {
      const pngBuffer = await readFile(PAPER_PNG);
      const base64 = pngBuffer.toString("base64");
      return `data:image/png;base64,${base64}`;
    } catch {
      const webpBuffer = await readFile(PAPER_WEBP);
      const pngBuffer = await sharp(webpBuffer).png().toBuffer();
      const base64 = pngBuffer.toString("base64");
      return `data:image/png;base64,${base64}`;
    }
  } catch {
    return null;
  }
}
