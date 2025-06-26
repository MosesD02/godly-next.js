"use client";

import React from "react";
import logo from "@/assets/logo.webp";
import Image from "next/image";

import QuoteForm from "./quoteForm";

export const getPhoneNumber = (city) => {
  const cityToCheck = city.toUpperCase();

  if (
    [
      "POMPANO BEACH",
      "FORT LAUDERDALE",
      "HOLLYWOOD",
      "OAKLAND PARK",
      "SUNRISE",
      "LIGHTHOUSE POINT",
      "LAUDERDALE-BY-THE-SEA",
      "SOUTH FLORIDA",
    ].includes(cityToCheck)
  ) {
    return "(954) 852-5326";
  } else if (
    [
      "WEST PALM BEACH",
      "DELRAY BEACH",
      "BOCA RATON",
      "TAMARAC",
      "MARGATE",
      "CORAL SPRINGS",
      "PARKLAND",
      "ROYAL PALM BEACH",
      "DEERFIELD BEACH",
      "HILLSBORO BEACH",
    ].includes(cityToCheck)
  ) {
    return "(561) 826-4461";
  } else {
    return "(954) 738-3421";
  }
};

const Footer = () => {
  return (
    <div className="w-full flex-col bg-[#312E2C] md:flex">
      <div className="item-center mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 px-6 py-[48px] md:px-[40px]">
        <div className="flex max-w-[1000px] flex-col items-center justify-center gap-6">
          <h1
            className="text-grain trim my-6 !bg-white text-center text-[18px] leading-[72px] tracking-[4.3px] text-white sm:text-[28px] md:text-[64px]"
            data-text="No hard sells. No spam. Just a fast, honest quote from a local, family-owned business."
          >
            No hard sells. No spam. Just a fast, honest quote from a local,
            family-owned business.
          </h1>
          {/* <p className="text-center font-['satoshi-regular'] text-[20px] font-medium text-white">
            we specialize in window washing, room washing, soft washing, paver
            sealing, and more.
          </p> */}
          <QuoteForm />
        </div>
        <div
          className="justify-content-center align-center flex"
          style={{ justifyContent: "center" }}
        >
          <Image
            src={logo}
            alt="logo"
            className="object center h-auto w-[130px] object-contain md:w-[202px]"
          ></Image>
        </div>
      </div>
      {/* <CityTags /> */}
    </div>
  );
};

export default Footer;
