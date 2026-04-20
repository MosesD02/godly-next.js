import React from "react";
import WindowCleaningClusterNav from "@/components/WindowCleaningClusterNav";
import { isWindowClusterSlug } from "@/data/windowCleaningCluster";
import Services from "@/data/servicesData";
import WebsiteLayout from "./websiteLayout";
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

export default function ServicesPage({
  slug,
  city,
  cityName,
  cityData = {},
  relatedPosts,
}) {
  return (
    <WebsiteLayout>
      <CitySync city={city} />
      <ServicesHero
        slug={slug}
        heroOverride={cityData.hero}
        cityName={cityName}
      />
      {isWindowClusterSlug(slug) && (
        <WindowCleaningClusterNav
          citySlug={city}
          cityName={cityName}
          currentSlug={slug}
        />
      )}
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
      <ChooseUs slug={slug} />
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
    </WebsiteLayout>
  );
}
