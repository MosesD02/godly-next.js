import Image from "@/components/Image";

const WRAP_CLASS = "fixed top-1/2 left-0 z-40 -translate-y-1/2 transform";

const IMG_CLASS = "h-auto w-10 cursor-pointer object-cover md:w-[50px]";

/**
 * @param {object} props
 * @param {() => void} props.onReopen
 */
export function FloatingOfferTab({ onReopen }) {
  return (
    <div className={WRAP_CLASS}>
      <button
        type="button"
        onClick={onReopen}
        aria-label="Reopen new client offer"
      >
        <Image
          src="/assets/save_50_off.png"
          alt="Save 50 on first service"
          width={50}
          height={191}
          sizes="(min-width: 768px) 50px, 40px"
          className={IMG_CLASS}
        />
      </button>
    </div>
  );
}
