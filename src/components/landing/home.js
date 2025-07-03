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
  }, [city, setCity]);

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
