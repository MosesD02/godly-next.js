"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import WebsiteLayout from "../websiteLayout";
import { format } from "date-fns";

export default function BlogIndex({ posts, cityName, basePath = "/blog" }) {
  return (
    <WebsiteLayout>
      <div className="mt-17 flex flex-col bg-[#262424] px-[35px] py-[100px] md:mt-17 md:p-16 md:py-[70px]">
        <div className="mx-auto flex w-full max-w-[1311px] flex-col items-center gap-2">
          <h1
            className="trim text-center text-[50px] text-[#FDE4C8] md:text-[96px]"
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
                      href={`${basePath}/${posts[0].slug}`}
                      className="block h-full w-full"
                    >
                      <Image
                        src={posts[0].image}
                        alt={posts[0].title}
                        width={650}
                        height={488}
                        className="h-full w-full object-cover object-center"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-1 font-['satoshi-light'] text-lg text-gray-500">
                    {format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
                  </p>
                  <h2 className="mb-4 text-[36px] font-semibold text-gray-800">
                    {posts[0].title}
                  </h2>
                  <p className="mb-4 line-clamp-[9] font-['satoshi-light'] text-[20px] leading-[31px] text-gray-800">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex w-full justify-end">
                    <Link
                      href={`${basePath}/${posts[0].slug}`}
                      className="text-[24px] text-[#003953]"
                    >
                      <div className="underline">READ MORE</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="h-[1px] w-full bg-black" />
                <div className="h-[3px] w-full bg-black" />
              </div>
            </div>
            <div className="flex flex-col gap-[24px] px-[30px] py-[52px] md:hidden">
              <div className="flex w-full flex-col gap-3">
                <h2 className="trim text-[32px] font-semibold text-[#312E2C]">
                  {posts[0].title}
                </h2>
                <p className="font-['satoshi-light'] text-sm leading-[16px] text-[#373A44]">
                  {format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
                </p>
                <Link
                  href={`${basePath}/${posts[0].slug}`}
                  className="mx-auto flex w-fit justify-center"
                >
                  <div className="aspect-[4/3] w-[334px] overflow-hidden border-[6px] border-[#6A64641F] shadow-md">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      width={334}
                      height={251}
                      className="h-full w-full object-cover object-center"
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
                <div className="w/full flex justify-end">
                  <Link
                    href={`${basePath}/${posts[0].slug}`}
                    className="text-xl leading-[24px] text-[#003953]"
                  >
                    <div className="underline">READ MORE</div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
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
                href={`${basePath}/${posts[0].slug}`}
                className="flex flex-col gap-3"
              >
                <p className="font-['satoshi-light'] text-base text-[#373A44]">
                  {format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
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
                      href={`${basePath}/${post.slug}`}
                      className="flex flex-col gap-3"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={375}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <p className="font-['satoshi-light'] text-base text-[#373A44] md:mt-2 md:text-[24px]">
                        {format(new Date(post.publishedAt), "MMMM d, yyyy")}
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
      </div>
    </WebsiteLayout>
  );
}
