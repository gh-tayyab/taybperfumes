import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery | TAYB Perfumes Pakistan",

  description:
    "Learn about TAYB Perfumes shipping and delivery policy across Pakistan. Delivery timelines, shipping charges, Cash on Delivery, free shipping offers and dispatch information.",

  keywords: [
    "TAYB shipping policy",
    "perfume delivery Pakistan",
    "TAYB delivery charges",
    "luxury fragrance shipping Pakistan",
    "cash on delivery perfumes",
    "perfume shipping Pakistan",
    "nationwide perfume delivery",
  ],

  openGraph: {
    title: "Shipping & Delivery | TAYB Perfumes",

    description:
      "Fast, secure and reliable perfume delivery across Pakistan with TAYB Perfumes.",

    url: "https://taybperfumes.com/shipping",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Shipping & Delivery",
      },
    ],

    locale: "en_PK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shipping & Delivery | TAYB Perfumes",

    description:
      "Learn about delivery times, shipping charges, Cash on Delivery and nationwide perfume delivery across Pakistan.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/shipping",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ShippingPage() {
  return (
    <main
      className="pt-[120px] min-h-screen bg-charcoal text-cream"
      itemScope
      itemType="https://schema.org/WebPage"
    >
        {/* Hero */}

        <section className="max-w-7xl mx-auto px-6 text-center mb-20">
          {/* Breadcrumb */}

          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>

            <ChevronRight size={12} />

            <span className="text-gold">Shipping</span>
          </div>

          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Policies
          </p>

          <h1 className="font-display text-5xl md:text-7xl italic mb-6">
            Shipping & Delivery
          </h1>

          <p className="max-w-3xl mx-auto text-cream/60 leading-8">
            TAYB Perfumes offers fast, secure and reliable shipping across
            Pakistan. Learn about our delivery timelines, shipping charges, Cash
            on Delivery availability and order dispatch process.
          </p>

          <p className="text-xs text-white/40 mt-8">
            Last Updated: August 2026
          </p>
        </section>
        {/* Shipping Stats */}

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gold/10 p-8 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                <p className="uppercase tracking-widest text-xs text-gold mb-3">
                  Delivery Time
                </p>

                <h2 className="font-display text-4xl text-cream mb-2">
                  2–4 Days
                </h2>

                <p className="text-white/50 text-sm">Working Days</p>
              </div>

              <div className="border border-gold/10 p-8 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                <p className="uppercase tracking-widest text-xs text-gold mb-3">
                  Dispatch
                </p>

                <h2 className="font-display text-4xl text-cream mb-2">
                  24–48h
                </h2>

                <p className="text-white/50 text-sm">Order Processing</p>
              </div>

              <div className="border border-gold/10 p-8 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                <p className="uppercase tracking-widest text-xs text-gold mb-3">
                  Cash on Delivery
                </p>

                <h2 className="font-display text-4xl text-cream mb-2">
                  Available
                </h2>

                <p className="text-white/50 text-sm">Nationwide</p>
              </div>

              <div className="border border-gold/10 p-8 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                <p className="uppercase tracking-widest text-xs text-gold mb-3">
                  Free Shipping
                </p>

                <h2 className="font-display text-4xl text-cream mb-2">
                  Rs.3000+
                </h2>

                <p className="text-white/50 text-sm">Eligible Orders</p>
              </div>
            </div>
          </div>
        </section>
              {/* Order Timeline */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-3">
              Order Journey
            </p>

            <h2 className="font-display text-5xl italic">
              From Checkout To Your Doorstep
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Place Order",
              "Order Confirmation",
              "Order Dispatch",
              "Courier Pickup",
              "Delivered",
            ].map((step, index) => (
              <div
                key={step}
                className="relative border border-gold/10 rounded-xl p-8 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center mx-auto mb-5 font-display text-xl">
                  {index + 1}
                </div>

                <h3 className="font-display text-2xl italic">
                  {step}
                </h3>

                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-gold text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Shop With TAYB */}

      <section className="border-t border-gold/10 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-3">
              Why Shop With Us
            </p>

            <h2 className="font-display text-5xl italic">
              Why Customers Love Shopping With TAYB
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Fast Nationwide Shipping",
              "Premium Secure Packaging",
              "Cash on Delivery Available",
              "WhatsApp Order Updates",
              "Trusted Courier Partners",
              "Carefully Packed Fragrances",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
              >
                <div className="text-gold text-3xl mb-4">
                  ✓
                </div>

                <h3 className="font-display text-2xl italic">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Delivery Information */}

      <section className="border-t border-gold/10 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-8">

            <div className="rounded-xl border border-gold/10 p-8 hover:border-gold/30 transition-all">

              <h2 className="font-display text-3xl italic mb-5">
                How Our Delivery Process Works
              </h2>

              <p className="text-cream/60 leading-8">
                Once you place your order, our team verifies the order details
                and sends a confirmation via WhatsApp or phone call. Your order
                is carefully prepared, securely packaged and dispatched within
                24–48 hours through our trusted courier partners.
              </p>

              <p className="text-cream/60 leading-8 mt-5">
                As soon as your parcel is handed over to the courier, you'll
                receive tracking details so you can monitor your shipment until
                it reaches your doorstep.
              </p>

            </div>

            <div className="rounded-xl border border-gold/10 p-8 hover:border-gold/30 transition-all">

              <h2 className="font-display text-3xl italic mb-6">
                Delivery Areas
              </h2>

              <p className="text-cream/60 leading-8 mb-8">
                We proudly deliver across Pakistan, including all major cities
                and surrounding regions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-cream/60">

                {[
                  "Karachi",
                  "Lahore",
                  "Islamabad",
                  "Rawalpindi",
                  "Faisalabad",
                  "Multan",
                  "Peshawar",
                  "Quetta",
                  "Hyderabad",
                  "Sialkot",
                  "Sargodha",
                  "Bahawalpur",
                ].map((city) => (
                  <div
                    key={city}
                    className="border border-gold/10 rounded-lg py-3 px-4 hover:border-gold transition text-center"
                  >
                    {city}
                  </div>
                ))}

              </div>

              <p className="text-cream/50 leading-8 mt-8">
                We also deliver to many additional cities and towns throughout
                Pakistan. If you're unsure whether delivery is available in your
                area, please{" "}
                <Link
                  href="/contact"
                  className="text-gold hover:underline"
                >
                  contact our support team
                </Link>.
              </p>

            </div>

            <div className="rounded-xl border border-gold/10 p-8 hover:border-gold/30 transition-all">

              <h2 className="font-display text-3xl italic mb-5">
                If Delivery Cannot Be Completed
              </h2>

              <p className="text-cream/60 leading-8">
                If delivery cannot be completed because of an incorrect address,
                unavailable recipient or courier restrictions, our delivery
                partner may attempt another delivery.
              </p>

              <p className="text-cream/60 leading-8 mt-5">
                After repeated unsuccessful attempts, the parcel may be returned
                to us. To avoid delays, please ensure your contact number and
                shipping address are accurate before placing an order.
              </p>

              <p className="text-cream/60 leading-8 mt-5">
                For delivery assistance, you can visit our{" "}
                <Link
                  href="/faq"
                  className="text-gold hover:underline"
                >
                  Frequently Asked Questions
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="text-gold hover:underline"
                >
                  Contact Us
                </Link>
                .
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Shipping FAQ */}

            <section className="border-t border-gold/10 py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-3">
              Shipping FAQ
            </p>

            <h2 className="font-display text-5xl italic">
              Frequently Asked Shipping Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "How long does delivery take?",
                a: "Most orders are delivered within 2–4 working days. Delivery times may vary slightly depending on your location and courier operations.",
              },
              {
                q: "Is Cash on Delivery available?",
                a: "Yes. Cash on Delivery (COD) is available across Pakistan for eligible orders.",
              },
              {
                q: "Do you offer free shipping?",
                a: "Yes. We offer free shipping on orders above Rs. 3,000. Standard shipping charges apply to orders below this amount.",
              },
              {
                q: "Can I track my order?",
                a: "Absolutely. Once your order is dispatched, you'll receive tracking information so you can follow your parcel until delivery.",
              },
              {
                q: "Do you deliver across Pakistan?",
                a: "Yes. We deliver to all major cities and many smaller towns throughout Pakistan using trusted courier partners.",
              },
              {
                q: "What if my order is delayed?",
                a: "Occasionally deliveries may be delayed due to weather, public holidays or courier issues. If your order is taking longer than expected, please contact our support team.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
              >
                <h3 className="font-display text-2xl italic mb-4 text-gold">
                  {item.q}
                </h3>

                <p className="text-cream/60 leading-8">
                  {item.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact CTA */}

      <section className="border-t border-gold/10 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
            Need Help?
          </p>

          <h2 className="font-display text-5xl italic mb-6">
            Questions About Your Order?
          </h2>

          <p className="text-cream/60 leading-8 max-w-2xl mx-auto mb-10">
            Our support team is always happy to help with shipping, delivery,
            tracking or any questions related to your order.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition"
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

      {/* Related Pages */}

      <section className="border-t border-gold/10 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-3">
              Helpful Resources
            </p>

            <h2 className="font-display text-5xl italic">
              Related Policies
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Link
              href="/returns"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Returns Policy
              </h3>

              <p className="text-cream/60 leading-7">
                Learn about exchanges, eligible returns and refund guidelines.
              </p>
            </Link>

            <Link
              href="/privacy"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Privacy Policy
              </h3>

              <p className="text-cream/60 leading-7">
                See how we collect, store and protect your personal information.
              </p>
            </Link>

            <Link
              href="/terms"
              className="rounded-xl border border-gold/10 p-8 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)] transition-all"
            >
              <h3 className="font-display text-2xl italic mb-3">
                Terms & Conditions
              </h3>

              <p className="text-cream/60 leading-7">
                Review the terms that govern purchases from TAYB Perfumes.
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

          <p className="text-cream/60 leading-8 max-w-2xl mx-auto mb-10">
            Discover premium fragrances crafted for every personality and
            occasion. Shop our exclusive collections for men, women and
            fragrance lovers across Pakistan.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/men"
              className="bg-gold text-black px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition"
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
              Shop Bundles
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
            Delivering Luxury With Care
          </h2>

          <p className="text-cream/60 leading-8">
            Thank you for choosing TAYB Perfumes. Every order is carefully
            prepared, securely packaged and delivered with attention to detail.
            We're committed to providing a fast, reliable and premium shopping
            experience from checkout to your doorstep.
          </p>

        </div>

      </section>
    </main>
  );
}
