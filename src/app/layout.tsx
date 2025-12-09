import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} container min-h-screen grid grid-rows[auto_1fr_auto] mx-auto antialiased`}
      >
        <Navbar />
        <main className="py-6 overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
