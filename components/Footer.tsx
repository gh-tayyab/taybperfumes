"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert("Subscription failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="bg-[#0f0f0f] border-t border-gold/20 pt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}

        <section
          aria-labelledby="newsletter-heading"
          className="text-center mb-20"
        >
          <h2
            id="newsletter-heading"
            className="font-display text-3xl md:text-4xl italic text-cream mb-2"
          >
            Join the TAYB Perfumes Community
          </h2>

          <p className="text-cream/50 text-sm tracking-wider mb-8 max-w-md mx-auto">
            Subscribe for exclusive offers, fragrance tips, new launches and
            early access to our luxury perfume collections.
          </p>

          <div className="flex max-w-sm mx-auto border border-gold/30 overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-cream px-4 py-3 text-sm placeholder:text-cream/40 outline-none"
            />

            <button
              onClick={handleSubscribe}
              className="bg-gold text-charcoal px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold-light transition"
            >
              Subscribe
            </button>
          </div>
        </section>

        {/* Trust Badges */}

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          <div>
            <ShieldCheck className="mx-auto text-gold mb-2" size={20} />
            <p className="text-sm text-cream/60">100% Authentic</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-gold mb-2" size={20} />
            <p className="text-sm text-cream/60">Cash On Delivery</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-gold mb-2" size={20} />
            <p className="text-sm text-cream/60">Free Delivery Over Rs.3000</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-gold mb-2" size={20} />
            <p className="text-sm text-cream/60">Easy Returns</p>
          </div>
        </section>

        {/* Footer Links */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-gold/10">
          {/* Brand */}

          <section>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="TAYB Perfumes"
                width={180}
                height={70}
                className="h-28 w-auto object-contain"
              />
            </Link>

            <p className="text-cream/50 text-sm leading-7 mt-3">
              Discover luxury perfumes crafted for every occasion. Explore our{" "}
              <Link href="/men" className="text-gold hover:underline">
                Men's Collection
              </Link>
              ,{" "}
              <Link href="/women" className="text-gold hover:underline">
                Women's Collection
              </Link>
              ,{" "}
              <Link href="/bundles" className="text-gold hover:underline">
                Perfume Bundles
              </Link>
              and read expert{" "}
              <Link href="/blogs" className="text-gold hover:underline">
                fragrance guides
              </Link>
              .
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61591221246286"
                target="_blank"
              >
                <Facebook className="text-cream/50 hover:text-gold" size={18} />
              </Link>

              <Link href="https://instagram.com/taybperfumes" target="_blank">
                <Instagram
                  className="text-cream/50 hover:text-gold"
                  size={18}
                />
              </Link>
            </div>
          </section>

          {/* About */}

          <nav>
            <h3 className="text-gold uppercase text-xs tracking-widest mb-5">
              About
            </h3>

            <ul className="space-y-3 text-cream/50">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>

              <li>
                <Link href="/blogs">Perfume Blog</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>

              <li>
                <Link href="/review">Customer Reviews</Link>
              </li>
            </ul>
          </nav>

          {/* Shop */}

          <nav>
            <h3 className="text-gold uppercase text-xs tracking-widest mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-cream/50">
              <li>
                <Link href="/men">Men's Perfumes</Link>
              </li>

              <li>
                <Link href="/women">Women's Perfumes</Link>
              </li>

              <li>
                <Link href="/bundles">Perfume Bundles</Link>
              </li>

              <li>
                <Link href="/all">Shop All</Link>
              </li>
            </ul>
          </nav>

          {/* Policies */}

          <nav>
            <h3 className="text-gold uppercase text-xs tracking-widest mb-5">
              Policies
            </h3>

            <ul className="space-y-3 text-cream/50">
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>

              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/shipping">Shipping & Delivery</Link>
              </li>

              <li>
                <Link href="/returns">Returns & Exchanges</Link>
              </li>

              <li>
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}

          <section>
            <h3 className="text-gold uppercase text-xs tracking-widest mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-cream/50">
              <li className="flex gap-2 items-center">
                <Phone size={16} />
                <a href="tel:+923367189237">+92 336 7189237</a>
              </li>

              <li className="flex gap-2 items-center">
                <Mail size={16} />
                <a href="mailto:info@taybperfumes.com">info@taybperfumes.com</a>
              </li>

              <li>Pakistan</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-gold uppercase text-xs tracking-widest mb-3">
                Payments
              </h4>

              <p className="text-cream/50 text-sm">
                Cash on Delivery
                <br />
                Bank Transfer
                <br />
                JazzCash
                <br />
                EasyPaisa
              </p>
            </div>
          </section>
        </div>
        <section className=" border-gold/10 pt-10">
          <h3 className="text-gold uppercase tracking-[0.3em] text-xs mb-6">
            Popular Searches
          </h3>

          <div className="flex flex-wrap gap-3">
            <Link href="/men" className="text-cream/50 hover:text-gold transition hover:underline">Men's Perfumes</Link>

            <Link href="/women" className="text-cream/50 hover:text-gold transition hover:underline">Women's Perfumes</Link>

            <Link href="/bundles" className="text-cream/50 hover:text-gold transition hover:underline">Perfume Bundles</Link>

            <Link href="/blogs" className="text-cream/50 hover:text-gold transition hover:underline">Perfume Blog</Link>

            <Link href="/faq" className="text-cream/50 hover:text-gold transition hover:underline">Perfume FAQs</Link>

            <Link href="/contact" className="text-cream/50 hover:text-gold transition hover:underline">Contact Us</Link>
          </div>
        </section>

        {/* Bottom */}

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <span>© 2026 TAYB Perfumes. All rights reserved.</span>

          <span>Premium Luxury Perfumes in Pakistan 🇵🇰</span>
        </div>
      </div>
    </footer>
  );
}
