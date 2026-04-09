import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/godlyContext";
import Script from "next/script";
import { BASE_URL } from "@/app/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Global metadata defaults - page-specific metadata will override these
export const metadata = {
  generator: "Next.js",
  applicationName: "Godly Windows",
  authors: [{ name: "Godly Windows" }],
  creator: "Godly Windows",
  publisher: "Godly Windows",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        {/* GA4 + Google Ads: one gtag.js load, two configs (avoids duplicate library fetch) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6P0ST66B9P"
          strategy="beforeInteractive"
        />
        <Script id="google-tags" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6P0ST66B9P');
            gtag('config', 'AW-16971177751');
          `}
        </Script>

        <Script id="helpcrunch-settings" strategy="afterInteractive">
          {`window.helpcrunchSettings = {
 organization: 'godlywindows',
 appId: 'db6ee22c-efdb-4487-be2b-33564fc9a13d',
};`}
        </Script>

        <Script id="helpcrunch-loader" strategy="afterInteractive">
          {`(function(w,d){var hS=w.helpcrunchSettings;if(!hS||!hS.organization){return;}var widgetSrc='https://embed.helpcrunch.com/sdk.js';w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];function r(){if (d.querySelector('script[src="' + widgetSrc + '"')) { return; }var s=d.createElement('script');s.async=1;s.type='text/javascript';s.src=widgetSrc;(d.body||d.head).appendChild(s);}if(d.readyState === 'complete'||hS.loadImmediately){r();} else if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}})(window, document)`}
        </Script>

        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
