import Script from "next/script";

const HELPCRUNCH_SRC = "https://embed.helpcrunch.com/sdk.js";
const HELPCRUNCH_ORG = "godlywindows";
const HELPCRUNCH_APP_ID = "db6ee22c-efdb-4487-be2b-33564fc9a13d";

export default function ThirdPartyScripts() {
  return (
    <>
      <Script id="helpcrunch-init" strategy="lazyOnload">
        {`window.helpcrunchSettings = { organization: '${HELPCRUNCH_ORG}', appId: '${HELPCRUNCH_APP_ID}' };
(function(w){w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[]})(window);`}
      </Script>
      <Script src={HELPCRUNCH_SRC} strategy="lazyOnload" />
    </>
  );
}
