import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotlineButton from "@/components/HotlineButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumitech - Industry Joint Stock Company",
  description: "Safety - Master - Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HotlineButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
