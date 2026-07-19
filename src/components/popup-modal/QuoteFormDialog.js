import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

const QUOTE_CONTENT_CLASS =
  "z-100 max-sm:scale-[0.95] border-none bg-transparent p-0 md:max-w-300";

const QUOTE_CLOSE_CLASS =
  "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus-visible:outline-none";

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {(o: boolean) => void} props.onOpenChange
 */
export function QuoteFormDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={QUOTE_CONTENT_CLASS}
        closeClass={QUOTE_CLOSE_CLASS}
      >
        <DialogHeader>
          <DialogTitle asChild>
            <span className="sr-only">Contact Us</span>
          </DialogTitle>
        </DialogHeader>
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
}
