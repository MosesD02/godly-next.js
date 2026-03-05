/**
 * Blog content — exports all posts and helper functions.
 * Add new posts in src/data/blog-content/posts/ (one file per post).
 */

import blogPosts from "./posts/index.js";
import { SERVICE_SLUG_TO_CATEGORY } from "./categories.js";

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Get all blog post slugs for static generation
 */
export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

/**
 * Get all blog posts for a specific city
 */
export function getBlogPostsByCity(citySlug) {
  return [...blogPosts]
    .filter((post) => post.citySlug === citySlug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

/**
 * Get blog posts for a service page.
 * Matches on citySlug + the serviceCategory derived from the service page slug.
 * Returns [] if the service has no mapped category (blog section is hidden).
 */
export function getRelatedBlogPosts(citySlug, serviceSlug) {
  const category = SERVICE_SLUG_TO_CATEGORY[serviceSlug];
  if (!category) return [];
  return blogPosts.filter(
    (post) => post.citySlug === citySlug && post.serviceCategory === category,
  );
}
