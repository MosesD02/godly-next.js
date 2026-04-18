import React from "react";
import Link from "next/link";
import Image from "@/components/Image";
import WebsiteLayout from "../websiteLayout";
import { format } from "date-fns";

/** Individual posts always live at `/blog/[slug]` (single dynamic segment). */
function blogPostHref(slug) {
  return `/blog/${slug}`;
}

/** `paginationBasePath` is `/blog` or `/blog/city-slug` for `?page=` links only. */
function buildBlogPageHref(paginationBasePath, pageNum) {
  if (pageNum <= 1) return paginationBasePath;
  const qs = new URLSearchParams({ page: String(pageNum) });
  return `${paginationBasePath}?${qs.toString()}`;
}

/** @returns {(number | null)[]} null = ellipsis gap */
function getPaginationItems(current, total) {
  if (total <= 1) return [];
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = new Set([1, total]);
  for (let i = current - 1; i <= current + 1; i++) {
    if (i >= 1 && i <= total) pages.add(i);
  }
  const sorted = [...pages].sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      out.push(null);
    }
    out.push(sorted[i]);
  }
  return out;
}

function PaginationChevrons() {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.642 23.6431C17.8035 23.7777 17.9898 23.8793 18.1905 23.9418C18.3912 24.0044 18.6023 24.0269 18.8117 24.0078C19.021 23.9888 19.2246 23.9287 19.4107 23.831C19.5968 23.7333 19.7619 23.5998 19.8964 23.4383L25.2292 17.0383C25.3697 16.8777 25.4766 16.6906 25.5438 16.4881C25.6109 16.2856 25.6368 16.0717 25.6201 15.859C25.6033 15.6464 25.5442 15.4392 25.4461 15.2497C25.3481 15.0602 25.2132 14.8922 25.0493 14.7556C24.8854 14.619 24.6958 14.5166 24.4918 14.4544C24.2877 14.3921 24.0733 14.3713 23.861 14.3932C23.6488 14.4151 23.4431 14.4791 23.256 14.5817C23.0689 14.6842 22.9042 14.8231 22.7716 14.9903L17.4372 21.3903C17.1658 21.7162 17.0348 22.1366 17.0732 22.5591C17.1116 22.9815 17.3162 23.3714 17.642 23.6431Z"
        fill="#D0BDA6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.642 8.38501C17.3162 8.65666 17.1116 9.04657 17.0732 9.46901C17.0348 9.89146 17.1658 10.3119 17.4372 10.6378L22.7716 17.0378C22.9042 17.2049 23.0689 17.3439 23.256 17.4464C23.4431 17.5489 23.6488 17.613 23.861 17.6349C24.0733 17.6567 24.2877 17.636 24.4918 17.5737C24.6958 17.5115 24.8854 17.409 25.0493 17.2725C25.2132 17.1359 25.3481 16.9679 25.4461 16.7784C25.5442 16.5889 25.6033 16.3817 25.6201 16.169C25.6368 15.9563 25.6109 15.7425 25.5438 15.5399C25.4766 15.3374 25.3697 15.1504 25.2292 14.9898L19.8964 8.58981C19.7619 8.42826 19.5968 8.29481 19.4107 8.19708C19.2246 8.09935 19.021 8.03925 18.8117 8.02023C18.6023 8.00121 18.3912 8.02364 18.1905 8.08623C17.9898 8.14882 17.8035 8.25035 17.642 8.38501Z"
        fill="#D0BDA6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3984 16.0141C22.3984 15.5897 22.2299 15.1828 21.9298 14.8827C21.6297 14.5826 21.2228 14.4141 20.7984 14.4141H7.99844C7.57409 14.4141 7.16712 14.5826 6.86707 14.8827C6.56701 15.1828 6.39844 15.5897 6.39844 16.0141C6.39844 16.4384 6.56701 16.8454 6.86707 17.1454C7.16712 17.4455 7.57409 17.6141 7.99844 17.6141H20.7984C21.2228 17.6141 21.6297 17.4455 21.9298 17.1454C22.2299 16.8454 22.3984 16.4384 22.3984 16.0141Z"
        fill="#D0BDA6"
      />
    </>
  );
}

export default function BlogIndex({
  posts,
  cityName,
  /** Base URL for list pagination (`?page=`), e.g. `/blog` or `/blog/boca-raton` */
  basePath = "/blog",
  currentPage = 1,
  totalPages = 1,
}) {
  const showPagination = totalPages > 1;
  const paginationItems = showPagination
    ? getPaginationItems(currentPage, totalPages)
    : [];

  const pageButtonClass = (isActive) =>
    [
      "font-marlton trim flex min-h-[43px] min-w-[41px] shrink-0 flex-col items-center justify-center rounded-[11px] px-3 py-2 text-sm leading-5 transition-colors md:px-4",
      isActive
        ? "bg-[#2D2B2B] text-[#D9D9D9]!"
        : "bg-[#FDE4C8] text-[#313131] hover:bg-[#3d3a3a] hover:text-[#D9D9D9]!",
    ].join(" ");

  const navButtonClass =
    "estimate-button rounded-sm inline-flex w-fit min-w-0 items-center gap-2 px-4 py-2.5 disabled:opacity-100! disabled:cursor-not-allowed!";

  const pageButtonMobileClass = (isActive) =>
    [
      "font-marlton trim touch-manipulation flex min-h-[40px] min-w-[38px] shrink-0 snap-center flex-col items-center justify-center rounded-[10px] px-2.5 text-xs leading-none transition-colors",
      isActive
        ? "bg-[#2D2B2B] text-[#D9D9D9]!"
        : "bg-[#FDE4C8] text-[#313131] active:bg-[#e8d4b8]",
    ].join(" ");

  return (
    <WebsiteLayout>
      <div className="mt-14 flex flex-col bg-[#262424] px-[35px] py-[100px] md:mt-17 md:p-16 md:py-[70px]">
        <div className="mx-auto flex w-full max-w-[1311px] flex-col items-center gap-2">
          <h1
            className="trim text-center leading-[100%] text-[50px] text-[#FDE4C8] md:text-[96px]"
            style={{ textShadow: "4px 0px 0px #AF8F6E" }}
          >
            {cityName ? `${cityName} resources` : "Godly resources"}
          </h1>
          <div className="flex flex-col gap-0.5">
            <div className="h-[1px] w-[340px] bg-white md:w-[662px]" />
            <div className="h-[3px] w-[340px] bg-white md:w-[662px]" />
          </div>
          <p className="text-center font-['satoshi-light'] text-xs text-[#FFFFFF94] md:font-['satoshi-regular'] md:text-[24px]">
            Expert tips on keeping your{" "}
            {cityName ? `${cityName}` : "South Florida"} property spotless.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] bg-[#fdf6ed] md:pb-16">
        {posts.length === 0 && (
          <div className="mx-auto flex w-full max-w-[1311px] flex-col items-center gap-3 px-[30px] py-[80px] md:px-12">
            <span className="font-['marlton'] text-sm tracking-[2.5px] text-[#AF8F6E]">
              COMING SOON
            </span>
            <p className="text-center font-['satoshi-light'] text-[20px] text-[#6A6464]">
              No posts yet for this location — check back soon.
            </p>
          </div>
        )}
        {posts[0] && posts[0].image && (
          <>
            <div className="hidden pt-[40px] md:block md:px-12">
              <div className="mx-auto flex max-w-[1311px] flex-col items-start gap-8 border-black pb-6 md:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="mx-auto aspect-[4/3] max-w-[650px] overflow-hidden border-8 border-[#6A64641F] shadow-md">
                    <Link
                      href={blogPostHref(posts[0].slug)}
                      className="block aspect-[4/3] h-full w-full"
                    >
                      <Image
                        src={posts[0].image}
                        alt={posts[0].title}
                        width={650}
                        height={488}
                        className="aspect-[4/3] h-full w-full object-cover object-center"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-1 font-['satoshi-light'] text-lg text-gray-500">
                    {posts[0].publishedAt ? format(new Date(posts[0].publishedAt), "MMMM d, yyyy") : ""}
                  </p>
                  <h2 className="mb-4 text-[36px] font-semibold text-gray-800">
                    {posts[0].title}
                  </h2>
                  <p className="mb-4 line-clamp-[9] font-['satoshi-light'] text-[20px] leading-[31px] text-gray-800">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex w-full justify-end">
                    <Link
                      href={blogPostHref(posts[0].slug)}
                      className="text-[24px] text-[#003953]"
                    >
                      <div className="underline">READ MORE</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex max-w-[1311px] flex-col gap-0.5">
                <div className="h-[1px] w-full bg-black" />
                <div className="h-[3px] w-full bg-black" />
              </div>
            </div>
            <div className="flex flex-col gap-[24px] px-[30px] py-[52px] md:hidden">
              <div className="flex w-full flex-col gap-3">
                <h2 className="trim leading-[100%] text-[32px] font-semibold text-[#312E2C]">
                  {posts[0].title}
                </h2>
                <p className="font-['satoshi-light'] text-sm leading-[16px] text-[#373A44]">
                  {posts[0].publishedAt ? format(new Date(posts[0].publishedAt), "MMMM d, yyyy") : ""}
                </p>
                <Link
                  href={blogPostHref(posts[0].slug)}
                  className="mx-auto flex w-fit justify-center"
                >
                  <div className="aspect-[4/3] w-[334px] overflow-hidden border-[6px] border-[#6A64641F] shadow-md">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      width={334}
                      height={251}
                      className="aspect-[4/3] h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <p className="line-clamp-[8] font-['satoshi-light'] text-xl leading-[26px] text-[#312E2C]">
                  {posts[0].excerpt}
                </p>
              </div>
              <div>
                <div className="flex w-full justify-end">
                  <Link
                    href={blogPostHref(posts[0].slug)}
                    className="text-xl leading-[24px] text-[#003953]"
                  >
                    <div className="underline">READ MORE</div>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex max-w-[1311px] flex-col gap-0.5">
                <div className="h-[1px] w-full bg-black" />
                <div className="h-[3px] w-full bg-black" />
              </div>
            </div>
          </>
        )}
        {posts[0] && !posts[0].image && (
          <div className="mx-auto max-w-[1311px] px-[30px] py-[40px] md:px-12">
            <article className="flex flex-col gap-3 border-b border-[#6A64641F] pb-6">
              <Link
                href={blogPostHref(posts[0].slug)}
                className="flex flex-col gap-3"
              >
                <p className="font-['satoshi-light'] text-base text-[#373A44]">
                  {posts[0].publishedAt ? format(new Date(posts[0].publishedAt), "MMMM d, yyyy") : ""}
                </p>
                <h3 className="text-2xl leading-snug font-bold text-[#312E2C] underline decoration-[#312E2C] transition-colors hover:text-[#AF8F6E] hover:decoration-[#AF8F6E] md:text-4xl">
                  {posts[0].title}
                </h3>
                <span className="font-['satoshi-medium'] text-sm text-[#AF8F6E] underline">
                  Read more →
                </span>
              </Link>
            </article>
          </div>
        )}
        {posts.slice(1).filter((p) => p.image).length > 0 && (
          <div className="flex flex-col gap-[40px] px-[30px] py-[30px] md:px-12 md:pt-[36px] md:pb-12">
            <h2 className="trim mx-auto w-full max-w-[1311px] text-[36px] font-bold text-gray-800">
              LATEST NEWS
            </h2>
            <div className="mx-auto grid max-w-[1311px] grid-cols-1 gap-[23px] sm:grid-cols-2 md:grid-cols-3">
              {posts
                .slice(1)
                .filter((p) => p.image)
                .map((post) => (
                  <div key={post.slug} className="flex flex-col gap-3">
                    <Link
                      href={blogPostHref(post.slug)}
                      className="flex flex-col gap-3"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={375}
                          className="aspect-[4/3] h-full w-full object-cover object-center"
                        />
                      </div>
                      <p className="font-['satoshi-light'] text-base text-[#373A44] md:mt-2 md:text-[24px]">
                        {post.publishedAt ? format(new Date(post.publishedAt), "MMMM d, yyyy") : ""}
                      </p>
                      <p
                        className="text-xl leading-snug font-bold text-[#373A44] md:mt-1 md:text-[28px]"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.title}
                      </p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        )}

        {showPagination && (
          <>
            {/* Mobile: summary + scrollable page numbers (no prev/next row) */}
            <nav
              className="mx-auto flex w-full max-w-[1311px] flex-col gap-3 px-[30px] pb-2 md:hidden"
              aria-label="Blog pagination"
            >
              <div className="relative -mx-2">
                <div
                  className="flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-2 pb-2 [scrollbar-width:thin]"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div className="mx-auto flex w-max justify-center gap-2 py-1">
                    {paginationItems.map((item, i) =>
                      item === null ? (
                        <span
                          key={`m-ellipsis-${i}`}
                          className="font-marlton flex shrink-0 snap-center items-center px-1 text-[#313131]"
                          aria-hidden
                        >
                          …
                        </span>
                      ) : (
                        <Link
                          key={`m-${item}`}
                          href={buildBlogPageHref(basePath, item)}
                          className={pageButtonMobileClass(
                            item === currentPage,
                          )}
                          aria-label={`Page ${item}`}
                          aria-current={
                            item === currentPage ? "page" : undefined
                          }
                        >
                          {item}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop / tablet: three-column layout */}
            <nav
              className="mx-auto mb-12 hidden w-full max-w-[1400px] grid-cols-3 items-center gap-2 px-[30px] md:mb-0 md:grid md:px-12"
              aria-label="Blog pagination"
            >
              <div className="flex justify-start">
                {currentPage > 1 ? (
                  <Link
                    href={buildBlogPageHref(basePath, currentPage - 1)}
                    className={navButtonClass}
                    aria-label="Previous page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      className="shrink-0 rotate-180"
                      aria-hidden
                    >
                      <PaginationChevrons />
                    </svg>
                    <span>Back</span>
                  </Link>
                ) : (
                  <span className={`${navButtonClass} cursor-not-allowed`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      className="shrink-0 rotate-180"
                      aria-hidden
                    >
                      <PaginationChevrons />
                    </svg>
                    <span>Back</span>
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-[7px]">
                <p className="sr-only">
                  Page {currentPage} of {totalPages}
                </p>
                {paginationItems.map((item, i) =>
                  item === null ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="font-marlton trim px-1 text-[#313131]"
                      aria-hidden
                    >
                      …
                    </span>
                  ) : (
                    <Link
                      key={item}
                      href={buildBlogPageHref(basePath, item)}
                      className={pageButtonClass(item === currentPage)}
                      aria-label={`Page ${item}`}
                      aria-current={item === currentPage ? "page" : undefined}
                    >
                      {item}
                    </Link>
                  ),
                )}
              </div>

              <div className="flex justify-end">
                {currentPage < totalPages ? (
                  <Link
                    href={buildBlogPageHref(basePath, currentPage + 1)}
                    className={navButtonClass}
                    aria-label="Next page"
                  >
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      className="shrink-0"
                      aria-hidden
                    >
                      <PaginationChevrons />
                    </svg>
                  </Link>
                ) : (
                  <span className={`${navButtonClass} cursor-not-allowed`}>
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      className="shrink-0"
                      aria-hidden
                    >
                      <PaginationChevrons />
                    </svg>
                  </span>
                )}
              </div>
            </nav>
          </>
        )}

        {showPagination && (
          <div className="mx-auto hidden w-full max-w-[1400px] space-y-0.25 px-[30px] md:block md:px-12">
            <div className="h-[1px] w-full bg-[#1c1c1c]" />
            <div className="h-[3px] w-full bg-[#1c1c1c]" />
          </div>
        )}
      </div>
    </WebsiteLayout>
  );
}
