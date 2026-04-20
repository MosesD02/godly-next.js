"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import FourStepProcess from "./fourStepProcess";
import HowItWorks from "./howitworks";
import Location from "./location";
import Gurantee from "./gurantee";
import Services from "./services";
import Savings from "./savings";
import Testimonials from "./testimonials";
import Promise from "./promise";
import Hero from "./hero";
import WebsiteLayout from "./websiteLayout";
import Faq from "./faq";
import { mainHomepageFaqs, getCityHomepageFaqs } from "@/data/homepageFaqData";
import TeamGallery from "./teamGallery";
import ParklandCta from "./parklandCta";
import CoconutCreekCta from "./coconutCreekCta";
import CooperCityCta from "./cooperCityCta";
import WestParkCta from "./westParkCta";
import FortLauderdaleCta from "./fortLauderdaleCta";
import WestonCta from "./westonCta";
import LighthousePointCta from "./lighthousePointCta";
import SouthwestRanchesCta from "./southwestRanchesCta";
import CoralSpringsCta from "./coralSpringsCta";
import HallandaleBeachCta from "./hallandaleBeachCta";
import MargateCta from "./margateCta";
import PembrokePinesCta from "./pembrokePinesCta";
import SunriseCta from "./sunriseCta";
import DavieCta from "./davieCta";
import DelrayBeachCta from "./delrayBeachCta";
import HillsboroBeachCta from "./hillsboroBeachCta";
import PlantationCta from "./plantationCta";
import TamaracCta from "./tamaracCta";
import DeerfieldBeachCta from "./deerfieldBeachCta";
import HollywoodCta from "./hollywoodCta";
import MiramarCta from "./miramarCta";
import PompanoBeachCta from "./pompanoBeachCta";
import LauderdaleByTheSeaCta from "./lauderdaleByTheSeaCta";
import OaklandParkCta from "./oaklandParkCta";
import RoyalPalmBeachCta from "./royalPalmBeachCta";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "@/data/cities";
import { PopupModal } from "@/components/popup-modal";

export default function GodlyHome({ city }) {
  const { setCity } = useGodlyContext();

  // Compute display name from route param immediately (no useEffect needed)
  const cityName = city && citiesMap[city] ? citiesMap[city] : "SOUTH FLORIDA";
  const faqs =
    city && citiesMap[city]
      ? getCityHomepageFaqs(citiesMap[city])
      : mainHomepageFaqs;

  useEffect(() => {
    if (city && Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
      document.cookie = `selectedCity=${city};path=/;max-age=31536000`;
    } else if (!city) {
      // Home page (/): always show SOUTH FLORIDA regardless of cookie
      setCity("SOUTH FLORIDA");
    }

    // Track main page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view_main", {
        event_category: "page_views",
        event_label: "Main Page View",
        page_title: "Main Page",
        page_location: window.location.href,
        city: city || "unknown",
      });
    }
  }, [city, setCity]);

  return (
    <WebsiteLayout>
      <Hero cityName={cityName} />
      <FourStepProcess />
      <Services cityName={cityName} citySlug={city} />
      <Promise />
      <Gurantee />
      <TeamGallery />
      <Testimonials />
      <HowItWorks />
      <Savings />
      {city === "south-florida" && (
        <section
          className="paper-bg-16 flex flex-col items-center gap-8 bg-[#ebded1] bg-cover bg-center bg-no-repeat px-6 py-16 bg-blend-multiply md:px-12 md:py-20"
          aria-labelledby="south-fl-rain-shield-heading"
        >
          <h2
            id="south-fl-rain-shield-heading"
            className="trim max-w-3xl text-center text-[28px] leading-tight font-normal tracking-wide text-[#191717] md:text-[48px]"
          >
            <span className="text-grain bg-[#191717]!" data-text="Rain Shield">
              Rain Shield
            </span>{" "}
            <span className="text-grain bg-[#61503E]!" data-text="Technology">
              Technology
            </span>
            <span className="mt-2 block font-['satoshi-regular'] text-lg text-[#2D2B2B] md:text-xl">
              — Included Free With Every Cleaning
            </span>
          </h2>
          <p className="max-w-2xl text-center font-['satoshi-regular'] text-base/7 text-[#2D2B2B] md:text-lg/8">
            South Florida rain, salt spray, and sprinkler minerals don&apos;t
            stand a chance against Rain Shield. Our hydrophobic coating helps
            water bead and roll off, carrying dirt with it — included free with
            every window cleaning we perform.
          </p>
          <Link
            href="/rain-shield"
            className="trim font-['satoshi-medium'] text-base text-[#2D2B2B] underline decoration-[#AB8459] underline-offset-4 transition-colors hover:text-[#191717] md:text-lg"
          >
            Learn how Rain Shield works →
          </Link>
        </section>
      )}
      <Faq
        faqs={faqs}
        cityName={cityName !== "SOUTH FLORIDA" ? cityName : undefined}
      />
      <Location city={city} />
      <ParklandCta />
      <CoconutCreekCta />
      <CooperCityCta />
      <WestParkCta />
      <FortLauderdaleCta />
      <WestonCta />
      <LighthousePointCta />
      <SouthwestRanchesCta />
      <CoralSpringsCta />
      <HallandaleBeachCta />
      <MargateCta />
      <PembrokePinesCta />
      <SunriseCta />
      <DavieCta />
      <DelrayBeachCta />
      <HillsboroBeachCta />
      <PlantationCta />
      <TamaracCta />
      <DeerfieldBeachCta />
      <HollywoodCta />
      <MiramarCta />
      <PompanoBeachCta />
      <LauderdaleByTheSeaCta />
      <OaklandParkCta />
      <RoyalPalmBeachCta />
      <PopupModal />
    </WebsiteLayout>
  );
}
