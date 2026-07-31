import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Shield, Truck, RefreshCw, Sparkles } from "lucide-react";

import { client } from "@/lib/sanity";
import { reviewsQuery } from "@/lib/queries";

import { products } from "@/lib/data";

import LazyProductSlider from "@/components/LazyProductSlider";

const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), {
  loading: () => <div className="h-[400px]" />,
});

const HomeBanner = dynamic(() => import("@/components/home/HomeBanner"), {
  loading: () => <div className="h-[60vh]" />,
});

const HomeBundles = dynamic(() => import("@/components/home/HomeBundles"), {
  loading: () => <div className="h-[700px]" />,
});

const HomeSplitSection = dynamic(
  () => import("@/components/home/HomeSplitSection"),
  {
    loading: () => <div className="h-[70vh]" />,
  },
);

const FounderSection = dynamic(
  () => import("@/components/home/FounderSection"),
  {
    loading: () => <div className="h-[700px]" />,
  },
);
export const metadata: Metadata = {
  title: "TAYB Perfumes Pakistan | Luxury Long-Lasting Fragrances",
  description:
    "Discover TAYB Perfumes — premium long-lasting luxury fragrances in Pakistan. Shop signature perfumes for men & women with nationwide delivery.",
  keywords: [
    "TAYB Perfumes",
    "Luxury Perfumes Pakistan",
    "Best Perfumes Pakistan",
    "Long Lasting Perfume",
    "Perfume for Men",
    "Perfume for Women",
    "Pakistani Fragrance Brand",
    "Luxury Fragrances",
  ],
  openGraph: {
    title: "TAYB Perfumes Pakistan",
    description:
      "Luxury long-lasting perfumes crafted for bold individuality. Shop premium fragrances for men and women.",
    url: "https://taybperfumes.com",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "https://taybperfumes.com/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Hero",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAYB Perfumes Pakistan",
    description: "Premium luxury perfumes for men & women in Pakistan.",
    images: ["https://taybperfumes.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://taybperfumes.com",
  },
};

export default async function HomePage() {
  const reviews = await client.fetch(
    reviewsQuery,
    {},
    {
      next: {
        tags: ["reviews"],
      },
    },
  );
  const featuredProducts = products.slice(0, 4);
  const bundles = products.filter((p) => p.category === "bundle");
  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bundleperfume.png"
            alt="TAYB Perfumes Hero"
            fill
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 fade-in-up fade-in-up-delay-1">
              <div className="h-[1px] w-10 bg-gold" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
                Pakistan&apos;s Finest Luxury Fragrance
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl leading-none text-cream mb-6 fade-in-up fade-in-up-delay-2">
              Your
              <em className="block text-gold"> Signature</em>
              Scent.
            </h1>

            <p className="font-body text-cream/60 text-lg max-w-md leading-relaxed mb-10 fade-in-up fade-in-up-delay-3">
              Crafted with bold blends and clean ingredients. Long-lasting
              luxury fragrances that make a statement — and keep it.
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up fade-in-up-delay-4">
              <Link
                href="/women"
                className="bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Shop Women
              </Link>
              <Link
                href="/men"
                className="border border-cream/30 text-cream font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Shop Men
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-cream">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cream to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="border-y border-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
            {[
              { icon: <Sparkles size={18} />, label: "Long-Lasting 12+ Hours" },
              { icon: <Shield size={18} />, label: "100% Authentic" },
              { icon: <Truck size={18} />, label: "Free Delivery on 3K+" },
              { icon: <RefreshCw size={18} />, label: "Easy Returns" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-cream/50">
                <span className="text-gold">{item.icon}</span>
                <span className="font-body text-xs tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP ALL ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Explore
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Shop All
            </h2>
          </div>
          <Link
            href="/all"
            className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors"
          >
            View All <span>→</span>
          </Link>
        </div>

        <LazyProductSlider products={products.slice(0, 8)} />
      </section>

      <HomeBanner />
      <HomeBundles bundles={bundles.slice(0, 2)} />
      <HomeSplitSection />
      <ReviewsSection reviews={reviews} />
      <FounderSection />
    </div>
  );
}
