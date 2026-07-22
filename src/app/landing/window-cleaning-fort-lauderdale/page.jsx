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
const service = "Window Cleaning";
const url = `${BASE_URL}/landing/window-cleaning-fort-lauderdale`;
const title =
  "Expert Window Cleaning In Fort Lauderdale | Godly Windows & Wash Co.";
const description =
  "Fort Lauderdale window cleaners for thorough window cleaning and careful detail work from a seasoned cleaner, all backed by our 100% satisfaction guarantee.";
const headline =
  "Most Trusted Window Cleaning Pros In Fort Lauderdale – Backed by Our 100% Satisfaction Guarantee";
const heroSubcopy =
  "Get a free quote from a Fort Lauderdale window cleaner – no pressure, just honest pricing from window cleaning pros who make the whole thing easy.";
const introCopy =
  "From routine window cleaning to a full refresh before family visits, our Fort Lauderdale window cleaner team brings the old-fashioned care you expect from trusted window cleaners who treat every home like their own.";

export const metadata = {
  title,
  description,
  robots: "noindex, nofollow",
  keywords: [
    "window cleaning Fort Lauderdale",
    "window cleaner Fort Lauderdale",
    "window cleaners Fort Lauderdale",
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
    canonical: "/landing/window-cleaning-fort-lauderdale",
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

export default function WindowCleaningFortLauderdalePage() {
  return (
    <>
      <JsonLd
        id="window-cleaning-fort-lauderdale-structured-data"
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
        heroAlt="Fort Lauderdale window cleaners providing professional window cleaning"
        introCopy={introCopy}
      />
    </>
  );
}
