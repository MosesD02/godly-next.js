// components/BlogsHeadline.tsx
import Image from "@/components/Image";
import Link from "next/link";
import windowCleaning from "@/assets/windowCleaning.webp";

const BlogsHeadline = () => {
  return (
    <>
      <div className="hidden bg-[#fdf6ed] pt-[40px] md:block md:px-12">
        <div className="mx-auto flex max-w-[1311px] flex-col items-start gap-8 border-black pb-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="border-8 border-[#6A64641F] shadow-md">
              <Image
                src={windowCleaning} // Make sure to place the image in /public folder
                alt="Workers cleaning windows"
                className="h-auto w-[650px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-1 font-['satoshi-light'] text-lg text-gray-500">
              Just a short while ago, exactly 10 minutes ago.
            </p>
            <h2 className="mb-4 text-[36px] font-semibold text-gray-800">
              NEWS HEADLINE
            </h2>
            <p className="mb-4 [display:-webkit-box] h-[10] overflow-hidden font-['satoshi-light'] text-[20px] leading-[31px] text-gray-800 [-webkit-box-orient:vertical] [-webkit-line-clamp:9]">
              We aspire to transport you back to a time when trust was the
              cornerstone of every relationship, particularly within the realms
              of your home and business. Picture an era where commitments were
              not just words spoken lightly, but were honored with unwavering
              integrity. In those days, fulfilling promises was the norm, and
              they were seen as binding agreements rather than mere suggestions.
              We are dedicated to reviving that standard of excellence, where
              accountability and reliability were not just ideals, but essential
              values that governed interactions. Our mission is to ensure that
              you can place your trust in those who serve you, allowing you to
              engage with confidence and peace of mind, knowing that your
              expectations will be met with sincerity and dedication.
            </p>
            <Link
              href="/blog/1"
              className="flex w-full justify-end text-end text-[24px] hover:underline"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="h-px w-[full] bg-black" />
          <div className="h-[3px] w-[full] bg-black" />
        </div>
      </div>
      <div className="flex flex-col gap-[24px] bg-[#fdf6ed] px-[30px] py-[52px] md:hidden">
        <div className="flex w-full flex-col gap-3">
          <h2 className="trim text-[32px] font-semibold text-[#312E2C] leading-[100%]">
            NEWS HEADLINE
          </h2>
          <p className="font-['satoshi-light'] text-sm leading-[16px] text-[#373A44]">
            Just a short while ago, exactly 10 minutes ago.
          </p>
          <div className="flex w-fit items-center justify-center border-6 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-[334px] object-cover"
            />
          </div>
        </div>
        <div>
          <p className="line-clamp-8 font-['satoshi-light'] text-xl leading-[26px] text-[#312E2C]">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were seen as binding agreements rather than mere suggestions. We are
            dedicated to reviving that standard of excellence, where
            accountability and reliability were not just ideals, but essential
            values that governed interactions. Our mission is to ensure that you
            can place your trust in those who serve you, allowing you to engage
            with confidence and peace of mind, knowing that your expectations
            will be met with sincerity and dedication.
          </p>
        </div>
        <div>
          <Link
            href="/blog/1"
            className="flex w-full justify-end text-end text-xl leading-[24px] text-[#003953]"
          >
            READ MORE
          </Link>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="h-px w-[full] bg-black" />
          <div className="h-[3px] w-[full] bg-black" />
        </div>
      </div>
    </>
  );
};

export default BlogsHeadline;
