import Link from "next/link";
import { faqs } from "@/lib/faqs";
export default function HomeSEOContent() {
  return (
    <section className="border-t border-gold/10 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Why Choose TAYB
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Luxury Perfumes Crafted for Every Occasion
          </h2>

          <p className="font-body text-cream/60 max-w-3xl mx-auto leading-8">
            TAYB Perfumes brings together premium ingredients, elegant fragrance
            profiles and exceptional longevity to create luxury perfumes for men
            and women in Pakistan. Explore our{" "}
            <Link href="/men" className="text-gold hover:underline">
              Men's Collection
            </Link>
            ,{" "}
            <Link href="/women" className="text-gold hover:underline">
              Women's Collection
            </Link>{" "}
            or discover our{" "}
            <Link href="/bundles" className="text-gold hover:underline">
              Perfume Bundles
            </Link>
            . You can also read fragrance tips and buying guides on our{" "}
            <Link href="/blogs" className="text-gold hover:underline">
              Perfume Blog
            </Link>
            .
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border border-gold/10 p-8 hover:border-gold/30 transition-colors">
            <h3 className="font-display text-2xl text-cream mb-4">
              Luxury Perfumes in Pakistan
            </h3>

            <p className="font-body text-cream/60 leading-7">
              Discover premium fragrances inspired by globally admired scents.
              Every perfume is created to offer sophistication, elegance and
              outstanding value without compromising on quality.
            </p>
          </div>

          <div className="border border-gold/10 p-8 hover:border-gold/30 transition-colors">
            <h3 className="font-display text-2xl text-cream mb-4">
              Long-Lasting Performance
            </h3>

            <p className="font-body text-cream/60 leading-7">
              Designed with high-quality fragrance oils, our perfumes provide
              impressive longevity and projection, helping you smell fresh and
              confident throughout the day.
            </p>
          </div>

          <div className="border border-gold/10 p-8 hover:border-gold/30 transition-colors">
            <h3 className="font-display text-2xl text-cream mb-4">
              Premium Ingredients
            </h3>

            <p className="font-body text-cream/60 leading-7">
              We carefully select premium ingredients to create balanced
              fragrances with fresh top notes, refined heart notes and rich base
              notes for an exceptional wearing experience.
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="space-y-10 mb-24">
          <div>
            <h2 className="font-display text-4xl text-cream mb-5">
              Luxury Perfumes in Pakistan
            </h2>

            <p className="font-body text-cream/60 leading-8">
              Finding premium luxury perfumes in Pakistan should be simple. TAYB
              Perfumes offers carefully curated fragrances inspired by
              internationally loved scent profiles while maintaining excellent
              quality and long-lasting performance. Browse our{" "}
              <Link href="/men" className="text-gold hover:underline">
                luxury perfumes for men
              </Link>{" "}
              and{" "}
              <Link href="/women" className="text-gold hover:underline">
                luxury perfumes for women
              </Link>{" "}
              to find your perfect signature fragrance.
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl text-cream mb-5">
              Long-Lasting Fragrances That Stand Out
            </h2>

            <p className="font-body text-cream/60 leading-8">
              Longevity is one of the most important qualities of a premium
              perfume. Our fragrances are designed to deliver excellent
              projection with lasting performance, helping you feel confident
              from morning until night while maintaining a refined and elegant
              scent profile.
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl text-cream mb-5">
              Crafted for Men & Women
            </h2>

            <p className="font-body text-cream/60 leading-8">
              Whether you prefer woody, fresh, floral, musky or oriental
              fragrances, our collection includes carefully selected perfumes
              for both men and women. Looking for better fragrance advice? Visit
              our{" "}
              <Link href="/blogs" className="text-gold hover:underline">
                perfume guides and fragrance tips
              </Link>{" "}
              to learn how to choose, wear and store your perfumes correctly.
            </p>
          </div>
        </div>

        {/* Homepage FAQ */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                Frequently Asked Questions
              </p>

              <h2 className="font-display text-4xl text-cream">
                Quick Answers
              </h2>
            </div>

            <Link
              href="/faq"
              className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-cream/50 hover:text-gold transition-colors"
            >
              View All FAQs →
            </Link>
          </div>

          <div className="space-y-8">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className={
                  index !== 2 ? "border-b border-gold/10 pb-6" : "pb-2"
                }
              >
                <h3 className="font-display text-2xl text-cream mb-3">
                  {faq.q}
                </h3>

                <p className="font-body text-cream/60 leading-7">{faq.a}</p>
              </div>
            ))}

            <div className="md:hidden pt-2">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
