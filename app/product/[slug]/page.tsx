"use client";

import { products, formatPrice } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, ChevronDown, Star, Truck, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const images = [product.image, product.hoverImage];

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: "description",
      title: "Description",
      content: product.longDescription,
    },
    {
      id: "notes",
      title: "Fragrance Notes",
      content: null,
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free delivery on orders above Rs.3,000. Standard delivery 2–4 working days across Pakistan. Easy returns within 7 days if unopened.",
    },
  ];

  return (
    <div className="pt-[52px] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-cream/30 tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:text-gold transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-cream/60">{product.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-square overflow-hidden bg-[#1e1e1e]">
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] font-medium tracking-widest uppercase px-3 py-1">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-20 overflow-hidden border transition-colors ${
                    activeImage === i
                      ? "border-gold"
                      : "border-gold/20 hover:border-gold/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`View ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">{product.name}</h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-cream/30 text-xs tracking-wider">(127 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-3xl text-gold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-cream/30 text-lg line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-gold/20 text-gold text-xs tracking-wider px-2 py-1">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-cream/50 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-cream/30 mb-3">Size</p>
              <div className="inline-flex border border-gold items-center px-4 py-2 text-sm text-gold tracking-wider">
                {product.size}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3 bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-sm py-4 hover:bg-gold-light transition-colors duration-300 mb-4"
            >
              <ShoppingBag size={16} />
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-cream/30 text-xs tracking-wider">
                <Truck size={14} className="text-gold" />
                Free delivery on 3K+
              </div>
              <div className="flex items-center gap-2 text-cream/30 text-xs tracking-wider">
                <Shield size={14} className="text-gold" />
                100% Authentic
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gold/20 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-gold/10">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-body text-sm tracking-widest uppercase text-cream/70">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gold transition-transform duration-300 ${
                        openAccordion === acc.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openAccordion === acc.id && (
                    <div className="pb-6 text-cream/50 text-sm leading-relaxed">
                      {acc.id === "notes" ? (
                        <div className="space-y-3">
                          {(["top", "heart", "base"] as const).map((tier) => (
                            <div key={tier} className="flex gap-4">
                              <span className="text-gold text-xs tracking-widest uppercase w-12 shrink-0 mt-0.5 capitalize">
                                {tier}
                              </span>
                              <span>{product.notes[tier].join(" · ")}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        acc.content
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gold/10">
          <h2 className="font-display text-3xl text-cream mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
