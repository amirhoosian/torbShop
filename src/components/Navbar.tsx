"use client";
import { Filter, Grid3X3, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const popular = ["گوشی", "لپ‌تاپ", "ساعت"];

  return (
    <nav className="w-full px-2 py-2">
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
            alt="Logo background wave"
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
                <div className="animate-fade-in absolute right-0 left-0 z-10 mt-2 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                  <p className="mb-2 text-xs text-gray-500">بیشترین جستجوها</p>
                  <div className="flex flex-wrap gap-2">
                    {popular.map((item) => (
                      <button
                        className="rounded-full border border-gray-200 px-3 py-1 text-sm transition hover:bg-gray-100"
                        key={item}
                        type="button"
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
              <div className="animate-fade-in absolute top-full right-0 z-10 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                <div className="flex flex-col items-center justify-center gap-3 py-2">
                  <ShoppingCart
                    size={40}
                    className="text-purple-500 opacity-80"
                  />
                  <p className="text-sm font-medium text-gray-600">
                    سبد خرید خالی است!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex w-full max-w-full flex-col md:hidden px-0.5">
        <div className="flex justify-between">
          <Image
            src="/images/templates/base/header-logo-mobile.svg"
            alt="Mobile Logo"
            width={50}
            height={50}
            className="w-11 h-auto max-w-[desired]"
          />

          <button
            type="button"
            className="flex items-center justify-center p-0.5"
          >
            <User size={16} className="text-gray-700" />
          </button>
        </div>
        <div className="w-full h-[2px] bg-amber-100 mt-1 mb-1" />

        <div className="flex w-full items-center justify-between gap-1 px-1 py-1">
          {/* left icons */}
          <div className="flex items-center gap-2">
            {/* cart with badge */}
            <button type="button" className="relative text-gray-700">
              <ShoppingCart size={16} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                0
              </span>
            </button>

            {/* grid icon */}
            <button type="button" className="text-gray-700">
              <Grid3X3 size={14} />
            </button>

            {/* filter icon */}
            <button className="text-gray-700">
              <Filter size={14} />
            </button>
          </div>

          {/* search text + icon */}
          <div className="flex items-center gap-1 text-xs text-gray-500 flex-1 px-2 py-1 rounded-md border border-gray-300">
            <input
              type="text"
              placeholder="Search product"
              className="w-full bg-transparent outline-none text-[10px]"
            />
            <Search size={14} />
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-amber-100 mt-1 mb-1" />
    </nav>
  );
}
