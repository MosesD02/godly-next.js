import React from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { format } from "date-fns";
import { getCanonicalBlogSlug } from "@/lib/blog-slugs";

export default function RelatedBlogPosts({ posts, city, citySlug }) {
  if (!posts || posts.length === 0) return null;

  const displayedPosts = posts.slice(0, 2);
  const listCitySlug =
    city ?? citySlug ?? displayedPosts.find((p) => p.citySlug)?.citySlug;
  const blogHref = listCitySlug ? `/blog/${listCitySlug}` : "/blog";

  return (
    <section className="bg-[#fdf6ed] px-7.5 py-15 md:px-12 md:py-20">
      <div className="mx-auto max-w-275">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['marlton'] text-sm tracking-[2.5px] text-[#AF8F6E]">
              HELPFUL READING
            </span>
            <h2 className="trim text-[40px] leading-none text-[#312E2C] md:text-[56px]">
              From Our Blog
            </h2>
          </div>
          <Link
            href={blogHref}
            className="hidden shrink-0 font-['satoshi-regular'] text-sm text-[#003953] underline underline-offset-2 hover:text-[#AF8F6E] md:block"
          >
            View all articles →
          </Link>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 ${displayedPosts.length > 1 ? "md:grid-cols-2" : "md:max-w-[600px]"}`}
        >
          {displayedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${getCanonicalBlogSlug(post.slug)}`}
              className="group flex flex-col gap-3"
            >
              {post.image && (
                <div className="overflow-hidden border-[6px] border-[#6A64641F] shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={450}
                    className="aspect-4/3 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    placeholder={post.imageBlurDataURL ? "blur" : undefined}
                    blurDataURL={post.imageBlurDataURL}
                  />
                </div>
              )}
              <p className="font-['satoshi-light'] text-sm text-[#6A6464]">
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </p>
              <h3 className="text-xl/snug font-bold text-[#312E2C] transition-colors group-hover:text-[#AF8F6E]">
                {post.title}
              </h3>
              <p className="line-clamp-3 font-['satoshi-light'] text-sm/relaxed text-[#6A6464]">
                {post.excerpt}
              </p>
              <span className="font-['satoshi-regular'] text-sm text-[#003953] group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href={blogHref}
          className="mt-10 flex items-center justify-center font-['satoshi-regular'] text-sm text-[#003953] underline underline-offset-2 hover:text-[#AF8F6E] md:hidden"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
