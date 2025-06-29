import { BASE_URL } from "./lib/constants";
import { citiesMap } from "@/data/cities";
import { serviceMetaTitles } from "@/data/metaTitles";

export default function sitemap() {
  const now = new Date().toISOString();

  const cities = Object.keys(citiesMap);
  const services = Object.keys(serviceMetaTitles);

  const urls = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
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

    urls.push({
      url: `${BASE_URL}/landing/window-cleaning/${city}`,
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

      urls.push({
        url: `${BASE_URL}/landing/${service}/${city}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return urls;
}
