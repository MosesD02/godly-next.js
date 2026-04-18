import NextImage from "next/image";

/** Default optimizer quality (Next.js default is 75). */
const DEFAULT_QUALITY = 90;

export default function Image({ quality = DEFAULT_QUALITY, ...props }) {
  return <NextImage quality={quality} {...props} />;
}
