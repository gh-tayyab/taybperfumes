import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  BadgeCheck,
  Package,
  CreditCard,
  Truck,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Scale,
  Landmark,
  FilePenLine,
  Mail,
  CircleDollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | TAYB Perfumes Pakistan",

  description:
    "Read the Terms & Conditions of TAYB Perfumes. Learn about orders, payments, shipping, returns, pricing, intellectual property and the legal terms governing purchases from our website.",

  keywords: [
    "TAYB Terms & Conditions",
    "Perfume Store Terms Pakistan",
    "Luxury Perfume Terms",
    "Online Perfume Purchase Policy",
    "TAYB Legal Policy",
    "Pakistan Fragrance Store Terms",
    "TAYB Perfumes Pakistan",
  ],

  openGraph: {
    title: "Terms & Conditions | TAYB Perfumes Pakistan",

    description:
      "Review the Terms & Conditions governing purchases from TAYB Perfumes and your use of our website.",

    url: "https://taybperfumes.com/terms",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Terms & Conditions",
      },
    ],

    locale: "en_PK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Terms & Conditions | TAYB Perfumes Pakistan",

    description:
      "Review the legal terms governing purchases from TAYB Perfumes.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/terms",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="pt-[120px] min-h-screen bg-charcoal text-cream relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-gold/5 blur-[180px]" />
      </div>

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

              contactType: "Customer Support",

              telephone: "+923367189237",

              email: "info@taybperfumes.com",

              areaServed: "PK",

              availableLanguage: ["English"],
            },
          }),
        }}
      />

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-6 text-center pb-20">
        {/* Breadcrumb */}

        <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 mb-10">
          <Link href="/" className="hover:text-gold transition">
            Home
          </Link>

          <ChevronRight size={12} />

          <span className="text-gold">Terms & Conditions</span>
        </div>

        <p className="text-gold text-xs tracking-[0.35em] uppercase mb-5">
          Legal Information
        </p>

        <h1 className="font-display text-5xl md:text-7xl italic mb-8">
          Terms & Conditions
        </h1>

        <p className="max-w-3xl mx-auto text-cream/60 leading-8 text-lg">
          Please read these Terms & Conditions carefully before using the TAYB
          Perfumes website or placing an order. These terms explain your rights,
          responsibilities and the conditions governing purchases from our
          store.
        </p>

        <p className="text-xs text-white/40 mt-8 uppercase tracking-widest">
          Last Updated: August 2026
        </p>
      </section>

      {/* Introduction */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl italic mb-6">
            Before You Shop
          </h2>

          <p className="text-cream/60 leading-8 max-w-3xl mx-auto">
            These Terms & Conditions apply to every visitor, customer and user
            of the TAYB Perfumes website. By accessing our website, browsing our
            products or placing an order, you agree to comply with these terms.
            Please read them carefully before making a purchase.
          </p>
        </div>
      </section>

      {/* Terms Cards Start Here */}
      {/* Terms & Conditions Cards */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-8">
            {[
              {
                icon: BadgeCheck,
                title: "Acceptance of Terms",
                body: (
                  <>
                    By accessing and using the TAYB Perfumes website, you
                    acknowledge that you have read, understood and agree to be
                    bound by these Terms & Conditions. If you do not agree with
                    any part of these terms, please discontinue use of our
                    website.
                  </>
                ),
              },

              {
                icon: Package,
                title: "Products & Pricing",
                body: (
                  <>
                    All prices are listed in Pakistani Rupees (PKR). Product
                    availability, descriptions and prices may change without
                    prior notice. While we strive for accuracy, occasional
                    pricing or typographical errors may occur and may be
                    corrected at our discretion.
                  </>
                ),
              },

              {
                icon: CircleDollarSign,
                title: "Orders",
                body: (
                  <>
                    Every order is subject to verification and stock
                    availability. We reserve the right to decline, cancel or
                    limit any order where fraud, pricing errors or suspicious
                    activity is suspected.
                  </>
                ),
              },

              {
                icon: CreditCard,
                title: "Payments",
                body: (
                  <>
                    Orders are processed once payment requirements have been
                    satisfied. Cash on Delivery (COD) is currently available
                    across Pakistan. Additional payment methods may be added in
                    the future.
                  </>
                ),
              },

              {
                icon: Truck,
                title: "Shipping",
                body: (
                  <>
                    Estimated delivery times are provided for convenience and
                    may vary depending on courier operations, location or
                    unforeseen circumstances. Delivery delays do not
                    automatically qualify for compensation.
                  </>
                ),
              },

              {
                icon: RefreshCw,
                title: "Returns & Exchanges",
                body: (
                  <>
                    Returns and exchanges are subject to our official{" "}
                    <Link href="/returns" className="text-gold hover:underline">
                      Returns Policy
                    </Link>
                    . Please review the policy carefully before requesting an
                    exchange or return.
                  </>
                ),
              },

              {
                icon: ShieldCheck,
                title: "Intellectual Property",
                body: (
                  <>
                    All trademarks, product images, graphics, logos, website
                    content and written material are the exclusive property of
                    TAYB Perfumes and may not be copied, reproduced or
                    distributed without prior written permission.
                  </>
                ),
              },

              {
                icon: UserCheck,
                title: "User Responsibilities",
                body: (
                  <>
                    Users agree not to misuse the website, submit false
                    information, interfere with website operations or attempt
                    unauthorized access to any part of our systems.
                  </>
                ),
              },

              {
                icon: Scale,
                title: "Limitation of Liability",
                body: (
                  <>
                    TAYB Perfumes shall not be liable for indirect, incidental
                    or consequential damages arising from the use of our website
                    or products beyond the value of the purchased product,
                    except where required by applicable law.
                  </>
                ),
              },

              {
                icon: Landmark,
                title: "Governing Law",
                body: (
                  <>
                    These Terms & Conditions shall be governed by and
                    interpreted in accordance with the laws of the Islamic
                    Republic of Pakistan.
                  </>
                ),
              },

              {
                icon: FilePenLine,
                title: "Changes to Terms",
                body: (
                  <>
                    We reserve the right to modify these Terms & Conditions at
                    any time. Updated versions will be published on this page,
                    and continued use of the website constitutes acceptance of
                    those changes.
                  </>
                ),
              },

              {
                icon: Mail,
                title: "Contact Information",
                body: (
                  <>
                    If you have any questions regarding these Terms &
                    Conditions, please email us at{" "}
                    <a
                      href="mailto:info@taybperfumes.com"
                      className="text-gold hover:underline"
                    >
                      info@taybperfumes.com
                    </a>{" "}
                    or visit our{" "}
                    <Link href="/contact" className="text-gold hover:underline">
                      Contact Page
                    </Link>
                    . We aim to respond to most enquiries within 24–48 hours.
                  </>
                ),
              },
            ].map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="rounded-xl border border-gold/10 p-8 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,.08)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 text-gold">
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h2 className="font-display text-3xl italic text-cream mb-4">
                        {section.title}
                      </h2>

                      <div className="text-cream/60 leading-8">
                        {section.body}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Questions CTA */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Need Assistance?
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Questions About These Terms?
          </h2>

          <p className="text-cream/60 leading-8 max-w-2xl mx-auto mb-10">
            If you need clarification about these Terms & Conditions or any part
            of our policies, our customer support team is here to help. We'll be
            happy to answer your questions before you place an order.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold/90 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/faq"
              className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Related Policies */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-3">
              Related Policies
            </p>

            <h2 className="font-display text-5xl italic">Helpful Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/privacy"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Privacy Policy
              </h3>

              <p className="text-cream/60 leading-7">
                Learn how we collect, store and protect your personal
                information.
              </p>
            </Link>

            <Link
              href="/returns"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Returns Policy
              </h3>

              <p className="text-cream/60 leading-7">
                Read our return and exchange guidelines before requesting an
                exchange.
              </p>
            </Link>

            <Link
              href="/shipping"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Shipping Information
              </h3>

              <p className="text-cream/60 leading-7">
                Delivery timelines, courier partners and nationwide shipping
                details.
              </p>
            </Link>

            <Link
              href="/faq"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Frequently Asked Questions
              </h3>

              <p className="text-cream/60 leading-7">
                Find answers to the most common questions about shopping with
                TAYB Perfumes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Collections */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Explore Our Collections
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Find Your Signature Fragrance
          </h2>

          <p className="text-cream/60 max-w-2xl mx-auto leading-8 mb-10">
            Browse our premium fragrance collections crafted for every
            personality and occasion. Discover luxury scents that leave a
            lasting impression.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/men"
              className="bg-gold text-black px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold/90 transition"
            >
              Shop Men
            </Link>

            <Link
              href="/women"
              className="border border-gold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Shop Women
            </Link>

            <Link
              href="/bundles"
              className="border border-gold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
            >
              Perfume Bundles
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}

      <section className="border-t border-gold/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Thank You
          </p>

          <h2 className="font-display text-4xl md:text-5xl italic mb-6">
            Shopping With Confidence
          </h2>

          <p className="text-cream/60 leading-8">
            Thank you for choosing TAYB Perfumes. We are committed to providing
            a secure, transparent and enjoyable shopping experience for every
            customer. Your trust is important to us, and these Terms &
            Conditions help ensure a fair and reliable experience for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}
