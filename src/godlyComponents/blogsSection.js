// components/LatestNews.tsx
import Image from "@/components/Image";
import BlogsImage from "../assets/blogImage.webp";
import Link from "next/link";

const BlogsSection = ({ noOfBlogs }) => {
  const newsList = new Array(noOfBlogs).fill({
    date: "April 20th, 2026",
    title: "DIVINE CLARITY: TRANSFORMING YOUR WINDOWS TO PERFECTION",
    image: BlogsImage,
  });

  return (
    <div className="flex flex-col gap-10 bg-[#fdf6ed] px-7.5 py-7.5 md:px-12 md:pb-12">
      <h2 className="text-trim mx-auto w-full max-w-327.75 text-[36px] font-bold text-gray-800 md:pt-9">
        LASTEST NEWS
      </h2>
      <div className="mx-auto grid max-w-327.75 grid-cols-1 gap-5.75 sm:grid-cols-2 md:grid-cols-3">
        {newsList.map((news, index) => (
          <div key={index} className="flex-col-gap-3 flex">
            <Link href="/blog/1" className="flex flex-col gap-3">
              <Image
                src={news.image}
                alt={news.title}
                width={500}
                height={300}
                className="h-auto w-full object-cover"
              />
              <p className="font-['satoshi-light'] text-base text-[#373A44] md:mt-2 md:text-sm">
                {news.date}
              </p>
              <p className="text-xl/snug font-bold text-[#373A44] md:mt-1 md:text-sm">
                {news.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
