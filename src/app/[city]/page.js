import GodlyHome from "@/godlyComponents/home";
import { citiesMap } from "@/data/cities";
import {
  generateCityTitle,
  generateCityDescription,
  generateCitySchema,
} from "@/data/metaTitles";
import Script from "next/script";

// Dynamic metadata generation for city pages
export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = citiesMap[city];

  const title = generateCityTitle(cityName);
  const description = generateCityDescription(cityName);

  const isNoIndex = city === "south-florida";

  return {
    robots: isNoIndex ? "noindex, nofollow" : "index, follow",
    title,
    description,
    keywords: [
      "window cleaning",
      "pressure washing",
      "exterior cleaning",
      cityName || "South Florida",
      "residential services",
      "commercial cleaning",
      "house washing",
      "gutter cleaning",
    ],
    openGraph: {
      title,
      description,
      url: `https://godlywindows.com/${city}`,
      siteName: "Godly Windows",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${city}`,
    },
  };
}

export default async function Page({ params }) {
  const { city } = await params;
  const schemaMarkup = generateCitySchema(city);

  return (
    <>
      {schemaMarkup && (
        <Script
          id="city-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      )}
      <GodlyHome city={city} />
    </>
  );
}
