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

  // URL params use dashes; citiesMap and Services use underscores
  const normalizedSlug = slug?.replace(/-/g, "_");
  const normalizedCity = city?.replace(/-/g, "_");

  useEffect(() => {
    if (Object.keys(citiesMap).includes(normalizedCity)) {
      const formattedCity = citiesMap[normalizedCity];
      setCity(formattedCity);
    }
  }, [normalizedCity, setCity]);

  // cityServicesData uses dashes (matches URL params directly)
  const cityData = cityServicesData[city]?.[slug] ?? {};

  return (
    <WebsiteLayout>
      <ServicesHero slug={normalizedSlug} heroOverride={cityData.hero} />
      <ServiceIncludes slug={normalizedSlug} />
      <EssentialService slug={normalizedSlug} essentialOverride={cityData.essential} />
      <ServiceNearYou slug={normalizedSlug} />
      <ChooseUs />
      <Faq
        faqs={cityData.faqs}
        serviceName={slug?.replace(/-/g, " ")}
        cityName={citiesMap[normalizedCity]}
      />
      {cityData.localCta && <LocalCta text={cityData.localCta} />}
      <OtherServices />
    </WebsiteLayout>
  );
}
