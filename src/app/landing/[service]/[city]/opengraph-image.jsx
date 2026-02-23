import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";
import { citiesMap } from "@/data/cities";
import {
  generateServiceTitle,
  serviceMetaTitles,
} from "@/data/metaTitles";

export const size = OG_SIZE;
export const contentType = "image/png";

function capitalize(str) {
  if (!str) return str;
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export async function generateImageMetadata({ params }) {
  const { service, city } = await params;
  const location = citiesMap[city] || city?.replace(/-/g, " ").toUpperCase();
  const title = generateServiceTitle(service, location);
  const serviceName =
    serviceMetaTitles[service] ||
    service?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const locationFormatted = location ? capitalize(location) : "South Florida";
  return [
    {
      id: `${service}-${city}`,
      alt: `${title} — ${serviceName} in ${locationFormatted}`,
      size: OG_SIZE,
      contentType: "image/png",
    },
  ];
}

export default async function Image({ params, id }) {
  const [resolvedParams, fonts, logoSrc, paperBgSrc] = await Promise.all([
    params,
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  const { service, city } = await resolvedParams;
  const location = citiesMap[city] || city?.replace(/-/g, " ").toUpperCase();
  const title = generateServiceTitle(service, location);
  const serviceName =
    serviceMetaTitles[service] ||
    service?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const locationFormatted = location ? capitalize(location) : "South Florida";

  return new ImageResponse(
    (
      <OgLayout
        title={title}
        subtitle={`${serviceName} in ${locationFormatted}`}
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
        locationBadge={locationFormatted}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
