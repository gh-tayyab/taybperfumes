"use client";

import Image from "next/image";
import Link from "next/link";

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
              Our Story
            </p>
            <h1
              className="font-display text-6xl md:text-8xl text-cream italic"
              itemProp="headline"
            >
              About Us
            </h1>
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
          TAYB Perfumes was born from a simple belief: that luxury fragrance
          shouldn&apos;t be reserved for the privileged few. We set out to
          create world-class, long-lasting scents that every Pakistani can wear
          with pride — crafted locally, with global standards.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rooted in Originality",
                desc:
                  "Every TAYB fragrance is conceived from scratch. We never copy, never compromise. Each scent is a unique expression crafted to stand apart.",
                icon: "✦",
              },
              {
                title: "Crafted, Not Copied",
                desc:
                  "Our perfumers blend natural and premium aromatic compounds to create fragrances with genuine depth, character, and longevity.",
                icon: "◈",
              },
              {
                title: "Super Long-Lasting",
                desc:
                  "We formulate for performance. TAYB fragrances are built to last 12+ hours on skin.",
                icon: "◎",
              },
            ].map((val) => (
              <article
                key={val.title}
                className="border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-300"
              >
                <p className="text-gold text-2xl mb-4">{val.icon}</p>
                <h3 className="font-display text-2xl text-cream mb-3">
                  {val.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </article>
            ))}
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
              <em className="block text-gold">Movement</em>
            </h2>

            <div className="space-y-4 text-cream/50 text-sm leading-relaxed">
              <p>
                TAYB Perfumes started with a single question: Why should
                Pakistani fragrance lovers compromise?
              </p>

              <p>
                We developed two signature fragrances — Angelica and Laceda —
                built to rival the world&apos;s best.
              </p>

              <p>
                Today, TAYB is trusted by thousands across Pakistan.
              </p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590156562745-5d69e2f6ef38?w=800&q=80"
              alt="TAYB fragrance journey"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-gold/10">
        <h2 className="font-display text-4xl md:text-5xl text-cream mb-4 italic">
          Find Your Signature Scent
        </h2>

        <p className="text-cream/40 text-sm tracking-wider mb-8">
          Explore our curated collection of long-lasting luxury fragrances.
        </p>

        <Link
          href="/"
          aria-label="Shop TAYB perfumes now"
          className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}