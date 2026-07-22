import TermsAndConditions from "@/godlyComponents/termsAndConditions";
import { BASE_URL } from "@/app/lib/constants";

export const metadata = {
  title: "Terms and Conditions | Godly Windows & Wash Co.",
  description:
    "Terms and Conditions for Godly Windows & Wash Co. Learn about our service policies, SMS messaging terms, payment policies, and user agreements for our window cleaning and exterior home services.",
  keywords: [
    "terms and conditions",
    "service agreement",
    "SMS policy",
    "A2P 10DLC",
    "Godly Windows",
    "window cleaning terms",
    "service policies",
  ],
  openGraph: {
    title: "Terms and Conditions | Godly Windows & Wash Co.",
    description:
      "Terms and Conditions for Godly Windows & Wash Co. Learn about our service policies and user agreements.",
    url: `${BASE_URL}/terms-and-conditions`,
    siteName: "Godly Windows & Wash Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | Godly Windows & Wash Co.",
    description:
      "Terms and Conditions for Godly Windows & Wash Co. Learn about our service policies and user agreements.",
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
