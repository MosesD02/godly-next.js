import WebsiteLayout from "@/components/landing/websiteLayout";
import Hero from "@/components/landing/hero";

// Generate metadata for booking page
export const metadata = {
  title: "Book Window Cleaning & Pressure Washing Services | Godly Windows",
  description:
    "Book professional window cleaning and pressure washing services in South Florida. Free estimates, satisfaction guarantee, and expert exterior cleaning for homes and businesses.",
  keywords: [
    "book window cleaning",
    "schedule window cleaning",
    "window cleaning appointment",
    "pressure washing booking",
    "South Florida window cleaning",
    "exterior cleaning services",
    "professional window washing",
    "home cleaning services",
    "commercial cleaning",
    "free estimates",
  ],
  openGraph: {
    title: "Book Window Cleaning & Pressure Washing Services | Godly Windows",
    description:
      "Book professional window cleaning and pressure washing services in South Florida. Free estimates, satisfaction guarantee, and expert exterior cleaning for homes and businesses.",
    url: "https://godlywindows.com/booking",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Book professional window cleaning and pressure washing services in South Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Window Cleaning & Pressure Washing Services | Godly Windows",
    description:
      "Book professional window cleaning and pressure washing services in South Florida. Free estimates, satisfaction guarantee, and expert exterior cleaning for homes and businesses.",
    images: ["/favicon.svg"],
  },
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <WebsiteLayout footerForm={false} source="booking">
      <Hero service={"window-cleaning"} />
    </WebsiteLayout>
  );
}
