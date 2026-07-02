"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Suspense } from "react";

function OrderSuccessContent() {
  const params = useSearchParams();
  const orderId = params.get("order_id") || "TAYB-XXXXX";
  const [visible, setVisible] = useState(false);
  const customerName = params.get("name") || "Customer";
  const phone = params.get("phone") || "";
  const city = params.get("city") || "";
  const address = params.get("address") || "";
  const total = params.get("total") || "";

  const whatsappMessage = encodeURIComponent(`🌟 Assalam-o-Alaikum TAYB Perfumes,

    Order ID:
    ${orderId}
    
    Customer:
    ${customerName}
    
    Phone:
    ${phone}
    
    City:
    ${city}
    
    Delivery Address:
    ${address}
    
    Amount:
    Rs. ${total}
    
    Kindly confirm my order.
    
    Thank you.`);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center text-center px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-md">
        {/* Animated check */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
            <CheckCircle size={40} className="text-gold" />
          </div>
        </div>

        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
          Payment Successful
        </p>
        <h1 className="font-display text-5xl text-cream italic mb-4">
          Order Confirmed!
        </h1>
        <p className="text-cream/50 text-sm leading-relaxed mb-2">
          Thank you for shopping with TAYB.
        </p>
        <p className="text-gold font-medium text-sm mb-6 tracking-wider">
          Order #{orderId}
        </p>
        <Link
          href={`https://wa.me/923367189237?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 mb-4 inline-flex justify-center w-full bg-[#25D366] text-white font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:opacity-90 transition"
        >
          Confirm on WhatsApp
        </Link>

        <div className="border border-gold/20 p-6 mb-8 text-left space-y-3">
          {[
            { icon: "📧", text: "Order confirmation email sent to your inbox" },
            { icon: "📱", text: "WhatsApp confirmation within 1 hour" },
            { icon: "📦", text: "Dispatched within 1–2 business days" },
            { icon: "🚚", text: "Delivery in 2–4 working days" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg">{item.icon}</span>
              <p className="text-cream/60 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/contact"
            className="border border-gold/30 text-cream/60 font-body text-xs tracking-widest uppercase px-6 py-4 hover:border-gold hover:text-gold transition-colors"
          >
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <div className="pt-[100px]">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gold/40 text-sm tracking-widest">
              Loading...
            </div>
          </div>
        }
      >
        <OrderSuccessContent />
      </Suspense>
    </div>
  );
}
