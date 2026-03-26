"use client";

import { useEffect } from "react";

// Tiny client component for landing page analytics tracking.
// Extracted so the rest of the landing page can be a server component.
export default function LandingTracker({ city, service }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view_landing", {
        event_category: "page_views",
        event_label: "Landing Page View",
        page_title: `Landing Page - ${service || "Unknown Service"} in ${city || "Unknown City"}`,
        page_location: window.location.href,
        service: service || "unknown",
        city: city || "unknown",
      });
    }
  }, [city, service]);

  return null;
}
