"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import QuoteForm from "./quoteForm";
import { useGodlyContext } from "@/context/godlyContext";
import { generateHomeH1 } from "@/data/metaTitles";

const Hero = ({ service, source }) => {
  const { city } = useGodlyContext();

  const formatCity = (city) => {
    if (!city) return "South Florida";
    return city
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="relative overflow-x-clip bg-[#1F1D1D]">
      <div className="absolute top-[0px] left-0 h-[450px] w-full bg-[url('/assets/heroBanner.jpg')] bg-cover bg-center bg-no-repeat md:top-[0px] md:h-[700px]">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#1F1D1D]/0 to-[#1F1D1D]"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px] px-[20px] md:px-14 md:pb-32">
        <div className="flex min-h-[600px] flex-col justify-end gap-3 pb-10 xl:min-h-[815px]">
          <div className="flex w-full items-center justify-start">
            <span className="hidden md:inline-block">
              <Google />
            </span>
            <span className="md:hidden">
              <Google width={132.926} height={41.65} />
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="trim flex items-center gap-[3.774px]">
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
              <Star className="h-[13px] w-[13px] md:size-3 xl:h-[17px] xl:w-[18px]" />
            </div>
            <span className="font-marlton trim text-base tracking-[2.07px] text-[#FDE4C8] md:text-base xl:text-[20.704px]">
              93 Reviews
            </span>
          </div>
          <h1 className="sr-only">{generateHomeH1()}</h1>
          <div
            className="flex flex-wrap items-center gap-4 xl:gap-8"
            role="heading"
            aria-level="1"
          >
            {/* <span className="flex flex-wrap items-center gap-2">
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
            </span> */}
            <h3 className="font-marlton trim w-full shrink-0 items-center gap-2 text-[32px] font-normal tracking-[3px] text-white md:text-4xl md:tracking-[6.584px] xl:text-[64px] 2xl:text-[73.161px]">
              {formatCity(city)}’s #1 Trusted Window Washers – Backed by Our
              100% Satisfaction Guarantee
            </h3>
          </div>
          <p className="font-['satoshi-regular'] text-sm font-medium text-white md:text-base xl:text-xl">
            Get Spotless Windows + a FREE RainShield Treatment this{" "}
            {new Date(
              new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
              }),
            ).toLocaleString("en-US", { month: "long" })}{" "}
            Only.
          </p>
        </div>
        <QuoteForm service={service} source={source} />
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

const Google = ({ width = 184, height = 58 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 184 58"
    className="max-w-fit"
    fill="none"
  >
    <g clipPath="url(#clip0_122_1613)">
      <path
        d="M23.0164 20.5718V26.7302H37.8785C37.4839 30.137 36.3002 32.7576 34.4589 34.461C32.3545 36.5575 28.935 38.916 23.0164 38.916C13.9414 38.916 6.83917 31.5783 6.83917 22.5372C6.83917 13.4961 13.8099 6.15842 23.0164 6.15842C27.8828 6.15842 31.5654 8.12388 34.1959 10.6135L38.5361 6.28945C34.8535 2.75164 29.8556 0 23.0164 0C10.5218 0 0 10.0893 0 22.5372C0 34.9851 10.5218 45.0744 23.0164 45.0744C29.7241 45.0744 34.8535 42.8469 38.7991 38.785C42.8763 34.723 44.1916 28.9577 44.1916 24.3716C44.1916 22.9303 44.06 21.62 43.9285 20.5718H23.0164Z"
        fill="#4285F4"
      />
      <path
        d="M62.6045 15.4616C54.5817 15.4616 47.874 21.62 47.874 30.006C47.874 38.3919 54.4501 44.5503 62.6045 44.5503C70.7589 44.5503 77.3351 38.5229 77.3351 30.137C77.3351 21.62 70.7589 15.4616 62.6045 15.4616ZM62.6045 38.916C58.1328 38.916 54.3186 35.2472 54.3186 30.137C54.3186 24.8958 58.1328 21.358 62.6045 21.358C67.0763 21.358 70.8905 24.8958 70.8905 30.137C70.8905 35.2472 67.0763 38.916 62.6045 38.916Z"
        fill="#EA4335"
      />
      <path
        d="M134.547 18.7374H134.284C132.837 17.034 130.075 15.4616 126.524 15.4616C119.159 15.4616 112.846 21.7511 112.846 30.006C112.846 38.1298 119.159 44.5503 126.524 44.5503C130.075 44.5503 132.837 42.978 134.284 41.2746H134.547V43.3711C134.547 48.8743 131.522 51.888 126.787 51.888C122.841 51.888 120.474 49.1364 119.422 46.6468L113.898 49.0054C115.476 52.8052 119.816 57.6534 126.919 57.6534C134.415 57.6534 140.86 53.1983 140.86 42.4539V16.2478H134.81V18.7374H134.547ZM127.182 38.916C122.71 38.916 119.422 35.1162 119.422 30.137C119.422 25.0268 122.841 21.358 127.182 21.358C131.522 21.358 134.941 25.1579 134.941 30.268C135.073 35.2472 131.653 38.916 127.182 38.916Z"
        fill="#4285F4"
      />
      <path
        d="M95.3545 15.4616C87.3317 15.4616 80.624 21.62 80.624 30.006C80.624 38.3919 87.2002 44.5503 95.3545 44.5503C103.509 44.5503 110.085 38.5229 110.085 30.137C110.085 21.62 103.509 15.4616 95.3545 15.4616ZM95.3545 38.916C90.8828 38.916 87.0686 35.2472 87.0686 30.137C87.0686 24.8958 90.8828 21.358 95.3545 21.358C99.8263 21.358 103.64 24.8958 103.64 30.137C103.64 35.2472 99.8263 38.916 95.3545 38.916Z"
        fill="#FBBC05"
      />
      <path
        d="M145.727 0.655182H152.04V44.6814H145.727V0.655182Z"
        fill="#34A853"
      />
      <path
        d="M171.505 38.916C168.217 38.916 165.981 37.4747 164.402 34.461L183.999 26.4682L183.342 24.7648C182.158 21.489 178.344 15.4616 170.847 15.4616C163.35 15.4616 157.037 21.358 157.037 30.006C157.037 38.1298 163.219 44.5503 171.505 44.5503C178.212 44.5503 182.026 40.4884 183.736 38.1298L178.738 34.8541C177.029 37.3437 174.793 38.916 171.505 38.916ZM171.11 20.9649C173.74 20.9649 175.976 22.2752 176.634 24.1096L163.482 29.6129C163.35 23.5855 167.822 20.9649 171.11 20.9649Z"
        fill="#EA4335"
      />
    </g>
    <defs>
      <clipPath id="clip0_122_1613">
        <rect width="184" height="57.6533" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
