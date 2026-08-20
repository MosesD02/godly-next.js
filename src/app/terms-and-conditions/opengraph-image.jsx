import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";

export const alt =
  "Terms and Conditions for Godly Windows & Wash Co. Learn about our service policies and user agreements.";
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
      title="Terms and Conditions"
      subtitle="Service policies and user agreements | Godly Windows"
      logoSrc={logoSrc}
      paperBgSrc={paperBgSrc}
    />,
    { ...OG_SIZE, fonts },
  );
}
