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
      <PopupModal />
    </WebsiteLayout>
  );
}
