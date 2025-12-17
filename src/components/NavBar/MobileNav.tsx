"use client";
import { Filter, Grid3X3, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import FilterModal from "../UI/FilterModal/FilterModal";

export default function MobileNav() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex w-full max-w-full flex-col px-0.5 md:hidden">
      <div className="flex justify-between">
        <Image
          height={50}
          width={50}
          alt="Mobile Logo"
          className="h-auto w-11"
          src="/images/templates/base/header-logo-mobile.svg"
        />

        <button
          className="flex items-center justify-center p-0.5"
          type="button"
        >
          <User size={16} className="text-gray-700" />
        </button>
      </div>

      <div className="my-1 h-0.5 w-full bg-amber-100" />

      <div className="flex w-full items-center justify-between gap-1 p-1">
        {/* left icons */}
        <div className="flex items-center gap-2">
          {/* cart with badge */}
          <button className="relative text-gray-700" type="button">
            <ShoppingCart size={16} />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              0
            </span>
          </button>

          {/* grid icon */}
          <button className="text-gray-700" type="button">
            <Grid3X3 size={14} />
          </button>

          {/* filter icon فقط صفحه Explore */}
          {pathname === "/explore" && (
            <button
              className="text-gray-700"
              type="button"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter size={14} />
            </button>
          )}
        </div>

        {/* search text + icon */}
        <div className="flex flex-1 items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-500">
          <input
            className="w-full bg-transparent text-[10px] outline-none"
            type="text"
            placeholder="Search product"
          />
          <Search size={14} />
        </div>

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </div>
    </div>
  );
}
