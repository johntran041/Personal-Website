import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tran Phan Hoang Phuc — Full-Stack Developer",
  description:
    "Full-stack developer and final-year IT student at RMIT Vietnam. Building production-grade systems with a focus on AI integration and clean developer experiences.",
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
    <html
      lang="en"
      data-theme="light"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=localStorage.getItem('jphuc-dark');document.documentElement.setAttribute('data-theme',d==='false'?'light':'dark')})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
