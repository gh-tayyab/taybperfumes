import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  ShieldCheck,
  Database,
  Cookie,
  Mail,
  ShoppingBag,
  Megaphone,
  Users,
  Lock,
  RefreshCw,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TAYB Perfumes Pakistan",

  description:
    "Read TAYB Perfumes Privacy Policy to learn how we collect, use, store and protect your personal information while shopping luxury fragrances online across Pakistan.",

  keywords: [
    "TAYB privacy policy",
    "Privacy Policy Pakistan",
    "Luxury perfume privacy policy",
    "Secure perfume shopping",
    "Personal data protection",
    "Online fragrance store privacy",
    "TAYB Perfumes Pakistan",
  ],

  openGraph: {
    title: "Privacy Policy | TAYB Perfumes Pakistan",

    description:
      "Learn how TAYB Perfumes protects your personal information and privacy while shopping luxury fragrances online.",

    url: "https://taybperfumes.com/privacy",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Privacy Policy",
      },
    ],

    locale: "en_PK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Privacy Policy | TAYB Perfumes Pakistan",

    description:
      "Learn how TAYB Perfumes collects, stores and protects your personal information.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/privacy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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

      {/* Privacy Policy Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "PrivacyPolicy",

            name: "Privacy Policy",

            url: "https://taybperfumes.com/privacy",

            publisher: {
              "@type": "Organization",

              name: "TAYB Perfumes",
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

          <span className="text-gold">Privacy Policy</span>
        </div>

        <p className="text-gold text-xs tracking-[0.35em] uppercase mb-5">
          Legal Information
        </p>

        <h1 className="font-display text-5xl md:text-7xl italic mb-8">
          Privacy Policy
        </h1>

        <p className="max-w-3xl mx-auto text-cream/60 leading-8 text-lg">
          Your privacy matters to us. This Privacy Policy explains how TAYB
          Perfumes collects, uses, stores and protects your personal information
          whenever you browse our website or purchase luxury fragrances online
          across Pakistan.
        </p>

        <p className="text-xs text-white/40 mt-8 uppercase tracking-widest">
          Last Updated: August 2026
        </p>
      </section>

      {/* Privacy Content Starts Here */}
      {/* Privacy Cards */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-8">
            {[
              {
                icon: Database,
                title: "Information We Collect",
                body: (
                  <>
                    We collect the information you provide when placing an
                    order, including your name, email address, phone number and
                    delivery address. We also collect limited technical
                    information such as browser type, device information and
                    pages visited to improve website performance and your
                    shopping experience.
                  </>
                ),
              },

              {
                icon: ShoppingBag,
                title: "Order Processing",
                body: (
                  <>
                    Your personal information is used to process orders, arrange
                    delivery, provide order updates and offer customer support.
                    Without this information, we cannot fulfil your purchase.
                  </>
                ),
              },

              {
                icon: Megaphone,
                title: "Marketing Communications",
                body: (
                  <>
                    We only send promotional emails, WhatsApp messages or
                    special offers if you have chosen to receive them. You may
                    unsubscribe from marketing communications at any time.
                  </>
                ),
              },

              {
                icon: Cookie,
                title: "Cookies",
                body: (
                  <>
                    Our website uses cookies to remember your preferences,
                    improve website functionality, analyse visitor behaviour and
                    provide a smoother shopping experience. You may disable
                    cookies through your browser settings if you prefer.
                  </>
                ),
              },

              {
                icon: Users,
                title: "Third-Party Services",
                body: (
                  <>
                    We may use trusted third-party services such as Google
                    Analytics, Meta Pixel, courier partners and payment
                    providers to improve our website, analyse traffic and
                    securely process your orders.
                  </>
                ),
              },

              {
                icon: ShieldCheck,
                title: "Data Security",
                body: (
                  <>
                    We take appropriate security measures to protect your
                    personal information, including SSL encryption, secure
                    checkout processes and restricted employee access. Although
                    we follow industry best practices, no online system can
                    guarantee complete security.
                  </>
                ),
              },

              {
                icon: Lock,
                title: "Your Rights",
                body: (
                  <>
                    You may request access to your personal information, ask us
                    to correct inaccurate details or request deletion of your
                    data by contacting our customer support team at any time.
                  </>
                ),
              },

              {
                icon: RefreshCw,
                title: "Changes To This Policy",
                body: (
                  <>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our business practices or legal
                    requirements. Any updates will be published on this page
                    with the revised update date.
                  </>
                ),
              },

              {
                icon: Mail,
                title: "Contact Us",
                body: (
                  <>
                    If you have any questions regarding this Privacy Policy,
                    please email us at{" "}
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
                    . Most privacy-related requests are answered within 24–48
                    hours.
                  </>
                ),
              },

              {
                icon: FileText,
                title: "Our Commitment",
                body: (
                  <>
                    Thank you for trusting TAYB Perfumes. Protecting your
                    privacy is an important part of delivering a premium
                    shopping experience, and we are committed to handling your
                    information responsibly and transparently.
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
      {/* Questions About Privacy */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Questions About Privacy?
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            We're Here To Help
          </h2>

          <p className="text-cream/60 max-w-2xl mx-auto leading-8 mb-10">
            If you have any questions about how we collect, store or protect
            your personal information, our support team is always happy to
            assist you.
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

      {/* Explore Collections */}

      <section className="border-t border-gold/10 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Explore Luxury Fragrances
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Discover Your Signature Scent
          </h2>

          <p className="text-cream/60 max-w-3xl mx-auto leading-8 mb-12">
            Explore our carefully curated collection of premium fragrances for
            every personality and every occasion. From fresh everyday scents to
            luxurious evening fragrances, discover the perfect perfume with TAYB
            Perfumes.
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

          <div className="mt-10">
            <Link
              href="/faq"
              className="text-gold uppercase tracking-widest text-xs hover:underline"
            >
              Read Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Message */}

      <section className="border-t border-gold/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Thank You
          </p>

          <h2 className="font-display text-4xl md:text-5xl italic mb-6">
            Protecting Your Privacy
            <span className="block text-gold">Is Part Of Our Promise</span>
          </h2>

          <p className="text-cream/60 leading-8">
            Thank you for trusting TAYB Perfumes. We are committed to protecting
            your personal information while delivering a secure, transparent and
            premium online shopping experience. Your trust is as valuable to us
            as the fragrances we create.
          </p>
        </div>
      </section>
    </main>
  );
}
