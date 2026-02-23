import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "./lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "./lib/og-fonts";

export const runtime = "nodejs";
export const alt = "Window Cleaning & Pressure Washing Services in South Florida | Godly Windows";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const [fonts, logoSrc, paperBgSrc] = await Promise.all([
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  return new ImageResponse(
    (
      <OgLayout
        title="Window Cleaning & Pressure Washing"
        subtitle="Professional exterior cleaning in South Florida"
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
