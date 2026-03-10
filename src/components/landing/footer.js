"use client";

import React from "react";
import logo from "@/assets/logo-new.png";
import Image from "next/image";
import Link from "next/link";

import QuoteForm from "./quoteForm";

const citiesData = [
  "BOCA RATON",
  "CORAL SPRINGS",
  "DAVIE",
  "DEERFIELD BEACH",
  "DELRAY BEACH",
  "FORT LAUDERDALE",
  "HALLANDALE BEACH",
  "HILLSBORO BEACH",
  "HOLLYWOOD",
  "LAUDERDALE-BY-THE_SEA",
  "LIGHTHOUSE POINT",
  "MARGATE",
  "MIAMI",
  "MIRAMAR",
  "OAKLAND PARK",
  "PARKLAND",
  "PEMBROKE PINES",
  "PLANTATION",
  "POMPANO BEACH",
  "ROYAL PALM BEACH",
  "SOUTHWEST RANCHES",
  "SUNRISE",
  "TAMARAC",
  "WEST PALM BEACH",
  "WESTON",
];

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

const Footer = ({ form = true, service }) => {
  return (
    <>
      <div className="paper-bg-16 bg-[#262424]">
        <div className="flex flex-col items-center justify-center pt-[30px] text-white">
          <div className="relative flex w-full items-center justify-center">
            <h1 className="trim text-whites max-w-[200px] text-center text-[64px] leading-[80px] sm:max-w-[40px]">
              CITIES SERVE
            </h1>
            <span
              className="trim absolute top-[23px] left-[170px] h-full w-full -rotate-[8deg] font-['luminaire-script'] text-[40px] text-[#FFE7AF] sm:-top-[55px] sm:left-6 sm:translate-x-1/2"
              style={{
                textShadow:
                  "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, " +
                  "-2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000",
              }}
            >
              We
            </span>
          </div>
          <div className="grid grid-cols-2 grid-rows-13 px-4 py-[60px] md:grid-cols-5 md:grid-rows-5 md:px-0">
            {citiesData.slice(0, 25).map((city, index) => (
              <Link
                key={index}
                href={`/${city.toLowerCase().replace(/\s+/g, "-").replace(/_/g, "-")}`}
                className="padding-12 align-self-stretch flex items-center gap-3"
                style={{
                  display: "flex",
                  padding: "12px 0",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                  color: "#FFF",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <span className="text-sm md:text-[20px]">{city}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-8">
          <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
            Available 24 hours for you
          </h2>
        </div>
      </div>
      <div className="w-full flex-col bg-[#312E2C] md:flex">
        <div className="item-center mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 px-6 py-[48px] md:px-[40px]">
          {form && (
            <div className="flex max-w-[1000px] flex-col items-center justify-center gap-6">
              <h4
                className="text-grain trim my-6 !bg-white text-center text-[18px] leading-[72px] tracking-[4.3px] text-white sm:text-[28px] md:text-[64px]"
                data-text="No hard sells. No spam. Just a fast, honest quote from a local, family-owned business."
              >
                No hard sells. No spam. Just a fast, honest quote from a local,
                family-owned business.
              </h4>
              {/* <p className="text-center font-['satoshi-regular'] text-[20px] font-medium text-white">
            we specialize in window washing, room washing, soft washing, paver
            sealing, and more.
          </p> */}
              <QuoteForm service={service} />
            </div>
          )}
          <div
            className="justify-content-center align-center flex"
            style={{ justifyContent: "center" }}
          >
            <Image
              src={logo}
              alt="logo"
              className="object center h-auto w-[117px] object-contain md:w-[182px]"
            ></Image>
          </div>
        </div>
        {/* <CityTags /> */}
      </div>
    </>
  );
};

export default Footer;
