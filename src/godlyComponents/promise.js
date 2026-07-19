"use client";
import React from "react";
import { useState, useEffect } from "react";
import "@/styles/fourstepprocess.css";
import Image from "@/components/Image";

import ticketBg from "@/assets/ticket-bg.webp";

import fam1 from "@/assets/fam-1.webp";
import fam2 from "@/assets/fam-2.webp";
import img1 from "@/assets/rocket.webp";
import img2 from "@/assets/plant.webp";
import img3 from "@/assets/eagle.webp";
import SectionButton from "@/components/sectionButton";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
// import EstimateButton from "@/components/estimateButton";

const steps = [
  {
    number: "01",
    icon: img1,
    title: "QUICK ESTIMATES",
    text: (
      <>
        We offer free estimates within{" "}
        <span className="font-bold">24 hours</span> for all jobs.
      </>
    ),
  },
  {
    number: "02",
    icon: img2,
    title: "FULLY INSURED",
    text: "No need to worry, we are insured up to $2M plus workers comp.",
  },
  {
    number: "03",
    icon: img3,
    title: "BUILT ON INTEGRITY",
    text: "If you’re ever dissatisfied with our service, we won’t stop until we’ve made it right.",
  },
];

const Promise = () => {
  // Add state to track active card
  const [activeCard, setActiveCard] = useState(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="promise"
      className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#ede0d2] px-7.5 pt-12.5 pb-25 md:px-21.5 md:py-37.5"
    >
      <div
        className="relative flex h-50 w-189.5 scale-50 -rotate-2 flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:h-52.5 md:scale-100"
        style={{
          backgroundImage: `url(${ticketBg.src})`,
        }}
      >
        <div className="flex -translate-y-7 flex-col items-center gap-4">
          <div className="text-trim -rotate-2 text-[64px] font-normal tracking-[5.76px] text-[#191717]">
            old fashioned Values
          </div>
          <div className="absolute top-3/5 -mt-4 -rotate-2 text-3xl font-normal text-[#191717]">
            <span className="text-[32px] underline">UNRIVALED</span>{" "}
            <span
              className="text-trim quality-text font-['luminaire-script'] text-[80px] text-[#B0906E]"
              data-text="Quality"
            >
              Quality
            </span>
          </div>
        </div>
      </div>
      <Story />
      <div className="flex flex-col items-center justify-center gap-4 py-10 md:gap-10">
        <div
          className="text-grain trim bg-[#191717]! text-center text-4xl font-normal tracking-wide md:text-[64px]"
          data-text="Delivering"
        >
          Delivering
        </div>
        <h3 className="trim text-center text-4xl font-normal tracking-wide md:-mt-6 md:text-[64px]">
          <span
            className="md:text-grain trim relative text-[#61503E] underline"
            data-text="Trustworthy"
          >
            Trustworthy
          </span>{" "}
          <span
            className="text-grain trim bg-[#191717]! text-4xl md:text-[64px]"
            data-text="Service"
          >
            Service
          </span>
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-2 sm:px-4 md:gap-8">
        {steps.map((step, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={
                "paper-bg-8 group relative flex w-full max-w-[350px] rounded-[6px] p-2 " +
                (isActive
                  ? "bg-[#E7E3E0] text-black"
                  : "bg-[#201E1E] text-[#FFFFFF]") +
                " hover:bg-[#E7E3E0] hover:text-black"
              }
              onClick={() => toggleCard(index)}
            >
              <div className="absolute top-0 right-0 size-20">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  sizes="80px"
                  className={`object-contain ${
                    index === 1
                      ? (isActive
                          ? "filter-[invert(0)]"
                          : "filter-[invert(1)]") +
                        " group-hover:filter-[invert(0)]"
                      : (isActive ? "filter-[invert(1)]" : "") +
                        " group-hover:filter-[invert(1)]"
                  }`}
                />
              </div>
              <div className="relative z-10 flex min-h-65 flex-col items-start justify-between gap-15 rounded-md border border-dashed border-[#6A6464] p-4">
                <div className="flex flex-col gap-8">
                  <div className="text-base font-normal">
                    <span className="text-base">{step.number}</span>
                  </div>

                  <div
                    className={`text-grain max-w-[170px] text-left text-4xl ${
                      isActive ? "bg-[#2D2B2B]!" : "bg-white!"
                    } group-hover:bg-[#2D2B2B]!`}
                    data-text={step.title}
                    style={{ marginBottom: "1rem" }}
                  >
                    {step.title}
                  </div>
                </div>

                <p
                  className={`text-grain text-left text-base ${
                    isActive ? "bg-[#2D2B2B]!" : "bg-white!"
                  } group-hover:bg-[#2D2B2B]!`}
                  data-text={step.text}
                  style={{ fontFamily: "Inter" }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <SectionButton>Get a Free Estimate</SectionButton>
      {/* <EstimateButton /> */}
    </div>
  );
};

export default Promise;

function Story() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Setup event listeners for the carousel
  useEffect(() => {
    if (!api) return;

    const onSync = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    queueMicrotask(onSync);

    api.on("select", onSync);
    api.on("reInit", onSync);

    return () => {
      api.off("select", onSync);
      api.off("reInit", onSync);
    };
  }, [api]);
  return (
    <div
      className="flex w-full max-w-275 flex-col gap-8.5 rounded-[12px] bg-[#1F1D1D] p-4 md:mt-12 md:flex-row md:gap-10"
      style={{
        boxShadow:
          "0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset, 0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative overflow-visible">
        <Carousel
          className="carousel-dots pointer-none: relative w-full overflow-visible"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <div className="absolute top-2 -left-6 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
          <div className="absolute -right-6 bottom-2 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
          <CarouselContent className="overflow-visible">
            <CarouselItem className="overflow-visible">
              <div className="relative min-h-50 overflow-visible rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image
                  src={fam1}
                  alt="family"
                  className="h-contain bg-full h-full overflow-clip"
                />
                <p className="text-center font-['luminaire-script'] text-base">
                  Our family business
                </p>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative min-h-50 rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image src={fam2} alt="family" />
                <p className="text-center font-['luminaire-script'] text-base">
                  Quality service
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`size-2 rounded-full transition-colors ${
                index === current ? "bg-[#F3CA9E]" : "bg-[#F3CA9E]/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-8.5 p-3 md:gap-10">
        <div className="flex items-center gap-4 text-4xl text-white md:text-6xl">
          <span
            className="text-grain bg-[#F3CA9E]! font-['marlton']"
            data-text="LOCAL"
          >
            LOCAL
          </span>
          <span
            className="text-grain bg-white! font-['marlton']"
            data-text="FAMILY"
          >
            {" "}
            FAMILY
          </span>
          <span
            className="text-grain bg-white! font-['marlton']"
            data-text="OWNED"
          >
            {" "}
            OWNED
          </span>
        </div>
        <p
          className="text-justify text-sm tracking-wide text-[#A4A4A4] md:text-base"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          Godly is founded by{" "}
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Perfectionist
          </span>{" "}
          looking to bridge the gaps between honest blue-collar work, modern{" "}
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Craftsmanship
          </span>
          {", and a fair price."}
        </p>
        <p
          className="text-justify text-sm tracking-wide text-[#A4A4A4] md:text-base"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          We want to &apos;reverse time&apos; back to when you{" "}
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Trusted</span>
          {
            " the people working on your home or Business. Back to when the standard was to do exactly what you said you'd do, rather than using it as merely a "
          }
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Guideline</span>
          {"."}
        </p>
      </div>
    </div>
  );
}
