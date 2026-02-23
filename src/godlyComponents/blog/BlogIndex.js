"use client";

import React from "react";
import Link from "next/link";
import WebsiteLayout from "../websiteLayout";
import { format } from "date-fns";

export default function BlogIndex({ posts }) {
  return (
    <WebsiteLayout>
      <div className="mt-17 flex flex-col bg-[#262424] px-[35px] py-[100px] md:mt-17 md:p-16 md:py-[70px]">
        <div className="mx-auto flex w-full max-w-[1311px] flex-col items-center gap-2">
          <h1
            className="trim text-center text-[50px] text-[#FDE4C8] md:text-[96px]"
            style={{ textShadow: "4px 0px 0px #AF8F6E" }}
          >
            Godly resources
          </h1>
          <div className="flex flex-col gap-0.5">
            <div className="h-[1px] w-[340px] bg-white md:w-[662px]" />
            <div className="h-[3px] w-[340px] bg-white md:w-[662px]" />
          </div>
          <p className="text-center font-['satoshi-light'] text-xs text-[#FFFFFF94] md:font-['satoshi-regular'] md:text-[24px]">
            actionable ideas to help you make informed and smart choices.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] bg-[#fdf6ed] px-[30px] py-[40px] md:px-12 md:pb-16">
        <h2 className="trim mx-auto w-full max-w-[1311px] text-[36px] font-bold text-gray-800 md:pt-[36px]">
          Latest Posts
        </h2>
        <div className="mx-auto grid max-w-[1311px] grid-cols-1 gap-[32px] sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col gap-3 border-b border-[#6A64641F] pb-6 transition-opacity hover:opacity-90"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col gap-3">
                <p className="font-['satoshi-light'] text-sm text-[#373A44]">
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </p>
                <h3 className="text-xl font-bold leading-snug text-[#312E2C] underline decoration-[#312E2C] transition-colors hover:text-[#AF8F6E] hover:decoration-[#AF8F6E] md:text-lg">
                  {post.title}
                </h3>
                <p className="line-clamp-3 font-['satoshi-light'] text-base leading-relaxed text-[#373A44]">
                  {post.excerpt}
                </p>
                <span className="font-['satoshi-medium'] text-sm text-[#AF8F6E] underline">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </WebsiteLayout>
  );
}
