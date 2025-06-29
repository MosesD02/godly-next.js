import GodlyHome from "@/godlyComponents/home";
import { citiesMap } from "@/data/cities";
import { generateCityTitle, generateCityDescription } from "@/data/metaTitles";

// Dynamic metadata generation for city pages
export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = citiesMap[city];

  const title = generateCityTitle(cityName);
  const description = generateCityDescription(cityName);

  return {
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
  return (
    <GodlyHome
      city={city} // Pass the city parameter to the GodlyHome component
    />
  );
}
