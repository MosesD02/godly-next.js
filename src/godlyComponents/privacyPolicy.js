import React from "react";
import WebsiteLayout from "./websiteLayout";

const PrivacyPolicy = () => {
  return (
    <WebsiteLayout>
      <div className="mt-17 flex w-full flex-col items-center justify-center bg-[#fef7ea] px-[30px] py-[45px] text-[#312E2C] md:mt-14 md:p-16">
        <div className="flex max-w-4xl flex-col items-start justify-center gap-6 border-b-4 border-double border-black pb-8">
          {/* Header Section */}
          <div className="flex w-full flex-col gap-3 border-b-2 border-solid border-black pb-6">
            <h1 className="text-center text-[32px] font-bold text-[#312E2C] text-shadow-[#AF8F6E] md:text-6xl">
              Privacy Policy
            </h1>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Effective Date:</strong> May 24, 2025
              </p>
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Company Name:</strong> Godly Windows & Wash Co.
              </p>
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Website:</strong> godlywindows.com
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="w-full">
            <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              At Godly Windows & Wash Co., we are committed to respecting and
              protecting your privacy. This Privacy Policy outlines how we
              collect, use, and store your information when you engage with our
              services or visit our website.
            </p>
          </div>

          {/* Section 1 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              1. Information We Collect
            </h2>
            <p className="mb-4 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              We may collect the following types of information:
            </p>
            <ul className="ml-6 space-y-2 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              <li className="list-disc">
                <strong>Personal Information</strong> – such as your name, email
                address, phone number, and service address when you contact us,
                request a quote, or schedule services.
              </li>
              <li className="list-disc">
                <strong>Usage Data</strong> – including your IP address, browser
                type, pages visited, and time spent on our site, collected
                automatically via cookies and analytics tools.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              We use the information we collect to:
            </p>
            <ul className="ml-6 space-y-2 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              <li className="list-disc">Deliver and improve our services.</li>
              <li className="list-disc">
                Respond to your inquiries or support requests.
              </li>
              <li className="list-disc">
                Send appointment confirmations, service updates, or promotional
                offers (only if you opt in).
              </li>
              <li className="list-disc">
                Analyze site traffic and improve our online experience.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              3. Data Sharing and Selling
            </h2>
            <ul className="ml-6 space-y-2 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              <li className="list-disc">
                We do not sell or share mobile or personal data with third
                parties, affiliates, or partners for marketing or promotional
                purposes. We only share data with third parties when it is
                strictly necessary to deliver our service and only under binding
                agreements that ensure confidentiality. Under no circumstances
                will mobile data be shared or sold for advertising or
                promotional use.
              </li>
              <li className="list-disc">
                We may only disclose information if required by law or to
                protect our rights and property.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              4. Data Storage and Security
            </h2>
            <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              Your data is stored securely using industry-standard security
              practices and encryption where applicable. We restrict access to
              your information to authorized personnel only.
            </p>
          </div>

          {/* Section 5 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              5. Your Rights
            </h2>
            <p className="mb-4 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              You have the right to:
            </p>
            <ul className="ml-6 space-y-2 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              <li className="list-disc">
                Access the personal information we hold about you.
              </li>
              <li className="list-disc">
                Request corrections or deletion of your data.
              </li>
              <li className="list-disc">Opt out of future communications.</li>
            </ul>
            <p className="mt-4 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              To request any of the above, contact us using the email below.
            </p>
          </div>

          {/* Section 6 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              6. Contact Us
            </h2>
            <p className="mb-2 font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              If you have questions about this policy or would like to request
              changes to your personal data, please contact:
            </p>
            <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@godlywindows.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                hello@godlywindows.com
              </a>
            </p>
          </div>

          {/* Section 7 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              7. Policy Updates
            </h2>
            <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with the updated effective date above.
            </p>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default PrivacyPolicy;
