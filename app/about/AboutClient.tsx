"use client";

import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "✦",
    title: "Long-Lasting Performance",
    desc: "Our fragrances are carefully formulated to deliver impressive longevity and projection throughout the day.",
  },
  {
    icon: "◈",
    title: "Premium Ingredients",
    desc: "Every perfume is crafted using high-quality fragrance oils and carefully balanced note compositions.",
  },
  {
    icon: "◎",
    title: "Luxury Packaging",
    desc: "Elegant packaging designed to reflect the premium quality of every TAYB fragrance.",
  },
  {
    icon: "✧",
    title: "Inspired Craftsmanship",
    desc: "Each fragrance is developed with attention to detail, blending timeless elegance with modern sophistication.",
  },
  {
    icon: "❤",
    title: "Customer Satisfaction",
    desc: "Thousands of fragrance lovers trust TAYB Perfumes for quality, performance and exceptional value.",
  },
  {
    icon: "➜",
    title: "Fast Delivery Across Pakistan",
    desc: "Quick nationwide shipping so your favourite fragrance reaches your doorstep without delay.",
  },
];

export default function AboutClient() {
  return (
    <main
      className="pt-[52px]"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <meta
        itemProp="description"
        content="About TAYB Perfumes - Pakistan's luxury fragrance brand."
      />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1800&q=80"
          alt="About TAYB luxury perfume brand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Luxury Fragrance House
            </p>

            <h1 className="font-display text-6xl md:text-8xl text-cream italic">
              About TAYB Perfumes
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-cream/60 leading-8">
              TAYB Perfumes is a Pakistani luxury fragrance brand creating
              premium, long-lasting perfumes for men and women. Every fragrance
              is crafted to deliver elegance, confidence and exceptional
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Our Mission
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-cream mb-8 leading-tight">
          Crafting Fragrances That Tell Your Story
        </h2>
        <p
          className="text-cream/50 text-lg leading-relaxed"
          itemProp="description"
        >
          At TAYB Perfumes, our mission is to make premium fragrance accessible
          without sacrificing quality. Every perfume is carefully developed
          using high-quality fragrance oils, balanced note compositions and
          long-lasting formulations. Whether you're dressing for work, weddings
          or everyday wear, our goal is to help you leave a memorable impression
          through fragrance.
        </p>
        <p className="mt-8 text-white/60 leading-8">
          Explore our{" "}
          <Link href="/men" className="text-gold hover:underline">
            Men's Collection
          </Link>{" "}
          and{" "}
          <Link href="/women" className="text-gold hover:underline">
            Women's Collection
          </Link>{" "}
          or read our{" "}
          <Link href="/blogs" className="text-gold hover:underline">
            Perfume Guides
          </Link>{" "}
          to learn more about fragrance notes, longevity and choosing the
          perfect perfume.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Our Values
            </p>

            <h2 className="font-display text-5xl">What Makes TAYB Different</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item) => (
              <article
                key={item.title}
                className="border border-gold/10 p-8 hover:border-gold/40 transition"
              >
                <p className="text-3xl text-gold mb-5">{item.icon}</p>

                <h3 className="font-display text-2xl mb-3">{item.title}</h3>

                <p className="text-white/60 leading-7">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-gold/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-display text-gold">100+</h3>
            <p className="text-white/60 mt-3">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-5xl font-display text-gold">8+</h3>
            <p className="text-white/60 mt-3">Hour Longevity</p>
          </div>

          <div>
            <h3 className="text-5xl font-display text-gold">100%</h3>
            <p className="text-white/60 mt-3">Premium Ingredients</p>
          </div>

          <div>
            <h3 className="text-5xl font-display text-gold">Pakistan</h3>
            <p className="text-white/60 mt-3">Nationwide Delivery</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              The Journey
            </p>
            <h2 className="font-display text-4xl text-cream mb-6 leading-tight">
              From a Vision to a
              <em className="block text-gold">to a Luxury Fragrance Brand</em>
            </h2>

            <div className="space-y-4 text-cream/50 text-sm leading-relaxed">
              <p>
                TAYB Perfumes began with a simple vision—to create premium
                fragrances that combine luxury, performance and affordability.
              </p>

              <p>
                Instead of following trends, we focused on building timeless
                perfumes with carefully balanced top, heart and base notes.
              </p>

              <p>
                Every fragrance is designed to evolve beautifully throughout the
                day while maintaining impressive longevity.
              </p>
              <p>
                Today our perfumes are worn by customers across Pakistan who
                value confidence, elegance and quality.
              </p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/ourstory.png"
              alt="TAYB fragrance journey"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Why Choose TAYB
            </p>

            <h2 className="font-display text-5xl">
              Why Fragrance Lovers Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Premium Fragrance Oils",
              "Long Lasting Formulations",
              "Elegant Luxury Packaging",
              "Fast Nationwide Delivery",
              "Secure Shopping Experience",
              "Trusted by Customers",
            ].map((item) => (
              <div
                key={item}
                className="border border-gold/10 p-8 flex items-center gap-4 hover:border-gold transition"
              >
                <div className="text-gold text-3xl">✓</div>

                <h3 className="font-display text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
<section className="py-24 border-t border-gold/10 text-center">
  <div className="max-w-3xl mx-auto px-6">
    <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
      Discover Your Signature Fragrance
    </p>

    <h2 className="font-display text-5xl italic mb-6">
      Experience Luxury
      <span className="block text-gold">
        In Every Spray
      </span>
    </h2>

    <p className="text-white/60 leading-8 mb-10">
      Explore premium perfumes crafted for men and women who appreciate
      elegance, confidence, and long-lasting luxury fragrances.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <Link
        href="/all"
        className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs hover:opacity-90 transition"
      >
        Shop Collection
      </Link>

      <Link
        href="/blogs"
        className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
      >
        Read Perfume Guides
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}
