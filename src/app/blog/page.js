import { citiesMap } from "@/data/cities";
import { getAllSanityPosts } from "@/data/sanity-content";
import { BASE_URL } from "@/app/lib/constants";
import {
  paginateBlogPosts,
  redirectIfBlogListPageMismatch,
} from "@/lib/blog-pagination";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";

const BLOG_TITLE =
  "Blog | Godly Windows & Wash Co. — Pressure Washing & Window Cleaning Tips";
const BLOG_DESCRIPTION =
  "Expert tips on pressure washing and window cleaning for South Florida. Learn what to know before you hire. Free quotes from Godly Windows.";

export async function generateMetadata() {
  const allPosts = await getAllSanityPosts();
  const hasPosts = allPosts.length > 0;
  return {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    robots: hasPosts ? "index, follow" : { index: false, follow: true },
    openGraph: {
      title: "Blog | Godly Windows & Wash Co.",
      description:
        "Expert tips on pressure washing and window cleaning for South Florida homeowners.",
      url: `${BASE_URL}/blog`,
      siteName: "Godly Windows & Wash Co.",
      type: "website",
    },
    alternates: {
      canonical: "/blog",
    },
  };
}

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
