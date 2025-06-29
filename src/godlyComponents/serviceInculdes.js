import React, { useState } from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.webp";
import Services from "@/data/servicesData";
import { cn } from "@/lib/utils";
import { generateServiceSectionHeadings } from "@/data/metaTitles";
import { citiesMap } from "@/data/cities";
import { useGodlyContext } from "@/context/godlyContext";

const ServiceIncludes = ({ slug }) => {
  const { city } = useGodlyContext();
  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);
  const cityName = citiesMap[cityKey];
  const headings = generateServiceSectionHeadings(slug, cityName);

  // Add state to track active card
  const [activeCard, setActiveCard] = useState(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="promise"
      className="flex flex-col items-center justify-items-center gap-[55px] bg-[#FDE4C8] bg-cover bg-center bg-no-repeat px-[30px] py-[100px] bg-blend-multiply md:gap-16 md:px-[24px] md:py-[100px]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="md:w-full md:max-w-[854px] md:py-10">
        <h2 className="sr-only">{headings.h2WhatIncluded}</h2>
        <div className="trim m-0 w-full p-0 text-center text-[36px] leading-tight font-normal tracking-wide text-[#191717] before:inset-0 md:text-[64px] md:leading-tight">
          <span className="text-grain !bg-[#191717]" data-text="WHAT'S">
            WHAT&apos;S
          </span>{" "}
          <span className="text-grain !bg-[#AB8459]" data-text="INCLUDED">
            INCLUDED
          </span>{" "}
          <span className="text-grain !bg-[#191717]" data-text="IN OUR">
            IN OUR
          </span>{" "}
          <span
            className="text-grain hidden !bg-[#191717] md:inline-block"
            data-text={`${Services[slug]["hero"][0]} CLEANING`}
          >
            {Services[slug]["hero"][0]} CLEANING
          </span>{" "}
          <span className="text-grain !bg-[#191717]" data-text="SERVICE">
            SERVICE
          </span>
        </div>
      </div>

      <div className="grid w-full max-w-[1126px] grid-cols-2 flex-wrap justify-center gap-3 md:flex md:flex-wrap lg:pb-12">
        {Services[slug]["included"].map((step, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={cn(
                `paper-bg-16 group min-h-[250px] w-full rounded-sm bg-[#312E2C] bg-size-[auto_10rem] bg-top-right p-2 sm:min-h-[270px] sm:p-3 md:min-h-[290px] md:max-w-[272px]`,
                isActive ? "bg-[transparent]" : "",
                "hover:bg-[transparent]",
                Services[slug]["included"].length === 5 && "md:max-w-[367px]",
                index === Services[slug]["included"].length - 1 &&
                  Services[slug]["included"].length % 2 === 1 &&
                  "last:col-span-2",
              )}
              onClick={() => toggleCard(index)}
            >
              <div
                className={cn(
                  "relative z-10 flex h-full w-full flex-col items-center justify-between rounded-md border-[#564839] p-3 text-white md:p-6",
                  isActive
                    ? "border border-dashed border-[#6A6464] text-[#2D2B2B]"
                    : "",
                  "group-hover:border group-hover:border-dashed group-hover:border-[#6A6464] group-hover:text-[#2D2B2B]",
                )}
              >
                <div className="flex flex-col items-center justify-center gap-[32px]">
                  <h5 className="text-center text-base font-normal">
                    <span className="trim">{step.number}</span>
                  </h5>

                  <p
                    className={cn(
                      "trim text-grain text-center text-base before:uppercase md:text-2xl",
                      isActive ? "!bg-[#2D2B2B]" : "!bg-white",
                      "group-hover:!bg-[#2D2B2B]",
                    )}
                  >
                    {step.title}
                  </p>
                </div>

                <p className="trim text-center text-xs md:text-base">
                  {step.text}
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
