"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.webp";
import Services from "@/data/servicesData";
import { citiesMap } from "@/data/cities";
import { cn } from "@/lib/utils";
import { generateServiceSectionHeadings } from "@/data/metaTitles";
import { MoveUpRight } from "lucide-react";

const RAIN_SHIELD_LINK_PHRASES = [
  "Learn how Rain Shield works",
  "See how Rain Shield protects your windows",
  "How Rain Shield keeps glass cleaner longer",
  "More about Rain Shield technology",
];

function rainShieldLinkLabelForCity(citySlug) {
  const order = Object.keys(citiesMap)
    .filter((c) => c !== "south-florida")
    .sort();
  const i = citySlug ? order.indexOf(citySlug) : -1;
  const idx = i >= 0 ? i % RAIN_SHIELD_LINK_PHRASES.length : 0;
  return RAIN_SHIELD_LINK_PHRASES[idx];
}

const ServiceIncludes = ({ slug, cityName, citySlug, includedOverride }) => {
  const headings = generateServiceSectionHeadings(slug, cityName);
  const steps =
    includedOverride?.length > 0
      ? includedOverride
      : Services[slug]["included"];

  // Add state to track active card
  const [activeCard, setActiveCard] = useState(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="promise"
      className="flex flex-col items-center justify-items-center gap-13.75 bg-[#FDE4C8] bg-cover bg-center bg-no-repeat px-7.5 py-25 bg-blend-multiply md:gap-16 md:px-6 md:py-25"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="md:w-full md:max-w-213.5 md:py-10">
        <h2 className="sr-only">{headings.h2WhatIncluded}</h2>
        <div className="trim m-0 w-full p-0 text-center text-[36px] leading-tight font-normal tracking-wide text-[#191717] before:inset-0 md:text-[64px] md:leading-tight">
          <span className="text-grain bg-[#191717]!" data-text="WHAT'S">
            WHAT&apos;S
          </span>{" "}
          <span className="text-grain bg-[#AB8459]!" data-text="INCLUDED">
            INCLUDED
          </span>{" "}
          <span className="text-grain bg-[#191717]!" data-text="IN OUR">
            IN OUR
          </span>{" "}
          <span
            className="text-grain hidden bg-[#191717]! md:inline-block"
            data-text={`${Services[slug]["hero"][0]} ${Services[slug]["hero"][1]}`}
          >
            {Services[slug]["hero"][0]} {Services[slug]["hero"][1]}
          </span>{" "}
          <span className="text-grain bg-[#191717]!" data-text="SERVICE">
            SERVICE
          </span>
        </div>
      </div>

      <div className="grid w-full max-w-281.5 grid-cols-2 flex-wrap justify-center gap-3 md:flex md:flex-wrap lg:pb-12">
        {steps.map((step, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={cn(
                `paper-bg-16 group min-h-62.5 w-full rounded-sm bg-[#312E2C] bg-size-[auto_10rem] bg-top-right p-2 sm:min-h-67.5 sm:p-3 md:min-h-72.5 md:max-w-68`,
                isActive ? "bg-transparent" : "",
                "hover:bg-transparent",
                steps.length === 5 && "md:max-w-91.75",
                index === steps.length - 1 &&
                  steps.length % 2 === 1 &&
                  "last:col-span-2",
              )}
              onClick={() => toggleCard(index)}
            >
              <div
                className={cn(
                  "relative z-10 flex size-full flex-col items-center justify-between rounded-md border-[#564839] p-3 text-white md:p-6",
                  isActive
                    ? "border border-dashed border-[#6A6464] text-[#2D2B2B]"
                    : "",
                  "group-hover:border group-hover:border-dashed group-hover:border-[#6A6464] group-hover:text-[#2D2B2B]",
                )}
              >
                <div className="flex flex-col items-center justify-center gap-8">
                  <div className="text-center text-base font-normal">
                    <span className="trim">{step.number}</span>
                  </div>

                  <p
                    className={cn(
                      "trim text-grain text-center text-base before:uppercase md:text-2xl",
                      isActive ? "bg-[#2D2B2B]!" : "bg-white!",
                      "group-hover:bg-[#2D2B2B]!",
                    )}
                  >
                    {step.title}
                  </p>
                </div>

                <p className="trim text-center text-xs md:text-base">
                  {slug === "window-cleaning" &&
                  step.title === "Rain Shield Technology" ? (
                    <>
                      {step.text}{" "}
                      <Link
                        href="/rain-shield"
                        className="flex items-center justify-center gap-2 font-medium text-[#FDE4C8]! underline underline-offset-2 group-hover:text-[#61503e]! hover:text-white"
                      >
                        {rainShieldLinkLabelForCity(citySlug)}{" "}
                        <MoveUpRight size={12} />
                      </Link>
                    </>
                  ) : (
                    step.text
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceIncludes;
