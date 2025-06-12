import PrivacyPolicy from "@/godlyComponents/privacyPolicy";

export const metadata = {
  title: "Privacy Policy | Godly Windows & Wash Co.",
  description:
    "Privacy Policy for Godly Windows & Wash Co. Learn how we collect, use, and protect your personal information when you use our window cleaning and exterior home services.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "Godly Windows",
    "window cleaning privacy",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy | Godly Windows & Wash Co.",
    description:
      "Privacy Policy for Godly Windows & Wash Co. Learn how we collect, use, and protect your personal information.",
    url: "https://godlywindows.com/privacy-policy",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Godly Windows & Wash Co.",
    description:
      "Privacy Policy for Godly Windows & Wash Co. Learn how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
