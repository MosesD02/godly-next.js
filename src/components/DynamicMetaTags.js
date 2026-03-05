"use client";

import { useEffect, useCallback } from "react";
import { customMetaData } from "@/data/customMetaData";

const DynamicMetaTags = () => {
  const updateMetaTags = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    let title, description;

    // Determine which section we're on based on the hash
    switch (hash) {
      case "about":
        title =
          customMetaData.homepage?.about?.title ||
          customMetaData.homepage?.main?.title;
        description =
          customMetaData.homepage?.about?.description ||
          customMetaData.homepage?.main?.description;
        break;
      case "promise":
        title =
          customMetaData.homepage?.promise?.title ||
          customMetaData.homepage?.main?.title;
        description =
          customMetaData.homepage?.promise?.description ||
          customMetaData.homepage?.main?.description;
        break;
      case "process":
        title =
          customMetaData.homepage?.process?.title ||
          customMetaData.homepage?.main?.title;
        description =
          customMetaData.homepage?.process?.description ||
          customMetaData.homepage?.main?.description;
        break;
      default:
        // Default to main homepage tags
        title = customMetaData.homepage?.main?.title;
        description = customMetaData.homepage?.main?.description;
        break;
    }

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute("content", title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (twitterDescription && description) {
      twitterDescription.setAttribute("content", description);
    }
  }, []);

  useEffect(() => {
    // Update meta tags on initial load
    updateMetaTags();

    // Listen for hash changes
    const handleHashChange = () => {
      updateMetaTags();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [updateMetaTags]);

  return null; // This component doesn't render anything
};

export default DynamicMetaTags;
