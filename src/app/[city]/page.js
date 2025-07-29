import GodlyHome from "@/godlyComponents/home";
import { citiesMap } from "@/data/cities";
import { generateCityTitle, generateCityDescription } from "@/data/metaTitles";

// Dynamic metadata generation for city pages
export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = citiesMap[city];

  const title = generateCityTitle(cityName);
  const description = generateCityDescription(cityName);

  // Generate schema markup for specific cities
  const getSchemaMarkup = () => {
    if (city === "parkland") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Parkland, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(561) 826-4461",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Parkland, FL",
          "addressLocality": "Parkland",
          "addressRegion": "FL",
          "postalCode": "33067",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Parkland, FL"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", 
              "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/godlywindows",
          "https://www.instagram.com/godlywindows"
        ]
      };
    }
    return null;
  };

  const schemaMarkup = getSchemaMarkup();

  return {
    title,
    description,
    keywords: [
      "window cleaning",
      "pressure washing",
      "exterior cleaning",
      cityName || "South Florida",
      "residential services",
      "commercial cleaning",
      "house washing",
      "gutter cleaning",
    ],
    openGraph: {
      title,
      description,
      url: `https://godlywindows.com/${city}`,
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
      canonical: `/${city}`,
    },
    ...(schemaMarkup && {
      other: {
        'script:ld+json': JSON.stringify(schemaMarkup)
      }
    })
  };
}

export default async function Page({ params }) {
  const { city } = await params;
  return (
    <GodlyHome
      city={city} // Pass the city parameter to the GodlyHome component
    />
  );
}
