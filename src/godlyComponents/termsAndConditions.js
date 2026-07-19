import React from "react";
import WebsiteLayout from "./websiteLayout";

const TermsAndConditions = () => {
  return (
    <WebsiteLayout>
      <div className="mt-17 flex w-full flex-col items-center justify-center bg-[#fef7ea] px-7.5 py-11.25 text-[#312E2C] md:mt-14 md:p-16">
        <div className="flex max-w-4xl flex-col items-start justify-center gap-6 border-b-4 border-double border-black pb-8">
          {/* Header Section */}
          <div className="flex w-full flex-col gap-3 border-b-2 border-solid border-black pb-6">
            <h1 className="text-center text-[32px] font-bold text-[#312E2C] text-shadow-[#AF8F6E] md:text-6xl">
              Terms and Conditions
            </h1>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Effective Date:</strong> May 24, 2025
              </p>
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Company Name:</strong> Godly Windows & Wash Co.
              </p>
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Website:</strong>{" "}
                <a
                  href="https://godlywindows.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://godlywindows.com
                </a>
              </p>
              <p className="font-['satoshi-light'] text-lg text-[#373A44]">
                <strong>Contact Email:</strong>{" "}
                <a
                  href="mailto:hello@godlywindows.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  hello@godlywindows.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              1. Acceptance of Terms
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              By accessing or using our website, services, or communicating with
              us via SMS, you agree to be bound by these Terms and Conditions.
              If you do not agree, you must not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              2. Services Provided
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              Godly Windows & Wash Co. offers professional exterior cleaning
              services, including window washing, pressure washing, and related
              property maintenance. Service availability is subject to
              scheduling, location, and weather conditions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              3. Quotes and Payments
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              All service estimates are non-binding until approved. Payment is
              due upon job completion unless otherwise agreed in writing. We
              accept major credit cards and secure online payments.
            </p>
          </div>

          {/* Section 4 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              4. Cancellations and Rescheduling
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              Clients may cancel or reschedule services with at least 24
              hours&apos; notice. Short-notice cancellations may be subject to a
              fee. Weather-related changes may require schedule adjustments at
              our discretion.
            </p>
          </div>

          {/* Section 5 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              5. SMS/Text Messaging Policy (A2P 10DLC Compliant)
            </h2>
            <p className="mb-4 font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              By providing your phone number, you agree to receive transactional
              and marketing text messages from Godly Windows & Wash Co. These
              messages may include appointment confirmations, updates, service
              reminders, and promotional offers.
            </p>
            <ul className="ml-6 space-y-2 font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              <li className="list-disc">
                <strong>Message frequency:</strong> Varies per user.
              </li>
              <li className="list-disc">Message and data rates may apply.</li>
              <li className="list-disc">
                Consent is not a condition of purchase.
              </li>
              <li className="list-disc">
                To opt out, reply STOP to any message.
              </li>
              <li className="list-disc">
                To get help, reply HELP or contact us at{" "}
                <a
                  href="mailto:hello@godlywindows.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  hello@godlywindows.com
                </a>
                .
              </li>
              <li className="list-disc">
                We do not share or sell your mobile number or personal
                information with third parties for their marketing purposes.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              6. User Conduct
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              You agree not to misuse our website, damage our property, or
              interfere with our communications or business operations. We
              reserve the right to refuse service to anyone for any reason at
              any time.
            </p>
          </div>

          {/* Section 7 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              7. Limitation of Liability
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              We strive to deliver high-quality services, but are not liable for
              incidental or consequential damages related to property damage,
              service delays, or communication errors. All services are
              performed with care and according to industry standards.
            </p>
          </div>

          {/* Section 8 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              8. Intellectual Property
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              All content on our website, including logos, text, and media, is
              the property of Godly Windows & Wash Co. and may not be used
              without permission.
            </p>
          </div>

          {/* Section 9 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              9. Changes to Terms
            </h2>
            <p className="font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              We may update these Terms and Conditions from time to time.
              Updates will be posted on this page with the new effective date.
              Continued use of our services constitutes acceptance of any
              changes.
            </p>
          </div>

          {/* Section 10 */}
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-[#312E2C] md:text-3xl">
              10. Contact
            </h2>
            <p className="mb-2 font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              For questions about these terms or our services, contact us at:
            </p>
            <div className="space-y-1 font-['satoshi-light'] text-lg/relaxed text-[#312E2C]">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@godlywindows.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  hello@godlywindows.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://godlywindows.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://godlywindows.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default TermsAndConditions;
