import { notFound } from "next/navigation";
import Script from "next/script";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getAllBlogPosts,
  getBlogPostsByCity,
} from "@/data/blog-content";
import BlogPostPage from "@/godlyComponents/blog/BlogPostPage";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";
import { BASE_URL } from "@/app/lib/constants";
import { citiesMap } from "@/data/cities";

function toCityTitle(citySlug) {
  return citiesMap[citySlug]
    .split(" ")
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
}

export async function generateStaticParams() {
  const postSlugs = getAllBlogSlugs();
  const posts = getAllBlogPosts();
  const citySlugs = [...new Set(posts.map((p) => p.citySlug).filter(Boolean))];
  return [
    ...postSlugs.map((slug) => ({ slug })),
    ...citySlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // City blog index metadata
  if (citiesMap[slug]) {
    const cityName = toCityTitle(slug);
    return {
      title: `${cityName} Blog | Godly Windows & Wash Co.`,
      description: `Expert tips on pressure washing and window cleaning for ${cityName}. Learn what to know before you hire. Free quotes from Godly Windows.`,
      openGraph: {
        title: `${cityName} Blog | Godly Windows & Wash Co.`,
        description: `Expert tips on pressure washing and window cleaning for ${cityName} homeowners.`,
        url: `${BASE_URL}/blog/${slug}`,
        siteName: "Godly Windows",
        type: "website",
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  // Individual blog post metadata
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.targetKeyword, post.targetCity, "Godly Windows"],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Godly Windows",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostRoute({ params }) {
  const { slug } = await params;

  // City blog index
  if (citiesMap[slug]) {
    const posts = getBlogPostsByCity(slug);
    const cityName = toCityTitle(slug);
    return <BlogIndex posts={posts} cityName={cityName} />;
  }

  // Individual blog post
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
        strategy="beforeInteractive"
      />
      <BlogPostPage post={post} />
    </>
  );
}
