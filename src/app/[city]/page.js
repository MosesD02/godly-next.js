import { Suspense } from "react";
import { notFound } from "next/navigation";
import GodlyHome from "@/godlyComponents/home";
import { citiesMap } from "@/data/cities";
import {
  generateCityTitle,
  generateCityDescription,
  generateCitySchema,
} from "@/data/metaTitles";
import {
  getCityHomepageFaqs,
  buildHomepageFaqPageNode,
} from "@/data/homepageFaqData";
import JsonLd from "@/lib/jsonLd";
import { BASE_URL } from "@/app/lib/constants";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import WebsiteLayout from "@/godlyComponents/websiteLayout";

export async function generateStaticParams() {
  return Object.keys(citiesMap)
    .filter((city) => city !== "south-florida")
    .map((city) => ({ city }));
}

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
      url: `${BASE_URL}/${city}`,
      siteName: "Godly Windows & Wash Co.",
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

export default function Page({ params }) {
  return (
    <WebsiteLayout>
      <Suspense fallback={<RouteLoadingFallback variant="home" />}>
        <CityPageContent params={params} />
      </Suspense>
    </WebsiteLayout>
  );
}

async function CityPageContent({ params }) {
  const { city } = await params;
  if (!citiesMap[city]) {
    notFound();
  }

  const cityDisplayName = citiesMap[city] ?? city;
  const schemaMarkup = generateCitySchema(city);

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: cityDisplayName,
        item: `${BASE_URL}/${city}`,
      },
    ],
  };

  const landingFaqs = getCityHomepageFaqs(cityDisplayName);

  const graphItems = [
    schemaMarkup,
    breadcrumb,
    buildHomepageFaqPageNode(landingFaqs, `${BASE_URL}/${city}`),
  ].filter(Boolean);

  const graph = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <>
      <JsonLd id="city-structured-data" data={graph} />
      <GodlyHome city={city} />
    </>
  );
}
