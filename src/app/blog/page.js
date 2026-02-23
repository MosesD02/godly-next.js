import { getAllBlogPosts } from "@/data/blog-content";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";

export const metadata = {
  title: "Blog | Godly Windows & Wash Co. — Pressure Washing & Window Cleaning Tips",
  description:
    "Expert tips on pressure washing and window cleaning for Boca Raton, Fort Lauderdale, and Weston. Learn what to know before you hire. Free quotes from Godly Windows.",
  openGraph: {
    title: "Blog | Godly Windows & Wash Co.",
    description:
      "Expert tips on pressure washing and window cleaning for South Florida homeowners.",
    url: "https://godlywindows.com/blog",
    siteName: "Godly Windows",
    type: "website",
    images: [
      {
        url: "/blog/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Expert tips on pressure washing and window cleaning for South Florida homeowners.",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogIndex posts={posts} />;
}
