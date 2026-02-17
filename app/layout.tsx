import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolarAudit.ai - Maximize Your Solar Savings",
  description: "Calculate your solar potential, Indian Government subsidies (PM Surya Ghar 2026), and lifetime savings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
