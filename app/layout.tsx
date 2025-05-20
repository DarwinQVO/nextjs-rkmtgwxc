import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";   // ⬅️  importa tu encabezado

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TBPN Research",
  description: "Research hub for TBPN, John Coogan & Jordi Hays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />            {/* ⬅️  encabezado fijo */}
        <main>{children}</main>
      </body>
    </html>
  );
}
