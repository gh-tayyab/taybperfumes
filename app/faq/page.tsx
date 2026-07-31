import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { faqs } from "@/lib/faqs";
export const metadata: Metadata = {
  title: "FAQ | TAYB Perfumes Pakistan",
  description:
    "Frequently asked questions about TAYB Perfumes. Learn about delivery, returns, exchanges, authenticity, long-lasting fragrances, and orders across Pakistan.",
  keywords: [
    "perfume bundles pakistan",
    "luxury perfume bundle",
    "tayb perfumes",
    "fragrance gift set pakistan",
    "men perfume bundle",
    "women perfume bundle",
    "best perfume deals pakistan",
  ],
  openGraph: {
    title: "Luxury Perfume Bundles Pakistan | TAYB Perfumes",
    description:
      "Discover TAYB signature perfume bundles. Premium long-lasting fragrances with exclusive savings across Pakistan.",
    url: "https://taybperfumes.com/faq",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfume Bundles",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Perfume Bundles Pakistan | TAYB Perfumes",
    description:
      "Shop premium TAYB fragrance bundles and save 10% on long-lasting luxury perfumes.",
    images: [
      "/og-image.jpg",
    ],
  },
  alternates: {
    canonical: "https://taybperfumes.com/faq",
  },
};


export default function FAQPage() {
  return (
    <main
      className="pt-[120px] min-h-screen bg-charcoal text-cream"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
          Support Center
        </p>

        <h1 className="font-display text-5xl md:text-7xl italic mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-cream/50 max-w-2xl mx-auto text-lg leading-relaxed">
          Everything you need to know about TAYB Perfumes — from delivery and
          authenticity to fragrance performance and returns.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gold/15 hover:border-gold/40 transition-colors duration-300 p-8 bg-[#111]"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2
                className="font-display text-2xl text-gold italic mb-4"
                itemProp="name"
              >
                {faq.q}
              </h2>

              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  className="text-cream/60 leading-relaxed"
                  itemProp="text"
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Need More Help?
          </p>

          <h2 className="font-display text-4xl italic mb-5">
            We’re Here For You
          </h2>

          <p className="text-cream/50 max-w-xl mx-auto mb-8">
            Still have questions? Reach out to our support team and we’ll help
            you find your perfect signature scent.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Contact Us <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}