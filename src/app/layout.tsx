import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { jsonLd } from "@/utils/schema";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/uploads/FaviconMAC.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          key="schema_1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content="MAC Safety | Closing the gap between intent and execution"
        />
        <meta
          property="og:description"
          content="MAC integrates people, software, systems, and hardware to expose, measure, and control the Unknown. Risk intelligence and operational safety solutions."
        />
        <meta
          property="og:image"
          content="https://mactest.replit.app/uploads/og-share-image.png"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mactest.replit.app" />
        <meta property="og:site_name" content="MAC Safety" />

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MAC Safety | Closing the gap between intent and execution"
        />
        <meta
          name="twitter:description"
          content="MAC integrates people, software, systems, and hardware to expose, measure, and control the Unknown."
        />
        <meta
          name="twitter:image"
          content="https://mactest.replit.app/uploads/og-share-image.png"
        />

        <Script
          // async
          src="https://www.googletagmanager.com/gtag/js?id=G-SL56NBPRTS"
          // strategy="lazyOnload"
          defer
        />
        <Script id="google-analytics" strategy="afterInteractive" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-SL56NBPRTS');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
