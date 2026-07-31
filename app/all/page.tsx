import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Perfumes | TAYB Perfumes Pakistan",
  description:
    "Explore the complete collection of premium inspired perfumes for men, women and bundles. Luxury fragrances at affordable prices across Pakistan.",

  keywords: [
    "Perfumes Pakistan",
    "Luxury Perfumes",
    "Men Perfumes",
    "Women Perfumes",
    "Inspired Perfumes",
    "Long Lasting Perfumes",
    "Best Perfumes Pakistan",
    "TAYB Perfumes",
    "Perfume Collection",
  ],

  openGraph: {
    title: "All Perfumes | TAYB Perfumes",
    description: "Discover premium inspired fragrances for men and women.",
    type: "website",
    url: "https://taybperfumes.com/all",
    siteName: "TAYB Perfumes",
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
    title: "All Perfumes | TAYB Perfumes",
    description: "Luxury inspired perfumes for men & women in Pakistan.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/all",
  },
};

export default function AllPerfumesPage() {
  return (
    <main className="pt-[110px] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
            TAYB PERFUMES
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6">
            All Luxury
            <span className="block text-gold">Perfumes in Pakistan</span>
          </h1>

          <p className="max-w-3xl mx-auto text-cream/60 text-base md:text-lg leading-8">
            Explore our complete collection of luxury perfumes in Pakistan
            featuring premium fragrances for men, women and exclusive perfume
            bundles. Inspired by world-famous scents and crafted with
            premium-quality ingredients for exceptional longevity, elegance and
            everyday confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
