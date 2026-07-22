import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateCityTitle,
  generateCityDescription,
  generateCitySchema,
} from "@/data/metaTitles";
import JsonLd from "@/lib/jsonLd";

const city = "south-florida";
const cityName = citiesMap[city];

export const metadata = {
  title: generateCityTitle(cityName),
  description: generateCityDescription(cityName),
  robots: "noindex, nofollow",
  openGraph: {
    title: generateCityTitle(cityName),
    description: generateCityDescription(cityName),
    url: `${BASE_URL}/landing/a`,
    siteName: "Godly Windows & Wash Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: generateCityTitle(cityName),
    description: generateCityDescription(cityName),
  },
  alternates: {
    canonical: "/landing/a",
  },
};

export default function LandingAPage() {
  const schemaMarkup = generateCitySchema(city);

  return (
    <>
      {schemaMarkup && (
        <JsonLd id="city-landing-structured-data" data={schemaMarkup} />
      )}
      <GodlyHome city={city} cityName={cityName} />
    </>
  );
}
