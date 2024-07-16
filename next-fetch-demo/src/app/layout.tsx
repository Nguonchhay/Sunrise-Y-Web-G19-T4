import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Next Fetch",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-16">
        <h1>Features: </h1>
        <ul>
          <li>
            <Link href="/">1. Fetch at Server component</Link>
          </li>
          <li>
            <Link href="/client">2. Fetch at Server component using actions.ts</Link>
          </li>
          <li>
            <Link href="/">3. Fetch at Client component</Link>
          </li>
          <li>
            <Link href="/">4. Fetch at Client component using actions.ts</Link>
          </li>
          <li>
            <Link href="/">5. Fetch from own RESTful API</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}