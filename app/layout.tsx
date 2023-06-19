"use client";

import Footer from "@/components/Footer";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "PRC Accrediation Application System",
  description: "Thesis keme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="relative z-10 flex justify-center flex-col">
          {children}
          {pathname !== "/" && <footer className="bg-[#F9FAFE] px-6 lg:px-12"><Footer /></footer>}
        </main>
      </body>
    </html>
  );
}
