import React from "react";
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
      <ServiceIncludes
        slug={slug}
        cityName={cityName}
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
        faqs={cityData.faqs}
        serviceName={slug?.replace(/-/g, " ")}
        cityName={cityName}
      />
      {cityData.localCta && <LocalCta text={cityData.localCta} />}
      <RelatedBlogPosts posts={relatedPosts} city={city} />
      <OtherServices slug={slug} cityName={cityName} citySlug={city} />
      <ServiceNearbyCities citySlug={city} serviceSlug={slug} />
    </WebsiteLayout>
  );
}
