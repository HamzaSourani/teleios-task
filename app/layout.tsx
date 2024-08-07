import type { Metadata } from "next";
import { Titillium_Web, Orbitron } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/footer";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-titillium",
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});
export const metadata: Metadata = {
  title: "Teleios Dome",
  description:
    "Experience the thrill of motorsport in the heart of Dubai Production City. Teleios Dome offers state-of-the-art racing simulators for enthusiasts and beginners alike. Book your session now and race on world-famous tracks with professional equipment and expert coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-w-screen-3xl m-auto font-titillium",
          titillium.variable,
          orbitron.variable,
        )}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
