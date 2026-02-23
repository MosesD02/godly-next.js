/**
 * Blog content — exports all posts and helper functions.
 * Add new posts in src/data/blog-content/posts/ (one file per post).
 */

import blogPosts from "./posts/index.js";

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
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
