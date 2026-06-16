"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "@/components/Image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import QuoteButton from "@/components/quoteButton";
import Airtable from "airtable";
import { cn } from "@/lib/utils";
import { sendLeadWebhook, LEAD_WEBHOOKS } from "@/app/lib/leadWebhooks";
import { formatUsPhoneInput, isUsPhoneValid } from "@/lib/usPhone";

export default function QuoteForm({
  isDialog,
  service,
  source,
  formTrackingId = "main",
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLandingAb =
    pathname?.startsWith("/landing/a") || pathname?.startsWith("/landing/b");
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [service],
    zipcode: "",
    consentInformationalSms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const fieldId = (name) => `landing-quote-${formTrackingId}-${name}`;

  // Initialize Airtable
  const base = new Airtable({
    apiKey:
      "patUUfkvMZUeWcpBx.3b8a637c96292840817c1a291c161b70a0b5952d6a75d9ab0f000bb70a097e51",
  }).base("appzgFLd0zSxa5rIx");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Track form interaction on first input
    if (name === "name" && value.length === 1) {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quote_form_started", {
          event_category: "engagement",
          event_label: "Quote Form Started",
          form_location: "landing_page",
          service: service || "unknown",
        });
      }
    }

    if (name === "phone") {
      const formattedPhone = formatUsPhoneInput(value);
      setFormData((prev) => ({
        ...prev,
        phone: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setSubmitStatus("error-no-services");
      return;
    }

    if (!isUsPhoneValid(formData.phone)) {
      setSubmitStatus("error-invalid-phone");
      return;
    }

    setIsSubmitting(true);

    try {
      await base("Form Table").create([
        {
          fields: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            "Required Service": service,
            Date: date ? format(date, "MM/dd/yyyy") : null,
            ZipCode: formData.zipcode,
          },
        },
      ]);

      await fetch(
        "https://hook.us1.make.com/r3kgolabx4r2luoyc39npw095bbtytl7",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: service,
            date: date ? format(date, "MM/dd/yyyy") : null,
            zipcode: formData.zipcode,
            source: "Google Ads",
            pageUrl:
              typeof window !== "undefined" ? window.location.href : null,
            consentMarketingSmsCalls: false,
            consentInformationalSms: formData.consentInformationalSms,
            consentMarketingEmail: false,
          }),
        },
      );

      await fetch(
        "https://hook.us1.make.com/ivm6g245bvvfk1k72ygb9lq83dubrl4m",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: service,
            date: date ? format(date, "MM/dd/yyyy") : null,
            zipcode: formData.zipcode,
            utm_source: source || "google ads",
            pageUrl:
              typeof window !== "undefined" ? window.location.href : null,
            consentMarketingSmsCalls: false,
            consentInformationalSms: formData.consentInformationalSms,
            consentMarketingEmail: false,
          }),
        },
      );

      await fetch(
        "https://hook.us1.make.com/la9l4g93iz98xumdx4ecptc3ji7t4pux",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            services: service,
            date: date ? format(date, "MM/dd/yyyy") : null,
            zipcode: formData.zipcode,
            pageUrl:
              typeof window !== "undefined" ? window.location.href : null,
            consentMarketingSmsCalls: false,
            consentInformationalSms: formData.consentInformationalSms,
            consentMarketingEmail: false,
          }),
        },
      );

      // n8n lead tracking: all /landing/* pages (city + service/city) → same webhook
      const webhook = LEAD_WEBHOOKS.GOOGLE_ADS;
      const pageUrl =
        typeof window !== "undefined" ? window.location.href : null;
      sendLeadWebhook(webhook, formData.name, formData.phone, pageUrl);

      if (typeof window !== "undefined" && window.gtag) {
        const gtag = window.gtag;
        const utms =
          typeof window.__getUtms === "function" ? window.__getUtms() : {};

        // GA4 recommended lead event — use this (or map it) in GA4 / Google Ads conversions
        gtag("event", "generate_lead", {
          currency: "USD",
          value: 1,
          form_id: `landing-quote-${formTrackingId}`,
          page_path: pathname || "",
          service: service || "unknown",
          ...utms,
        });

        // Matches Google Ads import: godlywindows.com (web) close_convert_lead
        const leadTransactionId =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `lead_${Date.now()}`;
        gtag("event", "close_convert_lead", {
          currency: "USD",
          value: 1,
          transaction_id: leadTransactionId,
          form_id: `landing-quote-${formTrackingId}`,
          page_path: pathname || "",
          service: service || "unknown",
          ...utms,
        });

        gtag("event", "qualify_lead", {
          currency: "USD",
          value: 1,
          transaction_id: leadTransactionId,
          form_id: `landing-quote-${formTrackingId}`,
          page_path: pathname || "",
          service: service || "unknown",
          ...utms,
        });
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "quote_form_submission",
          user_email: formData.email,
          user_phone: `+1${formData.phone}`,
          full_name: formData.name,
          postal_code: formData.zipcode,
        });
      }

      setSubmitStatus("success");

      // Reset form before navigating to the confirmation page.
      setFormData({
        name: "",
        email: "",
        services: [service],
        phone: "",
        zipcode: "",
        consentInformationalSms: false,
      });
      setDate(undefined);

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting to Airtable:", error);
      setSubmitStatus("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id={`landing-quote-${formTrackingId}`}
      name={`landing-quote-${formTrackingId}`}
      onSubmit={handleSubmit}
      className={cn(
        "md:mt-2 xl:mt-3",
        isDialog
          ? "xl:max-h-auto md:mx-auto md:flex md:max-h-[calc(100vh-100px)] md:w-full md:max-w-300 md:justify-center md:gap-0 xl:mx-auto xl:flex xl:max-h-[calc(100vh-128px)] xl:justify-center xl:gap-0"
          : "",
      )}
    >
      <div
        className={cn(
          "paper-bg-14 relative w-full rounded-[10px] border bg-[#F3CA9E] bg-blend-screen md:shadow-sm xl:shadow-md",
          isDialog ? "md:overflow-y-auto xl:overflow-y-auto" : "",
        )}
      >
        <div className="paper-bg-14 relative z-20 grid grid-cols-1 items-center justify-between rounded-t-[10px] bg-[#AB8459] px-6.75 py-6.25 md:flex md:h-25 md:px-10 md:py-6 xl:flex xl:h-32 xl:px-12 xl:py-8">
          {/* <h2
            className={cn(
              "trim text-[24px] leading-6 font-normal tracking-[1.2px] text-[#2D2B2B] md:min-w-[120px] md:text-4xl xl:min-w-[137px] xl:text-5xl xl:text-[40px]",
              isDialog
                ? "text-[24px] md:text-3xl xl:text-4xl xl:text-[40px]"
                : "",
            )}
          >
            LET US CALL <br className="md:hidden" /> YOU!
          </h2> */}
          <p
            className={cn(
              "font-['satoshi-regular'] text-[13px] font-medium text-[#2D2B2B] md:text-lg xl:text-2xl",
              isDialog
                ? "text-[13px] md:text-base xl:text-lg xl:text-[20px]"
                : "",
            )}
          >
            We’ll call you within 1 minute — no pressure, just a friendly quote.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-12 py-8 md:grid-cols-2 md:grid-rows-4 md:gap-x-4 md:gap-y-2">
          <label
            htmlFor={fieldId("name")}
            className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:col-start-1 md:row-start-1 md:mb-0 md:self-end md:leading-snug md:text-sm xl:text-base"
          >
            Name
          </label>
          <Input
            id={fieldId("name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="YOUR NAME"
            className="min-w-0 rounded-none border-x-0 border-t-0 border-b border-black bg-transparent px-0 pb-3 text-base shadow-none focus-visible:ring-0 md:col-start-1 md:row-start-2 md:w-full md:min-h-13 md:self-end md:text-xl xl:text-2xl"
            required
          />

          <label
            htmlFor={fieldId("email")}
            className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:col-start-2 md:row-start-1 md:mb-0 md:self-end md:leading-snug md:text-sm xl:text-base"
          >
            Email
          </label>
          <Input
            id={fieldId("email")}
            name="email"
            type="email"
            placeholder="YOUR EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="min-w-0 rounded-none border-x-0 border-t-0 border-b border-black bg-transparent px-0 pb-3 text-base shadow-none focus-visible:ring-0 md:col-start-2 md:row-start-2 md:w-full md:min-h-13 md:self-end md:text-xl xl:text-2xl"
            required
          />

          <label
            htmlFor={fieldId("phone")}
            className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:col-start-1 md:row-start-3 md:mb-0 md:self-end md:leading-snug md:text-sm xl:text-base"
          >
            Phone Number
          </label>
          <div className="min-w-0 md:col-start-1 md:row-start-4 md:flex md:min-h-13 md:items-end md:self-end">
            <div className="flex w-full min-w-0 items-baseline gap-2 border-b border-black pb-3">
              <span
                className="pointer-events-none shrink-0 select-none text-base font-normal leading-snug text-[#312E2C] md:text-xl md:leading-snug xl:text-2xl xl:leading-snug"
                aria-hidden="true"
              >
                +1
              </span>
              <Input
                id={fieldId("phone")}
                name="phone"
                placeholder="YOUR PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                className="h-auto min-h-0 w-full min-w-0 flex-1 rounded-none border-0 bg-transparent px-0 py-0 text-base leading-snug shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0 md:text-xl md:leading-snug xl:text-2xl xl:leading-snug"
                required
              />
            </div>
          </div>

          <label
            htmlFor={fieldId("zipcode")}
            className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:col-start-2 md:row-start-3 md:mb-0 md:self-end md:leading-snug md:text-sm xl:text-base"
          >
            Zip Code
          </label>
          <Input
            id={fieldId("zipcode")}
            name="zipcode"
            placeholder="YOUR ZIP CODE"
            value={formData.zipcode}
            onChange={handleChange}
            className="min-w-0 rounded-none border-x-0 border-t-0 border-b border-black bg-transparent px-0 pb-3 text-base shadow-none focus-visible:ring-0 md:col-start-2 md:row-start-4 md:w-full md:min-h-13 md:self-end md:text-xl xl:text-2xl"
            required
          />
        </div>

        <div className="flex flex-col items-stretch justify-between gap-4 px-12 pb-6 md:flex-row md:items-center">
          <div className="mt-4 flex w-full min-w-0 flex-col gap-4 md:mt-0 md:max-w-[70%] xl:max-w-[75%]">
            <div className="flex items-start gap-3">
              <Checkbox
                id="landing-consent-informational-sms"
                name="consentInformationalSms"
                checked={formData.consentInformationalSms}
                className="mt-0.5 size-4.5 shrink-0 bg-transparent md:size-4 xl:size-5.5"
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    consentInformationalSms: Boolean(checked),
                  }))
                }
              />
              <label
                htmlFor="landing-consent-informational-sms"
                className="font-['satoshi-regular'] text-xs/snug  md:text-sm xl:text-base"
              >
                I agree to get information text messages from Godly about my
                estimate and project.
              </label>
            </div>
          </div>

          <div className="mt-2 mb-6 shrink-0 self-center text-right md:my-0 ">
            <QuoteButton
              type="submit"
              disabled={isSubmitting}
              className={cn(
                isDialog ? "estimate-button" : "quote-button",
                isLandingAb && "cta",
              )}
            >
              {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            </QuoteButton>
          </div>
        </div>
        <Image
          src="/assets/tape-hero.webp"
          alt="cardBg"
          width={234}
          height={267}
          className={cn(
            "absolute top-0 left-full z-10 -translate-x-[calc(50%+38px)] -translate-y-[calc(50%-48px)] rotate-[-17.311deg]",
            isDialog && "hidden",
          )}
        />
      </div>
      {submitStatus === "error" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Error submitting form. Please try again.
        </div>
      )}
      {submitStatus === "error-no-services" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Please select at least one service before submitting.
        </div>
      )}
      {submitStatus === "error-invalid-phone" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Please enter a valid U.S. phone number.
        </div>
      )}
    </form>
  );
}
