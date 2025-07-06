"use client";

import React, { useEffect } from "react";
import FourStepProcess from "./fourStepProcess";
import HowItWorks from "./howitworks";
import Gurantee from "./gurantee";
import Testimonials from "./testimonials";
import Promise from "./promise";
import Hero from "./hero";
import WebsiteLayout from "./websiteLayout";
import TeamGallery from "@/godlyComponents/teamGallery";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "@/godlyComponents/header/CitiesPopup";
import SingleReview from "./singleReview";
import Faq from "./faq";
// import { PopupModal } from "../popup-modal";

export default function GodlyHome({ city, service }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
    }

    // Track landing page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view_landing", {
        event_category: "page_views",
        event_label: "Landing Page View",
        page_title: `Landing Page - ${service || "Unknown Service"} in ${city || "Unknown City"}`,
        page_location: window.location.href,
        service: service || "unknown",
        city: city || "unknown"
      });
    }
  }, [city, service, setCity]);

  return (
    <WebsiteLayout>
      <Hero service={service} />
      <SingleReview />
      <FourStepProcess />
      <TeamGallery />
      <Promise />
      <Gurantee />
      <Testimonials />
      <HowItWorks />
      <Faq />
      {/* <PopupModal /> */}
    </WebsiteLayout>
  );
}
