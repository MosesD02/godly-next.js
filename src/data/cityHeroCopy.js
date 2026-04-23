/**
 * City homepage hero headlines + subheads (Godly main site).
 * Fort Lauderdale matches the main South Florida page headline pattern; all other cities are unique for SEO.
 */

export const MAIN_PAGE_HERO_HEADING =
  "Window Cleaning And Pressure Washing Services In South Florida";

export const MAIN_PAGE_HERO_SUBHEADING =
  "we specialize in window washing, home washing, pressure washing, paver sealing and more.";

/** @type {Record<string, { heading: string; subheading: string }>} */
export const CITY_HERO_COPY = {
  "BOCA RATON": {
    heading: "Premium Window Cleaning And Pressure Washing In Boca Raton",
    subheading:
      "serving Boca homeowners with window washing, soft wash house cleaning, driveway pressure washing, paver sealing and more.",
  },
  "COCONUT CREEK": {
    heading: "Trusted Window Washing And Exterior Cleaning In Coconut Creek",
    subheading:
      "covering residential window cleaning, home soft washing, concrete pressure washing, paver restoration and beyond.",
  },
  "COOPER CITY": {
    heading: "Top Rated Window Cleaning And Exterior Wash Pros In Cooper City",
    subheading:
      "we handle streak free window washing, house soft washing, driveway cleaning, paver sealing and more for your home.",
  },
  "CORAL SPRINGS": {
    heading: "Five Star Window Cleaning And Pressure Washing In Coral Springs",
    subheading:
      "offering professional window washing, exterior house cleaning, paver sealing, driveway pressure washing and more.",
  },
  DAVIE: {
    heading: "Davie's Go To Window Cleaning And Pressure Washing Team",
    subheading:
      "from crystal clear window washing to home soft washing, paver sealing, driveway cleaning and everything in between.",
  },
  "DEERFIELD BEACH": {
    heading: "Expert Window Cleaning And Exterior Washing In Deerfield Beach",
    subheading:
      "specializing in window washing, house washing, pressure cleaning, paver sealing and other exterior services.",
  },
  "DELRAY BEACH": {
    heading: "Luxury Home Window Cleaning And Pressure Washing In Delray Beach",
    subheading:
      "providing detailed window washing, soft wash home cleaning, paver sealing, driveway pressure washing and more.",
  },
  "FORT LAUDERDALE": {
    heading: "Window Cleaning And Pressure Washing Services In Fort Lauderdale",
    subheading: MAIN_PAGE_HERO_SUBHEADING,
  },
  "HALLANDALE BEACH": {
    heading:
      "Reliable Window Washing And Pressure Cleaning In Hallandale Beach",
    subheading:
      "delivering professional window cleaning, house soft washing, paver sealing, driveway washing and more.",
  },
  "HILLSBORO BEACH": {
    heading: "Coastal Window Cleaning And Exterior Washing In Hillsboro Beach",
    subheading:
      "we handle window washing, home soft washing, paver sealing, pressure cleaning and more for beachfront properties.",
  },
  HOLLYWOOD: {
    heading: "Professional Window Cleaning And Power Washing In Hollywood FL",
    subheading:
      "serving Hollywood homes with window washing, house washing, paver sealing, driveway cleaning and related services.",
  },
  "LAUDERDALE-BY-THE-SEA": {
    heading: "Oceanfront Window Washing And Exterior Cleaning Experts",
    subheading:
      "we offer window cleaning, soft wash house washing, paver sealing, pressure washing and more for coastal homes.",
  },
  "LIGHTHOUSE POINT": {
    heading:
      "High End Window Cleaning And Pressure Washing In Lighthouse Point",
    subheading:
      "we handle window washing, exterior home washing, paver sealing, pressure cleaning and more for waterfront homes.",
  },
  MARGATE: {
    heading: "Margate's Trusted Window And Exterior Cleaning Company",
    subheading:
      "we take care of window washing, house soft washing, driveway pressure cleaning, paver sealing and much more.",
  },
  MIRAMAR: {
    heading: "Quality Window Cleaning And Pressure Washing Throughout Miramar",
    subheading:
      "from window washing to home exterior cleaning, paver sealing, driveway pressure washing and other services.",
  },
  "OAKLAND PARK": {
    heading:
      "Oakland Park's Local Window Washing And Pressure Cleaning Experts",
    subheading:
      "count on us for window washing, house soft washing, paver sealing, driveway cleaning and full exterior care.",
  },
  PARKLAND: {
    heading: "High End Window Cleaning And Exterior Washing In Parkland",
    subheading:
      "Parkland estates trust us for window washing, home soft washing, paver sealing, pressure washing and more.",
  },
  "PEMBROKE PINES": {
    heading: "Pembroke Pines Window Cleaners And Pressure Washing Specialists",
    subheading:
      "offering detailed window washing, exterior home cleaning, paver sealing, driveway pressure washing and more.",
  },
  PLANTATION: {
    heading: "Professional Window Cleaning And Power Washing In Plantation",
    subheading:
      "we provide window washing, house exterior cleaning, paver restoration, pressure washing and related services.",
  },
  "POMPANO BEACH": {
    heading: "Pompano Beach's Choice For Window Cleaning And Pressure Washing",
    subheading:
      "offering window washing, home soft washing, driveway pressure cleaning, paver sealing and a whole lot more.",
  },
  "ROYAL PALM BEACH": {
    heading:
      "Professional Window Washing And Exterior Cleaning In Royal Palm Beach",
    subheading:
      "our team handles window cleaning, house washing, paver sealing, pressure washing and other outdoor services.",
  },
  "SOUTHWEST RANCHES": {
    heading: "Estate Window Cleaning And Pressure Washing In Southwest Ranches",
    subheading:
      "we handle window washing, home washing, paver sealing, pressure cleaning and more for large properties.",
  },
  SUNRISE: {
    heading: "Sunrise's Local Window Washing And Exterior Cleaning Pros",
    subheading:
      "we cover window washing, soft wash home cleaning, driveway pressure washing, paver sealing and beyond.",
  },
  TAMARAC: {
    heading: "Dependable Window Cleaning And Power Washing Across Tamarac",
    subheading:
      "we take on window washing, house soft washing, paver sealing, pressure washing and the rest of your exterior.",
  },
  "WEST PARK": {
    heading: "West Park's Trusted Name In Window And Pressure Washing",
    subheading:
      "from window cleaning to home exterior washing, paver sealing, driveway pressure cleaning and more.",
  },
  WESTON: {
    heading: "Weston's Premier Window Cleaning And Pressure Washing Service",
    subheading:
      "handling window washing, house soft washing, paver sealing, driveway pressure cleaning and more for Weston homes.",
  },
};

/**
 * @param {string | undefined | null} cityName — `citiesMap` display value (e.g. "BOCA RATON") or undefined on `/south-florida`
 */
export function getCityHeroContent(cityName) {
  if (cityName == null || String(cityName).trim() === "") {
    return {
      heading: MAIN_PAGE_HERO_HEADING,
      subheading: MAIN_PAGE_HERO_SUBHEADING,
    };
  }
  const key = String(cityName).toUpperCase().replace(/\s+/g, " ").trim();
  if (key === "SOUTH FLORIDA") {
    return {
      heading: MAIN_PAGE_HERO_HEADING,
      subheading: MAIN_PAGE_HERO_SUBHEADING,
    };
  }
  const copy = CITY_HERO_COPY[key];
  if (copy) {
    return copy;
  }
  return {
    heading: `Window cleaning and pressure Washing services In ${cityName}`,
    subheading: MAIN_PAGE_HERO_SUBHEADING,
  };
}
