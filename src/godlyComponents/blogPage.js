import React from "react";
import "@/styles/fourstepprocess.css";
import WebsiteLayout from "./websiteLayout";
import windowCleaning from "@/assets/windowCleaning.webp";
import Image from "@/components/Image";
import BlogsSection from "./blogsSection";

const BlogPage = () => {
  return (
    <WebsiteLayout>
      <div className="mt-17 flex w-full flex-col items-center justify-center bg-[#fef7ea] px-[30px] py-[45px] text-[#312E2C] md:mt-14 md:p-16">
        <div className="flex w-full max-w-[1311px] flex-col items-center justify-center gap-3 border-b-4 border-double border-black pb-8">
          <div className="flex w-full flex-col gap-3 md:mb-2 md:border-b-1 md:border-solid md:border-black md:pb-4">
            <h2 className="text-center text-[32px] text-[#312E2C] text-shadow-[#AF8F6E] md:pb-2 md:text-6xl">
              News HEADLINE
            </h2>
            <p className="text-center font-['satoshi-light'] text-sm text-[#373A44] md:mt-2">
              April 20th, 2026
            </p>
          </div>
          <div className="my-10 w-full border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="text-left font-['satoshi-light'] text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication. <br /> <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
            <br /> <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
          <p className="text-left font-['satoshi-light'] text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication. <br /> <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
            <br /> <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
          <div className="border-8 border-[#6A64641F] shadow-md md:my-10 md:w-2/4">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="border-8 border-[#6A64641F] shadow-md md:my-10 md:w-2/4">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="text-left font-['satoshi-light'] text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
        </div>
      </div>
      <BlogsSection noOfBlogs={3} />
    </WebsiteLayout>
  );
};

export default BlogPage;
