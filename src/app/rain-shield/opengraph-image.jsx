import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";

export const runtime = "nodejs";
export const alt =
  "Rain Shield hydrophobic glass coating — included with window cleaning in South Florida | Godly Windows";
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
      title="Rain Shield Technology"
      subtitle="Hydrophobic glass coating | South Florida"
      logoSrc={logoSrc}
      paperBgSrc={paperBgSrc}
    />,
    { ...OG_SIZE, fonts },
  );
}
