import React from "react";
import FourStepProcess from "./fourStepProcess";
import HowItWorks from "./howitworks";
import Gurantee from "./gurantee";
import Testimonials from "./testimonials";
import Promise from "./promise";
import Hero from "./hero";
import WebsiteLayout from "./websiteLayout";
import TeamGallery from "@/godlyComponents/teamGallery";
import CitySync from "@/godlyComponents/CitySync";
import LandingTracker from "./LandingTracker";
import LandingAbConversionScript from "./LandingAbConversionScript";

import SingleReview from "./singleReview";
import Faq from "./faq";

export default function GodlyHome({
  city,
  cityName,
  service,
  serviceSlug,
  heroHeadline,
  heroH1,
  heroSubcopy,
  heroAlt,
  introCopy,
}) {
  return (
    <WebsiteLayout service={service}>
      {/* Sync city to context + cookie (client-only) */}
      <CitySync city={city} />
      {/* Track landing page view (client-only) */}
      <LandingTracker city={city} service={service} />

      <Hero
        service={service}
        serviceSlug={serviceSlug}
        cityName={cityName}
        heroHeadline={heroHeadline}
        heroH1={heroH1}
        heroSubcopy={heroSubcopy}
        heroAlt={heroAlt}
      />
      {introCopy && (
        <section className="bg-[#1F1D1D] px-5 pb-12 md:px-14 md:pb-16">
          <p className="mx-auto max-w-4xl text-center font-['satoshi-regular'] text-sm leading-7 text-[#FDE4C8]/90 md:text-base">
            {introCopy}
          </p>
        </section>
      )}
      <SingleReview />
      <FourStepProcess />
      <TeamGallery />
      <Promise />
      <Gurantee />
      <Testimonials />
      <HowItWorks />
      <Faq />
      <LandingAbConversionScript />
    </WebsiteLayout>
  );
}
