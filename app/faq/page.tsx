import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { faqs } from "@/lib/faqs";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | TAYB Perfumes Pakistan",

  description:
    "Frequently asked questions about TAYB Perfumes. Learn about delivery, shipping, returns, fragrance longevity, authenticity and customer support across Pakistan.",

  keywords: [
    "TAYB Perfumes FAQ",
    "Perfume FAQs Pakistan",
    "Luxury perfumes Pakistan",
    "Perfume delivery Pakistan",
    "Perfume returns",
    "Long lasting perfume FAQ",
    "Fragrance questions",
    "Perfume authenticity Pakistan",
    "TAYB customer support",
  ],

  openGraph: {
    title: "FAQ | TAYB Perfumes Pakistan",

    description:
      "Find answers about ordering, shipping, fragrance longevity, returns, exchanges and everything you need to know before shopping with TAYB Perfumes.",

    url: "https://taybperfumes.com/faq",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes FAQ",
      },
    ],

    locale: "en_PK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "FAQ | TAYB Perfumes Pakistan",

    description:
      "Frequently asked questions about ordering, shipping, returns and luxury fragrances from TAYB Perfumes.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main
      className="pt-[120px] min-h-screen bg-charcoal text-cream relative overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Organization",

            name: "TAYB Perfumes",

            url: "https://taybperfumes.com",

            logo: "https://taybperfumes.com/logo.png",

            email: "info@taybperfumes.com",

            telephone: "+923367189237",

            sameAs: [
              "https://www.instagram.com/taybperfumes/",
              "https://www.facebook.com/profile.php?id=61591221246286",
            ],

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+923367189237",
              contactType: "Customer Support",
              areaServed: "PK",
              availableLanguage: ["English"],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://taybperfumes.com",
              },

              {
                "@type": "ListItem",
                position: 2,
                name: "FAQ",
                item: "https://taybperfumes.com/faq",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        {/* Breadcrumb */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/5 blur-[180px]" />
        </div>

        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
          <Link href="/" className="hover:text-gold transition">
            Home
          </Link>

          <ChevronRight size={12} />

          <span className="text-gold">FAQ</span>
        </div>

        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
          Customer Support
        </p>

        <h1 className="font-display text-5xl md:text-7xl italic mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-cream/60 max-w-3xl mx-auto leading-8">
          Find answers about ordering, shipping, fragrance longevity, returns,
          exchanges and everything you need to know before shopping with TAYB
          Perfumes.
        </p>

        <div className="mt-10 inline-flex border border-gold/20 px-6 py-3">
          <span className="text-gold font-display text-3xl mr-3">
            {faqs.length}
          </span>

          <span className="text-white/60 uppercase tracking-widest text-xs flex items-center">
            Frequently Asked Questions
          </span>
        </div>
      </section>
      {/* Introduction */}

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl italic mb-6">
            Everything You Need To Know
          </h2>

          <p className="text-white/60 leading-8">
            Our customer support team has compiled answers to the most common
            questions about TAYB Perfumes, including delivery, returns,
            fragrance longevity, authenticity and ordering.
          </p>

          <p className="text-white/50 leading-8 mt-6">
            If you can't find what you're looking for, our team is always happy
            to help.
          </p>
        </div>
      </section>
      {/* Stats */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gold/10 p-8 text-center hover:border-gold transition">
              <h3 className="font-display text-5xl text-gold mb-3">100+</h3>

              <p className="text-white/60 uppercase tracking-widest text-xs">
                Happy Customers
              </p>
            </div>

            <div className="border border-gold/10 p-8 text-center hover:border-gold transition">
              <h3 className="font-display text-5xl text-gold mb-3">24h</h3>

              <p className="text-white/60 uppercase tracking-widest text-xs">
                Support Response
              </p>
            </div>

            <div className="border border-gold/10 p-8 text-center hover:border-gold transition">
              <h3 className="font-display text-5xl text-gold mb-3">Pakistan</h3>

              <p className="text-white/60 uppercase tracking-widest text-xs">
                Nationwide Delivery
              </p>
            </div>

            <div className="border border-gold/10 p-8 text-center hover:border-gold transition">
              <h3 className="font-display text-5xl text-gold mb-3">Premium</h3>

              <p className="text-white/60 uppercase tracking-widest text-xs">
                Luxury Fragrances
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ LIST */}
      <FAQClient />
      {/* Related Guides */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Recommended Reading
            </p>

            <h2 className="font-display text-5xl italic">
              Learn More About Fragrances
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/blogs"
              className="border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition"
            >
              <h3 className="font-display text-2xl mb-3">
                How To Choose The Perfect Perfume
              </h3>

              <p className="text-white/60 leading-7">
                Learn how to find a signature fragrance for every occasion.
              </p>
            </Link>

            <Link
              href="/blogs"
              className="border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition"
            >
              <h3 className="font-display text-2xl mb-3">
                Difference Between EDP & EDT
              </h3>

              <p className="text-white/60 leading-7">
                Understand fragrance concentration and performance.
              </p>
            </Link>

            <Link
              href="/blogs"
              className="border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition"
            >
              <h3 className="font-display text-2xl mb-3">
                Perfume Longevity Tips
              </h3>

              <p className="text-white/60 leading-7">
                Make your favourite fragrance last even longer.
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* Trust */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Why Shop With TAYB
            </p>

            <h2 className="font-display text-5xl italic">
              Trusted By Fragrance Lovers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Premium Ingredients",
              "Long Lasting Fragrances",
              "Fast Delivery Across Pakistan",
              "Secure Checkout",
              "Excellent Customer Support",
              "Luxury Packaging",
            ].map((item) => (
              <div
                key={item}
                className="border border-gold/10 p-8 hover:border-gold transition"
              >
                <div className="text-gold text-3xl mb-4">✓</div>

                <h3 className="font-display text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Collections */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
            Explore Collections
          </p>

          <h2 className="font-display text-5xl italic mb-10">
            Discover Your Next
            <span className="block text-gold">Signature Fragrance</span>
          </h2>

          <div className="flex justify-center flex-wrap gap-4">
            <Link
              href="/men"
              className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs"
            >
              Luxury Men's Perfumes
            </Link>

            <Link
              href="/women"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Luxury Women's Perfumes
            </Link>

            <Link
              href="/bundles"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Perfume Bundles
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/blogs"
              className="text-gold uppercase tracking-widest text-xs hover:underline"
            >
              Read Perfume Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Still Have Questions?
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Our Fragrance Specialists
            <span className="block text-gold">Are Ready To Help</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto leading-8 mb-10">
            Need help choosing the perfect fragrance? Our team is available to
            answer your questions and recommend the best perfumes for every
            occasion.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/923367189237"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/blogs"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Read Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
