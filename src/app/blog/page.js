import { citiesMap } from "@/data/cities";
import { getAllSanityPosts } from "@/data/sanity-content";
import {
  paginateBlogPosts,
  redirectIfBlogListPageMismatch,
} from "@/lib/blog-pagination";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";

export const metadata = {
  title:
    "Blog | Godly Windows & Wash Co. — Pressure Washing & Window Cleaning Tips",
  description:
    "Expert tips on pressure washing and window cleaning for South Florida. Learn what to know before you hire. Free quotes from Godly Windows.",
  robots: "index, follow",
  openGraph: {
    title: "Blog | Godly Windows & Wash Co.",
    description:
      "Expert tips on pressure washing and window cleaning for South Florida homeowners.",
    url: "https://godlywindows.com/blog",
    siteName: "Godly Windows",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage({ searchParams }) {
  const sp = await searchParams;
  // Same UX as home (/): show SOUTH FLORIDA in the UI, list every city's posts
  const cityName = citiesMap["south-florida"];
  const allPosts = await getAllSanityPosts();
  const { pagePosts, currentPage, totalPages } = paginateBlogPosts(
    allPosts,
    sp?.page,
  );
  redirectIfBlogListPageMismatch("/blog", sp?.page, currentPage, totalPages);
  return (
    <BlogIndex
      posts={pagePosts}
      cityName={cityName}
      basePath="/blog"
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
