import type { Metadata } from "next";
import { Inter, Abril_Fatface } from "next/font/google";
import "./globals.css";
import ViewCursor from "@/components/ViewCursor";

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
    "Senior Product Designer with 10 years across fintech, enterprise, and startups. Currently at Intuit TurboTax.",
  openGraph: {
    title: "Chelsea Hwang — Product Designer",
    description:
      "Senior Product Designer with 10 years across fintech, enterprise, and startups. Currently at Intuit TurboTax.",
    url: "https://www.hichelsea.com",
    siteName: "Chelsea Hwang",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chelsea Hwang — Product Designer",
    description:
      "Senior Product Designer with 10 years across fintech, enterprise, and startups. Currently at Intuit TurboTax.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${abrilFatface.variable} antialiased`}>
      <body className="min-h-screen bg-[#FDFDFD] font-sans">
        <ViewCursor />
        {children}
      </body>
    </html>
  );
}
