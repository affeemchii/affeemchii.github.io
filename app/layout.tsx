import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Affan Ali | Business Analytics Student & Developer",
  description:
    "Portfolio of Affan Ali — IBA University student, Business Analytics, front-end developer, educator, and sports leader based in Karachi.",
  keywords: [
    "Affan Ali",
    "IBA University",
    "Business Analytics",
    "Portfolio",
    "Front-end Developer",
    "Karachi",
  ],
  authors: [{ name: "Affan Ali" }],
  openGraph: {
    title: "Affan Ali | Portfolio",
    description: "Business Analytics student at IBA University, Karachi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
