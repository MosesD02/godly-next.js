"use client";

import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import WebsiteLayout from "../websiteLayout";
import BlogPostContent from "./BlogPostContent";
import BlogPostFaq from "./BlogPostFaq";
import BlogPostCta from "./BlogPostCta";

export default function BlogPostPage({ post }) {
  return (
    <WebsiteLayout>
      <article className="mt-17 flex w-full flex-col bg-[#fef7ea] px-[30px] py-[45px] text-[#312E2C] md:mt-14 md:px-16 md:py-16">
        <div className="mx-auto flex w-full max-w-[800px] flex-col">
          <nav className="mb-6">
            <Link
              href="/blog"
              className="font-['satoshi-light'] text-sm text-[#AF8F6E] underline"
            >
              ← Back to Blog
            </Link>
          </nav>

          <header className="mb-8 border-b-4 border-double border-black pb-8">
            <p className="mb-2 font-['satoshi-light'] text-sm text-[#373A44]">
              {format(new Date(post.publishedAt), "MMMM d, yyyy")} · {post.targetCity}
            </p>
            <h1 className="trim text-[32px] font-bold leading-tight text-[#312E2C] md:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <BlogPostContent sections={post.sections} />
          </div>

          <BlogPostCta
            ctaText={post.ctaText}
            ctaLink={post.ctaLink}
            ctaQuoteLink={post.ctaQuoteLink}
          />

          <BlogPostFaq faq={post.faq} />
        </div>
      </article>
    </WebsiteLayout>
  );
}
