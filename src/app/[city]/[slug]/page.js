import { notFound } from "next/navigation";
import ServicesPage from "@/godlyComponents/servicesPage";
import { citiesMap } from "@/data/cities";
import {
  generateServiceTitle,
  generateServiceDescription,
  serviceMetaTitles,
  getPhoneForCity,
  getOfficePostalAddressForCitySlug,
  getOfficeGeoForCitySlug,
  getCityAreaServedSchema,
  getSameAsForCitySlug,
  businessOpeningHoursSpecification,
  citySlugHasPhysicalOffice,
} from "@/data/metaTitles";
import { getRelatedBlogPosts } from "@/data/sanity-content";
import Services from "@/data/servicesData";
import { cityServicesData } from "@/data/cityServicesData/index";
import JsonLd from "@/lib/jsonLd";
import { BASE_URL } from "@/app/lib/constants";

export async function generateStaticParams() {
  const cities = Object.keys(citiesMap).filter((c) => c !== "south-florida");
  const services = Object.keys(Services).filter((slug) => slug !== "rain-shield");
  return cities.flatMap((city) => services.map((slug) => ({ city, slug })));
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
      url: `${BASE_URL}/${city}/${slug}`,
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

  if (!Services[slug] || !citiesMap[city]) {
    notFound();
  }

  // Resolve city name and city-specific content on the server so they appear
  // in the initial HTML response for Google to crawl.
  const cityName = citiesMap[city] ?? null;
  const cityData = cityServicesData[city]?.[slug] ?? {};

  let relatedPosts = [];
  try {
    relatedPosts = await getRelatedBlogPosts(city, slug);
  } catch {
    // Sanity unavailable — render the page without blog posts
  }

  const serviceLabel =
    serviceMetaTitles[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const pageUrl = `${BASE_URL}/${city}/${slug}`;
  const cityUrl = `${BASE_URL}/${city}`;

  const primarySchema = citySlugHasPhysicalOffice(city)
    ? {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${pageUrl}#localbusiness`,
        name: "Godly Windows & Wash Co.",
        image: `${BASE_URL}/favicon.svg`,
        url: pageUrl,
        telephone: getPhoneForCity(city),
        description: generateServiceDescription(slug, cityName),
        address: getOfficePostalAddressForCitySlug(city),
        geo: getOfficeGeoForCitySlug(city),
        openingHoursSpecification: businessOpeningHoursSpecification,
        priceRange: "$$",
        sameAs: getSameAsForCitySlug(city),
        areaServed: getCityAreaServedSchema(city),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "157",
        },
      }
    : {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${serviceLabel} in ${cityName || city}`,
        provider: { "@id": `${BASE_URL}/#localbusiness` },
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
        name: cityName || city,
        item: cityUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${serviceLabel} — ${cityName || city}`,
        item: pageUrl,
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [primarySchema, breadcrumbList],
  };

  const faqsForSchema = cityData.faqs ?? Services[slug]?.faqs;
  if (faqsForSchema?.length > 0) {
    graph["@graph"].push({
      "@type": "FAQPage",
      mainEntity: faqsForSchema.map((faq) => ({
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
      <JsonLd id="service-page-schema" data={graph} />
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
