import { redirect } from "next/navigation";

/** Posts per index page: 1 featured + 9 in LATEST NEWS (10 total) */
export const BLOG_POSTS_PER_PAGE = 10;

function parsePageQuery(raw) {
  if (raw === undefined || raw === "") return null;
  const v = Array.isArray(raw) ? raw[0] : raw;
  const n = Number(v);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.floor(n);
}

/**
 * Redirects when `?page=` is out of range or inconsistent with the clamped page
 * (e.g. `/blog/boca-raton?page=2` when there is only one page → `/blog/boca-raton`).
 */
export function redirectIfBlogListPageMismatch(
  basePath,
  rawPageParam,
  currentPage,
  totalPages,
) {
  const requested = parsePageQuery(rawPageParam);
  if (totalPages <= 0) {
    if (requested !== null && requested !== 1) {
      redirect(basePath);
    }
    return;
  }
  if (requested !== null && requested !== currentPage) {
    redirect(currentPage <= 1 ? basePath : `${basePath}?page=${currentPage}`);
  }
}

/**
 * @param {unknown[]} posts
 * @param {string | string[] | undefined} rawPage
 */
export function paginateBlogPosts(posts, rawPage) {
  const total = posts.length;
  if (total === 0) {
    return {
      pagePosts: [],
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,
    };
  }

  const totalPages = Math.ceil(total / BLOG_POSTS_PER_PAGE);
  const parsed = Number(
    Array.isArray(rawPage) ? rawPage[0] : rawPage,
  );
  let page = Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 1;
  if (page > totalPages) page = totalPages;

  const start = (page - 1) * BLOG_POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + BLOG_POSTS_PER_PAGE);

  return {
    pagePosts,
    currentPage: page,
    totalPages,
    totalCount: total,
  };
}
