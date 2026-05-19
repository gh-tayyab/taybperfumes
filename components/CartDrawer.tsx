"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/60 z-[70] transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-[80] w-full max-w-md bg-[#111] border-l border-gold/20 flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-gold" />
            <span className="font-body tracking-widest uppercase text-sm font-medium">
              Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="text-cream/50 hover:text-gold transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={48} className="text-gold/30" />
              <p className="font-display text-xl text-cream/50 italic">Your cart is empty</p>
              <p className="text-cream/30 text-sm tracking-wide">Discover your signature scent</p>
              <button
                onClick={closeCart}
                className="mt-4 border border-gold text-gold text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 pb-6 border-b border-gold/10">
                  <div className="w-20 h-20 shrink-0 overflow-hidden bg-charcoal-light">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <p className="font-display text-base text-cream leading-tight">{item.product.name}</p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-cream/30 hover:text-gold transition-colors shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-cream/40 text-xs mt-1 tracking-wider">{item.product.size}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-gold/20">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-cream/60 hover:text-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-cream/60 hover:text-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-gold text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gold/20 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-cream/50 text-sm tracking-wider uppercase">Total</span>
              <span className="font-display text-xl text-gold">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-cream/30 text-xs text-center">Shipping calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-gold text-charcoal text-center font-body font-medium tracking-widest uppercase text-sm py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full border border-gold/30 text-cream/50 text-center font-body text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
