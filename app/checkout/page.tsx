"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", payment: "cod"
  });

  const shipping = totalPrice >= 3000 ? 0 : 200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="pt-[100px] min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-gold text-6xl mb-6">✦</p>
          <h1 className="font-display text-5xl text-cream italic mb-4">Order Placed!</h1>
          <p className="text-cream/50 text-sm max-w-sm mx-auto mb-8">
            Thank you for your order. We&apos;ll confirm it shortly via WhatsApp and
            dispatch within 1–2 business days.
          </p>
          <Link
            href="/"
            className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-[100px] min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-display text-4xl text-cream italic mb-4">Your cart is empty</h1>
          <Link href="/" className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl text-cream italic mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-body text-xs tracking-widest uppercase text-gold mb-4">
                Delivery Information
              </h2>

              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Ahmed Khan" },
                { key: "email", label: "Email", type: "email", placeholder: "ahmed@email.com" },
                { key: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+92 300 0000000" },
                { key: "address", label: "Delivery Address", type: "text", placeholder: "House #, Street, Area" },
                { key: "city", label: "City", type: "text", placeholder: "Karachi" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs tracking-widest uppercase text-cream/30 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
                  />
                </div>
              ))}

              {/* Payment method */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-cream/30 mb-3">
                  Payment Method
                </label>
                <div className="space-y-2">
                  {[
                    { value: "cod", label: "Cash on Delivery" },
                    { value: "bank", label: "Bank Transfer" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 border p-4 cursor-pointer transition-colors ${
                        form.payment === opt.value
                          ? "border-gold text-gold"
                          : "border-gold/20 text-cream/50 hover:border-gold/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={opt.value}
                        checked={form.payment === opt.value}
                        onChange={() => setForm({ ...form, payment: opt.value })}
                        className="accent-yellow-500"
                      />
                      <span className="text-sm tracking-wider">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-sm py-4 hover:bg-gold-light transition-colors mt-4"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <h2 className="font-body text-xs tracking-widest uppercase text-gold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-16 h-16 shrink-0 overflow-hidden bg-[#1e1e1e] relative">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm text-cream leading-tight truncate">
                      {item.product.name}
                    </p>
                    <p className="text-cream/30 text-xs mt-0.5">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-gold text-sm shrink-0">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/10 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-cream/50">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm text-cream/50">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between font-display text-xl text-gold border-t border-gold/10 pt-3 mt-3">
                <span>Total</span>
                <span>{formatPrice(totalPrice + shipping)}</span>
              </div>
            </div>

            {totalPrice < 3000 && (
              <p className="text-cream/30 text-xs mt-4 text-center">
                Add {formatPrice(3000 - totalPrice)} more for free shipping
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
