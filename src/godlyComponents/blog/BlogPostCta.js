"use client";

import React from "react";
import Link from "next/link";
import { useGodlyContext } from "@/context/godlyContext";

export default function BlogPostCta({ ctaText, ctaLink }) {
  const { setFormPopupOpen } = useGodlyContext();

  return (
    <div className="mt-12 rounded-lg border-2 border-[#AF8F6E] bg-[#fef7ea] p-8 md:p-10">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => setFormPopupOpen(true)}
          className="inline-flex items-center justify-center rounded-md bg-[#AF8F6E] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-white transition-colors hover:bg-[#8B6F4E]"
        >
          {ctaText}
        </button>
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center rounded-md border-2 border-[#AF8F6E] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-[#312E2C] transition-colors hover:bg-[#AF8F6E] hover:text-white"
        >
          Learn More About Our Services
        </Link>
      </div>
    </div>
  );
}
