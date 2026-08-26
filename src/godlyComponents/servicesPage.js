import React from "react";
import Services from "@/data/servicesData";
import ServicesHero from "./servicesHero";
import ServiceIncludes from "./serviceInculdes";
import OtherServices from "./otherServices";
import ServiceNearbyCities from "./serviceNearbyCities";
import ChooseUs from "./chooseUs";
import EssentialService from "./serviceEssential";
import ServiceNearYou from "./serviceNearYou";
import RelatedBlogPosts from "./blog/RelatedBlogPosts";
import Faq from "./faq";
import LocalCta from "./localCta";
import RainShieldBookingCta from "./rainShieldBookingCta";
import CitySync from "./CitySync";
import InteriorWindowCleaningSection from "./interiorWindowCleaningSection";

export default function ServicesPage({
  slug,
  city,
  cityName,
  cityData = {},
  relatedPosts,
}) {
  const interiorSection =
    cityData.interiorSection ?? Services[slug]?.interiorSection;

  return (
    <>
      <CitySync city={city} />
      <ServicesHero
        slug={slug}
        heroOverride={cityData.hero}
        cityName={cityName}
        citySlug={city}
        eyebrowOverride={cityData.eyebrow}
        h1Override={cityData.h1}
      />
      <ServiceIncludes
        slug={slug}
        cityName={cityName}
        citySlug={city}
        includedOverride={cityData.included}
      />
      <EssentialService
        slug={slug}
        essentialOverride={cityData.essential}
        cityName={cityName}
      />
      <ServiceNearYou
        slug={slug}
        nearYouOverride={cityData.nearYou}
        cityName={cityName}
      />
      <ChooseUs slug={slug} servicesOverride={cityData.chooseUs} />
      <InteriorWindowCleaningSection section={interiorSection} />
      <Faq
        faqs={cityData.faqs ?? Services[slug]?.faqs}
        serviceName={slug?.replace(/-/g, " ")}
        cityName={cityName}
      />
      {slug === "rain-shield" ? (
        <RainShieldBookingCta
          text={cityData.localCta ?? Services[slug]?.quote}
        />
      ) : (
        cityData.localCta && <LocalCta text={cityData.localCta} />
      )}
      <RelatedBlogPosts posts={relatedPosts} city={city} />
      <OtherServices slug={slug} cityName={cityName} citySlug={city} />
      {slug !== "rain-shield" && (
        <ServiceNearbyCities citySlug={city} serviceSlug={slug} />
      )}
    </>
  );
}
