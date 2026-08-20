/**
 * Sanity content layer — fetches blog posts from Sanity CMS.
 * Transforms Sanity document format to match the existing blog post shape
 * used by BlogIndex and BlogPostPage.
 */

import { cacheLife, cacheTag } from "next/cache";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { sanityLqipToBlurDataURL } from "@/sanity/lqip";
import {
  SERVICE_SLUG_TO_CATEGORY,
  SERVICE_CATEGORIES,
} from "./blog-categories";

/** Featured image + LQIP for Next/Image blur placeholders */
const IMAGE_WITH_LQIP = `image {
  ...,
  asset->{
    _id,
    metadata {
      lqip,
      dimensions
    }
  }
}`;

/** Portable Text: expand image assets so `metadata.lqip` is available */
const BODY_WITH_IMAGE_LQIP = `body[]{
  ...,
  _type == "image" => {
    ...,
    asset->{
      _id,
      metadata {
        lqip,
        dimensions
      }
    }
  }
}`;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  ${IMAGE_WITH_LQIP},
  publishedAt,
  metaTitle,
  metaDescription,
  targetKeyword,
  internalLink,
  secondaryLink,
  targetCity,
  citySlug,
  serviceCategory,
  businessName,
  ctaText,
  ctaLink,
  ctaQuoteLink,
  ${BODY_WITH_IMAGE_LQIP},
  faq[] { question, answer }
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  ${IMAGE_WITH_LQIP},
  publishedAt,
  metaTitle,
  metaDescription,
  targetKeyword,
  internalLink,
  secondaryLink,
  targetCity,
  citySlug,
  serviceCategory,
  businessName,
  ctaText,
  ctaLink,
  ctaQuoteLink,
  ${BODY_WITH_IMAGE_LQIP},
  faq[] { question, answer }
}`;

/**
 * Transform a Sanity post document to blog post shape
 */
function toBlogPost(doc) {
  if (!doc) return null;
  const imageField = doc.image;
  const imageUrl = imageField
    ? urlFor(imageField).width(1600).quality(90).auto("format").url()
    : null;
  const imageBlurDataURL = sanityLqipToBlurDataURL(
    imageField?.asset?.metadata?.lqip,
  );
  return {
    ...doc,
    image: imageUrl,
    imageBlurDataURL,
    body: Array.isArray(doc.body) ? doc.body : [],
    faq: Array.isArray(doc.faq) ? doc.faq : [],
  };
}

/**
 * Get all Sanity posts sorted by date (newest first).
 * Cached across renders and navigations so metadata, pages, and prefetched
 * route shells can reuse one CMS read.
 */
export async function getAllSanityPosts() {
  "use cache";
  cacheLife("minutes");
  cacheTag("sanity-posts");

  try {
    const docs = await client.fetch(POSTS_QUERY);
    return (docs || []).map(toBlogPost);
  } catch {
    return [];
  }
}

/**
 * Get a single Sanity post by slug
 */
export async function getSanityPostBySlug(slug) {
  "use cache";
  cacheLife("minutes");
  cacheTag("sanity-posts", `sanity-post-${slug}`);

  try {
    const doc = await client.fetch(POST_BY_SLUG_QUERY, { slug });
    return toBlogPost(doc);
  } catch {
    return null;
  }
}

/**
 * Get all Sanity post slugs for static generation
 */
export async function getAllSanitySlugs() {
  const posts = await getAllSanityPosts();
  return posts.map((p) => p.slug).filter(Boolean);
}

/**
 * Get Sanity posts for a specific city
 */
export async function getSanityPostsByCity(citySlug) {
  const posts = await getAllSanityPosts();
  return posts
    .filter((p) => p.citySlug === citySlug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

/**
 * Get unique city slugs that have Sanity posts
 */
export async function getSanityCitySlugs() {
  const posts = await getAllSanityPosts();
  return [...new Set(posts.map((p) => p.citySlug).filter(Boolean))];
}

/**
 * City match: CMS `citySlug` should match the URL city, but posts often encode
 * the city only in the slug (e.g. window-cleaning-near-me-deerfield-beach).
 */
function postMatchesCitySlug(post, citySlug) {
  if (!citySlug) return false;
  if (post.citySlug === citySlug) return true;
  if (typeof post.slug !== "string") return false;
  return (
    post.slug === citySlug ||
    post.slug.endsWith(`-${citySlug}`) ||
    post.slug.includes(`-${citySlug}-`)
  );
}

/**
 * Service match: CMS may store internal slug, page slug, display label, or omit
 * the field when the SEO slug already contains the service (e.g. window-cleaning-...).
 */
function postMatchesServiceCategory(post, category, serviceSlug) {
  const display = SERVICE_CATEGORIES[category];
  if (
    post.serviceCategory === category ||
    post.serviceCategory === serviceSlug ||
    (display && post.serviceCategory === display)
  ) {
    return true;
  }
  if (typeof post.slug !== "string" || !category) return false;
  if (post.slug.includes(category)) return true;
  if (serviceSlug && post.slug.includes(serviceSlug)) return true;
  return false;
}

/**
 * Get related blog posts for a service page.
 * Matches on citySlug + the serviceCategory derived from the service page slug.
 */
export async function getRelatedBlogPosts(citySlug, serviceSlug) {
  const category = SERVICE_SLUG_TO_CATEGORY[serviceSlug];
  if (!category) return [];
  const posts = await getAllSanityPosts();
  return posts.filter(
    (post) =>
      postMatchesCitySlug(post, citySlug) &&
      postMatchesServiceCategory(post, category, serviceSlug),
  );
}
