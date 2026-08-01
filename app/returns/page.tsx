import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Exchanges | TAYB Perfumes Pakistan",

  description:
    "Read TAYB Perfumes return, refund and exchange policy. Learn about return eligibility, refunds, exchanges and customer support for fragrance orders across Pakistan.",

  keywords: [
    "TAYB returns policy",
    "TAYB exchange policy",
    "perfume returns Pakistan",
    "luxury fragrance refund policy",
    "TAYB perfumes refund",
    "return perfume Pakistan",
    "exchange perfume Pakistan",
  ],

  openGraph: {
    title: "Returns & Exchanges | TAYB Perfumes",

    description:
      "View TAYB Perfumes return and exchange policy for secure fragrance shopping across Pakistan.",

    url: "https://taybperfumes.com/returns",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "Returns & Exchanges | TAYB Perfumes",
      },
    ],

    locale: "en_PK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Returns & Exchanges | TAYB Perfumes",

    description:
      "Learn about refunds, exchanges and returns for TAYB Perfumes orders across Pakistan.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/returns",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ReturnsPage() {
  return (
    <main
      className="pt-[120px] min-h-screen bg-charcoal text-cream"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Organization Schema */}

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

      {/* Breadcrumb Schema */}

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

                name: "Returns & Exchanges",

                item: "https://taybperfumes.com/returns",
              },
            ],
          }),
        }}
      />

      <meta itemProp="name" content="Returns & Exchanges" />

      <meta
        itemProp="description"
        content="TAYB Perfumes return, refund and exchange policy."
      />

      {/* Hero */}

      <section className="border-b border-gold/10 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Breadcrumb */}

          <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>

            <ChevronRight size={12} />

            <span className="text-gold">Returns & Exchanges</span>
          </div>

          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Policies
          </p>

          <h1 className="font-display text-5xl md:text-6xl italic mb-6">
            Returns & Exchanges
          </h1>

          <p className="max-w-2xl mx-auto text-cream/60 leading-8">
            Simple, transparent and customer-friendly return and exchange
            policies designed to make your shopping experience completely
            worry-free. We're committed to ensuring every order meets your
            expectations.
          </p>

          <p className="text-xs text-white/40 mt-6">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      {/* Quick Highlights */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Return Window",
                value: "7 Days",
              },

              {
                title: "Exchange",
                value: "Available",
              },

              {
                title: "Refund",
                value: "5–7 Days",
              },

              {
                title: "Support",
                value: "WhatsApp & Email",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gold/10 rounded-xl p-8 text-center hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all duration-300"
              >
                <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">
                  {item.title}
                </p>

                <h2 className="font-display text-3xl italic">{item.value}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Policy Sections */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {[
              {
                icon: "✅",
                title: "Return Eligibility",
                body: (
                  <>
                    Products may be returned within <strong>7 days</strong> of
                    delivery if they are unopened, unused and returned in their
                    original packaging. To be eligible, the item must be in the
                    same condition in which it was received.
                  </>
                ),
              },

              {
                icon: "🔄",
                title: "Exchange Policy",
                body: (
                  <>
                    If you receive the wrong item, a damaged product or a
                    product with a verified manufacturing defect, we'll gladly
                    arrange a replacement at no additional cost. Please notify
                    us within <strong>48 hours</strong> of delivery.
                  </>
                ),
              },

              {
                icon: "💳",
                title: "Refund Process",
                body: (
                  <>
                    Once your returned item has been inspected and approved,
                    refunds are processed within{" "}
                    <strong>5–7 business days</strong>. Depending on the payment
                    method, refunds may be issued via bank transfer or
                    Easypaisa/JazzCash where applicable.
                  </>
                ),
              },

              {
                icon: "📦",
                title: "Damaged or Incorrect Products",
                body: (
                  <>
                    Every order is carefully inspected before dispatch. However,
                    if your package arrives damaged or you receive an incorrect
                    product, please contact our support team with clear photos
                    so we can resolve the issue as quickly as possible.
                  </>
                ),
              },

              {
                icon: "🚫",
                title: "Non-Returnable Items",
                body: (
                  <>
                    For hygiene and product integrity reasons, we cannot accept
                    returns on:
                    <ul className="list-disc ml-6 mt-4 space-y-2 text-cream/60">
                      <li>Opened perfumes</li>
                      <li>Used fragrances</li>
                      <li>Products without original packaging</li>
                      <li>Items damaged due to misuse</li>
                      <li>
                        Customized or special-order products (if applicable)
                      </li>
                    </ul>
                  </>
                ),
              },

              {
                icon: "🚚",
                title: "Return Shipping",
                body: (
                  <>
                    If the return is due to a change of mind, return shipping
                    costs are the responsibility of the customer. If the issue
                    is caused by an incorrect shipment, damaged product or
                    verified manufacturing defect, TAYB Perfumes will cover all
                    return shipping costs.
                  </>
                ),
              },

              {
                icon: "💬",
                title: "Need Assistance?",
                body: (
                  <>
                    Our support team is always happy to help. Before requesting
                    a return, you may also wish to review our{" "}
                    <Link
                      href="/shipping"
                      className="text-gold hover:underline"
                    >
                      Shipping Policy
                    </Link>
                    ,{" "}
                    <Link href="/faq" className="text-gold hover:underline">
                      Frequently Asked Questions
                    </Link>{" "}
                    or{" "}
                    <Link href="/contact" className="text-gold hover:underline">
                      Contact Us
                    </Link>
                    .
                  </>
                ),
              },
            ].map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-gold/10 p-8 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{section.icon}</div>

                  <div>
                    <h2 className="font-display text-3xl italic text-cream mb-4">
                      {section.title}
                    </h2>

                    <div className="text-cream/60 leading-8 text-[15px]">
                      {section.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Return Process Timeline */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Simple Process
            </p>

            <h2 className="font-display text-5xl italic">
              How To Request A Return
            </h2>

            <p className="text-cream/50 max-w-2xl mx-auto mt-6 leading-8">
              We've made our return and exchange process simple and transparent
              so you always know what happens next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Contact Us",
              "Share Order Number",
              "Request Review",
              "Courier Pickup",
              "Quality Inspection",
              "Refund / Exchange",
            ].map((step, index) => (
              <div
                key={step}
                className="border border-gold/10 rounded-xl p-6 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-gold flex items-center justify-center font-display text-gold text-xl">
                  {index + 1}
                </div>

                <h3 className="font-display text-xl italic">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns FAQs */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="font-display text-5xl italic">Returns FAQ</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I return an opened perfume?",
                a: "No. For hygiene and quality reasons, opened or used perfumes cannot be returned unless there is a verified manufacturing defect.",
              },

              {
                q: "How long do refunds take?",
                a: "Approved refunds are generally processed within 5–7 business days after inspection of the returned product.",
              },

              {
                q: "Can I exchange my perfume?",
                a: "Yes. Exchanges are available if you receive the wrong item, a damaged product or a verified manufacturing defect.",
              },

              {
                q: "Who pays the courier charges?",
                a: "Customers pay return shipping for change-of-mind returns. TAYB Perfumes covers shipping costs for incorrect, damaged or defective products.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-gold/10 rounded-xl p-8 hover:border-gold transition-all duration-300"
              >
                <h3 className="font-display text-2xl italic text-gold mb-4">
                  {faq.q}
                </h3>

                <p className="text-cream/60 leading-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
            Need Assistance?
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            We're Here To Help
          </h2>

          <p className="text-cream/50 max-w-2xl mx-auto leading-8 mb-10">
            If you have any questions regarding returns, exchanges or refunds,
            our support team is always happy to assist you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-charcoal px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold/90 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/faq"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Collections */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
            Explore Our Collections
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Find Your Signature
            <span className="block text-gold">Fragrance</span>
          </h2>

          <p className="text-cream/50 max-w-2xl mx-auto leading-8 mb-10">
            Discover luxury fragrances crafted with premium ingredients,
            exceptional longevity and elegant presentation for every occasion.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/men"
              className="bg-gold text-charcoal px-10 py-4 uppercase tracking-widest text-xs"
            >
              Shop Men
            </Link>

            <Link
              href="/women"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition"
            >
              Shop Women
            </Link>

            <Link
              href="/bundles"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition"
            >
              Bundles
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/shipping" className="text-gold hover:underline">
              Shipping Policy
            </Link>

            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-gold hover:underline">
              Terms & Conditions
            </Link>

            <Link href="/faq" className="text-gold hover:underline">
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
