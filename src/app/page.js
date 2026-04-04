import GodlyHome from "@/godlyComponents/home";
import { homeTitle, homeDescription } from "@/data/metaTitles";
import DynamicMetaTags from "@/components/DynamicMetaTags";
import JsonLd from "@/lib/jsonLd";

const BASE = "https://godlywindows.com";

// Static metadata for home page
export const metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "window cleaning South Florida",
    "pressure washing South Florida",
    "exterior cleaning services",
    "residential cleaning",
    "commercial cleaning",
    "house washing",
    "gutter cleaning",
    "roof cleaning",
  ],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://godlywindows.com",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
    // Uses opengraph-image.jsx generated image
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    // Uses opengraph-image.jsx generated image
  },
  alternates: {
    canonical: "/",
  },
};

function cityInFlorida(name) {
  return {
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "Florida" },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE}/#localbusiness`,
      name: "Godly Windows & Wash Co.",
      image: `${BASE}/favicon.svg`,
      description:
        "Professional window cleaning and pressure washing services in South Florida",
      url: BASE,
      telephone: "+1-954-852-5326",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3315 E Oakland Park Blvd, Suite 204",
        addressLocality: "Fort Lauderdale",
        addressRegion: "FL",
        postalCode: "33308",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.1224",
        longitude: "-80.1373",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "16:00",
        },
      ],
      areaServed: [
        cityInFlorida("Boca Raton"),
        cityInFlorida("Fort Lauderdale"),
        cityInFlorida("Weston"),
        cityInFlorida("Pompano Beach"),
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 26.1224,
            longitude: -80.1373,
          },
          geoRadius: 80000,
          description: "South Florida surrounding areas",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Window Cleaning",
              description:
                "Professional exterior and interior window cleaning services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pressure Washing",
              description: "House washing and exterior pressure cleaning services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gutter Cleaning",
              description: "Professional gutter cleaning and maintenance services",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Godly Windows & Wash Co.",
    },
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Godly Windows & Wash Co.",
      url: BASE,
      telephone: "+1-954-852-5326",
    },
  ],
};

export default function Home() {
  return (
    <>
      <DynamicMetaTags />
      <JsonLd id="structured-data" data={structuredData} />
      <GodlyHome />
    </>
  );
}
