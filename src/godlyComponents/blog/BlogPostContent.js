import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

const linkClassName =
  "font-['satoshi-medium'] text-[#AF8F6E] !underline decoration-[#AF8F6E] decoration-solid underline-offset-2 transition-colors hover:text-[#8B6F4E]";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(800).height(600).url();
      const alt = value.alt || "";
      return (
        <figure className="my-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center font-['satoshi-light'] text-sm text-[#6A6464]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      if (!href) return <span>{children}</span>;
      const isGodlyWindows = href.startsWith("https://godlywindows.com");
      if (isGodlyWindows) {
        const path = href.replace("https://godlywindows.com", "") || "/";
        return (
          <Link href={path} className={linkClassName}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="trim mt-8 text-2xl font-bold text-[#312E2C] md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="trim mt-6 text-xl font-bold text-[#312E2C] md:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
        {children}
      </p>
    ),
  },
};

export default function BlogPostContent({ body }) {
  if (!body || !Array.isArray(body) || body.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <PortableText value={body} components={components} />
    </div>
  );
}
