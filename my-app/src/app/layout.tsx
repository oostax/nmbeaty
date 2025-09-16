import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../index.css";
import "../styles/about-doctor.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { YandexMetrica } from "@/components/analytics/yandex-metrica";
import { StructuredData } from "@/components/seo/structured-data";
import { CookieConsent } from "@/components/ui/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Доктор Дрожжина Карина Тагировна - врач-косметолог в Москве и Орехово-Зуево",
  description: "Врач-косметолог с 10+ летним опытом. Инъекционные методики, аппаратная косметология, уходовые процедуры. Запись на консультацию: +7 963 640 4686",
  keywords: "косметолог, врач-косметолог, эстетическая медицина, инъекции, ботокс, филлеры, Москва, Орехово-Зуево, Дрожжина Карина Тагировна, косметологические процедуры, аппаратная косметология, уходовые процедуры",
  authors: [{ name: "Дрожжина Карина Тагировна" }],
  creator: "Dr. Kery Lady",
  publisher: "Dr. Kery Lady",
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
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://drkerylady.ru",
    siteName: "Dr. Kery Lady - Врач-косметолог",
    title: "Доктор Дрожжина Карина Тагировна - врач-косметолог в Москве",
    description: "Врач-косметолог с 10+ летним опытом. Инъекционные методики, аппаратная косметология, уходовые процедуры. Запись: +7 963 640 4686",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Доктор Дрожжина Карина Тагировна - врач-косметолог",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Доктор Дрожжина Карина Тагировна - врач-косметолог",
    description: "Врач-косметолог с 10+ летним опытом. Инъекционные методики, аппаратная косметология, уходовые процедуры.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drkerylady.ru",
  },
  icons: {
    icon: [
      { url: "/icons/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
        <Toaster />
        <YandexMetrica id={process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || "104148332"} />
        <CookieConsent className="custom-cookie-banner" cookiePolicyUrl="/cookies" />
      </body>
    </html>
  );
}