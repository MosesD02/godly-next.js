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
const service = "Window Cleaning";
const url = `${BASE_URL}/landing/south-florida-window-cleaners`;
const title = "Window Cleaning South Florida";
const description =
  "South Florida window cleaners for thorough window cleaning and careful detail work from a seasoned window cleaner, all backed by our 100% satisfaction guarantee.";
const headline =
  "South Florida’s #1 Trusted Window Cleaning Pros – Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a South Florida window cleaner – no pressure, just honest pricing from window cleaning pros who make the whole thing easy.";
const introCopy =
  "From routine window cleaning to a full refresh before family visits, our South Florida window cleaner team brings the old-fashioned care you expect from trusted window cleaners who treat every home like their own.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window cleaning South Florida",
    "window cleaner South Florida",
    "window cleaners South Florida",
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
    canonical: "/landing/south-florida-window-cleaners",
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

export default function SouthFloridaWindowCleanersPage() {
  return (
    <>
      <JsonLd
        id="south-florida-window-cleaners-structured-data"
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
        heroAlt="South Florida window cleaners providing professional window cleaning"
        introCopy={introCopy}
      />
    </>
  );
}
