import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateCityTitle,
  generateCityDescription,
  generateCitySchema,
} from "@/data/metaTitles";
import { notFound } from "next/navigation";
import Script from "next/script";

// This page handles /landing/a/[city] routes (e.g. /landing/a/fort-lauderdale)
// The [service] param is used as city slug since it's the same dynamic segment

// Generate metadata for city landing pages
export async function generateMetadata({ params }) {
  const { service: city } = await params;

  // Only handle valid city slugs
  if (!citiesMap[city]) {
    return {};
  }

  const cityName = citiesMap[city];
  const title = generateCityTitle(cityName);
  const description = generateCityDescription(cityName);

  return {
    title,
    description,
    robots: "noindex, nofollow",
    keywords: [
      `window cleaning ${cityName}`,
      `pressure washing ${cityName}`,
      `exterior cleaning ${cityName}`,
      "window cleaning",
      "pressure washing",
      "exterior cleaning",
      "South Florida",
      cityName,
    ],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/landing/a/${city}`,
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
      canonical: `/landing/a/${city}`,
    },
  };
}

export default async function CityLandingPage({ params }) {
  const { service: city } = await params;

  // Only render for valid city slugs, otherwise 404
  if (!citiesMap[city]) {
    notFound();
  }

  const cityName = citiesMap[city];
  const schemaMarkup = generateCitySchema(city);

  return (
    <>
      {schemaMarkup && (
        <Script
          id="city-landing-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      )}
      <GodlyHome city={city} cityName={cityName} />
    </>
  );
}
