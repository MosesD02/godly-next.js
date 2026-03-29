import { notFound } from "next/navigation";
import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateServiceTitle,
  generateServiceDescription,
  generateServiceHeroAlt,
  serviceMetaTitles,
} from "@/data/metaTitles";
import Script from "next/script";

export async function generateStaticParams() {
  const services = Object.keys(serviceMetaTitles);
  const cities = Object.keys(citiesMap).filter((c) => c !== "south-florida");
  return services.flatMap((service) =>
    cities.map((city) => ({ service, city }))
  );
}

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
    robots: "noindex, nofollow",
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
      url: `${BASE_URL}/landing/a/${service}/${city}`,
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
      canonical: `/landing/a/${service}/${city}`,
    },
  };
}

export default async function LandingPage({ params }) {
  const { service, city } = await params;

  if (!service || !city || !serviceMetaTitles[service] || !citiesMap[city]) {
    notFound();
  }

  const serviceName =
    serviceMetaTitles[service] ||
    service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // Resolve cityName on the server so it renders on first paint
  const cityName = citiesMap[city] || city.replace(/-/g, " ").toUpperCase();

  // Structured data for service pages
  const cityFormatted = cityName
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
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
        addressLocality: cityFormatted,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: cityFormatted,
      addressRegion: "FL",
      addressCountry: "US",
    },
    description: generateServiceDescription(service, city),
    url: `${BASE_URL}/landing/a/${service}/${city}`,
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
      <GodlyHome
        city={city}
        cityName={cityName}
        service={serviceName}
        serviceSlug={service}
      />
    </>
  );
}
