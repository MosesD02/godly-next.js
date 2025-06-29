import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/godlyContext";
import Script from "next/script";

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
  metadataBase: new URL("https://godlywindows.com"),
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6P0ST66B9P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6P0ST66B9P');
          `}
        </Script>

        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
