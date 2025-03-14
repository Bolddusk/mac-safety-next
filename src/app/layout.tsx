import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing page",
  description: "macsafety.com",
  icons: "/uploads/FaviconMAC.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NIXN",
    operatingSystem: "Windows, Mac, Linux",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "RiskManagementSoftware",
    description:
      "NIXN quantifies risk in real-time, transforming safety from a compliance function into a competitive advantage. Predict exposure, price risk accurately, and drive smarter decisions—before incidents happen.",
    image: "https://macsafety.com/uploads/IMG_8888%20(1).png",
    url: "https://macsafety.com/nixn",
    author: {
      "@type": "Organization",
      name: "Mac Safety",
      url: "https://macsafety.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Mac Safety",
      logo: {
        "@type": "ImageObject",
        url: "https://macsafety.com/uploads/Untitled%20design%20(11).png",
      },
    },
    datePublished: "2025-03-08",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MAC Safety Consultants",
    url: "https://macsafety.com/",
    logo: "https://macsafety.com/uploads/Untitled%20design%20(11).png",
    description:
      "MAC Safety Consultants uniquely integrates human expertise, audits, compliance monitoring, safety program implementation, safety assessments, mission-critical software, and AI-driven intelligence to deliver unparalleled value across the enterprise safety ecosystem.",
    foundingDate: "2005",
    numberOfEmployees: "50+",
    areaServed: ["US", "Global"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      ratingCount: "245",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "724.513.4491",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "info@macsafety.us",
        contactType: "general inquiries",
      },
      {
        "@type": "ContactPoint",
        email: "press@macsafety.us",
        contactType: "media inquiries",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/mac-safety-consultants-inc-",
      "https://github.com/MAC-Intel",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "401 Brkich Way",
      addressLocality: "Beaver",
      addressRegion: "PA",
      postalCode: "15009",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          key="schema_1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          key="schema_2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
