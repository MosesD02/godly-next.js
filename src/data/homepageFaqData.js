// FAQ data for the main homepage and city homepages.
// mainHomepageFaqs: shown at godlywindows.com (no city selected)
// getCityHomepageFaqs(cityName): generates city-specific FAQs for each city homepage
//
// City labels from `citiesMap` are stored in ALL CAPS for branding; FAQ copy uses title case
// for natural reading (not `text-transform` on the accordion — the source strings are normalized here).

/** citiesMap-style value (e.g. "CORAL SPRINGS") → "Coral Springs" for sentences. */
function cityNameForFaqCopy(cityName) {
  if (!cityName || typeof cityName !== "string") return cityName;
  return cityName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/** One FAQPage node for `@graph` (matches visible homepage / city-landing FAQ accordion). */
export function buildHomepageFaqPageNode(faqs, pageUrl) {
  const url = pageUrl.replace(/\/$/, "");
  return {
    "@type": "FAQPage",
    "@id": `${url}#homepage-faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const mainHomepageFaqs = [
  {
    question: "What services does Godly Windows offer?",
    answer:
      "We offer window cleaning (interior, exterior, and full), Rain Shield coating, post-construction cleaning, house washing, roof washing, gutter cleaning, soft washing, screen cleaning, solar panel cleaning, paver sealing, and holiday light installation across South Florida.",
  },
  {
    question: "What areas of South Florida do you service?",
    answer:
      "We service Boca Raton, Fort Lauderdale, Weston, Parkland, Coral Springs, and most of Palm Beach and Broward County. If you're not sure whether we reach your neighborhood, call us or check our city pages.",
  },
  {
    question: "Are you licensed, insured, and bonded?",
    answer:
      "Absolutely. Godly Windows is fully licensed, insured, and bonded for every job we take on — from single-family homes to high-rise condos and commercial properties. Your property is protected from day one.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — every estimate is free and comes with no pressure. You can book online, call us directly, or request a quote through our site. Most estimates come back the same day you reach out.",
  },
];

export const getCityHomepageFaqs = (cityName) => {
  const city = cityNameForFaqCopy(cityName);
  return [
    {
      question: `What services do you offer in ${city}?`,
      answer: `In ${city}, we offer window cleaning (interior, exterior, and full), Rain Shield coating, post-construction cleaning, house washing, roof washing, gutter cleaning, soft washing, screen cleaning, and holiday light installation. Every service is tailored to South Florida conditions.`,
    },
    {
      question: `How quickly can you get to my ${city} home?`,
      answer: `Most ${city} jobs get scheduled within 3–5 business days of your estimate. For urgent requests — storm cleanup, real estate listings, or event prep — we'll do everything we can to fit you in sooner.`,
    },
    {
      question: "Are you licensed, insured, and bonded?",
      answer:
        "Absolutely. Godly Windows is fully licensed, insured, and bonded for every job we take on — from single-family homes to high-rise condos and commercial properties. Your property is protected from day one.",
    },
    {
      question: `Do you offer free estimates in ${city}?`,
      answer: `Yes — every estimate is free and comes with zero pressure. You can book online, call us directly, or request a quote through our site. Most ${city} estimates come back the same day you reach out.`,
    },
  ];
};
