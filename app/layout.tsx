import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/layout/header/Header";
import Topbar from "@/app/components/layout/Topbar";
import Footer from "@/app/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Top-Rated Roofing Company in Florida | Neal Roofing & Waterproofing",
  description: "Neal Roofing & Waterproofing offers expert commercial and residential roofing services across the Treasure Coast. Since 1996, we've provided reliable roof repair, replacement, and maintenance with unmatched customer satisfaction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <Topbar />
      <Header />
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta-sans)]">{children}</body>
      <Footer />
    </html>
  );
}
