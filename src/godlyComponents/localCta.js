"use client";
import React from "react";
import { cn } from "@/lib/utils";
import SectionButton from "@/components/sectionButton";

const LocalCta = ({ text }) => {
  if (!text) return null;

  return (
    <div
      className={cn(
        "paper-bg-16 flex flex-col items-center gap-8 bg-[#ebded1] bg-cover bg-center bg-no-repeat px-6 py-12",
      )}
    >
      <p className="max-w-2xl text-center font-['satoshi-regular'] text-base leading-7 text-[#2D2B2B] md:text-lg md:leading-8">
        {text}
      </p>
      <SectionButton>Get a Free Estimate</SectionButton>
    </div>
  );
};

export default LocalCta;
