import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function WebsiteLayout({ children, cityName }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1c1b] antialiased">
      <Header cityName={cityName} />
      {children}
      {/* {!isBlogsPage && !isServicePage && <Faq />} */}
      <Footer />
    </div>
  );
}
