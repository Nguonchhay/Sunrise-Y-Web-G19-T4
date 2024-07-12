import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LandWind",
  description: "Theme for NextJs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        {/* Meta SEO */}
        <meta name="title" content="Landwind - Tailwind CSS Landing Page" />
        <meta name="description" content="Get started with a free and open-source landing page built with Tailwind CSS and the Flowbite component library." />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Themesberg" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script src="https://buttons.github.io/buttons.js" />
      </head>
      <body className={inter.className}>
        {
          // Check is Home
        }
        {children}
        <Script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js" />
      </body>
    </html>
  );
}
