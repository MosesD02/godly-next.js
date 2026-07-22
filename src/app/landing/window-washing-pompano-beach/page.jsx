import GodlyHome from "@/components/landing/home";
import { BASE_URL } from "@/app/lib/constants";
import JsonLd from "@/lib/jsonLd";
import {
  businessOpeningHoursSpecification,
  getCityAreaServedSchema,
  getOfficeGeoForCitySlug,
  getOfficePostalAddressForCitySlug,
  getPhoneForCity,
  getSameAsForCitySlug,
} from "@/data/metaTitles";

const city = "pompano-beach";
const cityName = "POMPANO BEACH";
const service = "Window Washing";
const url = `${BASE_URL}/landing/window-washing-pompano-beach`;
const title =
  "Expert Window Washing In Pompano Beach | Godly Windows & Wash Co.";
const description =
  "Pompano Beach window washers for spotless window washing and detailed care from a friendly local window washer, all backed by our 100% satisfaction guarantee.";
const headline =
  "Most Trusted Window Washing Pros In Pompano Beach - Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a trusted Pompano Beach window washer - no pressure, just honest pricing and careful window washing from pros who treat your home right.";
const introCopy =
  "Whether you need a detail-minded window washer before guests arrive or recurring window washing to keep every pane bright near the coast, our Pompano Beach window washers make the whole process simple, friendly, and built around your schedule.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window washing Pompano Beach",
    "window washer Pompano Beach",
    "window washers Pompano Beach",
  ],
  openGraph: {
    title,
    description,
    url,
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
    canonical: "/landing/window-washing-pompano-beach",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  serviceType: "Window washing",
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
  description,
  url,
};

export default function WindowWashingPompanoBeachPage() {
  return (
    <>
      <JsonLd
        id="window-washing-pompano-beach-structured-data"
        data={structuredData}
      />
      <GodlyHome
        city={city}
        cityName={cityName}
        service={service}
        serviceSlug="window-cleaning"
        heroHeadline={headline}
        heroH1={headline}
        heroSubcopy={heroSubcopy}
        heroAlt="Pompano Beach window washers providing professional window washing"
        introCopy={introCopy}
      />
    </>
  );
}
