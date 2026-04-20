"use client";

import { useLayoutEffect } from "react";
import { META_PIXEL_ID } from "@/lib/metaPixel";

const GA_MEASUREMENT_ID = "G-6P0ST66B9P";
const GOOGLE_ADS_ID = "AW-16971177751";
const GTAG_SCRIPT_ID = "gtag-js";
const HELPCRUNCH_SRC = "https://embed.helpcrunch.com/sdk.js";
const META_PIXEL_NOSCRIPT_ID = "meta-pixel-noscript-fallback";

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

    // --- Meta Pixel (base code + PageView; script in <head>, async) ---
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      );
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }

    if (!document.getElementById(META_PIXEL_NOSCRIPT_ID)) {
      const ns = document.createElement("noscript");
      ns.id = META_PIXEL_NOSCRIPT_ID;
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      ns.appendChild(img);
      document.body.appendChild(ns);
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
