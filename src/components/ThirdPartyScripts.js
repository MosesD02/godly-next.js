import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/metaPixel";

const GOOGLE_ADS_ID = "AW-16971177751";
const HELPCRUNCH_SRC = "https://embed.helpcrunch.com/sdk.js";
const HELPCRUNCH_ORG = "godlywindows";
const HELPCRUNCH_APP_ID = "db6ee22c-efdb-4487-be2b-33564fc9a13d";

export default function ThirdPartyScripts() {
  return (
    <>
      <Script id="google-ads-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>

      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>

      <Script id="helpcrunch-init" strategy="lazyOnload">
        {`window.helpcrunchSettings = { organization: '${HELPCRUNCH_ORG}', appId: '${HELPCRUNCH_APP_ID}' };
(function(w){w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[]})(window);`}
      </Script>
      <Script src={HELPCRUNCH_SRC} strategy="lazyOnload" />
    </>
  );
}
