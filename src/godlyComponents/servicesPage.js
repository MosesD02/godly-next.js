"use client";

import React from "react";
import WebsiteLayout from "./websiteLayout";
import ServicesHero from "./servicesHero";
import ServiceIncludes from "./serviceInculdes";
import OtherServices from "./otherServices";
import ChooseUs from "./chooseUs";
import EssentialService from "./serviceEssential";
import ServiceNearYou from "./serviceNearYou";
import RelatedBlogPosts from "./blog/RelatedBlogPosts";
import Faq from "./faq";
import LocalCta from "./localCta";
import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";
import { cityServicesData } from "@/data/cityServicesData/index";

export default function ServicesPage({ slug, city, relatedPosts }) {
  const { setCity } = useGodlyContext();

  // URL params use dashes; citiesMap uses underscores for city keys
  const normalizedCity = city?.replace(/-/g, "_");

  useEffect(() => {
    if (Object.keys(citiesMap).includes(normalizedCity)) {
      const formattedCity = citiesMap[normalizedCity];
      setCity(formattedCity);
      // Persist to cookie so header and other pages reflect this city
      document.cookie = `selectedCity=${city};path=/;max-age=31536000`;
    }
  }, [normalizedCity, city, setCity]);

  // cityServicesData uses dashes (matches URL params directly)
  const cityData = cityServicesData[city]?.[slug] ?? {};

  return (
    <WebsiteLayout>
      <ServicesHero slug={slug} heroOverride={cityData.hero} />
      <ServiceIncludes slug={slug} />
      <EssentialService slug={slug} essentialOverride={cityData.essential} />
      <ServiceNearYou slug={slug} nearYouOverride={cityData.nearYou} />
      <ChooseUs slug={slug} />
      <Faq
        faqs={cityData.faqs}
        serviceName={slug?.replace(/-/g, " ")}
        cityName={citiesMap[normalizedCity]}
      />
      {cityData.localCta && <LocalCta text={cityData.localCta} />}
      <OtherServices slug={slug} />
      <RelatedBlogPosts posts={relatedPosts} citySlug={city} />
    </WebsiteLayout>
  );
}
