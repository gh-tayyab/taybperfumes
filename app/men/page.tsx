import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Men's Luxury Perfumes Pakistan | TAYB Perfumes",
  description:
    "Shop premium long-lasting men's fragrances by TAYB Perfumes in Pakistan. Bold, commanding luxury scents crafted for men who leave an impression.",
  keywords: [
    "men perfumes pakistan",
    "luxury perfumes for men",
    "best men's fragrances pakistan",
    "long lasting perfume for men",
    "tayb perfumes men",
    "premium men's scent",
    "designer perfume pakistan",
  ],
  openGraph: {
    title: "Men's Luxury Perfumes Pakistan | TAYB Perfumes",
    description:
      "Discover premium men’s fragrances by TAYB Perfumes. Bold, luxurious and crafted to last all day.",
    url: "https://taybperfumes.com/men",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=1800&q=80",
        width: 1800,
        height: 1200,
        alt: "TAYB Men's Luxury Perfumes",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Luxury Perfumes | TAYB Perfumes",
    description:
      "Explore bold and premium long-lasting fragrances for men by TAYB Perfumes.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=1800&q=80",
    ],
  },
  alternates: {
    canonical: "https://taybperfumes.com/men",
  },
};

const menProducts = products.filter((p) => p.category === "men");

export default function MenPage() {
  return (
    <div className="pt-[52px]">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=1800&q=80"
          alt="Men's Fragrances"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            For Him
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Men
          </h1>
          <p className="text-cream/50 text-sm tracking-wider mt-4 max-w-sm">
            Bold. Commanding. Unmistakable. Fragrances built for men who leave
            an impression.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cream/30 text-sm tracking-wider mb-10">
          {menProducts.length} products
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}