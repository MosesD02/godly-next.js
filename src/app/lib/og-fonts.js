import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { BASE_URL } from "@/app/lib/constants";

const ASSETS_DIR = join(process.cwd(), "src/assets");
const FONTS_DIR = join(ASSETS_DIR, "fonts");

/** Base URL for fetch fallback (preview deployments use VERCEL_URL) */
const getFetchBase = () =>
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : BASE_URL.replace(/\/$/, "");

/** Fetch asset from public URL (fallback when readFile fails in serverless) */
async function fetchAsset(path) {
  const url = `${getFetchBase()}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

/**
 * Load fonts for OG ImageResponse.
 * Tries readFile first (dev/build); falls back to fetch (Vercel serverless).
 */
export async function loadOgFonts() {
  const fontFiles = [
    { file: "Satoshi-Bold.otf", name: "Satoshi", weight: 700 },
    { file: "Satoshi-Regular.otf", name: "Satoshi", weight: 400 },
    { file: "Satoshi-Medium.otf", name: "Satoshi", weight: 500 },
    { file: "MarltonSans.otf", name: "Marlton", weight: 400 },
  ];

  const loadFont = async ({ file, name, weight }) => {
    try {
      const data = await readFile(join(FONTS_DIR, file));
      return { name, data, weight, style: "normal" };
    } catch {
      const data = await fetchAsset(`/og-assets/${file}`);
      return { name, data, weight, style: "normal" };
    }
  };

  return Promise.all(fontFiles.map(loadFont));
}

/**
 * Load logo as base64 data URL for OG ImageResponse.
 */
export async function loadOgLogo() {
  try {
    const logoPath = join(ASSETS_DIR, "logo-new.png");
    const logoData = await readFile(logoPath, "base64");
    return `data:image/png;base64,${logoData}`;
  } catch {
    const buffer = await fetchAsset("/og-assets/logo-new.png");
    const base64 = buffer.toString("base64");
    return `data:image/png;base64,${base64}`;
  }
}

const PAPER_WEBP = join(process.cwd(), "public/assets/vintage-paper-16.webp");
const PAPER_PNG = join(process.cwd(), "public/assets/vintage-paper-16-og.png");

/** OG canvas is 1200×630; full-size paper PNGs are multi‑MB and break @vercel/og parsing. */
async function resizePaperForOg(input) {
  return sharp(input)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Load paper texture as base64 data URL for OG ImageResponse.
 * Prefers pre-converted PNG; falls back to fetch when readFile fails.
 */
export async function loadOgPaperBg() {
  try {
    try {
      const pngBuffer = await readFile(PAPER_PNG);
      const resized = await resizePaperForOg(pngBuffer);
      const base64 = resized.toString("base64");
      return `data:image/png;base64,${base64}`;
    } catch {
      const webpBuffer = await readFile(PAPER_WEBP);
      const pngBuffer = await resizePaperForOg(webpBuffer);
      const base64 = pngBuffer.toString("base64");
      return `data:image/png;base64,${base64}`;
    }
  } catch {
    try {
      const pngBuffer = await fetchAsset("/assets/vintage-paper-16-og.png");
      const resized = await resizePaperForOg(pngBuffer);
      const base64 = resized.toString("base64");
      return `data:image/png;base64,${base64}`;
    } catch {
      return null;
    }
  }
}
