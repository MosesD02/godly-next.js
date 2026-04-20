"use client";

import React, { useState } from "react";
import Services from "@/data/servicesData";
import { cn } from "@/lib/utils";
import { generateServiceSectionHeadings } from "@/data/metaTitles";

// cityName is passed as a prop from the server so headings are correct in the
// initial SSR HTML. useState/onClick interactivity is still client-only.
const EssentialService = ({ slug, essentialOverride, cityName }) => {
  const headings = generateServiceSectionHeadings(slug, cityName);

  // Add state to track active card
  const [activeCard, setActiveCard] = useState(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  const isRainShieldHub = slug === "rain-shield";

  return (
    <div className="paper-bg-16 flex flex-col items-center gap-16 bg-[#262424] px-4 py-16 pt-24 sm:gap-18 sm:px-5 sm:py-20 md:gap-20 md:px-6 md:py-24 lg:gap-24 lg:px-8 lg:py-28 xl:gap-28 xl:px-10 xl:py-32">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center gap-1 md:gap-5">
        <h2 className="sr-only">{headings.h2WhyEssential}</h2>
        {isRainShieldHub ? (
          <>
            <span
              className="text-grain trim bg-[#FFFFFF]! text-center text-base tracking-[1.35px] sm:text-lg sm:tracking-[1.5px] md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:text-3xl xl:tracking-widest"
              data-text="WHY"
            >
              WHY
            </span>
            <span
              className="text-grain trim bg-[#F3CA9E]! text-center text-[32px] tracking-wide sm:text-[40px] md:text-7xl lg:text-[80px] xl:text-[90px]"
              data-text="RAIN SHIELD"
            >
              {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
            </span>
            <span
              className="trim relative z-10 text-center font-['luminaire-script'] text-xl text-white sm:text-2xl md:-mt-5 md:text-6xl lg:text-[72px] xl:text-[80px]"
              style={{
                WebkitTextStrokeWidth: "5px",
                strokeLinecap: "round",
                WebkitTextStrokeColor: "#1F1D1D",
                paintOrder: "stroke",
              }}
            >
              Matters
            </span>
          </>
        ) : (
          <>
            <span
              className="text-grain trim bg-[#FFFFFF]! text-center text-base tracking-[1.35px] sm:text-lg sm:tracking-[1.5px] md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:text-3xl xl:tracking-widest"
              data-text="WHY KEEPING YOUR"
            >
              WHY KEEPING YOUR
            </span>
            <span
              className="text-grain trim bg-[#F3CA9E]! text-center text-[32px] tracking-wide sm:text-[40px] md:text-7xl lg:text-[80px] xl:text-[90px]"
              data-text={
                Services[slug]["hero"][0] + " " + Services[slug]["hero"][1]
              }
            >
              {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
            </span>
            <span
              className="trim relative z-10 text-center font-['luminaire-script'] text-xl text-white sm:text-2xl md:-mt-5 md:text-6xl lg:text-[72px] xl:text-[80px]"
              style={{
                WebkitTextStrokeWidth: "5px",
                strokeLinecap: "round",
                WebkitTextStrokeColor: "#1F1D1D",
                paintOrder: "stroke",
              }}
            >
              Is Essential?
            </span>
          </>
        )}
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8">
        {(essentialOverride ?? Services[slug]["essential"]).map(
          (point, index) => {
            const items = essentialOverride ?? Services[slug]["essential"];
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                className={cn(
                  "paper-bg-8 min-h-52.25 rounded-[18px] p-2 shadow-md sm:min-h-55 md:max-h-full md:min-h-60 md:w-100 xl:min-h-65 xl:min-w-130.5",
                  isActive ? "bg-[#E9E5E4]" : "bg-[#CBB7A0]",
                  "hover:bg-[#E9E5E4]",
                  index === items.length - 1 &&
                    items.length % 2 === 1 &&
                    "col-span-2 mx-auto max-w-1/2",
                )}
                onClick={() => toggleCard(index)}
              >
                <div className="flex h-full grow flex-col gap-4 rounded-[12px] border-[1.7px] border-solid border-[#2D2B2B] p-3  sm:p-4  md:p-5  lg:p-6  xl:p-7 ">
                  <div
                    className={cn(
                      "stroke! trim stroke-[#2D2B2B33] stroke-1! text-[40px] font-bold sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]",
                      isActive ? "text-[#312E2C30]" : "text-[#312E2C30]",
                      "hover:text-[#312E2C30]!",
                    )}
                  >
                    {point.number}
                  </div>
                  <h2 className="trim font-['satoshi-bold'] text-sm text-[#2D2B2B] sm:text-base md:mt-2 md:text-[24px] lg:text-[28px] xl:text-[32px]">
                    {point.title}
                  </h2>
                  <p className="trim font-[satoshi-medium] text-sm text-[#2D2B2B] sm:text-base md:mt-1 md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default EssentialService;
