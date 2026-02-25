"use client";

import React from "react";
import Link from "next/link";
import { useGodlyContext } from "@/context/godlyContext";

export default function BlogPostCta({ ctaText, ctaLink }) {
  const { setFormPopupOpen } = useGodlyContext();

  return (
    <div className="mt-12 border-t-2 border-[#312E2C]/10 pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => setFormPopupOpen(true)}
          className="w-full rounded-md bg-[#312E2C] px-6 py-3 font-['satoshi-bold'] text-sm text-white transition-colors hover:bg-[#4a4442] sm:w-auto"
        >
          {ctaText}
        </button>
        <Link
          href={ctaLink}
          className="w-full rounded-md border border-[#312E2C]/20 px-6 py-3 text-center font-['satoshi-regular'] text-sm text-[#312E2C] transition-colors hover:border-[#312E2C]/50 sm:w-auto"
        >
          Learn more about our services
        </Link>
      </div>
    </div>
  );
}
