import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";

export const runtime = "nodejs";
export const alt =
  "Book professional window cleaning and pressure washing services in South Florida. Free estimates and satisfaction guarantee.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const [fonts, logoSrc, paperBgSrc] = await Promise.all([
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  return new ImageResponse(
    <OgLayout
      title="Book Your Service"
      subtitle="Window cleaning & pressure washing in South Florida | Free estimates"
      logoSrc={logoSrc}
      paperBgSrc={paperBgSrc}
    />,
    { ...OG_SIZE, fonts },
  );
}
