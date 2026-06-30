
import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingSocial from "@/components/FloatingSocial";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://taybperfumes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TAYB Perfumes – Premium Long-Lasting Fragrances",
    template: "%s | TAYB Perfumes",
  },

  description:
    "Shop TAYB luxury perfumes in Pakistan. Long-lasting premium fragrances for men & women.",

  keywords: [
    "tayb perfumes",
    "perfumes pakistan",
    "luxury fragrance",
    "attar",
    "men perfume",
    "women perfume",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "TAYB Perfumes",
    description:
      "Premium long-lasting luxury fragrances in Pakistan.",
    url: siteUrl,
    siteName: "TAYB Perfumes",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TAYB Perfumes",
    description: "Luxury perfumes in Pakistan",
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
    <html lang="en-PK">
      <body className="grain bg-charcoal text-cream font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only"
        >
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