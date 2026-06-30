import { customMetaData } from "./customMetaData.js";
import { citiesMap } from "./cities.js";
import { getCityHeroContent } from "./cityHeroCopy.js";
import { BASE_URL } from "@/app/lib/constants";

/** Cities with a real physical office — used to decide which footer shows a street address. */
export const PHYSICAL_OFFICE_CITY_SLUGS = new Set([
  "boca-raton",
  "weston",
  "fort-lauderdale",
]);

/**
 * Cities whose `/[city]/[service]` pages should render their OWN LocalBusiness
 * JSON-LD entity (address + telephone baked into the page).
 *
 * Only cities whose physical office is at an address DIFFERENT from the
 * homepage's primary #localbusiness entity belong here. Fort Lauderdale is the
 * HQ — the homepage already declares that entity, so FTL service pages must
 * reference it via `provider: { @id: "…/#localbusiness" }` instead of
 * re-declaring it (which Google would de-duplicate and drop).
 */
export const SERVICE_PAGE_LOCALBUSINESS_CITY_SLUGS = new Set([
  "boca-raton",
  "weston",
]);

/**
 * City landing pages that render a full LocalBusiness entity.
 * Includes the two real-office cities plus high-priority service-area cities
 * where we want a rich local-business node on the landing page.
 */
const CITY_LANDING_LOCALBUSINESS_SLUGS = new Set([
  "boca-raton",
  "weston",
  "fort-lauderdale",
  "parkland",
  "coral-springs",
  "pompano-beach",
]);

export function citySlugHasPhysicalOffice(citySlug) {
  return PHYSICAL_OFFICE_CITY_SLUGS.has(citySlug);
}

/** Service-page only: should `/[city]/[service]` declare its own LocalBusiness? */
export function citySlugRendersServicePageLocalBusiness(citySlug) {
  return SERVICE_PAGE_LOCALBUSINESS_CITY_SLUGS.has(citySlug);
}

// Phone numbers by geographic group - use for city pages, schema, CTAs
export const cityPhoneMap = {
  "(954) 852-5326": [
    "fort-lauderdale",
    "lighthouse-point",
    "pompano-beach",
    "deerfield-beach",
    "hallandale-beach",
    "hollywood",
    "lauderdale-by-the-sea",
    "margate",
    "oakland-park",
    "parkland",
    "tamarac",
    "coral-springs",
    "sunrise",
    "hillsboro-beach",
    "coconut-creek",
  ],
  "(561) 826-4461": ["boca-raton", "delray-beach", "royal-palm-beach"],
  "(954) 738-3421": [
    "weston",
    "davie",
    "miramar",
    "pembroke-pines",
    "plantation",
    "southwest-ranches",
    "cooper-city",
    "west-park",
  ],
};

export function getPhoneForCity(citySlug) {
  for (const [phone, cities] of Object.entries(cityPhoneMap)) {
    if (cities.includes(citySlug)) return phone;
  }
  return "(954) 852-5326"; // default
}

/**
 * Map UI/context city label (e.g. citiesMap value "BOCA RATON") to route slug.
 */
export function cityDisplayNameToSlug(displayName) {
  if (!displayName || typeof displayName !== "string") return null;
  const normalized = displayName
    .toUpperCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  return (
    Object.keys(citiesMap).find((slug) => citiesMap[slug] === normalized) ??
    null
  );
}

/** Phone for footer/header when you only have display city name (not slug). */
export function getPhoneForCityDisplayName(displayName) {
  const slug = cityDisplayNameToSlug(displayName);
  if (slug) return getPhoneForCity(slug);
  return "(954) 852-5326";
}

// Google Business Profile URLs by region (matches phone number groups)
const phoneToGoogleUrl = {
  "(954) 852-5326": "https://g.co/kgs/uCqteyx", // Fort Lauderdale
  "(561) 826-4461": "https://maps.app.goo.gl/WpnaZdfDi6Pp3rs69?g_st=ic", // Boca Raton
  "(954) 738-3421": "https://maps.app.goo.gl/3AHJVTMEPf8SWVrS7?g_st=ic", // Weston
};

/** Matches footer `getAddress` regions — physical office for that service area. */
const FT_LAUDERDALE_OFFICE_SLUGS = new Set([
  "pompano-beach",
  "fort-lauderdale",
  "hollywood",
  "oakland-park",
  "sunrise",
  "lighthouse-point",
  "lauderdale-by-the-sea",
  "coconut-creek",
]);

const BOCA_OFFICE_SLUGS = new Set([
  "delray-beach",
  "boca-raton",
  "tamarac",
  "margate",
  "coral-springs",
  "parkland",
  "deerfield-beach",
  "hillsboro-beach",
]);

const OFFICES = {
  ftLauderdale: {
    streetAddress: "3315 E Oakland Park Blvd, Suite 204",
    addressLocality: "Fort Lauderdale",
    postalCode: "33308",
    latitude: "26.1723",
    longitude: "-80.1319",
  },
  bocaRaton: {
    streetAddress: "491 W Camino Real",
    addressLocality: "Boca Raton",
    postalCode: "33432",
    latitude: "26.3521",
    longitude: "-80.0847",
  },
  weston: {
    streetAddress: "2800 Glades Cir, Suite 106",
    addressLocality: "Weston",
    postalCode: "33327",
    latitude: "26.1382",
    longitude: "-80.3764",
  },
};

function officeRegionKeyForCitySlug(citySlug) {
  if (!citySlug || citySlug === "south-florida") return "ftLauderdale";
  if (FT_LAUDERDALE_OFFICE_SLUGS.has(citySlug)) return "ftLauderdale";
  if (BOCA_OFFICE_SLUGS.has(citySlug)) return "bocaRaton";
  return "weston";
}

/** Physical office `PostalAddress` for the region that serves this city slug. */
export function getOfficePostalAddressForCitySlug(citySlug) {
  const o = OFFICES[officeRegionKeyForCitySlug(citySlug)];
  return {
    "@type": "PostalAddress",
    streetAddress: o.streetAddress,
    addressLocality: o.addressLocality,
    addressRegion: "FL",
    postalCode: o.postalCode,
    addressCountry: "US",
  };
}

/** Office coordinates for the region that serves this city slug. */
export function getOfficeGeoForCitySlug(citySlug) {
  const o = OFFICES[officeRegionKeyForCitySlug(citySlug)];
  return {
    "@type": "GeoCoordinates",
    latitude: o.latitude,
    longitude: o.longitude,
  };
}

/**
 * Multiline office address for footer — only for cities with a real physical office.
 * Group B service-area pages do not show a street address (avoids implying a non-existent location).
 */
export function getOfficeAddressMultilineForDisplayName(displayName) {
  const slug = cityDisplayNameToSlug(displayName);
  if (!slug || slug === "south-florida") return "";
  if (!citySlugHasPhysicalOffice(slug)) return "";
  const o = OFFICES[officeRegionKeyForCitySlug(slug)];
  return `${o.streetAddress}\n${o.addressLocality}, FL ${o.postalCode}`;
}

/** Customer / market city (where services are offered), not the office street city. */
export function getCityAreaServedSchema(citySlug) {
  if (!citySlug || !citiesMap[citySlug]) {
    return {
      "@type": "State",
      name: "Florida",
    };
  }
  const name = capitalizeString(citiesMap[citySlug]);
  return {
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "Florida" },
  };
}

export function getSameAsForCitySlug(citySlug) {
  const phone = getPhoneForCity(citySlug);
  const googleUrl = phoneToGoogleUrl[phone];
  return [
    ...(googleUrl ? [googleUrl] : []),
    "https://facebook.com/godlywindows",
    "https://instagram.com/godlywindows",
  ];
}

export const businessOpeningHoursSpecification = [
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
];

// JSON-LD for `/[city]`: LocalBusiness only for real offices (Boca, Weston); Service elsewhere.
// Injected via JsonLd in [city]/page.js
export function generateCitySchema(citySlug) {
  if (!citySlug || !citiesMap[citySlug]) return null;

  const cityName = capitalizeString(citiesMap[citySlug]);
  const phone = getPhoneForCity(citySlug);

  if (CITY_LANDING_LOCALBUSINESS_SLUGS.has(citySlug)) {
    return {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: "Godly Windows & Wash Co.",
      image: "https://godlywindows.com/favicon.svg",
      url: `https://godlywindows.com/${citySlug}`,
      description: `Top-rated window cleaning & exterior services in ${cityName}. Family-owned, fully insured, 5-star rated. Free estimate in 24 hours. Call ${phone}.`,
      telephone: phone,
      address: getOfficePostalAddressForCitySlug(citySlug),
      geo: getOfficeGeoForCitySlug(citySlug),
      openingHoursSpecification: businessOpeningHoursSpecification,
      priceRange: "$$",
      sameAs: getSameAsForCitySlug(citySlug),
      areaServed: getCityAreaServedSchema(citySlug),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Window Cleaning & Pressure Washing in ${cityName}`,
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: getCityAreaServedSchema(citySlug),
    serviceType:
      "Window cleaning, pressure washing, gutter cleaning, house washing",
    url: `${BASE_URL}/${citySlug}`,
  };
}

// SEO-optimized meta titles for services and locations
export const serviceMetaTitles = {
  "gutter-cleaning": "Gutter Cleaning",
  "house-washing": "House Washing",
  "roof-cleaning": "Roof Cleaning",
  "pressure-washing": "Pressure Washing",
  "paver-sealing": "Paver Sealing",
  "screen-cleaning": "Screen Cleaning",
  "window-cleaning": "Window Cleaning",
  "soft-washing": "Soft Washing",
  "holiday-lighting": "Holiday Lighting",
  "post-construction-window-cleaning": "Post-Construction Window Cleaning",
  "rain-shield": "Rain Shield",
};

function capitalizeString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Handle non-string or empty inputs
  }
  // Capitalize each word in the string
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Helper function to find city slug from city name
const findCitySlug = (cityName) => {
  if (!cityName) return "";
  // Find the slug key that maps to this city name
  return (
    Object.keys(citiesMap).find((slug) => citiesMap[slug] === cityName) || ""
  );
};

// Generate SEO-optimized title for service pages
export const generateServiceTitle = (serviceSlug, cityName) => {
  if (serviceSlug === "rain-shield") {
    return "Rain Shield Technology — Hydrophobic Glass Coating | Godly Windows";
  }

  // Check for custom meta data first - need to find the city slug
  const citySlug = findCitySlug(cityName);

  if (citySlug && customMetaData[citySlug]?.services?.[serviceSlug]?.title) {
    return customMetaData[citySlug].services[serviceSlug].title;
  }

  // Fall back to original template logic
  const serviceName = serviceMetaTitles[serviceSlug];

  if (!serviceName) {
    // Fallback: convert slug to readable service name
    const fallbackService = serviceSlug
      ? serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "Service";
    return cityName
      ? `${fallbackService} in ${capitalizeString(cityName)} | Godly Windows`
      : `${fallbackService} | Godly Windows`;
  }

  if (!cityName) {
    return `${serviceName} in South Florida | Godly Windows`;
  }

  return `${serviceName} in ${capitalizeString(cityName)} | Godly Windows`;
};

// Generate SEO-optimized title for city home pages
// Formula: Window Cleaning [City] FL | Godly Windows & Wash Co.
// Weston, Boca Raton, Fort Lauderdale have specific titles in customMetaData
export const generateCityTitle = (cityName) => {
  // Check for custom meta data first - need to find the city slug
  const citySlug = findCitySlug(cityName);

  if (citySlug && customMetaData[citySlug]?.cityPage?.title) {
    return customMetaData[citySlug].cityPage.title;
  }

  // Fall back to formula: Window Cleaning [City] FL | Godly Windows & Wash Co.
  if (!cityName) {
    return "Window Cleaning South Florida | Godly Windows & Wash Co.";
  }

  return `Window Cleaning ${capitalizeString(cityName)} FL | Godly Windows & Wash Co.`;
};

// Home page optimized title
export const homeTitle =
  customMetaData.homepage?.main?.title ||
  "Window Cleaning South Florida | Godly Windows & Wash Co.";

// Service-specific meta description templates (optimized for 140-160 chars)
const serviceDescriptions = {
  "gutter-cleaning":
    "Gutter cleaning in {location}. Protect your home from water damage with expert gutter services. Free estimates & satisfaction guarantee.",
  "house-washing":
    "House washing in {location}. Restore curb appeal with professional soft wash services. Expert cleaning with satisfaction guarantee.",
  "roof-cleaning":
    "Professional roof cleaning in {location}. We soft wash shingle, tile, and metal roofs to remove algae, moss, and black streaks — no pressure damage, satisfaction guaranteed.",
  "pressure-washing":
    "Pressure washing in {location}. Expert cleaning for driveways, patios & walkways. Professional results with satisfaction guarantee.",
  "paver-sealing":
    "Paver sealing in {location}. Protect & enhance pavers with professional sealing services. Prevent fading & damage with guarantee.",
  "screen-cleaning":
    "Screen cleaning in {location}. Restore clarity & improve airflow with professional screen services. Satisfaction guaranteed.",
  "window-cleaning":
    "Residential and commercial window cleaning in {location} — interior, exterior, and everything in between. Hand-scrubbed glass, RO/DI purified water, and a 7-day sparkle guarantee. Free quotes.",
  "soft-washing":
    "Soft washing in {location}. Safe low-pressure cleaning for roofs, siding & exteriors. Custom blends & satisfaction guarantee.",
  "holiday-lighting":
    "Holiday & Christmas lighting in {location}. Design, install, LED lights, maintenance & removal. Professional display—stress-free season.",
  "post-construction-window-cleaning":
    "Post-construction window cleaning in {location} for builders & GCs — stucco dust, paint overspray & film removal. Punch-list and turnover ready. Pro tools & RO/DI rinse.",
  "rain-shield":
    "Rain Shield hydrophobic glass coating in South Florida. Repels water, salt & dirt on windows—included free with quarterly window cleaning. Book today.",
};

// Generate SEO-optimized meta description for service pages
export const generateServiceDescription = (serviceSlug, cityName) => {
  // Check for custom meta data first - need to find the city slug
  const citySlug = findCitySlug(cityName);

  if (
    citySlug &&
    customMetaData[citySlug]?.services?.[serviceSlug]?.description
  ) {
    return customMetaData[citySlug].services[serviceSlug].description;
  }

  // Fall back to original template logic
  const baseDescription = serviceDescriptions[serviceSlug];
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  if (!baseDescription) {
    const fallbackService = serviceSlug
      ? serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "service";
    return `Professional ${fallbackService.toLowerCase()} in ${location}. Expert exterior cleaning with satisfaction guarantee. Free estimates available.`;
  }

  // Replace location placeholder with actual city
  return baseDescription.replace("{location}", location);
};

// Generate SEO-optimized meta description for city home pages
// Formula: Top-rated window cleaning & exterior services in [City]. Family-owned, fully insured,
// 5-star rated. Free estimate in 24 hours. Call [correct number for that city group].
export const generateCityDescription = (cityName) => {
  // Check for custom meta data first - need to find the city slug
  const citySlug = findCitySlug(cityName);

  if (citySlug && customMetaData[citySlug]?.cityPage?.description) {
    return customMetaData[citySlug].cityPage.description;
  }

  // Fall back to formula with correct phone for city group
  const location = cityName ? capitalizeString(cityName) : "South Florida";
  const phone = citySlug ? getPhoneForCity(citySlug) : "(954) 852-5326";

  return `Top-rated window cleaning & exterior services in ${location}. Family-owned, fully insured, 5-star rated. Free estimate in 24 hours. Call ${phone}.`;
};

// Home page optimized description
export const homeDescription =
  customMetaData.homepage?.main?.description ||
  "Window cleaning & pressure washing in South Florida. Professional exterior cleaning services for homes & businesses. Free estimates & satisfaction guarantee.";

// SEO-optimized heading structure functions
export const generateServiceH1 = (serviceSlug, cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";
  const citySlug = findCitySlug(cityName);
  const customH1 =
    citySlug && customMetaData[citySlug]?.services?.[serviceSlug]?.h1;
  if (typeof customH1 === "string" && customH1.length > 0) {
    return customH1;
  }

  // Window cleaning cluster: distinct primary keyword per page (hub + spokes)
  if (serviceSlug === "window-cleaning") {
    return `Window Cleaning Services in ${location}`;
  }
  if (serviceSlug === "post-construction-window-cleaning") {
    return `Post-Construction Window Cleaning in ${location}`;
  }
  if (serviceSlug === "rain-shield") {
    return "Rain Shield Technology — Hydrophobic Glass Coating";
  }

  const serviceName = serviceMetaTitles[serviceSlug];

  if (!serviceName) {
    const fallbackService = serviceSlug
      ? serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "Service";
    return `Professional ${fallbackService} Services in ${location}`;
  }

  return `Professional ${serviceName} Services in ${location}`;
};

export const generateCityH1 = (cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";
  return `Window Cleaning & Pressure Washing Services in ${location}`;
};

export const generateHomeH1 = (cityName) => {
  return getCityHeroContent(cityName).heading;
};

// Service page section headings
export const generateServiceSectionHeadings = (serviceSlug, cityName) => {
  const serviceName =
    serviceMetaTitles[serviceSlug] ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  if (serviceSlug === "rain-shield") {
    return {
      h2WhyEssential: "Why Rain Shield Matters",
      h2WhatIncluded: "What's Included in Our Rain Shield Service",
      h2ServicesNearYou: "Where Rain Shield Makes the Biggest Difference",
      h2Process: "Our Rain Shield Process",
      h2Benefits: "Benefits of Rain Shield",
      h2Areas: `Rain Shield Service Areas in ${location}`,
      h2Pricing: `Rain Shield Pricing in ${location}`,
    };
  }

  return {
    h2WhyEssential: `Why ${serviceName} is Essential in ${location}`,
    h2WhatIncluded: `What's Included in Our ${serviceName} Service`,
    h2ServicesNearYou: `${serviceName} Services Near You in ${location}`,
    h2Process: `Our ${serviceName} Process`,
    h2Benefits: `Benefits of Professional ${serviceName}`,
    h2Areas: `${serviceName} Service Areas in ${location}`,
    h2Pricing: `${serviceName} Pricing in ${location}`,
  };
};

// Generate SEO-optimized ALT text for city page hero images
// Formula: Professional window cleaning service in [City], FL
export const generateCityHeroAlt = (cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";
  return `Professional window cleaning service in ${location}, FL`;
};

// Generate SEO-optimized ALT text for service hero images
export const generateServiceHeroAlt = (serviceSlug, cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  const serviceImageDescriptions = {
    "gutter-cleaning": `gutter cleaning professionals in ${location}`,
    "house-washing": `house washing and pressure washing in ${location}`,
    "roof-cleaning": `roof cleaning service in ${location}`,
    "pressure-washing": `pressure washing service in ${location}`,
    "paver-sealing": `paver sealing and restoration in ${location}`,
    "screen-cleaning": `screen cleaning professionals in ${location}`,
    "window-cleaning": `professional window cleaning in ${location}`,
    "soft-washing": `soft washing service in ${location}`,
    "holiday-lighting": `holiday and Christmas lighting installation in ${location}`,
    "post-construction-window-cleaning": `post-construction window cleaning in ${location}`,
    "rain-shield": `Rain Shield hydrophobic glass coating in ${location}`,
  };

  return (
    serviceImageDescriptions[serviceSlug] ||
    `professional cleaning service in ${location}`
  );
};
