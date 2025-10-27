"use client";
import Image from "next/image";
import { Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const popular = ["گوشی", "لپ‌تاپ", "ساعت"];

  return (
    <nav className="w-full flex px-2 py-7 items-center justify-between">
      <div className="flex">
        <Image
          src="/icons/header-logo-desktop.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/icons/bg-logo-wave.png"
          alt="Logo background wave"
          width={100}
          height={100}
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-red-500">
            <span className="text-zinc-400">021</span>98675
          </h3>

          {/* Search box */}
          <div className="relative">
            <div className="flex h-fit py-1.5 px-2 rounded-3xl bg-gray-50 border border-gray-200 items-center gap-2">
              <Search size={20} className="text-gray-600" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="جستجوی محصول"
                className="bg-transparent outline-none"
              />
            </div>

            {isFocused && (
              <div className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 animate-fade-in">
                <p className="text-gray-500 text-xs mb-2">بیشترین جستجوها</p>
                <div className="flex gap-2 flex-wrap">
                  {popular.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onMouseDown={() => setQuery(item)}
                      className="px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-gray-100 transition"
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
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
          <User size={18} className="text-gray-600" />
          <a href="#" className="text-sm text-gray-700">
            وارد شوید
          </a>
        </div>
        <div className="flex flex-col gap-2 relative">
          <div
            className="flex items-center gap-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="text-sm text-gray-600">۰ تومان</span>
          </div>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-4 animate-fade-in z-10">
              <div className="flex flex-col items-center justify-center gap-3 py-2">
                <ShoppingCart
                  size={40}
                  className="text-purple-500 opacity-80"
                />
                <p className="text-gray-600 text-sm font-medium">
                  سبد خرید خالی است!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
