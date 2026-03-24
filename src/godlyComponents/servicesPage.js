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
// import Faq from "./faq";
import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";

export default function ServicesPage({ slug, city, relatedPosts }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
      // Persist to cookie so header and other pages reflect this city
      document.cookie = `selectedCity=${city};path=/;max-age=31536000`;
    }
  }, [city, setCity]);
  return (
    <WebsiteLayout>
      <ServicesHero slug={slug} />
      <ServiceIncludes slug={slug} />
      <EssentialService slug={slug} />
      <ServiceNearYou slug={slug} />
      <ChooseUs slug={slug} />
      {/* <Faq /> */}
      <OtherServices slug={slug} />
      <RelatedBlogPosts posts={relatedPosts} citySlug={city} />
    </WebsiteLayout>
  );
}
