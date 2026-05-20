"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Truck, AlertCircle, Loader2 } from "lucide-react";
import {
  initEmailJS,
  sendOwnerOrderEmail,
  sendCustomerConfirmationEmail,
  generateOrderId,
  formatOrderItemsForEmail,
} from "@/lib/emailjs";
import { Suspense } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type PaymentMethod = "cod";

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
};

// ─────────────────────────────────────────────────────────────
// Inner component
// ─────────────────────────────────────────────────────────────
function CheckoutContent() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("cancelled");
  const paymentFailed = searchParams.get("payment_failed");

  const shipping = totalPrice >= 3000 ? 0 : 200;
  const grandTotal = totalPrice + shipping;

  const payment: PaymentMethod = "cod";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"form" | "processing">("form");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const updateField = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // ── Send emails via EmailJS ────────────────────────────────
  const sendEmails = async (orderId: string, paymentStatus: string) => {
    const itemsText = formatOrderItemsForEmail(items);

    const emailData = {
      orderId,
      customerName: form.name,
      customerEmail: form.email,
      customerPhone: form.phone,
      deliveryAddress: form.address,
      city: form.city,
      paymentMethod: "Cash on Delivery",
      paymentStatus,
      orderItems: itemsText,
      subtotal: formatPrice(totalPrice),
      shipping: shipping === 0 ? "Free" : formatPrice(shipping),
      totalAmount: formatPrice(grandTotal),
    };

    try {
      await sendOwnerOrderEmail(emailData);
      await sendCustomerConfirmationEmail(emailData);
    } catch (err) {
      console.error("EMAIL FAILED:", err);
      throw err;
    }
  };

  // ── COD handler ────────────────────────────────────────────
  // ── COD handler ────────────────────────────────────────────
  const handleCOD = async (orderId: string) => {
    // Save order to DB / API
    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId,
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        postalCode: form.postalCode,
        notes: form.notes,
        items,
        total: grandTotal,
        paymentStatus: "Pending",
        paymentMethod: "Cash on Delivery",
      }),
    });

    // Existing email flow
    await sendEmails(orderId, "Pending — Cash on Delivery");

    clearCart();
    router.push(`/order-success?order_id=${orderId}`);
  };

  // ── Main submit ────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setStep("processing");

    const orderId = generateOrderId();

    try {
      await handleCOD(orderId);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(msg);
      setStep("form");
    } finally {
      setLoading(false);
    }
  };

  // ── Empty cart ─────────────────────────────────────────────
  if (items.length === 0 && step !== "processing") {
    return (
      <div className="pt-[100px] min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-display text-4xl text-cream italic mb-4">
            Your cart is empty
          </h1>
          <Link
            href="/"
            className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
            Secure Checkout
          </p>
          <h1 className="font-display text-5xl text-cream italic flex items-center gap-4">
            Checkout
            <ShieldCheck size={28} className="text-gold opacity-60" />
          </h1>
        </div>

        {/* Alerts */}
        {(cancelled || paymentFailed) && (
          <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 p-4 mb-8 text-red-400 text-sm">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>
              Something went wrong with your previous order. Please try again.
            </span>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 p-4 mb-8 text-red-400 text-sm">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── FORM ─────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Details */}
              <div>
                <h2 className="font-body text-xs tracking-widest uppercase text-gold mb-5 pb-3 border-b border-gold/20">
                  Delivery Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Full Name"
                      type="text"
                      placeholder="Ahmed Khan"
                      value={form.name}
                      onChange={(v) => updateField("name", v)}
                      required
                    />
                    <FormField
                      label="Phone / WhatsApp"
                      type="tel"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={(v) => updateField("phone", v)}
                      required
                    />
                  </div>

                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="ahmed@email.com"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                    required
                    hint="Order confirmation will be sent here"
                  />

                  <FormField
                    label="Delivery Address"
                    type="text"
                    placeholder="House #, Street, Area / Block"
                    value={form.address}
                    onChange={(v) => updateField("address", v)}
                    required
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="City"
                      type="text"
                      placeholder="Karachi"
                      value={form.city}
                      onChange={(v) => updateField("city", v)}
                      required
                    />
                    <FormField
                      label="Postal Code"
                      type="text"
                      placeholder="75500"
                      value={form.postalCode}
                      onChange={(v) => updateField("postalCode", v)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream/30 mb-2">
                      Order Notes{" "}
                      <span className="normal-case text-cream/20">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Special instructions, gift message, etc."
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method — COD only */}
              <div>
                <h2 className="font-body text-xs tracking-widest uppercase text-gold mb-5 pb-3 border-b border-gold/20">
                  Payment Method
                </h2>

                <div className="border border-gold bg-gold/5 p-4 flex items-start gap-3">
                  <Truck size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-gold text-sm font-medium">
                        Cash on Delivery
                      </p>
                      <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 tracking-wider">
                        Only Option
                      </span>
                    </div>
                    <p className="text-cream/40 text-xs mt-1">
                      Pay when your order arrives at your doorstep. No card
                      needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-sm py-5 hover:bg-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  <>
                    <Truck size={16} />
                    Place Order — Cash on Delivery
                  </>
                )}
              </button>

              <p className="text-center text-cream/20 text-xs">
                By placing your order, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-gold">
                  Terms & Conditions
                </Link>
              </p>
            </form>
          </div>

          {/* ── ORDER SUMMARY ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <h2 className="font-body text-xs tracking-widest uppercase text-gold mb-6 pb-3 border-b border-gold/20">
                Order Summary
              </h2>

              {/* Items */}
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
                      <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[10px] font-medium min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center px-1">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm text-cream leading-tight truncate">
                        {item.product.name}
                      </p>
                      <p className="text-cream/30 text-xs mt-0.5">
                        {item.product.size}
                      </p>
                    </div>
                    <p className="text-gold text-sm shrink-0 font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-gold/10 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-cream/50">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-cream/50">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : ""}>
                    {shipping === 0 ? "✓ Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between font-display text-2xl text-gold border-t border-gold/20 pt-4 mt-2">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Free shipping progress */}
              {totalPrice < 3000 && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-cream/30 mb-1.5">
                    <span>
                      Add {formatPrice(3000 - totalPrice)} for free shipping
                    </span>
                    <span>{Math.round((totalPrice / 3000) * 100)}%</span>
                  </div>
                  <div className="h-[2px] bg-gold/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold transition-all duration-500"
                      style={{
                        width: `${Math.min((totalPrice / 3000) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Trust signals */}
              <div className="mt-8 space-y-2">
                {[
                  { icon: "🔒", text: "Secure & Safe Checkout" },
                  { icon: "📦", text: "Dispatched in 1–2 business days" },
                  { icon: "↩️", text: "7-day return on unopened items" },
                  { icon: "💬", text: "WhatsApp confirmation after order" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-cream/30"
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sub-component
// ─────────────────────────────────────────────────────────────
function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  hint,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-cream/30 mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
      />
      {hint && <p className="text-cream/20 text-xs mt-1">{hint}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page export
// ─────────────────────────────────────────────────────────────
export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-[100px] min-h-screen flex items-center justify-center">
          <Loader2 size={32} className="text-gold animate-spin" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
