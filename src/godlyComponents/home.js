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
import { MoveUpRight } from "lucide-react";

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
    <>
      <Hero cityName={cityName} />
      <FourStepProcess />
      <Services cityName={cityName} citySlug={city} />
      <Promise />
      <Gurantee />
      <TeamGallery />
      <Testimonials />
      <HowItWorks />
      <Savings />
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
    </>
  );
}
