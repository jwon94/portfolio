'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const handleMyWork = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#fcfcfc] border-b border-[#f0f0f0] flex items-center justify-between px-12 py-6 w-full">
      <Link
        href="/"
        className="text-[18px] font-bold text-black leading-[28px] hover:opacity-70 transition-opacity whitespace-nowrap"
      >
        Chelsea Hwang.
      </Link>

      <div className="flex items-center gap-12">
        <Link
          href="/"
          onClick={handleMyWork}
          className="text-[18px] font-semibold text-black leading-[28px] hover:opacity-70 transition-opacity"
        >
          My Work
        </Link>

        <Link
          href="/about"
          className="text-[18px] font-semibold text-black leading-[28px] hover:opacity-70 transition-opacity"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
