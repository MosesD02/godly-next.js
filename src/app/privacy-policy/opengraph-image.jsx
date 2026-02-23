import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";

export const alt =
  "Privacy Policy for Godly Windows & Wash Co. Learn how we collect, use, and protect your personal information.";
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
        title="Privacy Policy"
        subtitle="How we protect your data | Godly Windows"
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
