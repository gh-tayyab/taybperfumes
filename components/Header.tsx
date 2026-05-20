"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Bundles", href: "/bundles" },
  { label: "Gift Sets", href: "/gift-sets" },
];

export default function Header() {
  const { totalItems, openCart } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBackground = scrolled || hovered;

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-0" : "top-[36px]"
        } ${
          showBackground
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        {/* Top line */}
        <div
          className={`h-[1px] w-full transition-all duration-500 ${
            showBackground ? "bg-gold/30" : "bg-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-start relative">
          {/* Mobile Menu */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-cream/80 hover:text-gold transition-colors"
          >
            <Menu size={22} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-medium tracking-widest uppercase text-xs text-cream/70 hover:text-gold transition-colors duration-300 gold-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-display text-2xl md:text-3xl tracking-[0.2em] text-cream hover:text-gold-light transition-colors duration-300"
          >
            TAYB
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-5 ml-auto">
            <button className="text-cream/70 hover:text-gold transition-colors hidden md:flex">
              <Search size={18} />
            </button>

            <button className="text-cream/70 hover:text-gold transition-colors hidden md:flex">
              <User size={18} />
            </button>

            <button
              onClick={openCart}
              className="relative text-cream/70 hover:text-gold transition-colors"
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-[10px] font-medium w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className={`h-[1px] w-full transition-all duration-500 ${
            showBackground ? "bg-gold/20" : "bg-transparent"
          }`}
        />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-charcoal-light border-r border-gold/20 transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-12">
              <span className="font-display text-2xl tracking-[0.2em] text-cream">
                TAYB
              </span>

              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream/60 hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body font-medium tracking-widest uppercase text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}