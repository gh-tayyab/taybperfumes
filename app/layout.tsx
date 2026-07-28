import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import GTM from "@/components/GTM";
import { Cormorant_Garamond, Jost } from "next/font/google";

const FloatingSocial = dynamic(() => import("@/components/FloatingSocial"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"));
const CartDrawer = dynamic(() => import("@/components/CartDrawer"), {
  ssr: false,
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taybperfumes.com";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Best Luxury Long-Lasting Perfumes For Men & Women | TAYB",
    template: "%s | TAYB Perfumes",
  },

  description:
    "Buy premium luxury perfumes in Pakistan from TAYB Perfumes. Discover long-lasting fragrances for men & women inspired by world-famous scents. Fast delivery across Pakistan.",
  verification: {
    other: {
      "msvalidate.01": "3C96E0C8D61864A3B5F0C3DD4D5373F5",
    },
  },
  keywords: [
    "TAYB Perfumes",
    "Perfumes Pakistan",
    "Luxury Perfumes Pakistan",
    "Best Perfumes in Pakistan",
    "Long Lasting Perfumes",
    "Men Perfume Pakistan",
    "Women Perfume Pakistan",
    "Designer Inspired Perfumes",
    "Premium Fragrances",
    "Attar Pakistan",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "TAYB Perfumes Pakistan | Luxury Long-Lasting Perfumes",
    description:
      "Premium luxury perfumes for men & women in Pakistan. Inspired fragrances with long-lasting performance and nationwide delivery.",
    url: siteUrl,
    siteName: "TAYB Perfumes",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAYB Perfumes Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TAYB Perfumes Pakistan",
    description: "Luxury long-lasting perfumes for men & women.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK" className="overflow-x-hidden">
      <body
        className={`${cormorant.variable} ${jost.variable} grain bg-charcoal text-cream`}
      >
        <GTM />
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />

          <main id="main-content">{children}</main>
          <FloatingSocial />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
