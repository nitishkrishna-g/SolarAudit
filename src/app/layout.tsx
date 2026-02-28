import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://solaraudit.vercel.app"),
  title: {
    default: "SolarAudit – The 2026 Solar ROI Engine | Calculate Your Savings",
    template: "%s | SolarAudit",
  },
  description:
    "Your rooftop, audited for profit. Calculate exact solar ROI using 2026 PM Surya Ghar subsidy rates, state-specific tariffs, and net metering data.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SolarAudit – The 2026 Solar ROI Engine",
    description:
      "Calculate exact solar ROI using 2026 PM Surya Ghar subsidy rates and state-specific tariffs. No hidden math. Just pure savings.",
    url: "https://solaraudit.vercel.app",
    siteName: "SolarAudit",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolarAudit – The 2026 Solar ROI Engine",
    description:
      "Calculate exact solar ROI using 2026 PM Surya Ghar subsidy rates. No hidden math. Just pure savings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
