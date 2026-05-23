import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#fcfcfc] flex items-center justify-between px-12 py-6 w-full">
      <Link
        href="/"
        className="text-[18px] font-bold text-black leading-[28px] hover:opacity-70 transition-opacity"
      >
        Chelsea Hwang.
      </Link>

      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-[18px] font-semibold text-black underline leading-[28px] hover:opacity-70 transition-opacity"
        >
          <Image
            src="/images/home-icon.png"
            alt="Home"
            width={24}
            height={24}
          />
          My Work
        </Link>

        <Link
          href="/about"
          className="flex items-center gap-2 text-[18px] font-semibold text-black underline leading-[28px] hover:opacity-70 transition-opacity"
        >
          <Image
            src="/images/avatar-icon.png"
            alt="About"
            width={24}
            height={24}
          />
          About
        </Link>
      </div>
    </nav>
  );
}
