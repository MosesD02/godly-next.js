"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function WebsiteLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1c1b] antialiased">
      <Header />
      {children}
      {/* {!isBlogsPage && !isServicePage && <Faq />} */}
      <Footer />
    </div>
  );
}
