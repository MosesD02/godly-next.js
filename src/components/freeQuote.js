// components/FreeEstimateButton.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

export default function FreeQuoteButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="free-button">
        <span className="color-[#FDE4C8]!">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.142 24.1294C18.3035 24.2641 18.4898 24.3656 18.6905 24.4282C18.8912 24.4908 19.1023 24.5132 19.3117 24.4942C19.521 24.4751 19.7246 24.4151 19.9107 24.3173C20.0968 24.2196 20.2619 24.0861 20.3964 23.9246L25.7292 17.5246C25.8697 17.364 25.9766 17.177 26.0438 16.9745C26.1109 16.7719 26.1368 16.5581 26.1201 16.3454C26.1033 16.1327 26.0442 15.9255 25.9461 15.736C25.8481 15.5465 25.7132 15.3785 25.5493 15.2419C25.3854 15.1054 25.1958 15.0029 24.9918 14.9407C24.7877 14.8785 24.5733 14.8577 24.361 14.8795C24.1488 14.9014 23.9431 14.9655 23.756 15.068C23.5689 15.1705 23.4042 15.3095 23.2716 15.4766L17.9372 21.8766C17.6658 22.2025 17.5348 22.6229 17.5732 23.0454C17.6116 23.4678 17.8162 23.8577 18.142 24.1294Z"
            fill="#FDE7CD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.142 8.87134C17.8162 9.14299 17.6116 9.53289 17.5732 9.95534C17.5348 10.3778 17.6658 10.7982 17.9372 11.1241L23.2716 17.5241C23.4042 17.6913 23.5689 17.8302 23.756 17.9327C23.9431 18.0353 24.1488 18.0993 24.361 18.1212C24.5733 18.1431 24.7877 18.1223 24.9918 18.06C25.1958 17.9978 25.3854 17.8954 25.5493 17.7588C25.7132 17.6222 25.8481 17.4542 25.9461 17.2647C26.0442 17.0752 26.1033 16.868 26.1201 16.6554C26.1368 16.4427 26.1109 16.2288 26.0438 16.0263C25.9766 15.8238 25.8697 15.6367 25.7292 15.4761L20.3964 9.07614C20.2619 8.91459 20.0968 8.78114 19.9107 8.68341C19.7246 8.58567 19.521 8.52558 19.3117 8.50656C19.1023 8.48754 18.8912 8.50997 18.6905 8.57256C18.4898 8.63515 18.3035 8.73668 18.142 8.87134Z"
            fill="#FDE7CD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8984 16.5004C22.8984 16.076 22.7299 15.6691 22.4298 15.369C22.1297 15.069 21.7228 14.9004 21.2984 14.9004H8.49844C8.07409 14.9004 7.66712 15.069 7.36707 15.369C7.06701 15.6691 6.89844 16.076 6.89844 16.5004C6.89844 16.9247 7.06701 17.3317 7.36707 17.6318C7.66712 17.9318 8.07409 18.1004 8.49844 18.1004H21.2984C21.7228 18.1004 22.1297 17.9318 22.4298 17.6318C22.7299 17.3317 22.8984 16.9247 22.8984 16.5004Z"
            fill="#FDE7CD"
          />
        </svg>
      </Button>
      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle asChild>
          <span className="sr-only">Contact Us</span>
        </DialogTitle>
      </DialogHeader>
      <DialogContent className="z-16777000 border-none bg-transparent p-0 md:max-w-300">
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
};
