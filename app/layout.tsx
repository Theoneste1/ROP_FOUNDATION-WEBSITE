import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rwandaolympiad.org"),
  title: {
    default:
      "Rwanda Olympiad Program | Mathematics, Physics, Computing & AI Olympiads in Rwanda",
    template: "%s | Rwanda Olympiad Program",
  },
  description:
    "Rwanda Olympiad Program (ROP) is the national organization coordinating Mathematics, Physics, Informatics, and AI Olympiads. Train with us and join alumni at MIT, Harvard, Yale, Cambridge & more. #1 STEM education in Rwanda.",
  keywords: [
    "Rwanda Olympiad",
    "Mathematics Olympiad Rwanda",
    "Physics Olympiad Rwanda",
    "Computing Olympiad Rwanda",
    "AI Olympiad Rwanda",
    "STEM education Rwanda",
    "Science competition Rwanda",
    "ROP Rwanda",
    "Olympiad training Rwanda",
    "International Olympiad Rwanda",
    "IMO Rwanda",
    "IPhO Rwanda",
    "IOI Rwanda",
    "STEM students Rwanda",
    "Science education Kigali",
    "Math competition Rwanda",
    "Physics competition Rwanda",
    "Programming competition Rwanda",
    "Rwanda education",
    "STEM scholarships Rwanda",
    "University preparation Rwanda",
  ],
  authors: [
    { name: "Rwanda Olympiad Program", url: "https://rwandaolympiad.org" },
  ],
  creator: "Rwanda Olympiad Program",
  publisher: "Rwanda Olympiad Program",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://rwandaolympiad.org",
    title: "Rwanda Olympiad Program | Nurturing Rwanda's Future Innovators",
    description:
      "National organization coordinating Mathematics, Physics, Informatics, and AI Olympiads in Rwanda. Join 500+ trained students and compete globally.",
    siteName: "Rwanda Olympiad Program",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rwanda Olympiad Program - Nurturing Future Innovators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rwanda Olympiad Program | Mathematics, Physics, Computing & AI Olympiads",
    description:
      "National organization coordinating STEM Olympiads in Rwanda. Join 500+ trained students competing globally.",
    images: ["/images/twitter-image.png"],
    creator: "@RwandaOlympiad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://rwandaolympiad.org",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0C1E33" />
        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Kigali" />
        <meta name="geo.position" content="-1.9441;30.0619" />
        <meta name="ICBM" content="-1.9441, 30.0619" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
