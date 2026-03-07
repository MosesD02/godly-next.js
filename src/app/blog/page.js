import { cookies } from "next/headers";
import { citiesMap } from "@/data/cities";
import { getSanityPostsByCity } from "@/data/sanity-content";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";

export const metadata = {
  title:
    "Blog | Godly Windows & Wash Co. — Pressure Washing & Window Cleaning Tips",
  description:
    "Expert tips on pressure washing and window cleaning for South Florida. Learn what to know before you hire. Free quotes from Godly Windows.",
  openGraph: {
    title: "Blog | Godly Windows & Wash Co.",
    description:
      "Expert tips on pressure washing and window cleaning for South Florida homeowners.",
    url: "https://godlywindows.com/blog",
    siteName: "Godly Windows",
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const cookieStore = await cookies();
  const savedCity = cookieStore.get("selectedCity")?.value;
  const citySlug =
    savedCity && citiesMap[savedCity] ? savedCity : "south-florida";
  const cityName = citiesMap[citySlug];
  const posts = await getSanityPostsByCity(citySlug);
  return <BlogIndex posts={posts} cityName={cityName} />;
}
