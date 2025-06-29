"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FreeQuoteButton from "@/components/freeQuote";
import Services from "@/data/servicesData";
import { citiesMap } from "@/data/cities";
import { generateServiceH1, generateServiceHeroAlt } from "@/data/metaTitles";

const ServicesHero = ({ slug }) => {
  const { city } = useGodlyContext();
  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);
  const cityName = citiesMap[cityKey];

  return (
    <div className="paper-bg-16 mt-17 flex flex-col items-center justify-center gap-20 bg-[#252525] px-[30px] py-[42px] md:mt-14 md:py-[100px]">
      <h1 className="sr-only">{generateServiceH1(slug, cityName)}</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-start gap-3">
          <span className="font-marlton trim text-base tracking-[2.07px] text-[#FDE4C8] md:text-[20.704px]">
            TOP RATED
          </span>
          <div className="trim flex items-center gap-[3.774px]">
            <Star className="" />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div
          className={cn(
            "text-grain trim flex flex-col flex-wrap items-center bg-white! pb-0! text-center text-[64px] tracking-[5.23px] md:flex-row md:text-center md:text-[88px] md:leading-normal",
            Services[slug]["hero"][0].split(" ").length === 1 && "md:mr-24",
          )}
          data-text={Services[slug]["hero"][0]}
        >
          <span className="hidden md:inline-block">
            {Services[slug]["hero"][0]}
          </span>
          <div className="md:hidden">
            {Services[slug]["hero"][0].split(" ").map((word, index) => (
              <span
                key={index}
                className={cn(
                  "trim block",
                  Services[slug]["hero"].length > 1 && "last:mt-4 md:last:mt-0",
                )}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col md:relative md:w-full">
          <div className="relative flex w-full items-end">
            <div
              className={cn(
                "trim absolute top-1 left-0 z-10 max-h-fit w-full rotate-[-6.668deg] overflow-visible text-end tracking-wide md:top-9 md:left-3",
                Services[slug]["hero"][0].split(" ").length === 1 && "md:ms-12",
              )}
            >
              <span className="absolute top-60 right-25 hidden max-w-[100px] rotate-[6.668deg] text-left font-['marlton'] text-base font-[400] tracking-[2px] text-[#FDE4C8] md:-top-5 md:-right-30 md:block">
                {city}
              </span>
              <span
                className={cn(
                  "text-grain trim z-10 inline-block bg-[#FDE4C8]! pb-6 text-end font-['luminaire-script'] text-[48px] font-normal md:pb-12 md:text-[88px]",
                )}
                data-text={`${Services[slug]["hero"][1]} `}
                style={{
                  WebkitTextStrokeWidth: "0.5px",
                  strokeLinecap: "round",
                  WebkitTextStrokeColor: "#1F1D1D",
                  paintOrder: "stroke",
                }}
              >
                {Services[slug]["hero"][1]}
              </span>
            </div>
            <span className="absolute top-6 right-0 max-w-[100px] font-['marlton'] text-base leading-tight font-[400] tracking-[2px] text-[#FDE4C8] md:hidden">
              {city}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7" />
      <div className="relative rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c] sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4">
        <Image
          src={Services[slug]["hero"][2]}
          alt={generateServiceHeroAlt(slug, cityName)}
          // width={1200}
          // height={1200}
          className="max-w-xs md:max-w-md"
          // className="h-full max-h-[165px] min-h-[165px] w-full max-w-[317px] min-w-[317px] object-cover sm:max-h-[210px] sm:min-h-[210px] sm:max-w-[400px] sm:min-w-[400px] md:max-h-[295px] md:min-h-[295px] md:max-w-[537px] md:min-w-[537px] lg:max-h-[350px] lg:min-h-[350px] lg:max-w-[600px] lg:min-w-[600px] xl:max-h-[400px] xl:min-h-[400px] xl:max-w-[650px] xl:min-w-[650px]"
        />
        <p className="text-center font-['luminaire-script'] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </p>
        <div className="absolute top-2 -left-6 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC] sm:top-2 sm:-left-6 sm:h-3 sm:w-20 md:top-2 md:-left-6 md:h-3 md:w-22 lg:top-3 lg:-left-7 lg:h-4 lg:w-24 xl:top-4 xl:-left-8 xl:h-5 xl:w-26"></div>
        <div className="absolute -right-6 bottom-2 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC] sm:-right-6 sm:bottom-2 sm:h-3 sm:w-20 md:-right-6 md:bottom-2 md:h-3 md:w-22 lg:-right-7 lg:bottom-3 lg:h-4 lg:w-24 xl:-right-8 xl:bottom-4 xl:h-5 xl:w-26"></div>
      </div>
      <div className="text-left font-['satoshi-regular'] text-sm leading-6 text-white sm:max-w-none sm:text-left sm:text-base sm:leading-6 sm:text-white md:max-w-[700px] md:text-center md:text-base md:leading-7 md:text-[#FFFFFF94] lg:max-w-[800px] lg:text-center lg:text-lg lg:leading-7 lg:text-[#FFFFFF94] xl:max-w-[900px] xl:text-center xl:text-xl xl:leading-8 xl:text-[#FFFFFF94]">
        <p>{Services[slug]["hero"][3]}</p>
      </div>
      <FreeQuoteButton>Get a Free Quote</FreeQuoteButton>
    </div>
  );
};

export default ServicesHero;

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
  >
    <g clipPath="url(#clip0_2048_27067)">
      <path
        d="M13.3724 16.3331C13.1818 16.3331 12.9922 16.2747 12.829 16.1581L8.99168 13.4062L5.1544 16.1581C4.99542 16.2725 4.80436 16.3337 4.60851 16.3331C4.41265 16.3324 4.22202 16.2698 4.06383 16.1544C3.90544 16.0396 3.7873 15.8778 3.72623 15.692C3.66517 15.5062 3.66429 15.3058 3.72374 15.1195L5.15487 10.5006L1.35203 7.82085C1.19442 7.70453 1.07738 7.54161 1.01745 7.35513C0.957516 7.16865 0.957732 6.96804 1.01806 6.78169C1.079 6.59587 1.19673 6.43386 1.35464 6.31851C1.51256 6.20316 1.7027 6.14029 1.89826 6.13876L6.60818 6.13169L8.10772 1.62743C8.1696 1.44187 8.28829 1.28049 8.44698 1.16613C8.60567 1.05177 8.79632 0.990234 8.99192 0.990234C9.18752 0.990234 9.37817 1.05177 9.53686 1.16613C9.69555 1.28049 9.81424 1.44187 9.87612 1.62743L11.3502 6.13169L16.0842 6.13876C16.28 6.13987 16.4705 6.20265 16.6286 6.3182C16.7867 6.43374 16.9044 6.59616 16.9649 6.7824C17.0254 6.96863 17.0257 7.16921 16.9658 7.35562C16.9058 7.54204 16.7886 7.70482 16.6309 7.82085L12.828 10.5006L14.2592 15.1195C14.3187 15.3058 14.3179 15.5061 14.2569 15.6919C14.1959 15.8777 14.0778 16.0396 13.9195 16.1544C13.7608 16.2707 13.5691 16.3333 13.3724 16.3331Z"
        fill="#FFAC33"
      />
    </g>
    <defs>
      <clipPath id="clip0_2048_27067">
        <rect
          width="16.9812"
          height="16.9812"
          fill="white"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
