"use client";

import Image from "next/image";
import Link from "next/link";
import { User, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

export default function DesktopNav() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const popular = ["گوشی", "لپ‌تاپ", "ساعت"];

  return (
    <div className="hidden md:flex w-full items-center justify-between px-2 py-7">
      <div className="flex">
        <Image
          height={100}
          width={100}
          alt="Logo"
          src="/icons/header-logo-desktop.svg"
        />
        <Image
          height={100}
          width={100}
          alt="Logo wave"
          src="/icons/bg-logo-wave.png"
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-red-500">
            <span className="text-zinc-400">021</span>98675
          </h3>

          {/* Search box */}
          <div className="relative">
            <div className="flex h-fit items-center gap-2 rounded-3xl border border-gray-200 bg-gray-50 px-2 py-1.5">
              <Search size={20} className="text-gray-600" />
              <input
                className="bg-transparent outline-none"
                type="text"
                value={query}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="جستجوی محصول"
              />
            </div>

            {isFocused && (
              <div className="absolute right-0 left-0 z-10 mt-2 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                <p className="mb-2 text-xs text-gray-500">بیشترین جستجوها</p>
                <div className="flex flex-wrap gap-2">
                  {popular.map((item) => (
                    <button
                      className="rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-100"
                      key={item}
                      onMouseDown={() => setQuery(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50">
          <User size={18} className="text-gray-600" />
          <Link className="text-sm text-gray-700" href="/login">
            وارد شوید
          </Link>
        </div>
        <div className="relative flex flex-col gap-2">
          <div
            className="flex items-center gap-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="text-sm text-gray-600">۰ تومان</span>
          </div>

          {isOpen && (
            <div className="absolute top-full right-0 z-10 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-medium text-gray-600">
                سبد خرید خالی است!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
