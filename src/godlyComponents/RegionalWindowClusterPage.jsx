import { notFound } from "next/navigation";
import ServicesPage from "@/godlyComponents/servicesPage";
import JsonLd from "@/lib/jsonLd";
import { citiesMap } from "@/data/cities";
import {
  generateServiceDescription,
  generateServiceTitle,
  getCityAreaServedSchema,
  serviceMetaTitles,
} from "@/data/metaTitles";
import { getRelatedBlogPosts } from "@/data/sanity-content";
import Services from "@/data/servicesData";
import { cityServicesData } from "@/data/cityServicesData/index";
import { BASE_URL } from "@/app/lib/constants";
import { isWindowClusterSlug } from "@/data/windowCleaningCluster";

const REGIONAL_CITY = "south-florida";
/** City anchor for related blog matching on regional hubs (broad South Florida posts). */
const RELATED_POSTS_CITY = "fort-lauderdale";

export async function generateRegionalWindowMetadata(slug) {
  if (!isWindowClusterSlug(slug) || !Services[slug]) {
    return { title: "Not Found" };
  }
  const cityName = citiesMap[REGIONAL_CITY];
  const title = generateServiceTitle(slug, cityName);
  const description = generateServiceDescription(slug, cityName);
  return {
    title,
    description,
    keywords: [
      slug.replace(/-/g, " "),
      "South Florida",
      "professional cleaning",
      "residential",
      "commercial",
    ],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${slug}`,
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
      canonical: `/${slug}`,
    },
  };
}

export default async function RegionalWindowClusterPage({ slug }) {
  if (!isWindowClusterSlug(slug) || !Services[slug]) {
    notFound();
  }

  const city = REGIONAL_CITY;
  const cityName = citiesMap[city];
  const cityData = cityServicesData[city]?.[slug] ?? {};

  let relatedPosts = [];
  try {
    relatedPosts = await getRelatedBlogPosts(RELATED_POSTS_CITY, slug);
  } catch {
    // Sanity unavailable
  }

  const serviceLabel =
    serviceMetaTitles[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const pageUrl = `${BASE_URL}/${slug}`;

  const primarySchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${serviceLabel} — South Florida`,
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    description: generateServiceDescription(slug, cityName),
    areaServed: getCityAreaServedSchema(city),
    url: pageUrl,
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${serviceLabel} — South Florida`,
        item: pageUrl,
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [primarySchema, breadcrumbList],
  };

  if (cityData.faqs?.length > 0) {
    graph["@graph"].push({
      "@type": "FAQPage",
      mainEntity: cityData.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <JsonLd id="regional-window-service-schema" data={graph} />
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
