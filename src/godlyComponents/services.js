/* eslint-disable @next/next/no-img-element */
"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceButton from "@/components/servicebutton";
import Image from "next/image";
import textWaveBg from "@/assets/text-bg-wave.webp";
import Cap from "@/assets/santaCap.webp";
import Santa from "@/assets/santa.webp";
import Link from "next/link";
import { citiesMap } from "./header/CitiesPopup";

import { servicesData } from "./servicesData";

const Services = () => {
  const { city } = useGodlyContext();
  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);

  return (
    <div className="paper-bg-16 relative overflow-clip bg-[#262424]">
      <div className="relative flex min-h-screen flex-col items-center gap-[37px] px-6 sm:px-8 md:gap-20 md:px-6 md:py-24 lg:px-10 lg:py-28 xl:px-12 xl:py-32">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="with-text trim hidden rotate-[-4.74deg] transform text-center font-['luminaire-script'] text-[24px] text-[#FDE4C8] underline sm:text-[26px] md:flex md:text-[28px] lg:text-[30px] xl:text-[32px]">
            We are
          </span>
          <div className="flex flex-col items-center justify-center">
            <div className="text-trim flex items-end">
              <h2
                className="text-grain font-marlton !bg-white text-[32px] tracking-[3.84px] sm:text-[40px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
                data-text="MORE THAN"
              >
                MORE THAN
              </h2>
              <span
                className="text-grain ms-2 mb-1 !bg-white text-sm tracking-[1.2px] sm:text-base md:ms-[21px] md:mb-3 md:text-[20px] lg:text-[22px] xl:text-[24px]"
                data-text="JUST"
              >
                JUST
              </span>
            </div>
            <span
              className="text-grain font-marlton -mt-2 !bg-white text-[32px] tracking-[3.84px] sm:text-[40px] md:-mt-5 md:text-[64px] lg:text-[72px] xl:text-[80px]"
              data-text="WINDOW WASHERS"
            >
              WINDOW WASHERS
            </span>
          </div>

          <p className="text-trim hidden text-center font-[satoshi-regular] text-[24px] leading-[115%] text-white/60 sm:text-[20px] md:block md:text-[24px] lg:text-[26px] xl:text-[28px]">
            {city === "PARKLAND" ? (
              <>Your full-service exterior cleaning team in Parkland.</>
            ) : city === "MIAMI" ? (
              <>Your full-service exterior cleaning team in Miami.</>
            ) : (
              <>Godly can clean nearly all components of <br /> your home or building&apos;s exterior.</>
            )}
          </p>
        </div>
        <ServicesGrid />
      </div>

      <div
        id="holiday"
        className="paper-bg-16 flex flex-col items-center justify-center gap-20 overflow-clip bg-[#262424] bg-contain bg-bottom bg-no-repeat px-6 pt-[100px] bg-blend-soft-light md:p-6"
      >
        <img
          className="pointer-events-none absolute overflow-clip object-contain opacity-25"
          src={"/assets/santa-bg-sparkle.webp"}
          alt=""
        />
        <div className="mt-4 mb-[164px] flex flex-col items-center justify-center gap-9 md:mb-[220px] md:max-w-[741px]">
          <div className="flex flex-col items-center justify-center gap-[35px]">
            <div className="relative max-w-[359px] md:max-w-full md:min-w-full">
              <h4 className="relative text-center font-['satoshi-black'] text-[32px] leading-[130%] text-[#FDE4C8] md:text-[96px]">
                {city === "PARKLAND" ? "Holiday Lights Without the Ladder" : city === "MIAMI" ? "Holiday Lights Without the Ladder" : "Holiday Light Installation"}
                <Image
                  src={Cap}
                  height={102}
                  width={102}
                  alt="holiday santa hat decoration"
                  className="pointer-events-none absolute -top-11 left-6 scale-50 md:-top-6 md:-left-1 md:scale-100"
                />
              </h4>

              <div className="absolute right-15 -bottom-5 px-2 text-xs text-nowrap text-black md:right-15 md:bottom-0 md:text-sm">
                <div className="relative">
                  <Image
                    src={textWaveBg}
                    height={400}
                    width={400}
                    alt=""
                    className="absolute top-1/2 left-0 z-10 w-[calc(100%_+_32px)] -translate-y-1/2"
                  />
                  <p className="relative z-20 mx-2 -rotate-5 pb-0.5">{city}</p>
                </div>
              </div>
            </div>
            <p className="max-w-[359px] text-center font-['satoshi-light'] text-sm font-light tracking-wide text-[#FDE4C8] md:max-w-[600px] md:text-lg">
              {city === "PARKLAND" ? (
                <>
                  Searching for xmas light installation near me? We offer expert lighting installation, light fixture cleaning in Parkland. Safe, seamless, and storage-free holiday lighting.
                </>
              ) : city === "MIAMI" ? (
                <>
                  Christmas light installation in Miami, done for you. We handle xmas lights, recessed lighting, and full holiday light installation—safe, stunning, and stress-free service.
                </>
              ) : (
                <>
                  Christmas light installation, done for you. Forget the ladder and
                  the hassle of storing lights each year. Let us light up your home
                  or business once, and you&apos;ll never want to go back to doing
                  it yourself.
                </>
              )}
            </p>
            <Link href={`/${cityKey}/holiday-light-installation`}>
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

function ServicesGrid() {
  const [activeCard, setActiveCard] = React.useState(null);

  // Toggle card active state when clicked/tapped
  const toggleCard = (idx) => {
    setActiveCard((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { city } = useGodlyContext();

  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);

  // City-specific service descriptions
  const getParklandServiceDescription = (serviceName) => {
    const parklandDescriptions = {
      "Exterior Window Cleaning": "Parkland's pollen and dust don't stand a chance. Our RainShield™ process leaves your glass spotless and gleaming.",
      "Interior Window Cleaning": "From fingerprints to haze, we restore your interior windows with streak-free precision; no drips, no damage.",
      "Gutter Cleaning": "Avoid water damage by clearing out leaves and roof debris. We keep your gutters flowing before the next Parkland rain.",
      "House Washing": "Soft-wash siding, brick, and stucco to remove algae, mold, and surface stains; perfect for Parkland homes near greenery.",
      "Roof Washing": "Our gentle roof cleaning removes algae, mold and debris, extending the life and look of your shingles,metal or tile roof..",
      "Pressure & Soft Washing": "We clean driveways, patios, and pavers with care; power where needed, soft wash where it counts.",
      "High Dusting": "Cobwebs and dust in high corners? We safely tackle what ladders can't reach, indoors or out.",
      "Light Fixture Cleaning": "Restore brilliance to your lanterns, pendants, and exterior fixtures with our safe and careful clean.",
      "Screen Cleaning": "We remove film, pollen, spider webs and mildew from screen rooms and pool cages; keeping your views and airflow clear.",
      "Skylight Cleaning": "We clean interior and exterior skylights; even those high up; so Parkland sunshine comes through crystal clear.",
      "Solar Panel Cleaning": "Dust and debris lower efficiency. We clean solar panels to maximize output and energy savings.",
      "Paver Sealing": "Seal in beauty and strength. We deep clean and seal your driveway, pool deck, or patio for lasting protection and aesthetic sheen."
    };

    return parklandDescriptions[serviceName] || null;
  };

  const getMiamiServiceDescription = (serviceName) => {
    const miamiDescriptions = {
      "Exterior Window Cleaning": "Blast away Miami's mildew, salt spray, and grime with our streak-free, RainShield™-powered exterior window cleaning. Ideal for oceanfront and inland homes alike.",
      "Interior Window Cleaning": "From pet nose prints to kitchen grease, we make your indoor glass sparkle again; without harsh chemicals or mess.",
      "Gutter Cleaning": "Keep those South Florida storms from flooding your foundation. We clear leaves, pine needles, and buildup so your gutters drain freely.",
      "House Washing": "Our soft wash service removes algae, mold, and dirt without damaging your siding or paint; perfect for Miami's tropical climate.",
      "Roof Washing": "Extend the life of your tile or shingle roof by removing black streaks, lichen, and debris with our gentle but effective low-pressure wash.",
      "Pressure & Soft Washing": "Restore the look of your driveway, patio, or pool deck. We adjust pressure based on surface type; powerful where needed, soft where it matters.",
      "High Dusting": "Say goodbye to ceiling cobwebs and dusty corners. We reach what ladders can't with high-reach tools and precision dusting.",
      "Light Fixture Cleaning": "Chandeliers, sconces, and outdoor lanterns deserve a shine-up too. We handle delicate fixtures with safe, detailed cleaning.",
      "Screen Cleaning": "Our tools gently clean screened lanais and enclosures; removing dust, mildew, and film so you can enjoy clear views and fresh air again.",
      "Skylight Cleaning": "Miami sunshine should come crystal clear. We clean skylights inside and out; even those hard-to-reach ones; so natural light beams through.",
      "Solar Panel Cleaning": "Get the most from your solar investment. We remove pollen, dust, and bird droppings to boost energy output and lifespan.",
      "Paver Sealing": "Protect your pavers from Miami's sun and storms. We deep-clean, seal, and restore driveways, walkways, and patios for a polished, long-lasting look."
    };

    return miamiDescriptions[serviceName] || null;
  };

  return (
    <div className="z-20 grid grid-cols-2 gap-3 sm:px-10 md:grid-cols-3 md:gap-7 md:px-20">
      {servicesData.map((service, idx) => {
        const isActive = activeCard === idx;
        return (
          <Card
            key={idx}
            className={`paper-bg-8 group relative flex h-full justify-between rounded-sm bg-[#E9E5E4] p-0 transition-transform duration-300 ${isActive ? "rotate-[3deg] border-[#382f2d] bg-[#382f2d]" : ""} hover:rotate-[3deg] hover:border-[#382f2d] hover:bg-[#382f2d]`}
            onClick={() => toggleCard(idx)}
          >
            <CardContent className="service-icon-hover flex h-full p-0 xl:aspect-[1783/1515] xl:max-h-[320px]">
              <div className="flex h-full w-full flex-shrink-0 flex-col gap-6 px-3 py-6 md:px-4 md:py-8 md:group-hover:text-white">
                <div className="flex h-full flex-col gap-4">
                  <div className="relative size-[50px] shrink-0">
                    {service.icon ? (
                      <span className={`${isActive ? "text-white" : ""}`}>
                        {service.icon}
                      </span>
                    ) : (
                      <>
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className={`object-contain ${isActive ? "hidden" : ""} shrink-0 md:group-hover:hidden`}
                        />
                        <Image
                          src={service.hoverImage}
                          alt={`${service.name} color`}
                          fill
                          className={`${isActive ? "block" : "hidden"} shrink-0 object-contain md:group-hover:block`}
                        />
                      </>
                    )}
                  </div>

                  <h3
                    className={`font-['satoshi-black'] text-sm font-bold ${isActive ? "text-white" : "text-[#1c1c1c]"} group-hover:text-white md:text-[24px]`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`font-[satoshi-regular] text-xs font-normal ${isActive ? "text-white" : "text-[#1f1d1d]"} group-hover:text-white md:text-base`}
                  >
                    {city === "PARKLAND" 
                      ? getParklandServiceDescription(service.name) || service.description
                      : city === "MIAMI"
                      ? getMiamiServiceDescription(service.name) || service.description
                      : service.description
                    }
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
