import React from "react"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'AY Farm - Premium Crops & Livestock | Oyo State Nigeria',
  description: 'AY Farm specializes in sustainable agriculture producing high-quality crops and livestock products in Oyo State, Nigeria. Discover our modern farming practices and premium farm products.',
  keywords: 'farm, agriculture, crops, livestock, Oyo State, Nigeria, sustainable farming',
  openGraph: {
    title: 'AY Farm - Premium Agricultural Products',
    description: 'Quality crops and livestock from sustainable farming in Oyo State, Nigeria',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
