// SEO-optimized meta titles for services and locations
export const serviceMetaTitles = {
  "solar-panel-cleaning": "Solar Panel Cleaning",
  "exterior-window-cleaning": "Window Cleaning",
  "interior-window-cleaning": "Interior Window Cleaning",
  "gutter-cleaning": "Gutter Cleaning",
  "house-washing": "House Washing & Pressure Washing",
  "roof-washing": "Roof Cleaning",
  "pressure-washing": "Pressure Washing",
  "paver-sealing": "Paver Sealing",
  "light-fixture-cleaning": "Light Fixture Cleaning",
  "screen-cleaning": "Screen Cleaning",
  "skylight-cleaning": "Skylight Cleaning",
  "holiday-light-installation": "Holiday Light Installation",
  "high-dusting": "High Dusting Services",
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

// Generate SEO-optimized title for service pages
export const generateServiceTitle = (serviceSlug, cityName) => {
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
export const generateCityTitle = (cityName) => {
  if (!cityName) {
    return "Window Cleaning & Pressure Washing Services in South Florida";
  }

  return `Window Cleaning & Pressure Washing in ${capitalizeString(cityName)} | Godly Windows`;
};

// Home page optimized title
export const homeTitle =
  "Window Cleaning & Pressure Washing Services in South Florida";

// Service-specific meta description templates (optimized for 140-160 chars)
const serviceDescriptions = {
  "solar-panel-cleaning":
    "Solar panel cleaning in {location}. Maximize energy efficiency with professional cleaning services. Free estimates & satisfaction guarantee.",
  "exterior-window-cleaning":
    "Professional window cleaning in {location}. Streak-free results with expert exterior cleaning services. Free quotes available.",
  "interior-window-cleaning":
    "Interior window cleaning in {location}. Crystal-clear views with professional cleaning services. Satisfaction guaranteed.",
  "gutter-cleaning":
    "Gutter cleaning in {location}. Protect your home from water damage with expert gutter services. Free estimates & satisfaction guarantee.",
  "house-washing":
    "House washing in {location}. Restore curb appeal with professional soft wash services. Expert cleaning with satisfaction guarantee.",
  "roof-washing":
    "Roof cleaning in {location}. Remove algae, moss & stains with safe low-pressure washing. Professional service with guarantee.",
  "pressure-washing":
    "Pressure washing in {location}. Expert cleaning for driveways, patios & walkways. Professional results with satisfaction guarantee.",
  "paver-sealing":
    "Paver sealing in {location}. Protect & enhance pavers with professional sealing services. Prevent fading & damage with guarantee.",
  "light-fixture-cleaning":
    "Light fixture cleaning in {location}. Maximize brightness with professional cleaning services. Expert results guaranteed.",
  "screen-cleaning":
    "Screen cleaning in {location}. Restore clarity & improve airflow with professional screen services. Satisfaction guaranteed.",
  "skylight-cleaning":
    "Skylight cleaning in {location}. Maximize natural light with professional cleaning services. Expert care with satisfaction guarantee.",
  "holiday-light-installation":
    "Holiday light installation in {location}. Hassle-free setup, maintenance & removal. Professional service with guarantee.",
  "high-dusting":
    "High dusting services in {location}. Professional cleaning for hard-to-reach areas. Expert service with satisfaction guarantee.",
};

// Generate SEO-optimized meta description for service pages
export const generateServiceDescription = (serviceSlug, cityName) => {
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
export const generateCityDescription = (cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  return `Window cleaning & pressure washing in ${location}. Professional exterior cleaning services for homes & businesses. Free estimates & satisfaction guarantee.`;
};

// Home page optimized description
export const homeDescription =
  "Window cleaning & pressure washing in South Florida. Professional exterior cleaning services for homes & businesses. Free estimates & satisfaction guarantee.";

// SEO-optimized heading structure functions
export const generateServiceH1 = (serviceSlug, cityName) => {
  const serviceName = serviceMetaTitles[serviceSlug];
  const location = cityName ? capitalizeString(cityName) : "South Florida";

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

export const generateHomeH1 = () => {
  return "Professional Window Cleaning & Pressure Washing Services in South Florida";
};

// Service page section headings
export const generateServiceSectionHeadings = (serviceSlug, cityName) => {
  const serviceName =
    serviceMetaTitles[serviceSlug] ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  return {
    h2WhyEssential: `Why ${serviceName} is Essential in ${location}`,
    h2WhatIncluded: `What's Included in Our ${serviceName} Service`,
    h2ServicesNearYou: `${serviceName} Services Near You in ${location}`,
    h2Process: `Our ${serviceName} Process`,
    h2Benefits: `Benefits of Professional ${serviceName}`,
    h2Areas: `${serviceName} Service Areas in ${location}`,
    h2Pricing: `${serviceName} Pricing in ${location}`,
    h2Contact: `Contact Us for ${serviceName} in ${location}`,
  };
};

// Generate SEO-optimized ALT text for service hero images
export const generateServiceHeroAlt = (serviceSlug, cityName) => {
  const location = cityName ? capitalizeString(cityName) : "South Florida";

  const serviceImageDescriptions = {
    "solar-panel-cleaning": `solar panel cleaning service in ${location}`,
    "exterior-window-cleaning": `exterior window cleaning technician in ${location}`,
    "interior-window-cleaning": `interior window cleaning service in ${location}`,
    "gutter-cleaning": `gutter cleaning professionals in ${location}`,
    "house-washing": `house washing and pressure washing in ${location}`,
    "roof-washing": `roof cleaning service in ${location}`,
    "pressure-washing": `pressure washing service in ${location}`,
    "paver-sealing": `paver sealing and restoration in ${location}`,
    "light-fixture-cleaning": `light fixture cleaning service in ${location}`,
    "screen-cleaning": `screen cleaning professionals in ${location}`,
    "skylight-cleaning": `skylight cleaning service in ${location}`,
    "holiday-light-installation": `holiday light installation service in ${location}`,
    "high-dusting": `high dusting cleaning service in ${location}`,
  };

  return (
    serviceImageDescriptions[serviceSlug] ||
    `professional cleaning service in ${location}`
  );
};
