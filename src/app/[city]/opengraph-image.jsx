import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";
import { citiesMap } from "@/data/cities";
import { generateCityTitle } from "@/data/metaTitles";

export const size = OG_SIZE;
export const contentType = "image/png";

function capitalize(str) {
  if (!str) return str;
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export default async function Image({ params }) {
  const [resolvedParams, fonts, logoSrc, paperBgSrc] = await Promise.all([
    params,
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  const { city } = await resolvedParams;
  const cityName = citiesMap[city];
  const title = generateCityTitle(cityName);
  const location = cityName ? capitalize(cityName) : "South Florida";

  return new ImageResponse(
    (
      <OgLayout
        title={title}
        subtitle={`Professional window cleaning & pressure washing in ${location}`}
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
        locationBadge={location}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
