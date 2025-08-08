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
        "telephone": "(954) 852‑5326",
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
    if (city === "miami") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Top-rated window cleaning and pressure washing services in Miami, FL. Serving homeowners and businesses with fast, spotless results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Miami, FL",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "postalCode": "33101",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Miami, FL"
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
    if (city === "fort-lauderdale") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Fort Lauderdale, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Fort Lauderdale, FL",
          "addressLocality": "Fort Lauderdale",
          "addressRegion": "FL",
          "postalCode": "33301",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Fort Lauderdale, FL"
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
    if (city === "lighthouse-point") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Lighthouse Point, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Lighthouse Point, FL",
          "addressLocality": "Lighthouse Point",
          "addressRegion": "FL",
          "postalCode": "33064",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Lighthouse Point, FL"
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
    if (city === "southwest-ranches") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Southwest Ranches, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Southwest Ranches, FL",
          "addressLocality": "Southwest Ranches",
          "addressRegion": "FL",
          "postalCode": "33331",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Southwest Ranches, FL"
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
    if (city === "coral-springs") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Coral Springs, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Coral Springs, FL",
          "addressLocality": "Coral Springs",
          "addressRegion": "FL",
          "postalCode": "33065",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Coral Springs, FL"
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
    if (city === "hallandale-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Hallandale Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Hallandale Beach, FL",
          "addressLocality": "Hallandale Beach",
          "addressRegion": "FL",
          "postalCode": "33009",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hallandale Beach, FL"
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
    if (city === "margate") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Margate, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Margate, FL",
          "addressLocality": "Margate",
          "addressRegion": "FL",
          "postalCode": "33063",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Margate, FL"
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
    if (city === "pembroke-pines") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Pembroke Pines, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Pembroke Pines, FL",
          "addressLocality": "Pembroke Pines",
          "addressRegion": "FL",
          "postalCode": "33026",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Pembroke Pines, FL"
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
    if (city === "sunrise") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Sunrise, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Sunrise, FL",
          "addressLocality": "Sunrise",
          "addressRegion": "FL",
          "postalCode": "33322",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Sunrise, FL"
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
    if (city === "davie") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Davie, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Davie, FL",
          "addressLocality": "Davie",
          "addressRegion": "FL",
          "postalCode": "33314",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Davie, FL"
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
    if (city === "delray-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Delray Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Delray Beach, FL",
          "addressLocality": "Delray Beach",
          "addressRegion": "FL",
          "postalCode": "33483",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Delray Beach, FL"
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
    if (city === "hillsboro-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Hillsboro Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Hillsboro Beach, FL",
          "addressLocality": "Hillsboro Beach",
          "addressRegion": "FL",
          "postalCode": "33062",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hillsboro Beach, FL"
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
    if (city === "plantation") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Plantation, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Plantation, FL",
          "addressLocality": "Plantation",
          "addressRegion": "FL",
          "postalCode": "33317",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Plantation, FL"
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
    if (city === "tamarac") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Tamarac, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(561) 826-4461",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Tamarac, FL",
          "addressLocality": "Tamarac",
          "addressRegion": "FL",
          "postalCode": "33321",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Tamarac, FL"
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
    if (city === "deerfield-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Deerfield Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Deerfield Beach, FL",
          "addressLocality": "Deerfield Beach",
          "addressRegion": "FL",
          "postalCode": "33441",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Deerfield Beach, FL"
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
    if (city === "hollywood") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Hollywood, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Hollywood, FL",
          "addressLocality": "Hollywood",
          "addressRegion": "FL",
          "postalCode": "33020",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hollywood, FL"
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
    if (city === "miramar") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Miramar, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Miramar, FL",
          "addressLocality": "Miramar",
          "addressRegion": "FL",
          "postalCode": "33027",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Miramar, FL"
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
    if (city === "pompano-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Pompano Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Pompano Beach, FL",
          "addressLocality": "Pompano Beach",
          "addressRegion": "FL",
          "postalCode": "33060",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Pompano Beach, FL"
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
    if (city === "west-palm-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in West Palm Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving West Palm Beach, FL",
          "addressLocality": "West Palm Beach",
          "addressRegion": "FL",
          "postalCode": "33401",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "West Palm Beach, FL"
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
    if (city === "lauderdale-by-the-sea") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Lauderdale-by-the-Sea, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Lauderdale-by-the-Sea, FL",
          "addressLocality": "Lauderdale-by-the-Sea",
          "addressRegion": "FL",
          "postalCode": "33308",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Lauderdale-by-the-Sea, FL"
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
    if (city === "oakland-park") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Oakland Park, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Oakland Park, FL",
          "addressLocality": "Oakland Park",
          "addressRegion": "FL",
          "postalCode": "33309",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Oakland Park, FL"
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
    if (city === "weston") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Weston, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Weston, FL",
          "addressLocality": "Weston",
          "addressRegion": "FL",
          "postalCode": "33326",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Weston, FL"
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
    if (city === "royal-palm-beach") {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://godlywindows.com/${city}`,
        "name": "Godly Windows & Wash Co.",
        "url": `https://godlywindows.com/${city}`,
        "logo": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "image": "https://godlywindows.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d1f08d62.webp&w=1200&q=75",
        "description": "Professional window cleaning and pressure washing in Royal Palm Beach, FL. Serving residential and commercial clients with reliable, streak‑free results.",
        "telephone": "(954) 852‑5326",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Based in South Florida, serving Royal Palm Beach, FL",
          "addressLocality": "Royal Palm Beach",
          "addressRegion": "FL",
          "postalCode": "33411",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Royal Palm Beach, FL"
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
