// components/FreeEstimateButton.tsx
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";
import LandingQuoteForm from "@/components/landing/quoteForm";

export default function SectionButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const useShortForm = pathname?.startsWith("/landing");
  const isLandingAb =
    pathname?.startsWith("/landing/a") || pathname?.startsWith("/landing/b");
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn("estimate-button", isLandingAb && "cta")}
      >
        <span className="">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.642 23.6431C17.8035 23.7777 17.9898 23.8793 18.1905 23.9418C18.3912 24.0044 18.6023 24.0269 18.8117 24.0078C19.021 23.9888 19.2246 23.9287 19.4107 23.831C19.5968 23.7333 19.7619 23.5998 19.8964 23.4383L25.2292 17.0383C25.3697 16.8777 25.4766 16.6906 25.5438 16.4881C25.6109 16.2856 25.6368 16.0717 25.6201 15.859C25.6033 15.6464 25.5442 15.4392 25.4461 15.2497C25.3481 15.0602 25.2132 14.8922 25.0493 14.7556C24.8854 14.619 24.6958 14.5166 24.4918 14.4544C24.2877 14.3921 24.0733 14.3713 23.861 14.3932C23.6488 14.4151 23.4431 14.4791 23.256 14.5817C23.0689 14.6842 22.9042 14.8231 22.7716 14.9903L17.4372 21.3903C17.1658 21.7162 17.0348 22.1366 17.0732 22.5591C17.1116 22.9815 17.3162 23.3714 17.642 23.6431Z"
            fill="#D0BDA6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.642 8.38501C17.3162 8.65666 17.1116 9.04657 17.0732 9.46901C17.0348 9.89146 17.1658 10.3119 17.4372 10.6378L22.7716 17.0378C22.9042 17.2049 23.0689 17.3439 23.256 17.4464C23.4431 17.5489 23.6488 17.613 23.861 17.6349C24.0733 17.6567 24.2877 17.636 24.4918 17.5737C24.6958 17.5115 24.8854 17.409 25.0493 17.2725C25.2132 17.1359 25.3481 16.9679 25.4461 16.7784C25.5442 16.5889 25.6033 16.3817 25.6201 16.169C25.6368 15.9563 25.6109 15.7425 25.5438 15.5399C25.4766 15.3374 25.3697 15.1504 25.2292 14.9898L19.8964 8.58981C19.7619 8.42826 19.5968 8.29481 19.4107 8.19708C19.2246 8.09935 19.021 8.03925 18.8117 8.02023C18.6023 8.00121 18.3912 8.02364 18.1905 8.08623C17.9898 8.14882 17.8035 8.25035 17.642 8.38501Z"
            fill="#D0BDA6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3984 16.0141C22.3984 15.5897 22.2299 15.1828 21.9298 14.8827C21.6297 14.5826 21.2228 14.4141 20.7984 14.4141H7.99844C7.57409 14.4141 7.16712 14.5826 6.86707 14.8827C6.56701 15.1828 6.39844 15.5897 6.39844 16.0141C6.39844 16.4384 6.56701 16.8454 6.86707 17.1454C7.16712 17.4455 7.57409 17.6141 7.99844 17.6141H20.7984C21.2228 17.6141 21.6297 17.4455 21.9298 17.1454C22.2299 16.8454 22.3984 16.4384 22.3984 16.0141Z"
            fill="#D0BDA6"
          />
        </svg>
      </Button>
      <FormPopup
        open={isOpen}
        onOpenChange={setIsOpen}
        useShortForm={useShortForm}
      />
    </>
  );
}

const FormPopup = ({ open, onOpenChange, useShortForm }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle asChild>
          <span className="sr-only">Contact Us</span>
        </DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="z-100 border-none bg-transparent p-0 md:max-w-300"
      >
        {useShortForm ? (
          <LandingQuoteForm isDialog formTrackingId="section-cta" />
        ) : (
          <QuoteForm isDialog />
        )}
      </DialogContent>
    </Dialog>
  );
};
