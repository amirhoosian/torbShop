import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trob Shop",
  description: "created by MR Amir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto grid min-h-screen w-full grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Navbar />
        <main className="overflow-y-auto py-2 md:py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
