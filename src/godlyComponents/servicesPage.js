"use client";

import React from "react";
import WebsiteLayout from "./websiteLayout";
import ServicesHero from "./servicesHero";
import ServiceIncludes from "./serviceInculdes";
import OtherServices from "./otherServices";
import ChooseUs from "./chooseUs";
import EssentialService from "./serviceEssential";
import ServiceNearYou from "./serviceNearYou";
import Faq from "./faq";
import LocalCta from "./localCta";
import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";
import { cityServicesData } from "@/data/cityServicesData";

export default function ServicesPage({ slug, city }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
    }
  }, [city, setCity]);

  const cityData = cityServicesData[city]?.[slug] ?? {};

  return (
    <WebsiteLayout>
      <ServicesHero slug={slug} heroOverride={cityData.hero} />
      <ServiceIncludes slug={slug} />
      <EssentialService slug={slug} essentialOverride={cityData.essential} />
      <ServiceNearYou slug={slug} />
      <ChooseUs />
      <Faq
        faqs={cityData.faqs}
        serviceName={slug?.replace(/_/g, " ")}
        cityName={citiesMap[city]}
      />
      {cityData.localCta && <LocalCta text={cityData.localCta} />}
      <OtherServices />
    </WebsiteLayout>
  );
}
