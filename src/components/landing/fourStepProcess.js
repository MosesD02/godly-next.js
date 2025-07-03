"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import spark from "@/assets/spark.webp";
import drop from "@/assets/drop.webp";
import { cn } from "@/lib/utils";

const FourStepProcess = () => {
  const steps = [
    {
      number: "01",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
        >
          <g clipPath="url(#clip0_2203_3848)">
            <path
              d="M72.5355 38.5952C72.5355 36.1224 70.5242 34.1111 68.0514 34.1111L18.9127 34.1113V30.4695C18.9127 28.7372 20.3215 27.3284 22.0539 27.3284H60.9416C64.3255 27.3284 67.0802 24.577 67.0802 21.1898C67.0802 17.8027 64.3256 15.0512 60.9386 15.0512L20.8909 15.0508C13.0438 15.0508 6.66243 21.4322 6.66243 29.2792V34.1111H5.67942C3.2066 34.1111 1.19531 36.1224 1.19531 38.5952C1.19531 40.4086 2.28048 41.9642 3.83299 42.6716V55.6801C3.83299 56.2047 4.10579 56.6873 4.55235 56.9601C4.79214 57.1069 5.0619 57.1788 5.33167 57.1788C5.56841 57.1788 5.80235 57.1219 6.018 57.0109L11.6469 54.1066L17.2789 57.0109C17.4976 57.1247 17.7315 57.1788 17.9652 57.1788C18.202 57.1788 18.4359 57.1219 18.6516 57.0109L24.2805 54.1066L29.9094 57.0109C30.1281 57.1247 30.362 57.1788 30.5957 57.1788C30.8325 57.1788 31.0664 57.1219 31.2821 57.0109L36.914 54.1066L42.543 57.0109C42.7617 57.1247 42.9986 57.1788 43.2293 57.1788C43.463 57.1788 43.7 57.1219 43.9156 57.0109L49.5445 54.1066L55.1735 57.0109C55.3922 57.1247 55.6292 57.1788 55.8598 57.1788C56.0965 57.1788 56.3363 57.1219 56.5553 57.0079L62.0824 54.1124L67.7024 57.0109C67.9183 57.1219 68.1551 57.1788 68.3887 57.1788C68.6585 57.1788 68.9313 57.107 69.1681 56.9601C69.6146 56.6873 69.8874 56.2047 69.8874 55.6801V42.6746C71.4442 41.9669 72.5352 40.4083 72.5352 38.5949L72.5355 38.5952ZM9.65697 29.2794C9.65697 23.0869 14.6956 18.0483 20.8881 18.0483H60.9358C62.6681 18.0483 64.0799 19.4571 64.0799 21.1894C64.0799 22.9218 62.6712 24.3305 60.9388 24.3305L22.0511 24.3308C18.6671 24.3308 15.9125 27.0853 15.9125 30.4694V34.1111L9.65703 34.1114L9.65697 29.2794ZM5.6766 37.1085H8.12832C8.13722 37.1085 8.14635 37.1146 8.15829 37.1146H17.4111C17.42 37.1146 17.4292 37.1085 17.4411 37.1085H68.0485C68.8666 37.1085 69.5352 37.7768 69.5352 38.5922C69.5322 39.4134 68.8639 40.082 68.0454 40.082L5.67642 40.0818C4.85826 40.0818 4.18967 39.4135 4.18967 38.595C4.18967 37.7769 4.85796 37.1085 5.67642 37.1085L5.6766 37.1085ZM54.3627 53.2193L51.0445 51.5077V43.0822H54.3627V53.2193ZM41.7288 53.2193L38.4106 51.5077V43.0822H41.7288V53.2193ZM29.0949 53.2193L25.7768 51.5077V43.0792H29.0949V53.2193ZM16.4641 53.2193L13.1431 51.5077V43.0792H16.4641V53.2193ZM6.82759 53.2193V43.0792H10.1458V51.5078L6.82759 53.2193ZM19.4614 53.2193V43.0792H22.7796V51.5078L19.4614 53.2193ZM32.0923 53.2193V43.0792H35.4105V51.5078L32.0923 53.2193ZM44.7262 53.2193V43.0792H48.0444V51.5078L44.7262 53.2193ZM57.36 53.2013V43.0792H60.5791V51.5108L57.36 53.2013ZM63.5765 51.5078V43.0792H66.8917V53.2193L63.5765 51.5078Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2203_3848">
              <rect
                width="71.9366"
                height="71.9366"
                fill="white"
                transform="translate(0.890625 0.144531)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Residential",
      text: "Wash away dirt, mold, pollen, and buildup from driveways, windows, and roofs — we’ll make your home look like new.",
    },
    {
      number: "02",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M49.8742 5.23633V11.9563H5.07422V5.23633H49.8742ZM5.07422 18.6763H16.2742L20.7542 23.1563H22.9942V45.5563C22.9942 46.7445 23.4662 47.884 24.3064 48.7242C25.1465 49.5643 26.286 50.0363 27.4742 50.0363C28.6624 50.0363 29.8019 49.5643 30.6421 48.7242C31.4822 47.884 31.9542 46.7445 31.9542 45.5563V23.1563H34.1942L38.6742 18.6763H49.8742V14.1963H5.07422V18.6763Z"
            fill="black"
          />
        </svg>
      ),
      title: "Commercial",
      text: "Keep your storefront or office exterior spotless and professional — with flexible scheduling that works around your hours.",
    },
    {
      number: "03",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <path
            d="M50.9531 51.6113L36.4531 37.1113M7.45313 25.028C7.45312 27.2495 7.89069 29.4493 8.74083 31.5017C9.59097 33.5541 10.837 35.419 12.4079 36.9899C13.9788 38.5607 15.8436 39.8068 17.8961 40.657C19.9485 41.5071 22.1483 41.9447 24.3698 41.9447C26.5913 41.9447 28.7911 41.5071 30.8435 40.657C32.8959 39.8068 34.7608 38.5607 36.3317 36.9899C37.9025 35.419 39.1486 33.5541 39.9988 31.5017C40.8489 29.4493 41.2865 27.2495 41.2865 25.028C41.2865 22.8065 40.8489 20.6067 39.9988 18.5543C39.1486 16.5018 37.9025 14.637 36.3317 13.0661C34.7608 11.4952 32.8959 10.2492 30.8435 9.39903C28.7911 8.54889 26.5913 8.11133 24.3698 8.11133C22.1483 8.11133 19.9485 8.54889 17.8961 9.39903C15.8436 10.2492 13.9788 11.4952 12.4079 13.0661C10.837 14.637 9.59097 16.5018 8.74083 18.5543C7.89069 20.6067 7.45312 22.8065 7.45313 25.028Z"
            stroke="black"
            strokeWidth="4.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Post-Construction",
      text: "Safely remove construction dust, paint overspray, and debris from windows and surfaces — no scratches, just shine.",
    },
    {
      number: "04",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <path
            d="M29.4076 54.0286C23.8089 52.6189 19.1867 49.4064 15.5407 44.391C11.8948 39.3756 10.0726 33.8076 10.0742 27.687V12.9453L29.4076 5.69531L48.7409 12.9453V27.687C48.7409 33.8092 46.9187 39.378 43.2744 44.3934C39.6301 49.4088 35.0078 52.6205 29.4076 54.0286ZM29.4076 48.9536C33.5964 47.6245 37.0603 44.9661 39.7992 40.9786C42.5381 36.9911 43.9076 32.5606 43.9076 27.687V16.2682L29.4076 10.8307L14.9076 16.2682V27.687C14.9076 32.5606 16.277 36.9911 19.0159 40.9786C21.7548 44.9661 25.2187 47.6245 29.4076 48.9536Z"
            fill="black"
          />
        </svg>
      ),
      title: "Maintenance Packages",
      text: "Quarterly or bi-annual cleanings to protect your property, keep things pristine, and avoid costly buildup.",
    },
  ];

  return (
    <div className="fourstepprocess" id="about">
      <div className="fourstepprocess-inner relative flex flex-col items-center justify-center gap-[100px] md:gap-44">
        <div className="heading relative flex flex-col gap-0">
          <div className="relative flex flex-col items-center justify-center gap-0">
            <h4
              className="trim text-grain !bg-white text-[32px] tracking-[3.84px] md:text-[64px]"
              data-text="Services"
            >
              Services
            </h4>
            {/* <h4 className="with-text-fourstepprocess trim z-10 text-center!">
              With
            </h4>
            <h4
              className="text-grain trim !bg-white text-[24px] tracking-[3.84px] sm:text-[28px] md:text-[48px] lg:text-[56px] xl:text-[64px]"
              data-text="RAINSHIELD TECH"
            >
              RAINSHIELD TECH
            </h4> */}
          </div>
        </div>

        <div className="flex w-full max-w-[1193px] flex-col items-center text-white sm:gap-1 sm:pt-2 md:gap-2 md:pt-3 lg:gap-3 lg:pt-4 xl:gap-3 xl:pt-4">
          <div className="text-white">
            <div className="relative z-10 pb-2">
              <div className="mx-auto hidden w-fit items-center justify-between px-2 md:flex">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className="trim text-xl font-normal tracking-[3.24px] text-[#FDE4C8] sm:text-2xl md:text-2xl lg:text-3xl xl:text-[36px]">
                        {step.number}
                      </div>
                    </div>

                    {/* Add the dotted line unless it's the last element */}
                    {index !== steps.length - 1 && (
                      <div className="mx-1 max-w-[140px] flex-grow sm:mx-1 sm:max-w-[160px] md:mx-1.5 md:max-w-[180px] lg:mx-2 lg:max-w-[195px] xl:mx-3 xl:max-w-[205px]">
                        <img
                          src={"/assets/dotted-line.webp"}
                          alt="dotted-line"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 justify-center gap-[27px] sm:gap-4 md:flex md:w-full md:grid-cols-4 md:flex-row md:flex-nowrap md:justify-between md:gap-3 md:pt-5 lg:gap-4 xl:gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:w-1/4 md:max-w-[230px] md:flex-shrink-0 xl:max-w-[250px]"
              >
                <div className="trim pb-[18px] text-2xl font-normal tracking-[3.24px] text-[#FDE4C8] md:hidden md:text-3xl xl:text-[36px]">
                  {step.number}
                </div>
                <div className="paper-bg-8 stepcontainer relative z-10 rounded bg-[#F4D9BB] p-3 text-black shadow md:w-full">
                  <div className="flex min-h-[180px] flex-col items-center justify-center gap-[20px] border-2 border-black px-2 md:min-h-[250px] md:gap-4 lg:min-h-[285px]">
                    <div className="flex h-[42px] w-[42px] justify-center md:h-full md:w-full">
                      {step.icon}
                    </div>
                    <div className="trim text-center font-['satoshi-black'] text-[16px] font-[900] text-[#1C1C1C] md:text-[22px] lg:text-[26px]">
                      {step.title}
                    </div>
                    <p className="trim font-[] text-center font-['satoshi-regular'] text-[9.345px] text-[#1F1D1D] md:text-sm lg:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -mt-4 flex flex-col items-center justify-center gap-2 p-8 md:mb-10">
          <Badge
            text="7 day Sparkle Guarantee"
            className={`sparks z-20 ${"rotate-[2.226deg]"}`}
            sparks
            image={spark}
          />
          <Badge
            text="Hard Water Stain Removal"
            className={`-mt-4 scale-95 ${"rotate-[-3.582deg]"}`}
            drops
            starClassName={"rotate-0"}
            image={drop}
          />
          <div className="absolute right-2 -bottom-2 scale-75 -rotate-5 md:-bottom-0 md:scale-100">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({
  text,
  className,
  starClassName,
  image,
  sparks,
  drops,
  isActive,
  onClick,
}) => (
  <div
    className={cn(
      "group flex w-fit cursor-pointer items-center gap-2 rounded-[6px] px-2 py-4 shadow-[0px_4px_37.6px_0px_#1C1C1C] transition-transform duration-300 ease-in-out md:px-4 md:py-6",
      isActive
        ? "dashed-border transform-[translate(-4px,-12px)] bg-[#111010] text-white shadow-[0px_4px_37px_0px_#1C1C1C]"
        : "bg-[#2D2B2B] text-white",
      className,
    )}
    onClick={onClick}
  >
    <span
      className={cn(
        `item-center relative flex size-6 transform justify-center text-yellow-400 transition-all duration-500 md:size-[28.838px]`,
        isActive ? "" : "",
        starClassName,
      )}
    >
      {sparks && (
        <>
          <Image
            alt="spark"
            src={image}
            className={cn(
              "absolute -top-1 left-0.5 size-2.5 rotate-[15deg] object-contain opacity-0 transition-all duration-300 ease-in-out",
              isActive ? "opacity-100" : "",
            )}
          />
          <Image
            alt="spark"
            src={image}
            className={cn(
              "absolute top-0.5 right-0 size-2 rotate-[-15deg] object-contain opacity-0 transition-all duration-300 ease-in-out",
              isActive ? "opacity-100" : "",
            )}
          />
        </>
      )}
      {drops && (
        <>
          <Image
            alt="spark"
            src={image}
            className={cn(
              "absolute top-0 size-2.5 -translate-x-3.5 object-contain opacity-0 transition-all duration-300 ease-in-out",
              isActive ? "opacity-100" : "",
            )}
          />
          <Image
            alt="spark"
            src={image}
            className={cn(
              "absolute bottom-0 size-2 translate-x-4 object-contain opacity-0 transition-all duration-300 ease-in-out",
              isActive ? "opacity-100" : "",
            )}
          />
        </>
      )}
      <Image
        alt="spark"
        src={image}
        className={cn(
          "relative z-20 size-6 object-contain transition-transform duration-500 md:h-auto md:w-auto",
          sparks && "",
          isActive ? "rotate-[15deg]" : "",
        )}
      />
    </span>
    <h6 className="group relative">
      <span
        className={`mr-4 border-b-3 border-[#f1caa0] font-sans text-base font-[900] text-[#f1caa0] uppercase transition-all duration-300 md:text-4xl ${
          isActive ? "" : "text-[#f1caa0]"
        } `}
        data-text="FREE"
      >
        FREE
      </span>
      <span
        className={`font-sans text-base font-bold ${
          isActive
            ? "text-shadow-[0px_0px_1.75px_#FFF] md:text-shadow-[0px_1px_2.9px_#FFF]"
            : ""
        } md:text-[28px]`}
      >
        {text}
      </span>
    </h6>
  </div>
);

export default FourStepProcess;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="79"
    viewBox="0 0 74 79"
    fill="none"
  >
    <g filter="url(#filter0_d_2667_506)">
      <path
        d="M25.4858 59.5258C23.9975 58.4708 21.8135 56.0799 18.4259 53.3001C16.5077 51.79 12.1165 49.146 10.5545 47.5701C9.49265 46.6464 8.86534 45.3208 8.82438 43.914C8.67908 41.2596 10.5299 38.9111 13.1447 38.4319C15.2193 38.2345 17.3063 38.6507 19.1465 39.6288C20.4162 40.2616 21.631 40.9991 22.7784 41.8335C23.6222 42.4144 23.8679 42.6746 24.823 43.3473C25.7781 44.02 26.5035 44.7621 25.7659 43.5641C24.9199 41.7303 23.4896 38.6523 21.9718 35.9767C20.8152 33.9442 20.5963 33.6343 19.6398 32.1263C18.6833 30.6184 17.9992 29.3207 16.935 27.5945C15.9236 25.8883 15.0024 24.1301 14.1754 22.3272C12.9666 20.0669 12.5637 17.4623 13.033 14.9423C13.9911 13.2801 15.8536 12.3556 17.7569 12.5974C19.8201 13.334 21.6032 14.6941 22.859 16.4892C24.6027 18.6387 26.0499 21.0125 27.1618 23.547C28.9302 27.1915 31.8047 32.4242 32.1897 33.5614C31.7621 32.1445 30.5926 29.2385 30.4561 27.8173C30.3 26.3399 30.9212 24.8872 32.0972 23.9795C33.132 23.2854 34.3147 22.8426 35.5509 22.6864C36.8131 22.5763 38.0708 22.9418 39.0774 23.7112C40.6389 25.6775 41.8469 27.9001 42.6476 30.2798C42.1152 28.1449 41.8465 25.9528 41.8475 23.7526C42.2153 22.6578 42.9536 21.7257 43.935 21.117C45.1312 20.5035 46.4286 20.1119 47.7644 19.9613C48.9073 19.995 50.0129 20.3753 50.9347 21.0518C52.3586 22.8379 53.4967 24.8342 54.3084 26.9694C54.4702 27.5055 54.1258 25.395 54.5637 23.8005C54.6093 22.3686 55.4152 21.0699 56.678 20.3934C57.9408 19.7169 59.4685 19.7655 60.6857 20.5208C61.903 21.2762 62.6248 22.6235 62.5792 24.0554C63.3305 26.5445 63.2958 26.4296 63.8043 28.1145C64.3129 29.7995 64.7636 31.2929 65.1912 32.7098C65.728 34.9928 66.093 37.3128 66.2831 39.6503C66.2028 41.7934 65.8313 43.9156 65.1787 45.9585C63.9434 48.5874 63.1123 51.3879 62.7136 54.265C62.8043 55.6073 63.064 56.9327 63.4864 58.21C63.8416 59.4007 64.3537 60.5388 65.0092 61.5944C63.4935 62.2324 61.9147 62.7089 60.299 63.0159C58.7362 63.2369 55.9966 60.8047 55.2214 60.0359C54.8262 59.6168 54.2279 59.4571 53.6764 59.6236C53.1249 59.79 52.7148 60.254 52.6175 60.8218C52.2142 62.5313 51.1352 65.7398 49.8795 66.286C47.4062 67.3667 42.0292 68.6552 37.8552 69.915C37.8552 69.915 37.3887 65.8776 35.4026 64.9728C33.4165 64.0681 31.3227 62.9452 29.812 62.2312L25.4858 59.5258Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.4858 59.5258C23.9975 58.4708 21.8135 56.0799 18.4259 53.3001C16.5077 51.79 12.1165 49.146 10.5545 47.5701C9.49265 46.6464 8.86534 45.3208 8.82438 43.914C8.67908 41.2596 10.5299 38.9111 13.1447 38.4319C15.2193 38.2345 17.3063 38.6507 19.1465 39.6288C20.4162 40.2616 21.631 40.9991 22.7784 41.8335C23.6222 42.4144 23.8679 42.6746 24.823 43.3473C25.7781 44.02 26.5034 44.7621 25.7659 43.5641C24.9199 41.7303 23.4896 38.6523 21.9718 35.9767C20.8152 33.9442 20.5963 33.6343 19.6398 32.1263C18.6833 30.6184 17.9992 29.3207 16.935 27.5945C15.9236 25.8883 15.0024 24.1301 14.1754 22.3272C12.9666 20.0669 12.5637 17.4623 13.033 14.9423C13.9911 13.2801 15.8536 12.3556 17.7569 12.5974C19.8201 13.334 21.6032 14.6941 22.859 16.4892C24.6027 18.6387 26.0499 21.0125 27.1618 23.547C28.9302 27.1915 31.8047 32.4242 32.1897 33.5614C31.7621 32.1445 30.5926 29.2385 30.4561 27.8173C30.3 26.3399 30.9212 24.8872 32.0972 23.9795C33.132 23.2854 34.3147 22.8426 35.5509 22.6864C36.8131 22.5763 38.0708 22.9418 39.0774 23.7112C40.6389 25.6775 41.8469 27.9001 42.6476 30.2798C42.1152 28.1449 41.8465 25.9528 41.8475 23.7526C42.2153 22.6578 42.9536 21.7257 43.935 21.117C45.1312 20.5035 46.4286 20.1119 47.7644 19.9613C48.9073 19.995 50.0129 20.3753 50.9347 21.0518C52.3586 22.8379 53.4967 24.8342 54.3084 26.9694C54.4702 27.5055 54.1258 25.395 54.5637 23.8005C54.6093 22.3686 55.4152 21.0699 56.678 20.3934C57.9408 19.7169 59.4685 19.7655 60.6857 20.5208C61.903 21.2762 62.6248 22.6235 62.5792 24.0554C63.3305 26.5445 63.2958 26.4296 63.8043 28.1145C64.3129 29.7995 64.7636 31.2929 65.1912 32.7098C65.728 34.9928 66.093 37.3128 66.2831 39.6503C66.2028 41.7934 65.8313 43.9156 65.1787 45.9585C63.9434 48.5874 63.1123 51.3879 62.7136 54.265C62.8043 55.6073 63.064 56.9327 63.4864 58.21C63.8416 59.4007 64.3537 60.5388 65.0092 61.5944C63.4935 62.2324 61.9147 62.7089 60.299 63.0159C58.7362 63.2369 55.9966 60.8047 55.2214 60.0359C54.8262 59.6168 54.2279 59.4571 53.6764 59.6236C53.1249 59.79 52.7148 60.254 52.6175 60.8218C52.2142 62.5313 51.1352 65.7398 49.8795 66.286C47.4062 67.3667 42.0292 68.6552 37.8552 69.915C37.8552 69.915 37.3887 65.8776 35.4026 64.9728C33.4165 64.0681 31.3227 62.9452 29.812 62.2312L25.4858 59.5258Z"
        stroke="#202125"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.5946 51.8192L54.6052 38.601C54.3664 37.8098 53.5299 37.3624 52.7368 37.6018C51.9437 37.8411 51.4944 38.6766 51.7332 39.4678L55.7225 52.686C55.9613 53.4772 56.7978 53.9246 57.5909 53.6852C58.384 53.4459 58.8333 52.6104 58.5946 51.8192Z"
        fill="#202125"
      />
      <path
        d="M51.0056 54.1018L46.9376 40.8999C46.6948 40.1119 45.8562 39.6709 45.0645 39.9148C44.2728 40.1587 43.8278 40.9952 44.0706 41.7831L48.1386 54.9851C48.3814 55.773 49.22 56.214 50.0117 55.9701C50.8034 55.7262 51.2484 54.8897 51.0056 54.1018Z"
        fill="#202125"
      />
      <path
        d="M36.4224 44.1075L40.4822 57.2821C40.7273 58.0776 41.5678 58.5246 42.3595 58.2806C43.1511 58.0366 43.5942 57.194 43.3491 56.3985L39.2893 43.2239C39.0442 42.4285 38.2037 41.9814 37.412 42.2254C36.6204 42.4694 36.1773 43.3121 36.4224 44.1075Z"
        fill="#202125"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2667_506"
        x="4.11641"
        y="11.0586"
        width="66.8648"
        height="67.5555"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="1.6" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2667_506"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2667_506"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
