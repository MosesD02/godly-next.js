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
    question: "What areas of South Florida do you service?",
    answer:
      "We cover all of Broward County plus a few cities in Palm Beach County, including Boca Raton, Delray Beach, and Royal Palm Beach. We're not in the Miami area right now. Not sure if we come to you? Scroll down to the city list and click your city to double check.",
  },
  {
    question: "What services do you offer besides window cleaning?",
    answer:
      "Plenty! On top of interior and exterior window cleaning, we also do pressure washing for driveways, walkways, and pool decks, gentle roof washing, driveway sealing, and holiday light installation. A lot of our customers bundle a few services together so the whole home gets refreshed at once.",
  },
  {
    question: "How often should I have my windows cleaned?",
    answer:
      "At a minimum, every six months. Between the salt air, humidity, pollen, and those afternoon storms we all know too well, windows down here get dirty fast. Most of our customers want their home looking great all year, so they go with our quarterly plan. That's where we offer our biggest discounts and throw in free extras on every visit.",
  },
  {
    question: "What is the invisible coating and how long does it last?",
    answer:
      "It's a treatment we put on your glass that repels water, dirt, and those annoying mineral spots. Rain actually helps rinse your windows clean instead of leaving them streaky. It lasts at least three months, and most of the time quite a bit longer depending on sun and weather exposure. It's one of the easiest ways to keep your windows looking freshly cleaned between visits.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Super easy! Give us a call or shoot us a text. If you've got the time, we love doing quotes in person so we can walk through everything with you, talk through your options, and put together a plan that fits what you need. In a rush? Just text us a few pictures and we'll send a quote right back.",
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
