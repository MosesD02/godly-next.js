import { XIcon } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

export default function QuoteFormCloseButton() {
  return (
    <DialogClose
      data-quote-form-close
      className="absolute top-2 right-2 z-50 flex size-11 items-center justify-center rounded-full text-[#312E2C] transition-colors hover:bg-[#312E2C]/15 hover:text-[#9B4531] focus-visible:ring-2 focus-visible:ring-[#312E2C] focus-visible:ring-offset-2 focus-visible:outline-none md:top-3 md:right-3"
    >
      <XIcon className="size-5 md:size-6" aria-hidden="true" />
      <span className="sr-only">Close</span>
    </DialogClose>
  );
}
