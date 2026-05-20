"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

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
    <footer className="bg-[#0f0f0f] border-t border-gold/20 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl italic text-cream mb-2">
            Join the TAYB Family
          </h2>

          <p className="text-cream/40 text-sm tracking-wider mb-8 max-w-md mx-auto">
            Get 10% off your first order. Plus early access, offers, and scent
            stories — just for our insiders.
          </p>

          <div className="flex max-w-sm mx-auto border border-gold/30 overflow-hidden">
            <input
              type="email"
              placeholder="Your e-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-cream/70 px-4 py-3 text-sm font-body placeholder:text-cream/30 outline-none"
            />

            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-gold text-charcoal px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors shrink-0"
            >
              I&apos;m In
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-gold/10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl tracking-[0.2em] text-cream mb-4">
              TAYB
            </h3>

            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Step into the enchanting realm of TAYB Perfumes, where each scent
              is a testament to the art of fragrance creation.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-5">
              About
            </h4>

            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Blogs", href: "/blogs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-5">
              Policies
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Shipping & Delivery", href: "/shipping" },
                { label: "Returns & Exchanges", href: "/returns" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/20 text-xs tracking-wider">
          <span>© 2026 TAYB Perfumes. All rights reserved.</span>
          <span>Crafted with passion in Pakistan 🇵🇰</span>
        </div>
      </div>
    </footer>
  );
}