"use client";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="w-full px-2 py-2">
      {/* Desktop */}
      <DesktopNav />

      {/* Mobile */}
      <MobileNav />
    </nav>
  );
}
