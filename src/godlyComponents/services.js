"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceButton from "@/components/servicebutton";
import Image from "@/components/Image";
import textWaveBg from "@/assets/text-bg-wave.webp";
import Cap from "@/assets/santaCap.webp";
import Santa from "@/assets/santa.webp";
import Link from "next/link";
import { citiesMap } from "@/data/cities";

import { servicesData } from "./servicesData";

const Services = ({ cityName: city, citySlug }) => {
  const cityKeyFromName = Object.keys(citiesMap).find(
    (key) => citiesMap[key] === city,
  );
  const cityKey = citySlug || cityKeyFromName;

  return (
    <div className="paper-bg-16 relative overflow-clip bg-[#262424]">
      <div className="relative flex min-h-screen flex-col items-center gap-[37px] px-6 sm:px-8 md:gap-20 md:px-6 md:py-24 lg:px-10 lg:py-28 xl:px-12 xl:py-32">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="with-text trim hidden rotate-[-4.74deg] transform text-center font-['luminaire-script'] text-[24px] text-[#FDE4C8] underline sm:text-[26px] md:flex md:text-[28px] lg:text-[30px] xl:text-[32px]">
            We are
          </span>
          <div className="flex flex-col items-center justify-center">
            <div className="text-trim flex items-end">
              <div
                className="text-grain font-marlton bg-white! text-[32px] tracking-[3.84px] sm:text-[40px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
                data-text="MORE THAN"
              >
                MORE THAN
              </div>
              <span
                className="text-grain ms-2 mb-1 bg-white! text-sm tracking-[1.2px] sm:text-base md:ms-[21px] md:mb-3 md:text-[20px] lg:text-[22px] xl:text-[24px]"
                data-text="JUST"
              >
                JUST
              </span>
            </div>
            <span
              className="text-grain font-marlton -mt-2 bg-white! text-[32px] tracking-[3.84px] sm:text-[40px] md:-mt-5 md:text-[64px] lg:text-[72px] xl:text-[80px]"
              data-text="WINDOW WASHERS"
            >
              WINDOW WASHERS
            </span>
          </div>

          <p className="text-trim hidden text-center font-[satoshi-regular] text-[24px] leading-[115%] text-white/60 sm:text-[20px] md:block md:text-[24px] lg:text-[26px] xl:text-[28px]">
            {city === "PARKLAND" ? (
              <>Your full-service exterior cleaning team in Parkland.</>
            ) : city === "COCONUT CREEK" ? (
              <>Your full-service exterior cleaning team in Coconut Creek.</>
            ) : city === "COOPER CITY" ? (
              <>Your full-service exterior cleaning team in Cooper City.</>
            ) : city === "WEST PARK" ? (
              <>Your full-service exterior cleaning team in West Park.</>
            ) : city === "FORT LAUDERDALE" ? (
              <>Your full-service exterior cleaning team in Fort Lauderdale.</>
            ) : city === "LIGHTHOUSE POINT" ? (
              <>Your full-service exterior cleaning team in Lighthouse Point.</>
            ) : city === "SOUTHWEST RANCHES" ? (
              <>
                Your full-service exterior cleaning team in Southwest Ranches.
              </>
            ) : city === "CORAL SPRINGS" ? (
              <>Your full-service exterior cleaning team in Coral Springs.</>
            ) : city === "HALLANDALE BEACH" ? (
              <>Your full-service exterior cleaning team in Hallandale Beach.</>
            ) : city === "MARGATE" ? (
              <>Your full-service exterior cleaning team in Margate.</>
            ) : city === "PEMBROKE PINES" ? (
              <>Your full-service exterior cleaning team in Pembroke Pines.</>
            ) : city === "SUNRISE" ? (
              <>Your full-service exterior cleaning team in Sunrise, FL.</>
            ) : city === "DAVIE" ? (
              <>Your full-service exterior cleaning team in Davie.</>
            ) : city === "DELRAY BEACH" ? (
              <>Your full-service exterior cleaning team in Delray Beach.</>
            ) : city === "HILLSBORO BEACH" ? (
              <>Your full-service exterior cleaning team in Hillsboro Beach.</>
            ) : city === "PLANTATION" ? (
              <>Your full-service exterior cleaning team in Plantation, FL.</>
            ) : city === "TAMARAC" ? (
              <>Your full-service exterior cleaning team in Tamarac, FL.</>
            ) : city === "DEERFIELD BEACH" ? (
              <>Your full-service exterior cleaning team in Deerfield Beach.</>
            ) : city === "HOLLYWOOD" ? (
              <>Your full-service exterior cleaning team in Hollywood, FL.</>
            ) : city === "MIRAMAR" ? (
              <>Your full-service exterior cleaning team in Miramar, FL.</>
            ) : city === "POMPANO BEACH" ? (
              <>Your full-service exterior cleaning team in Pompano Beach.</>
            ) : city === "LAUDERDALE-BY-THE-SEA" ? (
              <>
                Your full-service exterior cleaning team in
                Lauderdale-by-the-Sea.
              </>
            ) : city === "OAKLAND PARK" ? (
              <>Your full-service exterior cleaning team in Oakland Park.</>
            ) : city === "WESTON" ? (
              <>Your full-service exterior cleaning team in Weston.</>
            ) : city === "ROYAL PALM BEACH" ? (
              <>Your full-service exterior cleaning team in Royal Palm Beach.</>
            ) : (
              <>Godly can clean nearly all components of <br />your home or building&apos;s exterior.</>
            )}
          </p>
        </div>
        <ServicesGrid citySlug={citySlug} />
      </div>

      <div
        id="holiday"
        className="paper-bg-16 relative flex flex-col items-center justify-center gap-20 overflow-clip bg-[#262424] bg-contain bg-bottom bg-no-repeat px-6 pt-[100px] bg-blend-soft-light md:p-6"
      >
        <div className="pointer-events-none absolute inset-0 overflow-clip opacity-25">
          <Image
            src="/assets/santa-bg-sparkle.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="mt-4 mb-[164px] flex flex-col items-center justify-center gap-9 md:mb-[220px] md:max-w-[741px]">
          <div className="flex flex-col items-center justify-center gap-[35px]">
            <div className="relative max-w-[359px] md:max-w-full md:min-w-full">
              <h2 className="relative text-center font-['satoshi-black'] text-[32px] leading-[130%] text-[#FDE4C8] md:text-[96px]">
                {city === "PARKLAND"
                  ? "Holiday Lights Without the Ladder"
                  : city === "COCONUT CREEK"
                    ? "Holiday Lights Without the Ladder"
                    : city === "COOPER CITY"
                      ? "Holiday Lights Without the Ladder"
                      : city === "WEST PARK"
                        ? "Holiday Lights Without the Ladder"
                        : city === "PEMBROKE PINES"
                          ? "Holiday Lights Without the Ladder"
                          : city === "SUNRISE"
                            ? "Holiday Lights Without the Ladder"
                            : city === "DAVIE"
                              ? "Holiday Lights Without the Ladder"
                              : city === "DELRAY BEACH"
                                ? "Holiday Lights Without the Ladder"
                                : city === "HILLSBORO BEACH"
                                  ? "Holiday Lights Without the Ladder"
                                  : city === "PLANTATION"
                                    ? "Holiday Lights Without the Ladder"
                                    : city === "TAMARAC"
                                      ? "Holiday Lights Without the Ladder"
                                      : city === "DEERFIELD BEACH"
                                        ? "Holiday Lights Without the Ladder"
                                        : city === "HOLLYWOOD"
                                          ? "Holiday Lights Without the Ladder"
                                          : city === "MIRAMAR"
                                            ? "Holiday Lights Without the Ladder"
                                            : city === "POMPANO BEACH"
                                              ? "Holiday Lights Without the Ladder"
                                              : city === "LAUDERDALE-BY-THE-SEA"
                                                ? "Holiday Lights Without the Ladder"
                                                : city === "OAKLAND PARK"
                                                  ? "Holiday Lights Without the Ladder"
                                                  : city === "WESTON"
                                                    ? "Holiday Lights Without the Ladder"
                                                    : city ===
                                                        "ROYAL PALM BEACH"
                                                      ? "Holiday Lights Without the Ladder"
                                                      : "Holiday Light Installation"}
                <Image
                  src={Cap}
                  height={102}
                  width={102}
                  alt="holiday santa hat decoration"
                  className="pointer-events-none absolute -top-11 left-6 scale-50 md:-top-6 md:-left-1 md:scale-100"
                />
              </h2>

              <div className="absolute right-15 -bottom-5 px-2 text-xs text-nowrap text-black md:right-15 md:bottom-0 md:text-sm">
                <div className="relative">
                  <Image
                    src={textWaveBg}
                    height={400}
                    width={400}
                    alt=""
                    className="absolute top-1/2 left-0 z-10 w-[calc(100%+32px)] -translate-y-1/2"
                  />
                  <p className="relative z-20 mx-2 -rotate-5 pb-0.5">{city}</p>
                </div>
              </div>
            </div>
            <p className="max-w-[359px] text-center font-['satoshi-light'] text-sm font-light tracking-wide text-[#FDE4C8] md:max-w-[600px] md:text-lg">
              {city === "PARKLAND" ? (
                <>
                  Looking for{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Parkland
                  </Link>
                  ? We deliver flawless holiday lighting services—outdoor
                  displays, xmas lights, and full décor setups that make your
                  home shine.
                </>
              ) : city === "COCONUT CREEK" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Coconut Creek
                  </Link>{" "}
                  just got easier. We install outdoor Christmas lights and
                  custom holiday displays—no ladders, no stress, just sparkling
                  results.
                </>
              ) : city === "COOPER CITY" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Cooper City
                  </Link>{" "}
                  just got easier. We install outdoor Christmas lights and
                  custom holiday displays—no ladders, no stress, just sparkling
                  results.
                </>
              ) : city === "WEST PARK" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in West Park
                  </Link>{" "}
                  just got easier. We install outdoor Christmas lights and
                  custom holiday displays—no ladders, no stress, just sparkling
                  results.
                </>
              ) : city === "FORT LAUDERDALE" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Fort Lauderdale
                  </Link>{" "}
                  just got easier. We install outdoor Christmas lights and
                  custom holiday displays—no ladders, no stress, just sparkling
                  results.
                </>
              ) : city === "LIGHTHOUSE POINT" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Looking for holiday light installers near me?
                  </Link>{" "}
                  We handle xmas light installation, outdoor lighting
                  installation, and full holiday displays in Lighthouse
                  Point—stress-free and spectacular.
                </>
              ) : city === "SOUTHWEST RANCHES" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Southwest Ranches
                  </Link>{" "}
                  made stress-free. We design and install custom holiday
                  lighting for your home or property—safe, stunning, and
                  storage-free every year.
                </>
              ) : city === "CORAL SPRINGS" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Coral Springs
                  </Link>{" "}
                  made simple and safe. We handle installation, maintenance, and
                  seasonal removal—letting you enjoy stunning displays without
                  the hassle.
                </>
              ) : city === "HALLANDALE BEACH" ? (
                <>
                  Enjoy professional{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    holiday light installation in Hallandale Beach
                  </Link>
                  . We install outdoor Christmas lights and seasonal displays
                  that light up your home—safely, beautifully, and hassle-free.
                </>
              ) : city === "MARGATE" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Margate
                  </Link>{" "}
                  with zero stress. We install outdoor holiday lighting that
                  brings your home to life—timely, safe, and fully handled by
                  experienced professionals.
                </>
              ) : city === "PEMBROKE PINES" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Pembroke Pines
                  </Link>{" "}
                  done right. From rooflines to lawns, we install custom outdoor
                  Christmas lights with precision—no ladders, no storage, no
                  mess.
                </>
              ) : city === "SUNRISE" ? (
                <>
                  Celebrate brighter with{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Sunrise
                  </Link>
                  . Our team delivers full-service outdoor holiday lighting—from
                  setup to removal, it&apos;s holiday magic made easy.
                </>
              ) : city === "DAVIE" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Davie
                  </Link>{" "}
                  tailored to your space. We create glowing displays with
                  outdoor Christmas lights that capture the
                  season—professionally installed, worry-free.
                </>
              ) : city === "DELRAY BEACH" ? (
                <>
                  Make your Delray Beach home shine with outdoor Christmas
                  lights. We offer complete holiday light installation—custom
                  design, safe setup, and no post-season storage worries.
                </>
              ) : city === "HILLSBORO BEACH" ? (
                <>
                  Outdoor holiday light installation in Hillsboro Beach made
                  easy. From classic Christmas lights to custom seasonal
                  designs, we deliver bright, secure, and stunning results every
                  time.
                </>
              ) : city === "PLANTATION" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Plantation
                  </Link>{" "}
                  with no hassle. We handle outdoor Christmas lights, seasonal
                  displays, and safe removal—so your home shines without the
                  stress.
                </>
              ) : city === "TAMARAC" ? (
                <>
                  Get{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    holiday light installation in Tamarac
                  </Link>{" "}
                  from trusted local pros. From Christmas lights to seasonal
                  yard displays, we make your home sparkle—safely, beautifully,
                  and on time.
                </>
              ) : city === "DEERFIELD BEACH" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Deerfield Beach
                  </Link>{" "}
                  that&apos;s safe and stylish. We set up outdoor lights and décor
                  that transform your space—without ladders, hassle, or delay.
                </>
              ) : city === "HOLLYWOOD" ? (
                <>
                  Outdoor{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Hollywood
                  </Link>
                  , done professionally. We handle design, setup, and
                  take-down—so your holidays shine without lifting a finger.
                </>
              ) : city === "MIRAMAR" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Miramar holiday light installation
                  </Link>{" "}
                  made easy. We install custom Christmas lighting outdoors with
                  safe setup, sparkling results, and no stress about ladders or
                  tangled wires.
                </>
              ) : city === "POMPANO BEACH" ? (
                <>
                  Bring your holiday vision to life with{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Pompano Beach
                  </Link>
                  . We install outdoor lights and displays that brighten your
                  home—safely and professionally.
                </>
              ) : city === "LAUDERDALE-BY-THE-SEA" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Holiday light installation in Lauderdale-by-the-Sea
                  </Link>
                  , handled start to finish. We install outdoor Christmas lights
                  that bring your home to life—safe, clean, and stunning.
                </>
              ) : city === "OAKLAND PARK" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Oakland Park
                  </Link>{" "}
                  that&apos;s professional and stress-free. We handle outdoor holiday
                  lighting and décor—no ladders, no hassle, just brilliant
                  results for your home or business.
                </>
              ) : city === "WESTON" ? (
                <>
                  Weston&apos;s go-to for{" "}
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    holiday light installation
                  </Link>
                  . We install outdoor Christmas lights that transform your
                  space—professionally done, no hassle, just festive brilliance.
                </>
              ) : city === "ROYAL PALM BEACH" ? (
                <>
                  <Link
                    href={`/${cityKey}/holiday-lighting`}
                    className="underline decoration-current decoration-solid transition-colors hover:text-white"
                  >
                    Christmas light installation in Royal Palm Beach
                  </Link>{" "}
                  made simple. We design and install holiday lighting that turns
                  your home into a seasonal showpiece—safe, fast, and sparkling.
                </>
              ) : (
                <>
                  Christmas light installation, done for you. Forget the ladder
                  and the hassle of storing lights each year. Let us light up
                  your home or business once, and you&apos;ll never want to go
                  back to doing it yourself.
                </>
              )}
            </p>
            <Link href={`/${cityKey}/holiday-lighting`}>
              <Button className="trim flex h-auto cursor-pointer rounded-[6.32px] bg-white p-3 font-[satoshi-bold] text-sm text-[10px] text-[312E2C] hover:bg-white/80 md:px-4 md:py-[14px] md:text-sm">
                What We Offer
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="pointer-events-none absolute bottom-16 md:bottom-6"
        src={Santa}
        height={"100%"}
        width={"100%"}
        alt="santa claus holiday decoration"
      ></Image>
    </div>
  );
};

export default Services;

function ServicesGrid({ citySlug: citySlugProp }) {
  const [activeCard, setActiveCard] = React.useState(null);

  // Toggle card active state when clicked/tapped
  const toggleCard = (idx) => {
    setActiveCard((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { city } = useGodlyContext();

  const cityKeyFromContext = Object.keys(citiesMap).find(
    (key) => citiesMap[key] === city,
  );
  const cityKey = citySlugProp || cityKeyFromContext;

  // City-specific service descriptions
  const getParklandServiceDescription = (serviceName) => {
    const parklandDescriptions = {
      "Exterior Window Cleaning":
        "Parkland's pollen and dust don't stand a chance. Our RainShield™ process leaves your glass spotless and gleaming.",
      "Interior Window Cleaning":
        "From fingerprints to haze, we restore your interior windows with streak-free precision; no drips, no damage.",
      "Gutter Cleaning":
        "Avoid water damage by clearing out leaves and roof debris. We keep your gutters flowing before the next Parkland rain.",
      "House Washing":
        "Soft-wash siding, brick, and stucco to remove algae, mold, and surface stains; perfect for Parkland homes near greenery.",
      "Roof Washing":
        "Our gentle roof cleaning removes algae, mold and debris, extending the life and look of your shingles,metal or tile roof..",
      "Pressure & Soft Washing":
        "We clean driveways, patios, and pavers with care; power where needed, soft wash where it counts.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Restore brilliance to your lanterns, pendants, and exterior fixtures with our safe and careful clean.",
      "Screen Cleaning":
        "We remove film, pollen, spider webs and mildew from screen rooms and pool cages; keeping your views and airflow clear.",
      "Solar Panel Cleaning":
        "Dust and debris lower efficiency. We clean solar panels to maximize output and energy savings.",
      "Paver Sealing":
        "Seal in beauty and strength. We deep clean and seal your driveway, pool deck, or patio for lasting protection and aesthetic sheen.",
    };

    return parklandDescriptions[serviceName] || null;
  };

  const getFortLauderdaleServiceDescription = (serviceName) => {
    const fortLauderdaleDescriptions = {
      "Exterior Window Cleaning":
        "Wash away salt air, grime, and pollution with our RainShield™-enhanced exterior window cleaning. Perfect for Fort Lauderdale's waterfront and inland homes.",
      "Interior Window Cleaning":
        "From ocean mist to kitchen smears, we restore your indoor glass to a sparkling, streak-free finish.",
      "Gutter Cleaning":
        "Don't let clogs lead to costly water damage. We keep your gutters flowing through Fort Lauderdale's rainy season.",
      "House Washing":
        "Brighten your home's exterior with our gentle soft wash that safely removes mildew, dirt, and algae from stucco, siding, or brick.",
      "Roof Washing":
        "Extend the life of your tile or shingle roof by clearing away black streaks, moss, and debris using our low-pressure method.",
      "Pressure & Soft Washing":
        "Whether it's a weather-worn driveway or delicate pavers, we tailor our cleaning pressure to protect your surfaces while restoring their shine.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Let your chandeliers, sconces, and lanterns shine again with our careful, detailed clean—indoors or outdoors.",
      "Screen Cleaning":
        "We safely remove grime, mildew, and buildup from screened patios and pool enclosures for clear views and fresh airflow.",
      "Solar Panel Cleaning":
        "Keep your solar system performing efficiently by removing the dust and residue that reduce energy output.",
      "Paver Sealing":
        "We clean and seal driveways, walkways, and patios—protecting them from UV rays, moisture, and wear for a fresh, lasting look.",
    };

    return fortLauderdaleDescriptions[serviceName] || null;
  };

  const getLighthousePointServiceDescription = (serviceName) => {
    const lighthousePointDescriptions = {
      "Exterior Window Cleaning":
        "Protect your views and your investment. Our RainShield™ window cleaning eliminates buildup from salt, moisture, and dirt—perfect for waterfront and inland homes alike.",
      "Interior Window Cleaning":
        "We remove fingerprints, kitchen grease, and smears from indoor glass surfaces, restoring clarity without using harsh chemicals.",
      "Gutter Cleaning":
        "We clear out leaves and buildup to prevent overflow and damage, keeping your drainage working through every South Florida storm.",
      "House Washing":
        "Gentle on paint but tough on grime—our soft wash treatment removes mold and mildew from your siding or stucco, safely and effectively.",
      "Roof Washing":
        "Extend the life of your roof by clearing black streaks and algae with our low-pressure, tile-safe cleaning system.",
      "Pressure & Soft Washing":
        "Whether your surfaces need power or precision, we safely clean driveways, walkways, and patios based on the material.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We clean chandeliers, sconces, and outdoor lights—restoring brilliance without damaging delicate features.",
      "Screen Cleaning":
        "Enjoy better airflow and views with screens free of grime, mildew, and haze. Ideal for Lighthouse Point's breezy coastal living.",
      "Solar Panel Cleaning":
        "Boost solar output by clearing dust, pollen, and salt residue from panels. Cleaner panels mean better energy efficiency.",
      "Paver Sealing":
        "We clean, seal, and protect pavers from sun, rain, and wear—enhancing curb appeal and extending surface life.",
    };

    return lighthousePointDescriptions[serviceName] || null;
  };

  const getSouthwestRanchesServiceDescription = (serviceName) => {
    const southwestRanchesDescriptions = {
      "Exterior Window Cleaning":
        "Tackle the outdoor elements with our RainShield™ exterior window service, ideal for ranch-style homes and wide-span windows.",
      "Interior Window Cleaning":
        "We clean interior windows of all shapes and sizes—removing smudges, dust, and buildup with care and a streak-free finish.",
      "Gutter Cleaning":
        "Prevent flooding and foundation issues by clearing your gutters of leaves, debris, and pine needles common in larger rural properties.",
      "House Washing":
        "Soft-wash treatments clean away mold, mildew, and algae without harming your siding, trim, or exterior finishes.",
      "Roof Washing":
        "Preserve the value and lifespan of your roof by removing stains, grime, and algae buildup with our gentle low-pressure method.",
      "Pressure & Soft Washing":
        "Whether it's concrete, barn walkways, or patios, we clean all outdoor surfaces using the correct pressure for each material.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Our team restores clarity and brightness to both interior chandeliers and outdoor lighting features.",
      "Screen Cleaning":
        "From pool cages to porch screens, we gently remove buildup, letting light and fresh air back into your space.",
      "Solar Panel Cleaning":
        "We remove residue, pollen, and dust that reduce solar panel efficiency—ensuring you get the most from your investment.",
      "Paver Sealing":
        "Clean and seal your walkways, driveways, and patios to protect against Florida's heat, humidity, and rainfall.",
    };

    return southwestRanchesDescriptions[serviceName] || null;
  };

  const getCoralSpringsServiceDescription = (serviceName) => {
    const coralSpringsDescriptions = {
      "Exterior Window Cleaning":
        "Clear away Coral Springs' dust, pollen, and climate buildup with our RainShield™ exterior window cleaning—ideal for homes and businesses.",
      "Interior Window Cleaning":
        "We remove smudges, fingerprints, and indoor haze from interior windows with precision—no drips, no damage, just clarity.",
      "Gutter Cleaning":
        "Prevent costly water damage by clearing gutters of leaves and debris—keeping your drainage system ready for Florida's storms.",
      "House Washing":
        "Our gentle soft wash removes mold, mildew, and stains from siding and stucco—perfect for Coral Springs' subtropical climate.",
      "Roof Washing":
        "Extend roof life by safely removing black streaks, algae, and debris using our low-pressure cleaning method.",
      "Pressure & Soft Washing":
        "We clean driveways, walkways, and patios with the right pressure for each surface—powerful where needed, gentle where it counts.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Restore brilliance to chandeliers, sconces, and outdoor lights with our careful, detailed cleaning process.",
      "Screen Cleaning":
        "Keep your views clear and air flowing with screens free of buildup, pollen, and mildew—perfect for Coral Springs living.",
      "Solar Panel Cleaning":
        "Maximize energy output by removing dust, pollen, and debris that reduce solar panel efficiency and performance.",
      "Paver Sealing":
        "We deep clean and seal pavers, driveways, and patios—protecting them from sun, rain, and wear for a lasting, polished look.",
    };

    return coralSpringsDescriptions[serviceName] || null;
  };

  const getHallandaleBeachServiceDescription = (serviceName) => {
    const hallandaleBeachDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ window service combats coastal elements like salt and humidity, keeping your glass crystal-clear and longer lasting.",
      "Interior Window Cleaning":
        "We remove smudges, fingerprints, and haze from the inside—leaving a clean finish on all your glass surfaces without any chemical residue.",
      "Gutter Cleaning":
        "We clean out your gutters to prevent water damage from Hallandale's frequent rainstorms and leaf buildup.",
      "House Washing":
        "Our soft wash method lifts mold, algae, and dirt off your stucco or siding—gently restoring your home's fresh look.",
      "Roof Washing":
        "Protect and brighten your roof by clearing away black streaks and buildup using our low-pressure roof-safe system.",
      "Pressure & Soft Washing":
        "We restore the beauty of driveways, pavers, and patios with the right pressure for each surface—powerful on stone, gentle on paint.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Indoor and outdoor lights regain their glow with our detailed and damage-free fixture cleaning service.",
      "Screen Cleaning":
        "We clean screen enclosures and lanai cages to remove mold, film, and buildup—perfect for open-air living near the coast.",
      "Solar Panel Cleaning":
        "Maximize energy output by removing dust, pollen, and salt deposits from your solar panels.",
      "Paver Sealing":
        "We deep-clean and seal your walkways, driveways, and patios to protect against UV damage, staining, and erosion.",
    };

    return hallandaleBeachDescriptions[serviceName] || null;
  };

  const getMargateServiceDescription = (serviceName) => {
    const margateDescriptions = {
      "Exterior Window Cleaning":
        "Protect your views and boost your curb appeal. Our RainShield™ window cleaning cuts through grime, hard water, and outdoor buildup.",
      "Interior Window Cleaning":
        "We safely clean indoor glass surfaces—removing smudges, haze, and residue without damaging trim or flooring.",
      "Gutter Cleaning":
        "We clear your gutters of leaves, dirt, and blockages to prevent overflow and structural water damage.",
      "House Washing":
        "Our soft wash system removes algae, mildew, and dirt without damaging siding, stucco, or paint—restoring your home's brightness.",
      "Roof Washing":
        "We use low-pressure equipment to lift off black streaks, lichen, and roof grime—preserving shingles and enhancing appearance.",
      "Pressure & Soft Washing":
        "We clean driveways, entryways, patios, and walkways with precision—adjusting pressure based on surface needs.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Let your lights shine again. We clean chandeliers, sconces, and exterior fixtures with care and attention to detail.",
      "Screen Cleaning":
        "We remove mold, dust, and mildew from screened patios and pool cages to restore airflow and visibility.",
      "Solar Panel Cleaning":
        "Improve your system's energy output by clearing away dust, pollen, and surface buildup.",
      "Paver Sealing":
        "Clean and seal your pavers to protect against wear, weather, and staining—perfect for driveways and backyard spaces in Margate.",
    };

    return margateDescriptions[serviceName] || null;
  };

  const getPembrokePinesServiceDescription = (serviceName) => {
    const pembrokePinesDescriptions = {
      "Exterior Window Cleaning":
        "Rain, pollen, and neighborhood dust are no match for our RainShield™-enhanced window cleaning—great for single-family homes and condos alike.",
      "Interior Window Cleaning":
        "We clean indoor glass safely and neatly—removing haze, fingerprints, and buildup without damaging trim or surfaces.",
      "Gutter Cleaning":
        "We clear clogs and debris from gutters to protect your roof, walls, and foundation from stormwater damage.",
      "House Washing":
        "Soft-washing removes mildew, grime, and algae from siding, brick, and stucco without causing wear or streaking.",
      "Roof Washing":
        "Extend your roof's life with our gentle, low-pressure wash that eliminates black streaks, lichen, and organic buildup.",
      "Pressure & Soft Washing":
        "From patios to pavers, we restore outdoor surfaces using the right pressure for safe and effective results.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We safely clean interior and exterior light fixtures—including chandeliers, sconces, and porch lights—to restore brilliance.",
      "Screen Cleaning":
        "We clean pool cages, screened porches, and lanai enclosures to improve airflow and bring back clear views.",
      "Solar Panel Cleaning":
        "Remove dust, sap, and buildup to boost solar performance and efficiency with regular cleaning.",
      "Paver Sealing":
        "We deep-clean and seal driveways, walkways, and backyard patios to prevent fading, staining, and water damage.",
    };

    return pembrokePinesDescriptions[serviceName] || null;
  };

  const getSunriseServiceDescription = (serviceName) => {
    const sunriseDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ exterior window service cuts through grime and buildup—perfect for Sunrise homes near highways or tree-covered areas.",
      "Interior Window Cleaning":
        "We leave your indoor glass spotless—removing fingerprints, grease, and smudges without dripping or mess.",
      "Gutter Cleaning":
        "We clean your gutters to prevent overflow, water damage, and erosion—especially important during Sunrise's rainy season.",
      "House Washing":
        "We soft-wash your home's exterior, gently removing algae, mold, and dirt without harming paint or siding.",
      "Roof Washing":
        "Our low-pressure roof wash removes black streaks, mildew, and roof debris while preserving the structure and finish.",
      "Pressure & Soft Washing":
        "We clean walkways, patios, driveways, and more—adjusting pressure to match the surface type for safe, thorough results.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Chandeliers, pendant lights, and outdoor fixtures are safely cleaned and restored to their original clarity and shine.",
      "Screen Cleaning":
        "We clean screen enclosures and lanai cages, removing mildew and film so you can enjoy the view and airflow again.",
      "Solar Panel Cleaning":
        "Improve solar panel performance with routine cleanings that remove dust, dirt, and leaf residue.",
      "Paver Sealing":
        "We deep clean and seal your pavers, extending their life while protecting against fading, weathering, and stains.",
    };

    return sunriseDescriptions[serviceName] || null;
  };

  const getDavieServiceDescription = (serviceName) => {
    const davieDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ exterior window cleaning cuts through dirt and streaks for spotless glass that lasts in Davie's humid climate.",
      "Interior Window Cleaning":
        "We clean interior windows with care—removing fingerprints, smears, and buildup without dripping or mess.",
      "Gutter Cleaning":
        "We clear out leaves, debris, and blockages so your gutters can handle Davie's seasonal rain without overflowing.",
      "House Washing":
        "Soft washing lifts algae, mold, and dirt from your siding, stucco, or brick without causing damage—perfect for Davie homes surrounded by greenery.",
      "Roof Washing":
        "Gentle low-pressure roof cleaning removes black streaks, mildew, and buildup while preserving shingles and tile.",
      "Pressure & Soft Washing":
        "From patios to driveways and walkways, we tailor the pressure for every surface to clean safely and effectively.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We clean indoor and outdoor fixtures—restoring brilliance to chandeliers, sconces, porch lights, and more.",
      "Screen Cleaning":
        "We clean screen enclosures and pool cages to remove mildew and dirt buildup—reviving your outdoor spaces.",
      "Solar Panel Cleaning":
        "Increase solar efficiency by removing layers of dirt, pollen, and residue that block sunlight and reduce output.",
      "Paver Sealing":
        "We deep-clean and seal your pavers to enhance durability and curb appeal while protecting them from weather damage and stains.",
    };

    return davieDescriptions[serviceName] || null;
  };

  const getDeerfieldBeachServiceDescription = (serviceName) => {
    const deerfieldBeachDescriptions = {
      "Exterior Window Cleaning":
        "From salty air to seasonal storms, our RainShield™ window cleaning keeps your glass clear and protected in any part of Deerfield Beach.",
      "Interior Window Cleaning":
        "We clean indoor windows with care—removing fingerprints, grease, and film while protecting your walls and trim.",
      "Gutter Cleaning":
        "Prevent costly roof and foundation issues with routine gutter cleaning—especially before Deerfield's stormy seasons.",
      "House Washing":
        "We soft wash your home's siding, brick, or stucco to remove mold, algae, and dirt—safely and effectively.",
      "Roof Washing":
        "Our low-pressure roof washing removes black streaks, mildew, and organic growth—extending your roof's lifespan and appearance.",
      "Pressure & Soft Washing":
        "From paver patios to driveways and walkways, we clean all surfaces using the right pressure to avoid damage.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Indoor chandeliers or outdoor sconces—we bring back their shine with a careful, detailed cleaning process.",
      "Screen Cleaning":
        "We clean and restore pool cages and screened patios by removing mildew, dirt, and salt film from every surface.",
      "Solar Panel Cleaning":
        "Get the most from your solar setup by keeping panels clear of salt, pollen, and dust buildup.",
      "Paver Sealing":
        "Protect and enhance your pavers with expert sealing—resisting stains, water damage, and sun fading.",
    };
    return deerfieldBeachDescriptions[serviceName] || null;
  };

  const getHollywoodServiceDescription = (serviceName) => {
    const hollywoodDescriptions = {
      "Exterior Window Cleaning":
        "We remove grime, salt spray, and smudges from exterior windows with RainShield™ protection for long-lasting clarity—ideal for homes near the beach or highways.",
      "Interior Window Cleaning":
        "From fingerprints to film, we leave your indoor windows clean and clear—without any drips or damage.",
      "Gutter Cleaning":
        "Keep water flowing freely and avoid drainage problems with routine gutter clearing—especially before rainy season hits Hollywood.",
      "House Washing":
        "We soft wash stucco, siding, or brick to remove mold, algae, and dirt—without pressure damage to your home.",
      "Roof Washing":
        "Our low-pressure roof cleaning removes dark streaks, organic buildup, and debris—extending the life and look of your roof.",
      "Pressure & Soft Washing":
        "We clean driveways, patios, fences, and walkways using the right pressure for every surface to ensure safe, thorough results.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We restore clarity and shine to interior and exterior fixtures—including chandeliers, sconces, porch lights, and more.",
      "Screen Cleaning":
        "We remove mildew, dirt, and haze from screened lanais and pool cages—restoring airflow and clear views.",
      "Solar Panel Cleaning":
        "Keep your solar system running efficiently with regular cleanings that remove salt, dust, and debris.",
      "Paver Sealing":
        "We deep clean and seal your pavers to resist staining, fading, and wear from Florida's heat and rain.",
    };
    return hollywoodDescriptions[serviceName] || null;
  };

  const getMiramarServiceDescription = (serviceName) => {
    const miramarDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ process restores clarity to your windows and shields them from dust, wind, and seasonal buildup across Miramar.",
      "Interior Window Cleaning":
        "We leave your indoor windows crystal clear—removing fingerprints, smudges, and grime without disturbing your home.",
      "Gutter Cleaning":
        "We clean gutters to prevent overflow and drainage issues—especially important during Miramar's rainy months.",
      "House Washing":
        "Our soft wash safely removes algae, mold, and grime from stucco and siding—perfect for keeping Miramar homes fresh and vibrant.",
      "Roof Washing":
        "Protect your shingles or tiles with our low-pressure roof cleaning system that removes black streaks, debris, and moss.",
      "Pressure & Soft Washing":
        "From driveways to walkways, we apply the perfect pressure to lift stains and dirt without damaging your hardscapes.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "From outdoor lights to indoor chandeliers, we bring back the shine without leaving streaks or residue behind.",
      "Screen Cleaning":
        "We clean patio screens and pool enclosures to remove mildew, film, and dust—restoring clear views and airflow.",
      "Solar Panel Cleaning":
        "We safely clean solar panels to improve energy efficiency by removing debris, dust, and environmental buildup.",
      "Paver Sealing":
        "Extend the life of your pavers with professional cleaning and sealing to protect against UV damage, water, and wear.",
    };
    return miramarDescriptions[serviceName] || null;
  };

  const getPompanoBeachServiceDescription = (serviceName) => {
    const pompanoBeachDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ system is designed to combat Pompano's coastal elements—delivering streak-free clarity and lasting shine.",
      "Interior Window Cleaning":
        "From beachside condos to family homes, we remove haze, smudges, and buildup from indoor glass—leaving your space brighter.",
      "Gutter Cleaning":
        "We prevent flooding and water damage by clearing debris and buildup from gutters—critical for homes near the Intracoastal.",
      "House Washing":
        "Our soft wash lifts mold, algae, and grime without harming siding, stucco, or paint—perfect for Pompano's humid climate.",
      "Roof Washing":
        "We gently remove black streaks, roof algae, and debris with a low-pressure wash that protects tile and shingles alike.",
      "Pressure & Soft Washing":
        "Whether it's your driveway, seawall path, or patio, we clean it safely and effectively with surface-appropriate pressure.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We clean indoor and outdoor light fixtures to restore brightness and detail without damage or residue.",
      "Screen Cleaning":
        "We clear salt, dust, and mildew from screened patios and pool enclosures—improving airflow and restoring views.",
      "Solar Panel Cleaning":
        "Keep your solar investment efficient and productive with regular cleanings that remove debris, sand, and salt film.",
      "Paver Sealing":
        "We clean and seal pavers to prevent erosion, fading, and water damage—preserving your home's curb appeal year-round.",
    };
    return pompanoBeachDescriptions[serviceName] || null;
  };

  const getLauderdaleByTheSeaServiceDescription = (serviceName) => {
    const lauderdaleByTheSeaDescriptions = {
      "Exterior Window Cleaning":
        "We fight salt spray, wind-blown debris, and humidity with our RainShield™ process for long-lasting clarity and shine.",
      "Interior Window Cleaning":
        "We carefully clean indoor glass to remove smudges, haze, and buildup—leaving every room brighter and clearer.",
      "Gutter Cleaning":
        "Prevent roof and foundation issues by keeping your gutters free of coastal debris and storm-season buildup.",
      "House Washing":
        "Our soft wash method removes algae, mildew, and stains from stucco, siding, or brick without damaging your paint.",
      "Roof Washing":
        "Our low-pressure roof cleaning lifts black streaks, dirt, and organic buildup—extending the life of tile and shingle roofs.",
      "Pressure & Soft Washing":
        "We clean walkways, driveways, pool decks, and patios—using the proper pressure to safely restore any surface.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Restore brilliance to your indoor and outdoor lighting with our detailed, streak-free fixture cleaning.",
      "Screen Cleaning":
        "We clean screens and pool enclosures to remove mildew and grime—improving views and airflow around your home.",
      "Solar Panel Cleaning":
        "Maximize energy efficiency by removing layers of salt, pollen, and dirt that reduce panel output over time.",
      "Paver Sealing":
        "We clean and seal your pavers to protect them from fading, staining, and erosion—ideal for beachfront or courtyard surfaces.",
    };
    return lauderdaleByTheSeaDescriptions[serviceName] || null;
  };

  const getDelrayBeachServiceDescription = (serviceName) => {
    const delrayBeachDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ process is ideal for Delray's oceanfront and inland homes—removing buildup caused by salt, rain, and wind.",
      "Interior Window Cleaning":
        "We remove smudges, grease, and haze from your indoor glass—leaving your windows spotless and safe for your interiors.",
      "Gutter Cleaning":
        "Prevent costly water damage by keeping gutters free of leaves, sand, and roof debris—especially after seasonal storms.",
      "House Washing":
        "Soft washing safely removes algae, mildew, and dirt from stucco, brick, or siding without damaging surfaces.",
      "Roof Washing":
        "Protect your roof and enhance curb appeal with our low-pressure wash that eliminates black streaks and roof grime.",
      "Pressure & Soft Washing":
        "We clean patios, driveways, pavers, and more—matching pressure to the surface to ensure a deep but safe clean.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "From chandeliers to outdoor lanterns, we clean fixtures with care—restoring their brightness and detail.",
      "Screen Cleaning":
        "Enjoy unobstructed views again. We remove mildew and dirt from screened patios and pool cages for a fresh, clear finish.",
      "Solar Panel Cleaning":
        "Boost solar panel performance by removing dust, salt, and pollen buildup that blocks energy output.",
      "Paver Sealing":
        "Clean and seal your pavers to protect against fading, staining, and wear—ideal for Delray's sun-exposed patios and driveways.",
    };

    return delrayBeachDescriptions[serviceName] || null;
  };

  const getHillsboroBeachServiceDescription = (serviceName) => {
    const hillsboroBeachDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ process removes salt buildup and coastal haze—restoring clarity to your views of the ocean and Intracoastal.",
      "Interior Window Cleaning":
        "We remove streaks, fingerprints, and film from the inside—keeping your interior glass bright and clear without mess.",
      "Gutter Cleaning":
        "Prevent overflow and property damage by clearing debris and sand from gutters—especially important during Hillsboro's storm season.",
      "House Washing":
        "We soft wash stucco, siding, and wood with care—lifting algae, mold, and salt stains without damaging the surface.",
      "Roof Washing":
        "Our low-pressure method safely removes black streaks and roof algae—helping extend the life of your tiles or shingles.",
      "Pressure & Soft Washing":
        "From seawall walkways to driveway pavers, we match the right pressure to each surface for a thorough yet safe clean.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We carefully clean both interior and exterior lighting—restoring brilliance to chandeliers, sconces, and entry lights.",
      "Screen Cleaning":
        "Remove film, mildew, and salt from screened areas—improving visibility and airflow in your lanai or patio enclosure.",
      "Solar Panel Cleaning":
        "Salt, dust, and pollen can lower solar efficiency. We keep your panels clean to maintain peak energy performance.",
      "Paver Sealing":
        "We clean and seal coastal-exposed pavers to protect against weathering, water stains, and salt damage.",
    };

    return hillsboroBeachDescriptions[serviceName] || null;
  };

  const getPlantationServiceDescription = (serviceName) => {
    const plantationDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ process keeps windows clear and streak-free, even in Plantation's tree-covered and moisture-prone neighborhoods.",
      "Interior Window Cleaning":
        "We clean your indoor glass safely and effectively—removing smudges, haze, and fingerprints with a spotless finish.",
      "Gutter Cleaning":
        "Prevent flooding and property damage with regular gutter cleanouts—especially during Plantation's rainy seasons.",
      "House Washing":
        "Our soft wash method removes algae, mildew, and dirt from stucco, brick, or siding without harming paint or landscaping.",
      "Roof Washing":
        "Restore the beauty of your roof and extend its lifespan by removing black streaks and grime using our low-pressure, tile-safe approach.",
      "Pressure & Soft Washing":
        "We clean driveways, walkways, and patios using the appropriate pressure to safely remove dirt and stains without surface damage.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "Chandeliers, sconces, and porch lights are restored to their original clarity with careful, streak-free cleaning.",
      "Screen Cleaning":
        "Enjoy the outdoors again with clean, mildew-free screens and pool enclosures that enhance airflow and visibility.",
      "Solar Panel Cleaning":
        "Maximize solar efficiency by removing buildup, dust, and pollen that block energy production.",
      "Paver Sealing":
        "We deep clean and seal your pavers to protect against moisture, staining, and weather—enhancing curb appeal and surface longevity.",
    };

    return plantationDescriptions[serviceName] || null;
  };

  const getTamaracServiceDescription = (serviceName) => {
    const tamaracDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ cleaning process keeps your windows crystal clear—protecting them from Tamarac's humidity and neighborhood dust.",
      "Interior Window Cleaning":
        "We clean indoor glass safely and precisely—removing haze, fingerprints, and smudges with zero mess.",
      "Gutter Cleaning":
        "Protect your home from overflow and erosion with regular gutter clearing—especially during Tamarac's rainy seasons.",
      "House Washing":
        "We soft wash your home's exterior to lift mildew, algae, and grime without damaging surfaces or landscaping.",
      "Roof Washing":
        "We remove black streaks, organic buildup, and roof stains with a low-pressure system that preserves your roof's structure.",
      "Pressure & Soft Washing":
        "From driveways and patios to pavers and walkways, we tailor our approach to clean thoroughly without surface damage.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We restore clarity to your interior and exterior fixtures—from chandeliers to porch lights—without scratching or damage.",
      "Screen Cleaning":
        "Keep your screened areas fresh and functional. We remove mildew and debris from pool cages and patio enclosures.",
      "Solar Panel Cleaning":
        "Improve solar performance by clearing away dust, leaves, and debris that block energy absorption.",
      "Paver Sealing":
        "We clean and seal your pavers to prevent weather damage, fading, and stains—extending their life and look.",
    };

    return tamaracDescriptions[serviceName] || null;
  };

  const getOaklandParkServiceDescription = (serviceName) => {
    const oaklandParkDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ window cleaning fights through Oakland Park's urban dust and humidity—delivering clear views and lasting cleanliness.",
      "Interior Window Cleaning":
        "We clean your indoor windows with precision—removing fingerprints, smudges, and haze without damaging trim or furnishings.",
      "Gutter Cleaning":
        "Protect your home from water damage by clearing gutters of leaves and debris—especially important during Oakland Park's rainy seasons.",
      "House Washing":
        "Our soft wash method safely removes algae, mold, and dirt from siding and stucco without harming paint or landscaping.",
      "Roof Washing":
        "We use low-pressure cleaning to remove black streaks, algae, and debris—extending the life and appearance of your roof.",
      "Pressure & Soft Washing":
        "From driveways to patios and walkways, we clean all surfaces using the appropriate pressure for safe and effective results.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "We restore brightness to interior and exterior fixtures—from chandeliers to porch lights—with detailed, streak-free cleaning.",
      "Screen Cleaning":
        "We clean screened patios and pool enclosures to remove buildup and mildew—improving airflow and visibility.",
      "Solar Panel Cleaning":
        "Maximize energy efficiency by removing dust, pollen, and debris that reduce solar panel output and performance.",
      "Paver Sealing":
        "We deep clean and seal pavers to protect against staining, fading, and weather damage—enhancing your property's curb appeal.",
    };

    return oaklandParkDescriptions[serviceName] || null;
  };

  const getWestonServiceDescription = (serviceName) => {
    const westonDescriptions = {
      "Exterior Window Cleaning":
        "Our RainShield™ process delivers long-lasting clarity, removing environmental buildup from Weston's landscaped surroundings.",
      "Interior Window Cleaning":
        "We clean indoor glass surfaces with precision—leaving your space brighter and more inviting without damage or streaks.",
      "Gutter Cleaning":
        "Protect your home from water damage by clearing gutters clogged with leaves, roofing grit, and seasonal debris.",
      "House Washing":
        "Soft-wash treatments clean algae, dirt, and mildew from stucco, siding, or brick—without high-pressure risks.",
      "Roof Washing":
        "Our low-pressure roof cleaning removes black streaks, moss, and debris—preserving roof integrity and curb appeal.",
      "Pressure & Soft Washing":
        "We restore walkways, patios, and pavers using the right cleaning method for every surface—safe, powerful, and lasting.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "From outdoor sconces to foyer chandeliers, we clean fixtures thoroughly—restoring light and brilliance.",
      "Screen Cleaning":
        "We remove haze, mildew, and dirt from screened lanais and pool enclosures—perfect for Weston's outdoor spaces.",
      "Solar Panel Cleaning":
        "We improve solar output by removing the dust, pollen, and residue that block sunlight and reduce efficiency.",
      "Paver Sealing":
        "Our sealing service protects driveways and patios from water, stains, and sun—keeping surfaces looking newer, longer.",
    };

    return westonDescriptions[serviceName] || null;
  };

  const getRoyalPalmBeachServiceDescription = (serviceName) => {
    const royalPalmBeachDescriptions = {
      "Exterior Window Cleaning":
        "We remove environmental buildup and water spots using our signature RainShield™ system for long-lasting clarity.",
      "Interior Window Cleaning":
        "We safely clean indoor glass with care—removing haze, fingerprints, and smudges without damaging trim or surfaces.",
      "Gutter Cleaning":
        "Keep your home protected during Florida's stormy season by clearing clogs and debris from your gutters and downspouts.",
      "House Washing":
        "Our soft-wash system lifts mold, mildew, and dirt from siding, brick, or stucco—gently and thoroughly.",
      "Roof Washing":
        "Extend the life of your roof with our low-pressure wash that eliminates black streaks, moss, and algae growth.",
      "Pressure & Soft Washing":
        "We clean pavers, driveways, patios, and pool decks—adjusting pressure for each surface to ensure a safe and thorough clean.",
      "Window Cleaning":
        "RO/DI purified water and hand scrubbing for every pane—residential and commercial—with streak-free results and our 7-day sparkle guarantee.",
      "Soft Washing":
        "Custom low-pressure treatments for roofs, siding, and exteriors—algae and organic growth removed without damaging finishes.",
      "Holiday Lighting":
        "Custom design, professional installation, premium LEDs, maintenance, and removal—hands-free holiday displays for your property.",
      "Light Fixture Cleaning":
        "From entryway lanterns to living room chandeliers, we clean light fixtures inside and out for full brightness and sparkle.",
      "Screen Cleaning":
        "We restore screened areas and pool cages by removing mildew, dust, and buildup—improving airflow and outdoor visibility.",
      "Solar Panel Cleaning":
        "Maximize energy output by removing the dirt, pollen, and residue that reduce solar performance.",
      "Paver Sealing":
        "We clean and seal pavers to protect against weather, foot traffic, and fading—perfect for walkways and back patios.",
    };

    return royalPalmBeachDescriptions[serviceName] || null;
  };

  return (
    <div className="z-20 grid grid-cols-2 gap-3 sm:px-10 md:grid-cols-3 md:gap-7 md:px-20">
      {servicesData.map((service, idx) => {
        const isActive = activeCard === idx;
        return (
          <Card
            key={idx}
            className={`paper-bg-8 group relative flex h-full justify-between rounded-sm bg-[#E9E5E4] p-0 transition-transform duration-300 ${isActive ? "rotate-3 border-[#382f2d] bg-[#382f2d]" : ""} hover:rotate-3 hover:border-[#382f2d] hover:bg-[#382f2d]`}
            onClick={() => toggleCard(idx)}
          >
            <CardContent className="service-icon-hover flex h-full p-0">
              <div className="flex h-full w-full shrink-0 flex-col gap-6 px-3 py-6 md:px-4 md:py-8 md:group-hover:text-white">
                <div className="flex h-full flex-col gap-4">
                  <div className="relative size-[50px] shrink-0">
                    {service.icon ? (
                      <span
                        className={`${isActive ? "text-white" : "text-[#1c1c1c]"} group-hover:text-white`}
                      >
                        {service.icon}
                      </span>
                    ) : (
                      <>
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          sizes="50px"
                          className={`shrink-0 object-contain transition-opacity duration-200 ${isActive ? "opacity-0" : "opacity-100"} md:group-hover:opacity-0`}
                        />
                        <Image
                          src={service.hoverImage}
                          alt={`${service.name} color`}
                          fill
                          sizes="50px"
                          className={`shrink-0 object-contain transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"} md:group-hover:opacity-100`}
                        />
                      </>
                    )}
                  </div>

                  <h2
                    className={`font-['satoshi-black'] text-sm font-bold ${isActive ? "text-white" : "text-[#1c1c1c]"} group-hover:text-white md:text-[24px]`}
                  >
                    {city === "FORT LAUDERDALE"
                      ? `${service.name} in Fort Lauderdale`
                      : city === "BOCA RATON"
                        ? `${service.name} in Boca Raton`
                        : city === "WESTON"
                          ? `${service.name} in Weston`
                          : city === "POMPANO BEACH"
                            ? `${service.name} in Pompano Beach`
                            : city === "LIGHTHOUSE POINT"
                              ? `${service.name} in Lighthouse Point`
                              : city === "PARKLAND"
                                ? `${service.name} in Parkland`
                                : city === "SOUTHWEST RANCHES"
                                  ? `${service.name} in Southwest Ranches`
                                  : city === "DAVIE"
                                    ? `${service.name} in Davie`
                                    : city === "DELRAY BEACH"
                                      ? `${service.name} in Delray Beach`
                                      : city === "DEERFIELD BEACH"
                                        ? `${service.name} in Deerfield Beach`
                                        : city === "HILLSBORO BEACH"
                                          ? `${service.name} in Hillsboro Beach`
                                          : city === "CORAL SPRINGS"
                                            ? `${service.name} in Coral Springs`
                                            : city === "HALLANDALE BEACH"
                                              ? `${service.name} in Hallandale Beach`
                                              : city === "MARGATE"
                                                ? `${service.name} in Margate`
                                                : city === "PEMBROKE PINES"
                                                  ? `${service.name} in Pembroke Pines`
                                                  : city === "SUNRISE"
                                                    ? `${service.name} in Sunrise`
                                                    : city === "PLANTATION"
                                                      ? `${service.name} in Plantation`
                                                      : city === "TAMARAC"
                                                        ? `${service.name} in Tamarac`
                                                        : city === "HOLLYWOOD"
                                                          ? `${service.name} in Hollywood`
                                                          : city === "MIRAMAR"
                                                            ? `${service.name} in Miramar`
                                                            : city ===
                                                                "LAUDERDALE-BY-THE-SEA"
                                                              ? `${service.name} in Lauderdale-by-the-Sea`
                                                              : city ===
                                                                  "OAKLAND PARK"
                                                                ? `${service.name} in Oakland Park`
                                                                : city ===
                                                                    "ROYAL PALM BEACH"
                                                                  ? `${service.name} in Royal Palm Beach`
                                                                  : city ===
                                                                      "COCONUT CREEK"
                                                                    ? `${service.name} in Coconut Creek`
                                                                    : city ===
                                                                        "COOPER CITY"
                                                                      ? `${service.name} in Cooper City`
                                                                      : city ===
                                                                          "WEST PARK"
                                                                        ? `${service.name} in West Park`
                                                                        : service.name}
                  </h2>
                  <p
                    className={`font-[satoshi-regular] text-xs font-normal ${isActive ? "text-white" : "text-[#1f1d1d]"} group-hover:text-white md:text-base`}
                  >
                    {city === "PARKLAND"
                      ? getParklandServiceDescription(service.name) ||
                        service.description
                      : city === "FORT LAUDERDALE"
                        ? getFortLauderdaleServiceDescription(service.name) ||
                          service.description
                        : city === "LIGHTHOUSE POINT"
                          ? getLighthousePointServiceDescription(
                              service.name,
                            ) || service.description
                          : city === "SOUTHWEST RANCHES"
                            ? getSouthwestRanchesServiceDescription(
                                service.name,
                              ) || service.description
                            : city === "CORAL SPRINGS"
                              ? getCoralSpringsServiceDescription(
                                  service.name,
                                ) || service.description
                              : city === "HALLANDALE BEACH"
                                ? getHallandaleBeachServiceDescription(
                                    service.name,
                                  ) || service.description
                                : city === "MARGATE"
                                  ? getMargateServiceDescription(
                                      service.name,
                                    ) || service.description
                                  : city === "PEMBROKE PINES"
                                    ? getPembrokePinesServiceDescription(
                                        service.name,
                                      ) || service.description
                                    : city === "SUNRISE"
                                      ? getSunriseServiceDescription(
                                          service.name,
                                        ) || service.description
                                      : city === "DAVIE"
                                        ? getDavieServiceDescription(
                                            service.name,
                                          ) || service.description
                                        : city === "DELRAY BEACH"
                                          ? getDelrayBeachServiceDescription(
                                              service.name,
                                            ) || service.description
                                          : city === "HILLSBORO BEACH"
                                            ? getHillsboroBeachServiceDescription(
                                                service.name,
                                              ) || service.description
                                            : city === "PLANTATION"
                                              ? getPlantationServiceDescription(
                                                  service.name,
                                                ) || service.description
                                              : city === "TAMARAC"
                                                ? getTamaracServiceDescription(
                                                    service.name,
                                                  ) || service.description
                                                : city === "DEERFIELD BEACH"
                                                  ? getDeerfieldBeachServiceDescription(
                                                      service.name,
                                                    ) || service.description
                                                  : city === "HOLLYWOOD"
                                                    ? getHollywoodServiceDescription(
                                                        service.name,
                                                      ) || service.description
                                                    : city === "MIRAMAR"
                                                      ? getMiramarServiceDescription(
                                                          service.name,
                                                        ) || service.description
                                                      : city === "POMPANO BEACH"
                                                        ? getPompanoBeachServiceDescription(
                                                            service.name,
                                                          ) ||
                                                          service.description
                                                        : city ===
                                                            "LAUDERDALE-BY-THE-SEA"
                                                          ? getLauderdaleByTheSeaServiceDescription(
                                                              service.name,
                                                            ) ||
                                                            service.description
                                                          : city ===
                                                              "OAKLAND PARK"
                                                            ? getOaklandParkServiceDescription(
                                                                service.name,
                                                              ) ||
                                                              service.description
                                                            : city === "WESTON"
                                                              ? getWestonServiceDescription(
                                                                  service.name,
                                                                ) ||
                                                                service.description
                                                              : city ===
                                                                  "ROYAL PALM BEACH"
                                                                ? getRoyalPalmBeachServiceDescription(
                                                                    service.name,
                                                                  ) ||
                                                                  service.description
                                                                : service.description}
                  </p>
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                  {service.link && (
                    <Button className="pointer-cursor flex p-3 text-[10px] md:h-[46px] md:px-[18px] md:py-4 md:text-sm">
                      <Link
                        href={`/${cityKey}/${service.link}`}
                        className="pointer-cursor trim font-['satoshi-regular'] text-[14px] font-bold text-[#FDE4C8]"
                      >
                        What we Offer
                      </Link>
                    </Button>
                  )}
                </div>

                <div
                  className={`absolute top-2 right-2 ${isActive ? "block" : "hidden"} group-hover:block`}
                >
                  <ServiceButton />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
