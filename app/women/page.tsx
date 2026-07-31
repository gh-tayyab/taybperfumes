import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Women’s Luxury Fragrances | TAYB Pakistan",
  description:
    "Explore TAYB women’s luxury perfumes in Pakistan. Long-lasting feminine fragrances crafted for elegance, confidence, and timeless beauty.",
  keywords: [
    "women perfumes Pakistan",
    "luxury perfume for women",
    "TAYB women fragrance",
    "long lasting women perfume",
    "best feminine perfumes Pakistan",
  ],
  openGraph: {
    title: "Women’s Perfumes | TAYB Perfumes",
    description:
      "Discover elegant, long-lasting luxury fragrances for women by TAYB Perfumes.",
    url: "https://taybperfumes.com/women",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Men's Luxury Perfumes",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  alternates: {
    canonical: "https://taybperfumes.com/women",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const womenProducts = products.filter((p) => p.category === "women");

export default function WomenPage() {
  return (
    <div className="pt-[52px]">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/womenhero.png"
          alt="Women's Fragrances"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            For Her
          </p> */}

          <h1 className="font-display text-5xl md:text-7xl italic text-cream leading-tight">
      Women's Luxury
      <span className="block text-gold">Perfumes</span>
    </h1>

    <p className="mt-6 max-w-2xl text-sm md:text-lg leading-8 text-cream/60">
      Explore premium luxury perfumes for women in Pakistan inspired by
      world-famous fragrances. Discover elegant, long-lasting scents crafted
      with premium ingredients for everyday wear, weddings, formal occasions
      and unforgettable moments.
    </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cream/30 text-sm tracking-wider mb-10">
          {womenProducts.length} products
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}