import GodlyHome from "@/components/landing/home";
import { BASE_URL } from "@/app/lib/constants";
import JsonLd from "@/lib/jsonLd";
import {
  businessOpeningHoursSpecification,
  getCityAreaServedSchema,
  getOfficeGeoForCitySlug,
  getOfficePostalAddressForCitySlug,
  getSameAsForCitySlug,
  getPhoneForCity,
} from "@/data/metaTitles";

const city = "south-florida";
const cityName = "SOUTH FLORIDA";
const service = "Window Washing";
const url = `${BASE_URL}/landing/south-florida-window-washers`;
const title =
  "Window Washing South Florida | Godly Windows & Wash Co.";
const description =
  "South Florida window washers for spotless window washing and detailed care from a friendly local window washer, all backed by our 100% satisfaction guarantee.";
const headline =
  "South Florida’s #1 Trusted Window Washing Pros – Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a trusted South Florida window washer – no pressure, just honest pricing and careful window washing from pros who treat your home right.";
const introCopy =
  "Whether you need a detail-minded window washer before guests arrive or recurring window washing to keep every pane bright, our South Florida window washers make the whole process simple, friendly, and built around your schedule.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window washing South Florida",
    "window washer South Florida",
    "window washers South Florida",
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
    canonical: "/landing/south-florida-window-washers",
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

export default function SouthFloridaWindowWashersPage() {
  return (
    <>
      <JsonLd
        id="south-florida-window-washers-structured-data"
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
        heroAlt="South Florida window washers providing professional window washing"
        introCopy={introCopy}
      />
    </>
  );
}
