import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";

export const alt =
  "Expert tips on pressure washing and window cleaning for South Florida homeowners.";
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
      title="Blog | Godly Windows & Wash Co."
      subtitle="Expert tips on pressure washing and window cleaning for South Florida"
      logoSrc={logoSrc}
      paperBgSrc={paperBgSrc}
    />,
    { ...OG_SIZE, fonts },
  );
}
