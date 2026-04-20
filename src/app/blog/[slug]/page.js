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
  const validCitySlugs = citySlugs.filter((s) => citiesMap[s]);
  const allSlugs = new Set([...postSlugs, ...validCitySlugs]);
  return [...allSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getSanityPostBySlug(slug);
  if (post) {
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

  if (citiesMap[slug]) {
    const cityPosts = await getSanityPostsByCity(slug);
    if (cityPosts.length === 0) {
      return {};
    }
    const cityName = toCityTitle(slug);
    return {
      robots: {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
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

  return {};
}

export const revalidate = 60;

export default async function BlogPostRoute({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;

  const post = await getSanityPostBySlug(slug);
  if (post) {
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
      image: post.image || `${BASE_URL}/blog/${post.slug}/opengraph-image`,
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

  if (citiesMap[slug]) {
    const allPosts = await getSanityPostsByCity(slug);
    if (allPosts.length === 0) {
      notFound();
    }
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

  notFound();
}
