import { notFound } from "next/navigation";
import GodlyHome from "@/components/landing/home";
import { citiesMap } from "@/data/cities";
import { BASE_URL } from "@/app/lib/constants";
import {
  generateServiceTitle,
  generateServiceDescription,
  generateServiceHeroAlt,
  serviceMetaTitles,
  getPhoneForCity,
  getOfficePostalAddressForCitySlug,
  getOfficeGeoForCitySlug,
  getCityAreaServedSchema,
  getSameAsForCitySlug,
  businessOpeningHoursSpecification,
} from "@/data/metaTitles";
import JsonLd from "@/lib/jsonLd";

export async function generateStaticParams() {
  const services = Object.keys(serviceMetaTitles);
  const cities = Object.keys(citiesMap).filter((c) => c !== "south-florida");
  return services.flatMap((service) =>
    cities.map((city) => ({ service, city })),
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
      url: `${BASE_URL}/landing/${service}/${city}`,
      siteName: "Godly Windows & Wash Co.",
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

  if (!service || !city || !serviceMetaTitles[service] || !citiesMap[city]) {
    notFound();
  }

  const serviceName =
    serviceMetaTitles[service] ||
    service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // Resolve cityName on the server so it renders on first paint
  const cityName = citiesMap[city] || city.replace(/-/g, " ").toUpperCase();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceMetaTitles[service] || service.replace(/-/g, " "),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/${city}#localbusiness`,
      name: "Godly Windows & Wash Co.",
      image: `${BASE_URL}/favicon.svg`,
      url: `${BASE_URL}/${city}`,
      telephone: getPhoneForCity(city),
      priceRange: "$$",
      address: getOfficePostalAddressForCitySlug(city),
      geo: getOfficeGeoForCitySlug(city),
      openingHoursSpecification: businessOpeningHoursSpecification,
      sameAs: getSameAsForCitySlug(city),
      areaServed: getCityAreaServedSchema(city),
    },
    areaServed: getCityAreaServedSchema(city),
    description: generateServiceDescription(service, city),
    url: `${BASE_URL}/landing/${service}/${city}`,
  };

  return (
    <>
      <JsonLd id="service-structured-data" data={structuredData} />
      <GodlyHome
        city={city}
        cityName={cityName}
        service={serviceName}
        serviceSlug={service}
      />
    </>
  );
}
