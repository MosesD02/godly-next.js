import GodlyHome from "@/godlyComponents/home";
import { homeTitle, homeDescription } from "@/data/metaTitles";
import Script from "next/script";

// Static metadata for home page
export const metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    'window cleaning South Florida',
    'pressure washing South Florida',
    'exterior cleaning services',
    'residential cleaning',
    'commercial cleaning',
    'house washing',
    'gutter cleaning',
    'roof cleaning'
  ],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://godlywindows.com",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Godly Windows - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/favicon.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Godly Windows",
  "image": "https://godlywindows.com/favicon.svg",
  "description": "Professional window cleaning and pressure washing services in South Florida",
  "url": "https://godlywindows.com",
  "telephone": "+1-555-GODLY-WIN",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.1224",
    "longitude": "-80.1373"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "serviceArea": {
    "@type": "State",
    "name": "Florida"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Window Cleaning",
          "description": "Professional exterior and interior window cleaning services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pressure Washing",
          "description": "House washing and exterior pressure cleaning services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gutter Cleaning",
          "description": "Professional gutter cleaning and maintenance services"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GodlyHome />
    </>
  );
}
