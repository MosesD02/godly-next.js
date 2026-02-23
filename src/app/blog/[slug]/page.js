import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "@/data/blog-content";
import BlogPostPage from "@/godlyComponents/blog/BlogPostPage";
import { BASE_URL } from "@/app/lib/constants";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
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

function FaqSchema({ faq }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostRoute({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <FaqSchema faq={post.faq} />
      <BlogPostPage post={post} />
    </>
  );
}
