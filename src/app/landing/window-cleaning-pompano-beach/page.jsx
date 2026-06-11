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
const service = "Window Cleaning";
const url = `${BASE_URL}/landing/window-cleaning-pompano-beach`;
const title = "Expert Window Cleaning In Pompano Beach";
const description =
  "Pompano Beach window cleaners for thorough window cleaning and careful detail work from a seasoned cleaner, all backed by our 100% satisfaction guarantee.";
const headline =
  "Most Trusted Window Cleaning Pros In Pompano Beach - Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a Pompano Beach window cleaner - no pressure, just honest pricing from window cleaning pros who make the whole thing easy.";
const introCopy =
  "From salt spray near the beach to routine upkeep before guests arrive, our Pompano Beach window cleaner team brings the old-fashioned care you expect from trusted window cleaners who treat every home like their own.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window cleaning Pompano Beach",
    "window cleaner Pompano Beach",
    "window cleaners Pompano Beach",
  ],
  openGraph: {
    title,
    description,
    url,
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
    canonical: "/landing/window-cleaning-pompano-beach",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  serviceType: "Window cleaning",
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

export default function WindowCleaningPompanoBeachPage() {
  return (
    <>
      <JsonLd
        id="window-cleaning-pompano-beach-structured-data"
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
        heroAlt="Pompano Beach window cleaners providing professional window cleaning"
        introCopy={introCopy}
      />
    </>
  );
}
