"use client";

import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/assets/logo.webp";
import Image from "next/image";
import CityTags from "@/components/cityTags";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "./header/CitiesPopup";
import { usePathname } from "next/navigation";

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
    if (pathname) {
      const pathSegments = pathname.split("/");
      if (pathSegments.length > 1 && pathSegments[1]) {
        return pathSegments[1];
      }
    }
    return (
      Object.keys(citiesMap).find((key) => citiesMap[key] === city) ||
      "south-florida"
    );
  };

  const urlCityKey = getCityFromUrl();
  const phoneNumber = getPhoneNumber(city);
  const address = getAddress(city);

  return (
    <div className="w-full flex-col bg-[#312E2C] md:flex">
      <div className="item-center mx-auto flex w-full max-w-[1440px] flex-col justify-start gap-10 px-6 py-[48px] md:px-[40px]">
        <div
          className={cn(
            "paper-bg-16 flex flex-col gap-[96px] rounded-xl bg-[#ebded1] bg-cover bg-center bg-no-repeat p-6 bg-blend-multiply",
          )}
        >
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex w-full items-start justify-between md:flex-row md:justify-start md:gap-30">
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
                  About us
                </Link>
                <Link
                  href="/#promise"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Our promises
                </Link>
                <Link
                  href="/#process"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Our process
                </Link>
                <Link
                  href={`/${urlCityKey}/holiday-light-installation`}
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Holiday lighting
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
                  <FaFacebookF />
                </Link>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                <Link href="https://instagram.com/godlywindows">
                  <FaInstagram />
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
            className="object center h-auto w-[130px] object-contain md:w-[202px]"
          ></Image>
        </div>
      </div>
      <CityTags />
    </div>
  );
};

export default Footer;
