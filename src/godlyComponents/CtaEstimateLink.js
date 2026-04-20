import Link from "next/link";
import { cn } from "@/lib/utils";
import { cityCtaEstimateLink } from "./cityCtaStyles";

export default function CtaEstimateLink({
  href,
  children = "Get a Free Estimate",
  className,
}) {
  return (
    <Link href={href} className={cn(cityCtaEstimateLink, className)}>
      {children}
    </Link>
  );
}
