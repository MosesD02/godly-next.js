import GodlyHome from "@/components/landing/home";
import { BASE_URL } from "@/app/lib/constants";
import JsonLd from "@/lib/jsonLd";
import {
  businessOpeningHoursSpecification,
  getCityAreaServedSchema,
  getOfficeGeoForCitySlug,
  getOfficePostalAddressForCitySlug,
  getSameAsForCitySlug,
} from "@/data/metaTitles";

const FORT_LAUDERDALE_SLUG = "fort-lauderdale";

const city = FORT_LAUDERDALE_SLUG;
const cityName = "FORT LAUDERDALE";
const service = "Window Washing";
const url = `${BASE_URL}/landing/window-washing-fort-lauderdale`;
const title =
  "Expert Window Washing In Fort Lauderdale | Godly Windows & Wash Co.";
const description =
  "Fort Lauderdale window washers for spotless window washing and detailed care from a friendly local window washer, all backed by our 100% satisfaction guarantee.";
const headline =
  "Most Trusted Window Washing Pros In Fort Lauderdale – Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a trusted Fort Lauderdale window washer – no pressure, just honest pricing and careful window washing from pros who treat your home right.";
const introCopy =
  "Whether you need a detail-minded window washer before guests arrive or recurring window washing to keep every pane bright, our Fort Lauderdale window washers make the whole process simple, friendly, and built around your schedule.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window washing Fort Lauderdale",
    "window washer Fort Lauderdale",
    "window washers Fort Lauderdale",
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
    canonical: "/landing/window-washing-fort-lauderdale",
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
    telephone: "954-852-5326",
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

export default function WindowWashingFortLauderdalePage() {
  return (
    <>
      <JsonLd
        id="window-washing-fort-lauderdale-structured-data"
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
        heroAlt="Fort Lauderdale window washers providing professional window washing"
        introCopy={introCopy}
      />
    </>
  );
}
