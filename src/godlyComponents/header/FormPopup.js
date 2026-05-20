// src/godlyComponents/header/FormPopup.js
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm"; // Import QuoteForm

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle asChild>
          <span className="sr-only">Contact Us</span>
        </DialogTitle>
      </DialogHeader>
      <DialogContent
        className="z-100 border-none bg-transparent p-0 md:max-w-300"
        closeClass="focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus-visible:outline-none"
      >
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;
