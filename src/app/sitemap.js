import { BASE_URL } from "./lib/constants";
import { citiesMap } from "@/data/cities";
import { serviceMetaTitles } from "@/data/metaTitles";
import {
  getAllSanityPosts,
  getSanityPostsByCity,
} from "@/data/sanity-content";

export default async function sitemap() {
  const now = new Date().toISOString();

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
    // City blog index pages (only cities that have posts)
    ...(await Promise.all(
      [...new Set(blogPosts.map((p) => p.citySlug).filter(Boolean))].map(
        async (citySlug) => {
          const posts = await getSanityPostsByCity(citySlug);
          const latest = posts[0]?.publishedAt ?? now;
          return {
            url: `${BASE_URL}/blog/${citySlug}`,
            lastModified: latest,
            changeFrequency: "weekly",
            priority: 0.8,
          };
        },
      ),
    )),
    {
      url: `${BASE_URL}/blogs`,
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
  ];

  cities.forEach((city) => {
    urls.push({
      url: `${BASE_URL}/${city}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });

    services.forEach((service) => {
      urls.push({
        url: `${BASE_URL}/${city}/${service}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return urls;
}
