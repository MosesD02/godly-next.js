"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import QuoteForm from "./quoteForm";
import { useGodlyContext } from "@/context/godlyContext";
import { generateHomeH1 } from "@/data/metaTitles";

const Hero = () => {
  const { city } = useGodlyContext();

  return (
    <div className="relative overflow-x-clip bg-[#1F1D1D]">
      <div className="absolute top-[70px] left-0 h-[450px] w-full bg-[url('/assets/heroBanner.jpg')] bg-cover bg-center bg-no-repeat md:top-[20px] md:h-[700px]">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#1F1D1D]/0 to-[#1F1D1D]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-[20px] md:px-14 md:pb-32">
        <div className="flex min-h-[600px] flex-col justify-end gap-3 pb-10 xl:min-h-[815px]">
          <div className="flex items-center justify-start gap-3">
            <span className="font-marlton trim text-base tracking-[2.07px] text-[#FDE4C8] md:text-base xl:text-[20.704px]">
              TOP RATED
            </span>
            <div className="trim flex items-center gap-[3.774px]">
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
            </div>
          </div>
          <h1 className="sr-only">{generateHomeH1()}</h1>
          <div
            className="flex flex-wrap items-center gap-4 xl:gap-8"
            role="heading"
            aria-level="1"
          >
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-marlton trim shrink-0 items-center gap-2 text-[32px] font-normal tracking-[3px] text-white md:text-4xl md:tracking-[6.584px] xl:text-[64px] 2xl:text-[73.161px]">
                Window cleaning
              </span>
              <span className="shrink-0 text-center font-['luminaire-script'] text-[16px] text-[#FDE4C8] md:text-lg xl:text-2xl">
                And
              </span>
              <span className="hidden md:block"></span>
              <span className="font-marlton trim mt-2 shrink-0 items-center gap-2 text-[32px] font-normal tracking-[3px] text-white md:mt-0 md:text-4xl md:tracking-[6.584px] xl:text-[64px] 2xl:text-[73.161px]">
                pressure Washing
              </span>
            </span>
            <span className="font-marlton trim shrink-0 items-center gap-2 text-4xl font-normal tracking-[3px] text-white md:block md:tracking-[7.4] xl:text-[64px] 2xl:text-[73.161px]">
              services In
            </span>
            <span className="font-marlton trim shrink-0 items-center gap-2 text-4xl font-normal tracking-[3px] text-white md:block md:tracking-[7.4] xl:text-[64px] 2xl:text-[73.161px]">
              {city}
            </span>
          </div>
          <p className="font-['satoshi-regular'] text-sm font-medium text-white md:text-base xl:text-xl">
            we specialize in window washing, home washing, pressure washing,
            paver sealing and more.
          </p>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
};

export default Hero;

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
