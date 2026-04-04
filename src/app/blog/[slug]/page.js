import { notFound } from "next/navigation";
import {
  getSanityPostBySlug,
  getAllSanitySlugs,
  getSanityCitySlugs,
  getSanityPostsByCity,
} from "@/data/sanity-content";
import BlogPostPage from "@/godlyComponents/blog/BlogPostPage";
import BlogIndex from "@/godlyComponents/blog/BlogIndex";
import { BASE_URL } from "@/app/lib/constants";
import { citiesMap } from "@/data/cities";
import { getCityAreaServedSchema } from "@/data/metaTitles";
import {
  paginateBlogPosts,
  redirectIfBlogListPageMismatch,
} from "@/lib/blog-pagination";
import JsonLd from "@/lib/jsonLd";
import { clampMetaDescription } from "@/lib/metaDescription";

function toCityTitle(citySlug) {
  return citiesMap[citySlug]
    ? citiesMap[citySlug]
        .split(" ")
        .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
        .join(" ")
    : citySlug;
}

function toIsoDate(value) {
  if (!value) return undefined;
  try {
    return new Date(value).toISOString();
  } catch {
    return undefined;
  }
}

export async function generateStaticParams() {
  const [postSlugs, citySlugs] = await Promise.all([
    getAllSanitySlugs(),
    getSanityCitySlugs(),
  ]);
  const allSlugs = new Set([
    ...postSlugs,
    ...citySlugs,
    ...Object.keys(citiesMap),
  ]);
  return [...allSlugs].map((slug) => ({ slug }));
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
  const post = await getSanityPostBySlug(slug);
  if (!post) return {};

  const description = clampMetaDescription(
    post.metaDescription || post.excerpt || "",
  );

  return {
    title: post.metaTitle || post.title,
    description,
    keywords: [post.targetKeyword, post.targetCity, "Godly Windows"].filter(
      Boolean,
    ),
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Godly Windows",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export const revalidate = 60;

export default async function BlogPostRoute({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;

  // City blog index
  if (citiesMap[slug]) {
    const allPosts = await getSanityPostsByCity(slug);
    const cityName = toCityTitle(slug);
    const { pagePosts, currentPage, totalPages } = paginateBlogPosts(
      allPosts,
      sp?.page,
    );
    const listBase = `/blog/${slug}`;
    redirectIfBlogListPageMismatch(listBase, sp?.page, currentPage, totalPages);
    return (
      <BlogIndex
        posts={pagePosts}
        cityName={cityName}
        basePath={listBase}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    );
  }

  // Individual blog post
  const post = await getSanityPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headline = post.metaTitle || post.title;
  const description = clampMetaDescription(
    post.metaDescription || post.excerpt || "",
  );
  const pageUrl = `${BASE_URL}/blog/${post.slug}`;
  const datePublished = toIsoDate(post.publishedAt);
  const dateModified =
    toIsoDate(post._updatedAt) || datePublished || undefined;

  const org = {
    "@type": "Organization",
    name: "Godly Windows & Wash Co.",
    url: BASE_URL,
  };

  const blogPosting = {
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified,
    author: org,
    publisher: { ...org },
    url: pageUrl,
    ...(post.citySlug && citiesMap[post.citySlug]
      ? { contentLocation: getCityAreaServedSchema(post.citySlug) }
      : post.targetCity
        ? {
            contentLocation: {
              "@type": "City",
              name: post.targetCity,
              containedInPlace: { "@type": "State", name: "Florida" },
            },
          }
        : {}),
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
        item: pageUrl,
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [blogPosting, breadcrumbList],
  };

  if (post.faq?.length > 0) {
    graph["@graph"].push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <>
      <JsonLd id="blog-post-schema" data={graph} />
      <BlogPostPage post={post} />
    </>
  );
}
