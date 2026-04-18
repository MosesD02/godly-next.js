/**
 * Sanity content layer — fetches blog posts from Sanity CMS.
 * Transforms Sanity document format to match the existing blog post shape
 * used by BlogIndex and BlogPostPage.
 */

import { cache } from "react";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { SERVICE_SLUG_TO_CATEGORY } from "./blog-categories";
import { citiesMap } from "./cities";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  image,
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
  body,
  faq[] { question, answer }
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  image,
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
  body,
  faq[] { question, answer }
}`;

/**
 * Transform a Sanity post document to blog post shape
 */
function toBlogPost(doc) {
  if (!doc) return null;
  const imageUrl = doc.image
    ? urlFor(doc.image).width(1600).quality(90).auto("format").url()
    : null;
  return {
    ...doc,
    image: imageUrl,
    body: Array.isArray(doc.body) ? doc.body : [],
    faq: Array.isArray(doc.faq) ? doc.faq : [],
  };
}

/**
 * Get all Sanity posts sorted by date (newest first).
 * Cached per request so generateMetadata and page can share one fetch.
 */
export const getAllSanityPosts = cache(async function getAllSanityPosts() {
  try {
    const docs = await client.fetch(POSTS_QUERY);
    return (docs || []).map(toBlogPost);
  } catch {
    return [];
  }
});

/**
 * Get a single Sanity post by slug
 */
export async function getSanityPostBySlug(slug) {
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
 * Get related blog posts for a service page.
 * Matches on citySlug + the serviceCategory derived from the service page slug.
 */
export async function getRelatedBlogPosts(citySlug, serviceSlug) {
  const category = SERVICE_SLUG_TO_CATEGORY[serviceSlug];
  if (!category) return [];
  const posts = await getAllSanityPosts();
  return posts.filter(
    (post) =>
      post.citySlug === citySlug &&
      (post.serviceCategory === category ||
        post.serviceCategory === serviceSlug),
  );
}
