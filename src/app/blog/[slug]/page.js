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
import {
  getCanonicalBlogSlug,
  getSanitySlugForBlogRoute,
  isNoindexBlogSlug,
  withCanonicalBlogSlug,
} from "@/lib/blog-slugs";
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
  const canonicalPostSlugs = postSlugs.map(getCanonicalBlogSlug);
  const allSlugs = new Set([...canonicalPostSlugs, ...validCitySlugs]);
  return [...allSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = withCanonicalBlogSlug(
    await getSanityPostBySlug(getSanitySlugForBlogRoute(slug)),
  );
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
      ...(isNoindexBlogSlug(post.slug) && {
        robots: { index: false, follow: true },
      }),
      openGraph: {
        title: post.metaTitle || post.title,
        description,
        url: `${BASE_URL}/blog/${post.slug}`,
        siteName: "Godly Windows & Wash Co.",
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
          siteName: "Godly Windows & Wash Co.",
          type: "website",
        },
        alternates: {
          canonical: `/blog/${slug}`,
        },
      };
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
        siteName: "Godly Windows & Wash Co.",
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

  const post = withCanonicalBlogSlug(
    await getSanityPostBySlug(getSanitySlugForBlogRoute(slug)),
  );
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

    const rawImage = post.image;
    const absoluteImage =
      rawImage &&
      (rawImage.startsWith("http://") || rawImage.startsWith("https://"))
        ? rawImage
        : rawImage
          ? `${BASE_URL}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`
          : `${BASE_URL}/blog/${post.slug}/opengraph-image`;

    const blogPosting = {
      "@type": "BlogPosting",
      headline,
      description,
      datePublished,
      dateModified,
      image: absoluteImage,
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
