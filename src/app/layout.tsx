import type { Metadata } from "next";

import localFont from "next/font/local";

import Providers from "@/app/providers";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/Navbar";

import "../styles/globals.css";

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
        <Providers>
          <Navbar />
          <main className="overflow-x-hidden overflow-y-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
