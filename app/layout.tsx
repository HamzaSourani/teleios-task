import type { Metadata } from "next";
import { Titillium_Web, Syncopate } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/items/navbar";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-titillium",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-titillium", titillium.variable, syncopate.variable)}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
