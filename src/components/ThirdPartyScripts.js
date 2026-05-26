import Script from "next/script";

const GOOGLE_ADS_ID = "AW-16971177751";
const HELPCRUNCH_SRC = "https://embed.helpcrunch.com/sdk.js";
const HELPCRUNCH_ORG = "godlywindows";
const HELPCRUNCH_APP_ID = "db6ee22c-efdb-4487-be2b-33564fc9a13d";

export default function ThirdPartyScripts() {
  return (
    <>
      {/* Google Ads tag — piggybacks on gtag.js loaded by <GoogleAnalytics />
          in app/layout.js. Queues the config into dataLayer; gtag.js drains
          the queue once it loads. */}
      <Script id="google-ads-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>

      <Script id="helpcrunch-init" strategy="lazyOnload">
        {`window.helpcrunchSettings = { organization: '${HELPCRUNCH_ORG}', appId: '${HELPCRUNCH_APP_ID}' };
(function(w){w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[]})(window);`}
      </Script>
      <Script src={HELPCRUNCH_SRC} strategy="lazyOnload" />
    </>
  );
}
