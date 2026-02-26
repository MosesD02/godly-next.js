"use client";

import React from "react";
import Link from "next/link";
import { useGodlyContext } from "@/context/godlyContext";
import QuoteButton from "@/components/quoteButton";
import { Button } from "@/components/ui/button";

export default function BlogPostCta({ ctaText, ctaLink }) {
  const { setFormPopupOpen } = useGodlyContext();

  return (
    <div className="my-12 border-t-2 border-[#312E2C]/10 pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <QuoteButton
          onClick={() => setFormPopupOpen(true)}
          className="quote-button h-11"
        >
          {ctaText}
        </QuoteButton>
        <Button className="estimate-button h-14! md:h-18!" asChild>
          <Link href={ctaLink}>
            <span className="text-[18px]! md:text-2xl!">
              Learn more about our services
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
