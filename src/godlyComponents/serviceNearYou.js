"use client";

import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
// import near1 from "@/assets/near1.webp";
// import near2 from "@/assets/near2.webp";
import near3 from "@/assets/near3.webp";
import near4 from "@/assets/near4.webp";
import near5 from "@/assets/near5.webp";
import Services from "@/data/servicesData";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { generateServiceSectionHeadings } from "@/data/metaTitles";
import { citiesMap } from "@/data/cities";

const taglines = {
  "solar-panel-cleaning": {
    before: "Maximize energy",
    highlight: "Efficiency",
    after: "with our professional solar panel cleaning services.",
  },
  "pressure-washing": {
    lines: [
      "WE ARE THE ONLY PRESSURE AND SOFT WASHING COMPANY IN",
      "SOUTH FLORIDA THAT PROUDLY OFFER A MONEY BACK",
      "GUARANTEE ON ALL POWER WASHING SERVICES.",
    ],
  },
  "paver-sealing": {
    lines: [
      "WE ARE THE ONLY PAVER SEALING COMPANY IN",
      "SOUTH FLORIDA THAT PROUDLY OFFERS A 2 YEAR UNCONDITIONAL WARRANTY",
      "ON ALL SURFACE RESTORATION SERVICES.",
    ],
  },
  "light-fixture-cleaning": {
    lines: [
      "WE ARE THE ONLY LIGHT FIXTURE COMPANY IN",
      "SOUTH FLORIDA THAT PROUDLY OFFERS A MONEY BACK",
      "GUARANTEE ON ALL LIGHT FIXTURE CLEANING SERVICES.",
    ],
  },
};

const ServiceNearYou = ({ slug, nearYouOverride }) => {
  const { city } = useGodlyContext();
  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);
  const cityName = citiesMap[cityKey];
  const headings = generateServiceSectionHeadings(slug, cityName);
  const nearYouItems = nearYouOverride ?? Services[slug]["nearyou"];

  // const steps1 = [
  //   {
  //     number: "01",
  //     icon: (
  //       <Image
  //         src={near1}
  //         height={40}
  //         width={40}
  //         alt="scrub"
  //         className="fourstepicon"
  //       />
  //     ),
  //     title: "Scrub",
  //     text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  //   },
  //   {
  //     number: "02",
  //     icon: (
  //       <Image
  //         src={near2}
  //         height={40}
  //         width={40}
  //         alt="squeegee"
  //         className="fourstepicon"
  //       />
  //     ),
  //     title: "Squeegee",
  //     text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  //   },
  // ];
  const steps2 = [
    {
      number: "03",
      icon: (
        <Image
          src={near3}
          height={40}
          width={40}
          alt="detail"
          className="fourstepicon"
        />
      ),
      title: "Detail",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "04",
      icon: (
        <Image
          src={near4}
          height={40}
          width={40}
          alt="shield"
          className="fourstepicon"
        />
      ),
      title: "RainShield Tech",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "04",
      icon: (
        <Image
          src={near5}
          height={40}
          width={40}
          alt="shield"
          className="fourstepicon"
        />
      ),
      title: "RainShield Tech",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
  ];
  return (
    <div className="fourstepprocess paper-bg-16 bg-[#262424] pb-24! md:pb-0">
      <div className="fourstepprocess-inner">
        <div className="w-full text-center">
          <h2 className="sr-only">{headings.h2ServicesNearYou}</h2>
          <div
            className="text-grain mx-auto !bg-[#FDE4C8] text-center text-[32px] md:text-6xl"
            data-text={
              Services[slug]["hero"][0] + " " + Services[slug]["hero"][1]
            }
          >
            {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
          </div>
          <div
            className="z-10 flex items-center justify-center gap-1.5 text-center font-['luminaire-script'] text-[20px] text-white md:-mt-10 md:items-end md:gap-5 md:text-[64px]"
            style={{
              WebkitTextStrokeWidth: "5px",
              strokeLinecap: "round",
              WebkitTextStrokeColor: "#1F1D1D",
              paintOrder: "stroke",
            }}
          >
            Near You
            <span className="mt-1.5 inline-flex text-left font-['marlton'] text-[8px] tracking-[1px] text-[#FDE4C8] md:mb-2 md:max-w-[94px] md:text-base md:tracking-[2px]">
              {city}
            </span>
          </div>
        </div>

        <div className="pt-20 pb-6 text-white md:hidden md:pb-16">
          <div className="relative z-10 grid grid-cols-2 gap-3 px-4 py-5">
            {nearYouItems.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center",
                  index === 0 && "col-span-2",
                )}
              >
                <div className="relative z-10 h-full w-full rounded-md bg-[#CDB9A2] p-3 text-black">
                  <div className="flex h-full flex-col items-center justify-between rounded-md border-[2px] border-dashed border-[#2D2B2B] p-2 text-[#2D2B2B]">
                    <div>
                      <div className="mb-4 flex justify-center">
                        {steps2[index % steps2.length].icon}
                      </div>
                      <div
                        className="mb-8 text-center text-sm"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-xs">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden pt-20 pb-16 text-white md:block"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12 md:px-8">
            {nearYouItems.slice(0, 2).map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative z-10 h-full w-64 rounded-md bg-[#CDB9A2] p-3 text-black">
                  <div className="flex h-full flex-col items-center justify-between rounded-md border-[1.5px] border-dashed border-[#2D2B2B] p-2 text-[#2D2B2B]">
                    <div>
                      <div className="mb-4 flex justify-center">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="mb-8 text-center text-xl"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12 md:px-8">
            {nearYouItems.slice(2, 5).map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative z-10 h-full w-64 rounded-md bg-[#CDB9A2] p-3 text-black">
                  <div className="flex h-full flex-col items-center justify-between rounded-md border-[1.5px] border-dashed border-[#2D2B2B] p-2 text-[#2D2B2B]">
                    <div>
                      <div className="mb-4 flex justify-center">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="mb-8 text-center text-xl"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {(() => {
          const t = taglines[slug];
          if (!t) return null;
          if (t.lines) {
            return (
              <h3 className="trim mx-auto max-w-[343.5px] text-center text-xl font-normal tracking-wide text-white md:w-[900px] md:max-w-fit md:text-3xl">
                {t.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            );
          }
          return (
            <h3 className="trim mx-auto max-w-[343.5px] text-center text-xl font-normal tracking-wide text-white md:w-120 md:max-w-fit md:text-3xl">
              {t.before}{" "}
              <span className="font-['luminaire-script'] text-[#F3CA9E]">
                {t.highlight}
              </span>{" "}
              {t.after}
            </h3>
          );
        })()}
      </div>
    </div>
  );
};

export default ServiceNearYou;
