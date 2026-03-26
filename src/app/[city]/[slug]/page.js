import { notFound } from "next/navigation";
import ServicesPage from "@/godlyComponents/servicesPage";
import FaqSchema from "@/components/FaqSchema";
import { citiesMap } from "@/data/cities";
import {
  generateServiceTitle,
  generateServiceDescription,
} from "@/data/metaTitles";
import { getRelatedBlogPosts } from "@/data/sanity-content";
import Services from "@/data/servicesData";
import { cityServicesData } from "@/data/cityServicesData/index";

export async function generateStaticParams() {
  const cities = Object.keys(citiesMap).filter((c) => c !== "south-florida");
  const services = Object.keys(Services);
  return cities.flatMap((city) =>
    services.map((slug) => ({ city, slug }))
  );
}

export const revalidate = 3600;

// Dynamic metadata generation for service pages
export async function generateMetadata({ params }) {
  const { slug, city } = await params;
  const cityName = citiesMap[city];

  const title = generateServiceTitle(slug, cityName);
  const description = generateServiceDescription(slug, cityName);

  return {
    title,
    description,
    keywords: [
      slug.replace(/-/g, " "),
      cityName || "South Florida",
      "professional cleaning",
      "exterior services",
      "residential",
      "commercial",
    ],
    openGraph: {
      title,
      description,
      url: `https://godlywindows.com/${city}/${slug}`,
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
      canonical: `/${city}/${slug}`,
    },
  };
}

export default async function GodlyServices({ params }) {
  const param = await params;
  const { slug, city } = param;

  if (!Services[slug]) {
    notFound();
  }

  // Resolve city name and city-specific content on the server so they appear
  // in the initial HTML response for Google to crawl.
  const cityName = citiesMap[city] ?? null;
  const cityData = cityServicesData[city]?.[slug] ?? {};

  const relatedPosts = await getRelatedBlogPosts(city, slug);

  return (
    <>
      <FaqSchema faqs={cityData.faqs} />
      <ServicesPage
        slug={slug}
        city={city}
        cityName={cityName}
        cityData={cityData}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
