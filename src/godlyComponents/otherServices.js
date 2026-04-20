"use client";

import React from "react";
import Link from "next/link";
import "@/styles/fourstepprocess.css";
import Image from "@/components/Image";
import { citiesMap } from "@/data/cities";
import { generateServiceHeroAlt, serviceMetaTitles } from "@/data/metaTitles";
import { IMAGE_BY_LINK } from "@/data/relatedServices";
import Services from "@/data/servicesData";
import service2 from "@/assets/serviceData/service2.webp";

function toTitleCaseCityName(cityName) {
  if (!cityName) return "";
  return cityName
    .split(" ")
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
}

function labelForServiceSlug(serviceSlug) {
  return (
    serviceMetaTitles[serviceSlug] ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
}

const OtherServices = ({ slug, cityName: cityNameProp, citySlug }) => {
  const cityNameDisplay =
    cityNameProp != null
      ? toTitleCaseCityName(cityNameProp)
      : citySlug && citiesMap[citySlug]
        ? toTitleCaseCityName(citiesMap[citySlug])
        : "";

  const otherSlugs = Object.keys(Services)
    .filter((s) => s !== slug && s !== "rain-shield")
    .sort();

  const ServiceCard = ({ serviceSlug, isClone }) => {
    const img = IMAGE_BY_LINK[serviceSlug] || service2;
    const title = labelForServiceSlug(serviceSlug);
    return (
      <Link
        href={`/${citySlug}/${serviceSlug}`}
        key={isClone ? `${serviceSlug}-clone` : serviceSlug}
        className="block w-64 shrink-0 md:w-80"
      >
        <div className="transform transition-transform duration-300 hover:rotate-0">
          <div className="relative flex flex-col justify-between gap-3 rounded-sm bg-[#e7e3df] p-[6.5] pb-3.25 text-[#1c1c1c] md:min-h-62.5 md:gap-4 md:p-2.5 md:pb-4.5">
            <Image
              src={img}
              style={{ objectFit: "cover" }}
              alt={generateServiceHeroAlt(serviceSlug, cityNameProp)}
              width={500}
              height={500}
              className="size-full max-h-36.25 min-h-36.25 object-cover md:max-h-55.75 md:min-h-55.75"
            />
            <p className="trim text-center text-sm md:text-[22px]">{title}</p>
            <p className="trim text-center font-sans text-xs underline md:text-base">
              What We Offer
            </p>
            <div className="absolute top-1 -left-5 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]"></div>
            <div className="absolute -right-5 bottom-1 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]"></div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      id="other-services-in-city"
      className="paper-bg-16 flex flex-col items-center justify-center justify-items-center gap-10 overflow-hidden bg-[#ebded1] bg-cover bg-center bg-no-repeat pt-4 pb-24 bg-blend-multiply md:pt-0 md:pb-42"
    >
      <h2 className="trim px-4 py-10 text-center text-[32px] leading-tight font-normal tracking-wide text-[#191717] md:max-w-300 md:text-[64px]">
        Other Services in {cityNameDisplay}
      </h2>

      <div className="hover-pause relative w-full overflow-hidden py-5">
        <div className="animate-carousel-slow flex w-fit">
          {/* First set of services */}
          <div className="flex gap-10 px-5">
            {otherSlugs.map((serviceSlug) => (
              <ServiceCard
                key={serviceSlug}
                serviceSlug={serviceSlug}
                isClone={false}
              />
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex gap-10 px-5">
            {otherSlugs.map((serviceSlug) => (
              <ServiceCard
                key={`${serviceSlug}-clone`}
                serviceSlug={serviceSlug}
                isClone={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
