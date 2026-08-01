"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="pt-[52px] min-h-screen"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <meta itemProp="name" content="Contact TAYB Perfumes" />

      <meta
        itemProp="description"
        content="Contact TAYB Perfumes for customer support, fragrance recommendations and order assistance."
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TAYB Perfumes",
            url: "https://taybperfumes.com",
            email: "info@taybperfumes.com",
            telephone: "+923367189237",
            sameAs: [
              "https://www.instagram.com/taybperfumes/",
              "https://www.facebook.com/profile.php?id=61591221246286",
            ],
          }),
        }}
      />

      <section className="border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>

            <span>/</span>

            <span className="text-gold">Contact</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block border border-gold/30 text-gold px-4 py-2 uppercase tracking-[0.3em] text-[10px] mb-6">
              We're Here To Help
            </span>

            <h1 className="font-display text-5xl md:text-7xl italic text-cream leading-tight mb-6">
              Contact
              <span className="block text-gold">TAYB Perfumes</span>
            </h1>

            <p className="text-white/60 leading-8 max-w-2xl">
              Have a question about our perfumes, orders or shipping? Our team
              is always ready to help you choose the perfect fragrance. Reach
              out anytime and we'll get back to you as quickly as possible.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gold/10 p-6 hover:border-gold transition">
              <Clock className="text-gold mb-4" size={26} />

              <h3 className="font-display text-2xl mb-2">Fast Response</h3>

              <p className="text-white/60 text-sm">Usually within 24 Hours</p>
            </div>

            <div className="border border-gold/10 p-6 hover:border-gold transition">
              <MessageCircle className="text-gold mb-4" size={26} />

              <h3 className="font-display text-2xl mb-2">WhatsApp Support</h3>

              <p className="text-white/60 text-sm">
                Quick fragrance advice from our team.
              </p>
            </div>

            <div className="border border-gold/10 p-6 hover:border-gold transition">
              <ShieldCheck className="text-gold mb-4" size={26} />

              <h3 className="font-display text-2xl mb-2">
                Secure Communication
              </h3>

              <p className="text-white/60 text-sm">
                Your information always stays private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Form */}
        {/* Form */}
        <div>
          <h2 className="font-display text-3xl text-cream mb-8">
            Send a Message
          </h2>

          {sent ? (
            <div className="border border-gold/30 p-8 text-center">
              <CheckCircle2 className="mx-auto text-gold mb-5" size={48} />

              <h3 className="text-3xl font-display italic text-gold mb-3">
                Message Sent Successfully ✓
              </h3>

              <p className="text-cream/60 leading-7 mb-8">
                Thank you for contacting TAYB Perfumes.
                <br />
                Our team usually replies within one business day.
              </p>

              <a
                href="https://wa.me/923367189237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 uppercase tracking-widest text-xs hover:opacity-90 transition"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  maxLength={120}
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows={6}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-charcoal font-medium tracking-widest uppercase text-sm py-4 hover:bg-gold-light transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Trust Section */}
          <div className="mt-10 border border-gold/10 p-6">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-5">
              Why Contact Us
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold flex-shrink-0" size={18} />

                <p className="text-white/60 text-sm">Secure Contact Form</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold flex-shrink-0" size={18} />

                <p className="text-white/60 text-sm">
                  We never share your information
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold flex-shrink-0" size={18} />

                <p className="text-white/60 text-sm">
                  Response within 24 Hours
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          {/* Contact Information */}
          <div>
            <h2 className="font-display text-3xl text-cream mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-gold mt-1" />

                <div>
                  <p className="text-xs tracking-widest uppercase text-cream/30 mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:info@taybperfumes.com"
                    className="text-gold hover:underline transition"
                  >
                    info@taybperfumes.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-gold mt-1" />

                <div>
                  <p className="text-xs tracking-widest uppercase text-cream/30 mb-2">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/923367189237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline transition"
                  >
                    +92 336 7189237
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold mt-1" />

                <div>
                  <p className="text-xs tracking-widest uppercase text-cream/30 mb-2">
                    Location
                  </p>

                  <p className="text-white/60 leading-7">
                    R-66 Phase-I Shah Town Bin Qasim,
                    <br />
                    Bin Qasim, Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden border border-gold/10 mb-12">
              <iframe
                title="TAYB Perfumes Location"
                src="https://www.google.com/maps?q=R-66+Phase+1+Shah+Town+Bin+Qasim+Karachi&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Follow Us */}
            <div className="border-t border-gold/10 pt-8">
              <p className="text-xs tracking-widest uppercase text-cream/30 mb-5">
                Follow Us
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/taybperfumes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold/20 p-3 hover:border-gold hover:text-gold transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61591221246286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold/20 p-3 hover:border-gold hover:text-gold transition"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-12 border border-gold/10 p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="text-gold" size={20} />

                <h3 className="font-display text-2xl">Customer Support</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gold uppercase tracking-widest text-xs mb-1">
                    Working Hours
                  </p>

                  <p className="text-white/60">Monday – Saturday</p>

                  <p className="text-white/60">10:00 AM – 7:00 PM</p>
                </div>

                <div className="border-t border-gold/10 pt-4">
                  <p className="text-gold uppercase tracking-widest text-xs mb-1">
                    Response Time
                  </p>

                  <p className="text-white/60">Usually within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <section className="border-t border-gold/10 py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
                  Frequently Asked Questions
                </p>

                <h2 className="font-display text-5xl italic">
                  We're Here To Help
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gold/10 p-6">
                  <h3 className="font-display text-2xl mb-3">
                    How long do you take to reply?
                  </h3>

                  <p className="text-white/60 leading-7">
                    We usually respond to all inquiries within one business day.
                  </p>
                </div>

                <div className="border border-gold/10 p-6">
                  <h3 className="font-display text-2xl mb-3">
                    Can I order through WhatsApp?
                  </h3>

                  <p className="text-white/60 leading-7">
                    Yes. You can contact us directly on WhatsApp for fragrance
                    recommendations, order assistance and customer support.
                  </p>
                </div>

                <div className="border border-gold/10 p-6">
                  <h3 className="font-display text-2xl mb-3">
                    Do you deliver across Pakistan?
                  </h3>

                  <p className="text-white/60 leading-7">
                    Yes. We provide fast and secure nationwide delivery
                    throughout Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="border-t border-gold/10 py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
                Still Looking For The Perfect Fragrance?
              </p>

              <h2 className="font-display text-5xl italic mb-6">
                Explore Our
                <span className="block text-gold">Luxury Collections</span>
              </h2>

              <p className="text-white/60 leading-8 max-w-2xl mx-auto mb-10">
                Discover premium perfumes crafted for men and women who
                appreciate elegance, confidence and long-lasting fragrance
                performance.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/men"
                  className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs hover:opacity-90 transition"
                >
                  Shop Men
                </Link>

                <Link
                  href="/women"
                  className="border border-gold px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition"
                >
                  Shop Women
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
          {/* Internal Links */}
          <section className="border-t border-gold/10 py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-display text-4xl italic mb-5">
                Need Help Choosing A Fragrance?
              </h2>

              <p className="text-white/60 leading-8 mb-8">
                Explore our perfume guides to learn about fragrance notes,
                longevity, seasonal scents and tips for selecting your perfect
                signature fragrance.
              </p>

              <Link
                href="/blogs"
                className="text-gold uppercase tracking-widest text-xs hover:underline"
              >
                Read Our Perfume Guides →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
