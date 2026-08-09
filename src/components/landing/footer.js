"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { brandLogo } from "@/lib/brand-assets";
import Image from "@/components/Image";
import Link from "next/link";

import QuoteForm from "./quoteForm";
import { citiesMap } from "@/data/cities";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "@/lib/getPhoneNumber";
import { getOfficeAddressMultilineForPhone } from "@/data/metaTitles";

const citiesData = Object.entries(citiesMap).filter(
  ([citySlug]) => citySlug !== "south-florida",
);

const Footer = ({ form = true, service }) => {
  const { city } = useGodlyContext();
  const pathname = usePathname();
  const phoneNumber = getPhoneNumber(city, pathname);
  const address = getOfficeAddressMultilineForPhone(phoneNumber);

  return (
    <>
      <div className="paper-bg-16 bg-[#262424]">
        <div className="flex flex-col items-center justify-center pt-7.5 text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="trim text-center text-[64px] leading-none text-white">
              CITIES
            </div>
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
            <div className="trim text-center text-[64px] leading-none text-white">
              SERVE
            </div>
          </div>
          <div className="grid w-full max-w-6xl grid-cols-2 gap-x-6 px-4 py-15 md:grid-cols-3 md:px-0 lg:grid-cols-4">
            {citiesData.map(([citySlug, displayName]) => (
              <Link
                key={citySlug}
                href={`/${citySlug}`}
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
                <span className="text-sm md:text-[20px]">{displayName}</span>
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
        <div className="item-center mx-auto flex w-full max-w-360 flex-col items-center justify-center gap-10 px-6 py-12 md:px-10">
          {form && (
            <div className="flex max-w-250 flex-col items-center justify-center gap-6">
              <h4
                className="text-grain trim my-6 bg-white! text-center text-[18px] leading-18 tracking-[4.3px] text-white sm:text-[28px] md:text-[64px]"
                data-text="No hard sells. No spam. Just a fast, honest quote from a local, family-owned business."
              >
                No hard sells. No spam. Just a fast, honest quote from a local,
                family-owned business.
              </h4>
              {/* <p className="text-center font-['satoshi-regular'] text-[20px] font-medium text-white">
            we specialize in window washing, room washing, soft washing, paver
            sealing, and more.
          </p> */}
              <QuoteForm service={service} formTrackingId="footer" />
            </div>
          )}
          <div
            className="justify-content-center align-center flex flex-col items-center gap-4"
            style={{ justifyContent: "center" }}
          >
            <Image
              src={brandLogo}
              alt="logo"
              className="object center h-auto w-29.25 object-contain md:w-45.5"
            ></Image>
            <address className="text-center font-['satoshi-regular'] text-sm leading-relaxed font-normal text-white not-italic">
              {address.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </address>
          </div>
        </div>
        {/* <CityTags /> */}
      </div>
    </>
  );
};

export default Footer;
