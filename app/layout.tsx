import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "TAYB Perfumes – Premium Long-Lasting Fragrances",
  description:
    "Shop TAYB — Pakistan's finest long-lasting luxury perfumes & fragrances for men & women. Discover your signature scent today.",
  keywords:
    "perfumes, fragrances, Pakistan, luxury, long-lasting, men perfume, women perfume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain bg-charcoal text-cream font-body">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
