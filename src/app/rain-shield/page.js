import { Suspense } from "react";
import ServicesPage from "@/godlyComponents/servicesPage";
import JsonLd from "@/lib/jsonLd";
import { citiesMap } from "@/data/cities";
import {
  generateServiceDescription,
  generateServiceTitle,
  getCityAreaServedSchema,
  getPrimaryBusinessProviderSchema,
} from "@/data/metaTitles";
import { getRelatedBlogPosts } from "@/data/sanity-content";
import { BASE_URL } from "@/app/lib/constants";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import WebsiteLayout from "@/godlyComponents/websiteLayout";

const DEFAULT_CITY_SLUG = "south-florida";

/** Optional `?city=` (bookmarks / internal links). Legacy redirects go to `/rain-shield` without query. */
function resolveRainShieldCitySlug(raw) {
  if (typeof raw !== "string") return DEFAULT_CITY_SLUG;
  const slug = raw.trim().toLowerCase();
  if (!slug || !citiesMap[slug]) return DEFAULT_CITY_SLUG;
  return slug;
}

export async function generateMetadata({ searchParams }) {
  const sp = await searchParams;
  const rawCity = Array.isArray(sp?.city) ? sp.city[0] : sp?.city;
  const citySlug = resolveRainShieldCitySlug(rawCity);
  const cityName = citiesMap[citySlug];
  const title = generateServiceTitle("rain-shield", cityName);

  return {
    title,
    description: generateServiceDescription("rain-shield", cityName),
    openGraph: {
      title,
      description: generateServiceDescription("rain-shield", cityName),
      url: `${BASE_URL}/rain-shield`,
      siteName: "Godly Windows & Wash Co.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/rain-shield/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Rain Shield hydrophobic glass coating | Godly Windows",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: generateServiceDescription("rain-shield", cityName),
      images: [`${BASE_URL}/rain-shield/opengraph-image`],
    },
    alternates: {
      canonical: "/rain-shield",
    },
  };
}

export default function RainShieldPage({ searchParams }) {
  return (
    <WebsiteLayout>
      <Suspense fallback={<RouteLoadingFallback variant="service" />}>
        <RainShieldPageContent searchParams={searchParams} />
      </Suspense>
    </WebsiteLayout>
  );
}

async function RainShieldPageContent({ searchParams }) {
  const sp = await searchParams;
  const rawCity = Array.isArray(sp?.city) ? sp.city[0] : sp?.city;
  const citySlug = resolveRainShieldCitySlug(rawCity);
  const cityName = citiesMap[citySlug];
  const pageUrl = `${BASE_URL}/rain-shield`;

  let relatedPosts = [];
  try {
    relatedPosts = await getRelatedBlogPosts(citySlug, "window-cleaning");
  } catch {
    // Sanity unavailable
  }

  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Rain Shield Technology — Hydrophobic Glass Coating",
    provider: getPrimaryBusinessProviderSchema(),
    description: generateServiceDescription("rain-shield", cityName),
    areaServed: getCityAreaServedSchema("south-florida"),
    url: pageUrl,
  };

  const faqEntities = [
    {
      question: "How long does Rain Shield last?",
      answer:
        "Rain Shield typically lasts around three months or more between applications, depending on exposure. Since it's included free on every service with our quarterly plan, your windows stay protected year-round without any extra scheduling or cost.",
    },
    {
      question: "What makes Rain Shield different from regular glass cleaners?",
      answer:
        "Rain Shield is a professional-grade hydrophobic coating that bonds to your glass at the molecular level. Unlike consumer products, it creates a lasting water-repellent barrier that makes rain and dirt slide off cleanly for months at a time.",
    },
    {
      question: "Does Rain Shield work on hurricane impact windows?",
      answer:
        "Absolutely. Rain Shield is completely safe on hurricane impact windows, which are standard throughout South Florida. The hydrophobic coating bonds directly to glass without damaging low-E coatings, tints, or protective manufacturer layers.",
    },
    {
      question: "Is Rain Shield included with my cleaning service?",
      answer:
        "Yes — Rain Shield comes included free on every service with our quarterly maintenance plan, plus occasional seasonal promotions. We apply it during the cleaning process itself — no separate appointment or fee needed.",
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema,
      {
        "@type": "FAQPage",
        mainEntity: faqEntities.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rain Shield Technology",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd id="rain-shield-schema" data={graph} />
      <ServicesPage
        slug="rain-shield"
        city={citySlug}
        cityName={cityName}
        cityData={{}}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
