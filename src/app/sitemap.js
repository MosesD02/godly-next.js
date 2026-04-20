import { BASE_URL } from "./lib/constants";
import { citiesMap } from "@/data/cities";
import { serviceMetaTitles } from "@/data/metaTitles";
import { WINDOW_CLUSTER_SLUGS } from "@/data/windowCleaningCluster";
import { getAllSanityPosts } from "@/data/sanity-content";

function minimalSitemapEntries(now) {
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/booking`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/rain-shield`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...WINDOW_CLUSTER_SLUGS.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];
}

export default async function sitemap() {
  const now = new Date().toISOString();

  try {
    const cities = Object.keys(citiesMap).filter(
      (city) => city !== "south-florida",
    );
    const services = Object.keys(serviceMetaTitles);
    const blogPosts = await getAllSanityPosts();

    const urls = [
      {
        url: BASE_URL,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1.0,
      },
      // Individual blog posts
      ...blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.publishedAt,
        changeFrequency: "monthly",
        priority: 0.7,
      })),
      {
        url: `${BASE_URL}/blog`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/booking`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/privacy-policy`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${BASE_URL}/terms-and-conditions`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${BASE_URL}/rain-shield`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      },
    ];

    WINDOW_CLUSTER_SLUGS.forEach((slug) => {
      urls.push({
        url: `${BASE_URL}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    });

    cities.forEach((city) => {
      urls.push({
        url: `${BASE_URL}/${city}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });

      services.forEach((service) => {
        if (service === "rain-shield") return;
        urls.push({
          url: `${BASE_URL}/${city}/${service}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      });
    });

    return urls;
  } catch {
    return minimalSitemapEntries(now);
  }
}
