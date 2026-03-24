"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import WebsiteLayout from "../websiteLayout";
import BlogPostContent from "./BlogPostContent";
import BlogPostFaq from "./BlogPostFaq";
import BlogPostCta from "./BlogPostCta";
import { citiesMap } from "@/data/cities";
import { useGodlyContext } from "@/context/godlyContext";

export default function BlogPostPage({ post, basePath = "/blog" }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (post.citySlug && citiesMap[post.citySlug]) {
      setCity(citiesMap[post.citySlug]);
      document.cookie = `selectedCity=${post.citySlug};path=/;max-age=31536000`;
      return;
    }
    const match = Object.entries(citiesMap).find(
      ([, label]) =>
        label.toUpperCase() === (post.targetCity || "").toUpperCase().trim(),
    );
    if (match) {
      setCity(match[1]);
      document.cookie = `selectedCity=${match[0]};path=/;max-age=31536000`;
    }
  }, [post.citySlug, post.targetCity, post.slug, setCity]);

  return (
    <WebsiteLayout>
      <article className="mt-17 flex w-full flex-col bg-[#fef7ea] px-[30px] py-[45px] text-[#312E2C] md:mt-14 md:px-16 md:py-16">
        <div className="mx-auto flex w-full max-w-[800px] flex-col">
          <nav className="mb-6">
            <Link
              href={basePath}
              className="font-['satoshi-light'] text-sm text-[#AF8F6E] underline"
            >
              ← Back to Blog
            </Link>
          </nav>

          <header className="mb-8 border-b-4 border-double border-black pb-8">
            <p className="mb-2 font-['satoshi-light'] text-sm text-[#373A44]">
              {format(new Date(post.publishedAt), "MMMM d, yyyy")} ·{" "}
              {post.targetCity}
            </p>
            <h1 className="trim text-[32px] leading-tight font-bold text-[#312E2C] md:text-5xl">
              {post.title}
            </h1>
          </header>

          {post.image && (
            <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <BlogPostContent body={post.body} />
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
