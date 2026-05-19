"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="product-card group relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-gold text-charcoal text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-[#1e1e1e] relative aspect-[3/4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-main-img object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <Image
          src={product.hoverImage}
          alt={product.name}
          fill
          className="product-hover-img object-cover absolute inset-0"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Quick Add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-charcoal/95 backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 text-gold text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3 px-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-lg text-cream group-hover:text-gold-light transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-cream/40 text-xs mt-1 tracking-wider">{product.scent}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gold font-medium text-sm">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-cream/30 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
