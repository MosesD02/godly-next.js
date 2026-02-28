"use client";

import React, { useEffect } from "react";
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
import TeamGallery from "./teamGallery";
import ParklandCta from "./parklandCta";
import MiamiCta from "./miamiCta";
import FortLauderdaleCta from "./fortLauderdaleCta";
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
import WestPalmBeachCta from "./westPalmBeachCta";
import LauderdaleByTheSeaCta from "./lauderdaleByTheSeaCta";
import OaklandParkCta from "./oaklandParkCta";
import RoyalPalmBeachCta from "./royalPalmBeachCta";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";
import { PopupModal } from "@/components/popup-modal";

export default function GodlyHome({ city }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
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
      <Hero />
      <FourStepProcess />
      <Services />
      <Promise />
      <Gurantee />
      <TeamGallery />
      <Testimonials />
      <HowItWorks />
      <Savings />
      <Location />
      <ParklandCta />
      <MiamiCta />
      <FortLauderdaleCta />
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
      <WestPalmBeachCta />
      <LauderdaleByTheSeaCta />
      <OaklandParkCta />
      <RoyalPalmBeachCta />
      <PopupModal />
    </WebsiteLayout>
  );
}
