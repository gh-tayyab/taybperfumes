import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | TAYB Perfumes Pakistan",
  description:
    "Frequently asked questions about TAYB Perfumes. Learn about delivery, returns, exchanges, authenticity, long-lasting fragrances, and orders across Pakistan.",
};

const faqs = [
  {
    q: "Are TAYB perfumes original?",
    a: "Yes. Every TAYB fragrance is crafted using premium-quality ingredients and carefully blended for authenticity, elegance, and long-lasting performance.",
  },
  {
    q: "How long do TAYB perfumes last?",
    a: "Our perfumes typically last 8–12+ hours depending on skin type, environment, and application method.",
  },
  {
    q: "Do you deliver all over Pakistan?",
    a: "Yes. We offer nationwide delivery across Pakistan with secure packaging and reliable shipping partners.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders usually arrive within 3–5 working days depending on your city and courier service availability.",
  },
  {
    q: "Can I return or exchange my perfume?",
    a: "Yes. We offer easy exchanges for damaged or incorrect items. Contact our support team within 48 hours of delivery.",
  },
  {
    q: "Do you offer bundle discounts?",
    a: "Yes. Our exclusive perfume bundles offer savings and are available for a limited time.",
  },
  {
    q: "Which perfume is best for men?",
    a: "Our signature men's fragrance Laceda is a bold blend of cedarwood, amber, and musk designed for confidence and elegance.",
  },
  {
    q: "Which perfume is best for women?",
    a: "Angelica is our signature women's fragrance featuring soft florals, musk, and sandalwood for timeless sophistication.",
  },
];

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