import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import GrainOverlay from "@/components/GrainOverlay";
import FixedNav from "@/components/FixedNav";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tran Phan Hoang Phuc — Full-Stack Developer",
  description:
    "Full-stack developer and final-year IT student at RMIT Vietnam. Building clean, purposeful digital products.",
  openGraph: {
    title: "Tran Phan Hoang Phuc — Full-Stack Developer",
    description:
      "Full-stack developer and final-year IT student at RMIT Vietnam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body>
        <GrainOverlay />
        <FixedNav />
        <ThemeToggle />
        <main>{children}</main>
      </body>
    </html>
  );
}
