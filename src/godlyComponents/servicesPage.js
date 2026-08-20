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
      {interiorSection && (
        <section className="paper-bg-16 flex flex-col items-center bg-[#ebded1] px-6 py-14 text-center md:px-24">
          <h2 className="trim mb-6 text-[32px] font-normal tracking-wide text-[#191717] md:text-[48px]">
            {interiorSection.heading}
          </h2>
          <div className="flex w-full max-w-3xl flex-col gap-4">
            {interiorSection.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-['satoshi-regular'] text-base leading-relaxed text-[#3d3834]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}
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
