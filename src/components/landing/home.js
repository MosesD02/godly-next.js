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

export default function GodlyHome({ city, cityName, service, serviceSlug }) {
  return (
    <WebsiteLayout service={service}>
      {/* Sync city to context + cookie (client-only) */}
      <CitySync city={city} />
      {/* Track landing page view (client-only) */}
      <LandingTracker city={city} service={service} />

      <Hero service={service} serviceSlug={serviceSlug} cityName={cityName} />
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
