import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateCityTitle,
  generateCityDescription,
  generateCitySchema,
} from "@/data/metaTitles";
import Script from "next/script";

const city = "south-florida";
const cityName = citiesMap[city];

export const metadata = {
  title: generateCityTitle(cityName),
  description: generateCityDescription(cityName),
  robots: "noindex, nofollow",
  openGraph: {
    title: generateCityTitle(cityName),
    description: generateCityDescription(cityName),
    url: `${BASE_URL}/landing/b`,
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: generateCityTitle(cityName),
    description: generateCityDescription(cityName),
  },
  alternates: {
    canonical: "/landing/b",
  },
};

export default function LandingBPage() {
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
