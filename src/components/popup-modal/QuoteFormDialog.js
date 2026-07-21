import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/components/landing/quoteForm";

const QUOTE_CONTENT_CLASS =
  "z-100 max-sm:scale-[0.95] border-none bg-transparent p-0 md:max-w-300";

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {(o: boolean) => void} props.onOpenChange
 */
export function QuoteFormDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className={QUOTE_CONTENT_CLASS}
      >
        <DialogHeader>
          <DialogTitle asChild>
            <span className="sr-only">Contact Us</span>
          </DialogTitle>
        </DialogHeader>
        <QuoteForm isDialog formTrackingId="special-offer" />
      </DialogContent>
    </Dialog>
  );
}
