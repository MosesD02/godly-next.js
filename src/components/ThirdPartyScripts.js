"use client";

import { useLayoutEffect } from "react";

const GA_MEASUREMENT_ID = "G-6P0ST66B9P";
const GOOGLE_ADS_ID = "AW-16971177751";
const GTAG_SCRIPT_ID = "gtag-js";
const HELPCRUNCH_SRC = "https://embed.helpcrunch.com/sdk.js";

/**
 * Loads GA4 + Google Ads (one gtag.js) and HelpCrunch without rendering
 * <script> in the React tree, avoiding React 19 dev warnings about scripts
 * in components.
 */
export default function ThirdPartyScripts() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // --- gtag: GA4 + Google Ads (matches prior inline + single library load) ---
    if (!document.getElementById(GTAG_SCRIPT_ID)) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);
      gtag("config", GOOGLE_ADS_ID);

      const gtagScript = document.createElement("script");
      gtagScript.id = GTAG_SCRIPT_ID;
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gtagScript);
    }

    // --- HelpCrunch (guard Strict Mode / re-navigation) ---
    if (
      !document.querySelector(`script[src="${HELPCRUNCH_SRC}"]`) &&
      !window.__godlyHelpCrunchInit
    ) {
      window.__godlyHelpCrunchInit = true;
      window.helpcrunchSettings = {
        organization: "godlywindows",
        appId: "db6ee22c-efdb-4487-be2b-33564fc9a13d",
      };

      const w = window;
      const d = document;
      const hS = w.helpcrunchSettings;
      if (hS?.organization) {
        w.HelpCrunch = function () {
          w.HelpCrunch.q.push(arguments);
        };
        w.HelpCrunch.q = [];

        function loadHelpCrunch() {
          if (d.querySelector(`script[src="${HELPCRUNCH_SRC}"]`)) return;
          const s = d.createElement("script");
          s.async = true;
          s.type = "text/javascript";
          s.src = HELPCRUNCH_SRC;
          (d.body || d.head).appendChild(s);
        }

        if (d.readyState === "complete" || hS.loadImmediately) {
          loadHelpCrunch();
        } else {
          w.addEventListener("load", loadHelpCrunch, { once: true });
        }
      }
    }
  }, []);

  return null;
}
