import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { QuoteProvider } from "@/components/QuoteProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import QuoteListDrawer from "@/components/QuoteListDrawer";
import ChemicalMascotWidget from "@/components/ChemicalMascotWidget";
import ScrollProgressWidget from "@/components/ScrollProgressWidget";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Mobeen Enterprise | Trusted Bulk Chemical Distributor in Karachi",
    template: "%s | Al Mobeen Enterprise",
  },
  description:
    "Al Mobeen Enterprise — 30 years of trusted bulk chemical distribution from Jodia Bazar, Karachi. Solvents, pigments, plasticizers, resins, titanium dioxide, and 80+ industrial chemicals. Serving all of Pakistan.",
  keywords: [
    "chemical supplier Karachi",
    "bulk chemicals Pakistan",
    "industrial chemicals",
    "Jodia Bazar chemicals",
    "DOP supplier",
    "titanium dioxide Pakistan",
    "pigments supplier",
    "solvents wholesale",
    "Al Mobeen Enterprise",
  ],
  authors: [{ name: "Al Mobeen Enterprise" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almobeenenterprise.com",
    siteName: "Al Mobeen Enterprise",
    title: "Al Mobeen Enterprise | Trusted Bulk Chemical Distributor in Karachi",
    description:
      "30 years of trusted bulk chemical distribution from Jodia Bazar, Karachi. 80+ industrial chemicals serving 7 major industries across Pakistan.",
  },
  icons: {
    icon: [
      { url: "/ame-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/ame-logo.png",
    apple: "/ame-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Al Mobeen Enterprise",
              description:
                "Trusted bulk chemical distributor serving Pakistan since 1995 from Jodia Bazar, Karachi.",
              url: "https://almobeenenterprise.com",
              telephone: ["+923321134530", "+923002268847", "+923152703824"],
              email: "almobeenenterprise@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "G/9, Golden Center, Weaver Lane, Jodia Bazar",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              foundingDate: "1995",
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
              sameAs: [
                "https://www.instagram.com/almobeenenterprise",
                "https://www.facebook.com/almobeenenterprise",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ame-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-base text-ink transition-colors duration-300 relative">
      <Script
          src="http://localhost:3000/widget.js"
          data-widget-key="rd_live_frRwD7a6Avc9PrUJVaH8OSXc18pprshaSBP3QI4kOlc"
          strategy="afterInteractive"
        />
        <SmoothScrollProvider>
          <ThemeProvider>
            <LanguageProvider>
              <QuoteProvider>
                <ToastProvider>
                  <Navbar />
                  <main className="flex-1 relative z-10">{children}</main>
                  <Footer />
                  <ChemicalMascotWidget />
                  <ScrollProgressWidget />
                  <QuoteListDrawer />
                </ToastProvider>
              </QuoteProvider>
            </LanguageProvider>
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
