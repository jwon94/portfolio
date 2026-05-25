import type { Metadata } from "next";
import { Inter, Abril_Fatface } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chelsea Hwang — Product Designer",
  description:
    "Senior Product Designer at Slalom Build, bringing ideas to life from 0 to 1 for clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${abrilFatface.variable} antialiased`}>
      <body className="min-h-screen bg-[#fcfcfc] font-sans">{children}</body>
    </html>
  );
}
