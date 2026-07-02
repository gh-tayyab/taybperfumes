import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, reviews } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Star, Shield, Truck, RefreshCw, Sparkles } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";

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
        url: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1800&q=80",
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
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1800&q=80",
    ],
  },
  alternates: {
    canonical: "https://taybperfumes.com",
  },
};

const featuredProducts = products.slice(0, 4);
const bundles = products.filter((p) => p.category === "bundle");

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bundleperfume.png"
            alt="TAYB Perfumes Hero"
            fill
            className="object-cover"
            priority
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

        <ProductSlider products={products} />
      </section>

      {/* ── MID BANNER ── */}
      <section className="relative h-[60vh] w-full overflow-hidden mx-6 mb-20">
        <Image
          src="/hero.png"
          alt="TAYB Bundles"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Limited Offer
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream mb-4 italic">
            Bundle & Save 10%
          </h2>
          <p className="text-cream/60 text-sm tracking-wider mb-8 max-w-md">
            Get both signature scents together and save on every order.
          </p>
          <Link
            href="/bundles"
            className="bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop Bundles
          </Link>
        </div>
      </section>

      {/* ── BUNDLES ── */}
      <section className="py-4 max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Save More
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Bundles
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── SIGNATURE SPLIT SECTION ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 mb-20">
        {[
          {
            label: "For Her",
            name: "Angelica",
            desc: "Delicate florals, soft musk, warm sandalwood. A scent that lingers like a beautiful memory.",
            href: "/women",
            img: "/womenperfume.png",
            cta: "Shop Women",
          },
          {
            label: "For Him",
            name: "Laceda",
            desc: "Bold cedarwood, rich amber, clean musk. A commanding presence in every room.",
            href: "/men",
            img: "/perfume.png",
            cta: "Shop Men",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="relative h-[70vh] overflow-hidden group"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                {item.label}
              </p>
              <h3 className="font-display text-5xl text-cream italic mb-3">
                {item.name}
              </h3>
              <p className="text-cream/50 text-sm mb-6 max-w-xs">{item.desc}</p>
              <Link
                href={item.href}
                className="self-start border border-cream/40 text-cream font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Happy Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="border border-gold/10 p-6 hover:border-gold/30 transition-colors duration-300 bg-charcoal"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display italic text-lg text-cream/80 leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-center text-xs text-cream/30 tracking-wider uppercase">
                  <span>{review.name}</span>
                  <span>{review.location}</span>
                </div>
                <p className="text-gold/50 text-xs mt-1 tracking-wider">
                  {review.product}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S VISION ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/ourstory.png"
                alt="TAYB Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Founder&apos;s
              <em className="block text-gold">Vision</em>
            </h2>
            <p className="text-cream/50 text-sm mb-6 max-w-xs">
              Every fragrance at TAYB PERFUMES is a journey of elegance, crafted
              with passion and inspired by timeless luxury. Designed to leave a
              lasting impression, our perfumes celebrate confidence,
              sophistication, and individuality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
