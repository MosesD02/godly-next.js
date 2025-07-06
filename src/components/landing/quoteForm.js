/* eslint-disable @next/next/no-img-element */
"use client";
import { React, useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import QuoteButton from "@/components/quoteButton";
import Airtable from "airtable";
import { cn } from "@/lib/utils";

export default function QuoteForm({ isDialog, service, source }) {
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [service],
    zipcode: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
      }
    }

    // Add event listener when dropdown is open
    if (showServices) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServices]);

  // Initialize Airtable
  const base = new Airtable({
    apiKey:
      "patUUfkvMZUeWcpBx.3b8a637c96292840817c1a291c161b70a0b5952d6a75d9ab0f000bb70a097e51",
  }).base("appzgFLd0zSxa5rIx");

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format as xxx-xxx-xxxx
    if (phoneNumber.length >= 6) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length >= 3) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return phoneNumber;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Track form interaction on first input
    if (name === "name" && value.length === 1) {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quote_form_started", {
          event_category: "engagement",
          event_label: "Quote Form Started",
          form_location: "landing_page",
          service: service || "unknown"
        });
      }
    }

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
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

    // Prevent submission if checkbox is not checked
    if (!formData.agree) {
      setSubmitStatus("error-no-agree");
      return;
    }

    if (formData.services.length === 0) {
      setSubmitStatus("error-no-services");
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
            service: formData.services,
            date: date ? format(date, "MM/dd/yyyy") : null,
            zipcode: formData.zipcode,
            utm_source: source || "google ads",
          }),
        },
      );

      if (typeof window !== "undefined" && window.gtag) {
        const gtag = window.gtag;

        gtag("event", "quote_form_submission", {
          event_category: "engagement",
          event_label: "Quote Form Submission",
          value: 1,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: service,
          date: date ? format(date, "MM/dd/yyyy") : null,
          zipcode: formData.zipcode,
          source: source || "google ads",
        });
      }

      setSubmitStatus("success");
      setShowSuccessDialog(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        services: [service],
        phone: "",
        zipcode: "",
        agree: false,
      });
      setDate(undefined);
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
      onSubmit={handleSubmit}
      className={cn(
        "md:mt-2 xl:mt-3",
        isDialog
          ? "xl:max-h-auto md:relative md:top-5 md:mx-auto md:flex md:max-h-[calc(100vh-100px)] md:w-full md:max-w-[1200px] md:justify-center md:gap-0 xl:top-7 xl:mx-auto xl:flex xl:max-h-[calc(100vh-128px)] xl:justify-center xl:gap-0"
          : "",
      )}
    >
      <div
        className={cn(
          "paper-bg-14 relative w-full rounded-[10px] border bg-[#F3CA9E] bg-blend-screen md:shadow-sm xl:shadow-md",
          isDialog ? "md:overflow-y-auto xl:overflow-y-auto" : "",
        )}
      >
        <div className="paper-bg-14 relative z-20 grid grid-cols-1 items-center justify-between rounded-t-[10px] bg-[#AB8459] px-[27px] py-[25px] md:flex md:h-[100px] md:px-10 md:py-6 xl:flex xl:h-[128px] xl:px-12 xl:py-8">
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
            We’ll call you within 30 minutes — no pressure, just a friendly
            quote.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-12 py-8 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-2">
          <div className="md:col-span-1 xl:col-span-1">
            <label className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:text-sm xl:text-base">
              Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className="rounded-none border-t-0 border-r-0 !border-b-1 border-l-0 border-black bg-transparent px-0 pb-3 text-base focus-visible:ring-0 md:text-xl xl:text-2xl"
              required
            />
          </div>
          <div className="md:col-span-1 xl:col-span-1">
            <label className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:text-sm xl:text-base">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="rounded-none border-t-0 border-r-0 border-b-1 border-l-0 border-black bg-transparent px-0 pb-3 text-base focus-visible:ring-0 md:text-xl xl:text-2xl"
              required
            />
          </div>
          <div className="md:col-span-1 xl:col-span-1">
            <label className="mb-1 block font-sans text-sm font-normal text-[#312E2C] md:text-sm xl:text-base">
              Phone Number
            </label>
            <Input
              name="phone"
              placeholder="YOUR PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-none border-t-0 border-r-0 border-b-1 border-l-0 border-black bg-transparent px-0 pb-3 text-base focus-visible:ring-0 md:text-xl xl:text-2xl"
              required
            />
          </div>
          <div className="md:col-span-1 xl:col-span-1">
            <label className="mb-1 block w-full font-sans text-sm font-normal text-[#312E2C] md:text-sm xl:text-base">
              Zip Code
            </label>
            <Input
              name="zipcode"
              placeholder="YOUR ZIP CODE"
              value={formData.zipcode}
              onChange={handleChange}
              className="w-full rounded-none border-t-0 border-r-0 border-b-1 border-l-0 border-black bg-transparent px-0 pb-3 text-base focus-visible:ring-0 md:text-xl xl:text-2xl"
              required
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between px-12 pb-6 md:flex-row">
          <div className="mt-4 flex items-center space-x-3">
            <Checkbox
              id="agree"
              name="agree"
              checked={formData.agree}
              className="size-[18px] bg-transparent md:size-[16px] xl:size-[22px]"
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, agree: checked }))
              }
            />
            <label
              htmlFor="agree"
              className={cn(
                "font-['satoshi-regular'] text-sm md:text-base xl:text-xl",
              )}
            >
              I agree to get information text messages from Godly about my
              estimate and project
            </label>
          </div>

          <div className="mt-6 mb-6 text-right md:mb-0">
            <QuoteButton
              type="submit"
              disabled={isSubmitting}
              className={isDialog && "estimate-button"}
            >
              {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            </QuoteButton>
          </div>
        </div>
        <img
          src={"/assets/tape-hero.webp"}
          alt="cardBg"
          style={isDialog ? { display: "none" } : {}}
          className="absolute top-0 left-full z-10 h-[266.58px] w-[234.158px] -translate-x-[calc(50%_+_38px)] -translate-y-[calc(50%_-_48px)] rotate-[-17.311deg]"
        />
      </div>
      {submitStatus === "error" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Error submitting form. Please try again.
        </div>
      )}
      {submitStatus === "error-no-agree" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Please agree to the terms before submitting.
        </div>
      )}
      {submitStatus === "error-no-services" && (
        <div className="mt-4 rounded bg-red-100 p-4 text-red-700">
          Please select at least one service before submitting.
        </div>
      )}

      {showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-xl bg-[#f9f0df] p-6 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-normal tracking-wide text-[#2D2B2B]">
              THANK YOU
            </h2>
            <p className="mb-6 font-sans text-[#2D2B2B]">
              I agree to receive updates from Godly
              <br />
              about my estimate via text message
            </p>
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="trim rounded-md bg-[#2D2B2B] px-8 py-4 font-semibold text-white shadow transition-all hover:bg-[#1c1a1a]"
            >
              DONE
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
