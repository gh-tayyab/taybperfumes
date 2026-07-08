import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingSocial from "@/components/FloatingSocial";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taybperfumes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Best Luxury Long-Lasting Perfumes For Men & Women | TAYB",
    template: "%s | TAYB Perfumes",
  },

  description:
    "Buy premium luxury perfumes in Pakistan from TAYB Perfumes. Discover long-lasting fragrances for men & women inspired by world-famous scents. Fast delivery across Pakistan.",

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
      <body className="grain bg-charcoal text-cream font-body">
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
