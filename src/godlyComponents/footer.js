"use client";

import React from "react";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-new.png";
import Image from "next/image";
// import CityTags from "@/components/cityTags";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "./header/CitiesPopup";
import { usePathname } from "next/navigation";

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

const getAddress = (city) => {
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
    ].includes(cityToCheck)
  ) {
    return "3315 E Oakland Park Blvd. Suite 204\nFt. Lauderdale, FL 33308";
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
    return "491 W Camino Real\nBoca Raton, FL 33432";
  } else if ("SOUTH FLORIDA" === cityToCheck) {
    return "";
  } else {
    return "2800 Glades Cir Suite 106\nWeston, FL 33327";
  }
};

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
      "PEMBROKE PINES",
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
  const { city } = useGodlyContext();
  const pathname = usePathname();

  const getCityFromUrl = () => {
    const fallback =
      Object.keys(citiesMap).find((key) => citiesMap[key] === city) ||
      "south-florida";
    if (!pathname) return fallback;
    const pathSegments = pathname.split("/").filter(Boolean);
    const firstSegment = pathSegments[0];
    if (firstSegment && citiesMap[firstSegment]) {
      return firstSegment;
    }
    return fallback;
  };

  const urlCityKey = getCityFromUrl();
  const phoneNumber = getPhoneNumber(city);
  const address = getAddress(city);

  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="flex flex-col items-center justify-center pt-[30px] text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="trim text-center text-[64px] leading-none text-white">
            CITIES
          </h1>
          <span
            className="trim -rotate-[8deg] font-['luminaire-script'] text-[40px] text-[#FFE7AF]"
            style={{
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, " +
                "-2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000",
            }}
          >
            We
          </span>
          <h1 className="trim text-center text-[64px] leading-none text-white">
            SERVE
          </h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-13 px-4 py-[60px] md:grid-cols-5 md:grid-rows-5">
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
              <span className="text-sm md:text-[20px]">
                {city.replace(/_/g, "-")}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 py-8">
          {city === "FORT LAUDERDALE" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Fort
              Lauderdale, FL
            </p>
          )}
          {city === "BOCA RATON" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Boca
              Raton, FL
            </p>
          )}
          {city === "WESTON" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Weston,
              FL
            </p>
          )}
          {city === "POMPANO BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Pompano
              Beach, FL
            </p>
          )}
          {city === "LIGHTHOUSE POINT" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in
              Lighthouse Point, FL
            </p>
          )}
          {city === "PARKLAND" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Parkland,
              FL
            </p>
          )}
          {city === "SOUTHWEST RANCHES" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Southwest
              Ranches, FL
            </p>
          )}
          {city === "DAVIE" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Davie, FL
            </p>
          )}
          {city === "DELRAY BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Delray
              Beach, FL
            </p>
          )}
          {city === "DEERFIELD BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Deerfield
              Beach, FL
            </p>
          )}
          {city === "HILLSBORO BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Hillsboro
              Beach, FL
            </p>
          )}
          {city === "MIAMI" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Miami, FL
            </p>
          )}
          {city === "CORAL SPRINGS" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Coral
              Springs, FL
            </p>
          )}
          {city === "HALLANDALE BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in
              Hallandale Beach, FL
            </p>
          )}
          {city === "MARGATE" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Margate,
              FL
            </p>
          )}
          {city === "PEMBROKE PINES" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Pembroke
              Pines, FL
            </p>
          )}
          {city === "SUNRISE" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Sunrise,
              FL
            </p>
          )}
          {city === "PLANTATION" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in
              Plantation, FL
            </p>
          )}
          {city === "TAMARAC" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Tamarac,
              FL
            </p>
          )}
          {city === "HOLLYWOOD" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in
              Hollywood, FL
            </p>
          )}
          {city === "MIRAMAR" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Miramar,
              FL
            </p>
          )}
          {city === "WEST PALM BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in West Palm
              Beach, FL
            </p>
          )}
          {city === "LAUDERDALE-BY-THE-SEA" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in
              Lauderdale-by-the-Sea, FL
            </p>
          )}
          {city === "OAKLAND PARK" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Oakland
              Park, FL
            </p>
          )}
          {city === "ROYAL PALM BEACH" && (
            <p className="text-center font-['satoshi-regular'] text-lg text-white/90 md:text-xl">
              Expert Window Cleaning, House Washing & Roof Cleaning in Royal
              Palm Beach, FL
            </p>
          )}
          <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
            Available 24 hours for you
          </h2>
        </div>
      </div>
      <div className="paper-bg-16 w-full flex-col bg-[#262424] md:flex">
        <div className="item-center mx-auto flex w-full max-w-[1440px] flex-col justify-start gap-10 px-6 py-[48px] md:px-[40px]">
          <div
            className={cn(
              "paper-bg-16 flex flex-col gap-[96px] rounded-xl bg-[#ebded1] bg-cover bg-center bg-no-repeat p-6 bg-blend-multiply",
            )}
          >
            <div className="flex flex-col items-start justify-between md:flex-row">
              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-start md:gap-30">
                <div className="flex flex-col gap-2">
                  <h3 className="font-normal tracking-[0.64px] text-[#312E2C] uppercase opacity-60 md:opacity-100">
                    Menu
                  </h3>
                  <Link
                    href="#services"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#about"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/#promise"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Our Promises
                  </Link>
                  <Link
                    href="/#process"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Our Process
                  </Link>
                  <Link
                    href={`/${urlCityKey}/holiday-light-installation`}
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Holiday Lighting
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Terms and Conditions
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-normal tracking-[0.64px] text-[#312E2C] uppercase opacity-60 md:opacity-100">
                    Blog
                  </h3>
                  <Link
                    href="/blog"
                    className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                  >
                    Latest Tips & Insights
                  </Link>
                </div>
              </div>

              <div className="hidden flex-col gap-2 text-right md:flex md:items-end">
                <p className="font-['satoshi-regular'] text-lg font-normal">
                  <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                </p>
                <Link href="mailto:hello@godlywindows.com">
                  <p className="font-['satoshi-regular'] text-sm font-normal">
                    hello@godlywindows.com
                  </p>
                </Link>
              </div>
            </div>
            <div className="item-center flex justify-between">
              <div className="flex gap-2 md:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                  <Link href="https://facebook.com/godlywindows">
                    <Facebook size={20} />
                  </Link>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                  <Link href="https://instagram.com/godlywindows">
                    <Instagram size={20} />
                  </Link>
                </div>
              </div>
              <div className="font-['satoshi-regular'] text-sm font-normal text-[#312E2C]">
                {address &&
                  address
                    .split("\n")
                    .map((line, index) => <p key={index}>{line}</p>)}
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Footer;
