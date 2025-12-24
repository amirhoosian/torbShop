import type { Metadata } from "next";

import localFont from "next/font/local";

import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/Navbar";

const yekanbakh = localFont({
  src: [
    { path: "./fonts/yekanbakh/regular-fanum.woff", weight: "400" },
    { path: "./fonts/yekanbakh/medium-fanum.woff", weight: "500" },
    { path: "./fonts/yekanbakh/bold-fanum.woff", weight: "700" },
  ],
  variable: "--font-yekanbakh",
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
        className={`${yekanbakh.variable} container mx-auto grid min-h-screen w-full grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Navbar />
        <main className="overflow-y-auto overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
