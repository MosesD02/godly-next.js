import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateServiceTitle,
  generateServiceDescription,
  generateServiceHeroAlt,
  serviceMetaTitles,
} from "@/data/metaTitles";
import { servicesData } from "@/godlyComponents/servicesData";
import Script from "next/script";

// Generate metadata for service/city pages
export async function generateMetadata({ params }) {
  const { service, city } = await params;

  const location = citiesMap[city] || city.replace(/-/g, " ").toUpperCase();

  const title = generateServiceTitle(service, location);
  const description = generateServiceDescription(service, location);
  const heroAlt = generateServiceHeroAlt(service, location);

  return {
    title,
    description,
    robots: "noindex, follow",
    keywords: [
      `${serviceMetaTitles[service] || service} ${location}`,
      `${service} services ${location}`,
      `professional ${service} ${location}`,
      "window cleaning",
      "pressure washing",
      "exterior cleaning",
      "South Florida",
      location,
    ],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/landing/${service}/${city}`,
      siteName: "Godly Windows",
      locale: "en_US",
      type: "website",
      // Uses opengraph-image.jsx generated image
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // Uses opengraph-image.jsx generated image
    },
    alternates: {
      canonical: `/landing/${service}/${city}`,
    },
  };
}

export default async function LandingPage({ params }) {
  const { service, city } = await params;

  if (!service || !city) {
    return <div>Missing service or city</div>;
  }

  const serviceName = servicesData[service] || service.replace(/-/g, " ");

  // Structured data for service pages
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceMetaTitles[service] || service.replace(/-/g, " "),
    provider: {
      "@type": "LocalBusiness",
      name: "Godly Windows",
      url: BASE_URL,
      telephone: "+1-555-GODLY-WIN",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: city,
      addressRegion: "FL",
      addressCountry: "US",
    },
    description: generateServiceDescription(service, city),
    url: `${BASE_URL}/landing/${service}/${city}`,
  };

  return (
    <>
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GodlyHome city={city} service={serviceName} />
    </>
  );
}
