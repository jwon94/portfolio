import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="fixed top-[88px] left-12 z-50 flex items-center justify-center w-9 h-9 rounded-full border border-[#e0e0e0] bg-white hover:opacity-70 transition-opacity"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 3L5 8L10 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
