"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { ShoppingBag, ChevronDown, Star, Truck, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { Product, products, formatPrice } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

interface Review {
  _id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  verifiedPurchase: boolean;
  longevity?: string;
  image?: string;
}

interface Props {
  product: Product;
  reviews: Review[];
}

export default function ProductClient({ product, reviews }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const [activeImage, setActiveImage] = useState(0);

  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "description",
  );

  const [added, setAdded] = useState(false);

  const images = [product.image, product.hoverImage];
  const reviewCount = reviews.length;

  const averageRating =
    reviewCount > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount
        ).toFixed(1)
      : "5.0";
  const sizes = products.filter(
    (p) =>
      p.category === product.category &&
      p.name.replace(/\d+ml/i, "").trim() ===
        product.name.replace(/\d+ml/i, "").trim(),
  );
  useEffect(() => {
    sizes.forEach((item) => {
      const img = new window.Image();
      img.src = item.image;

      const hover = new window.Image();
      hover.src = item.hoverImage;
    });
  }, [sizes]);

  useEffect(() => {
    sizes.forEach((item) => {
      router.prefetch(`/product/${item.slug}`);
    });
  }, [router, sizes]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      ecommerce: null,
    });

    window.dataLayer.push({
      event: "view_item",

      ecommerce: {
        currency: "PKR",

        value: product.price,

        items: [
          {
            item_id: product.sku,
            item_name: product.name,
            item_brand: product.brand,
            item_category: product.category,
            price: product.price,
          },
        ],
      },
    });
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "add_to_cart",

        ecommerce: {
          currency: "PKR",

          value: product.price,

          items: [
            {
              item_id: product.sku,
              item_name: product.name,
              item_brand: product.brand,
              item_category: product.category,
              quantity: 1,
              price: product.price,
            },
          ],
        },
      });
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
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
        "Free delivery on orders above Rs.3,000. Standard delivery within 2–4 working days across Pakistan. Easy returns within 7 days if unopened.",
    },
  ];

  return (
    <div className="pt-[52px] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 pt-8">
        <div className="flex items-center gap-2 text-xs text-cream/30 tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>

          <span>/</span>

          <Link
            href={`/${product.category}`}
            className="capitalize hover:text-gold transition-colors"
          >
            {product.category}
          </Link>

          <span>/</span>

          <span className="text-cream/60">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-square overflow-hidden bg-[#1e1e1e]">
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                priority
                quality={90}
                className="object-cover"
              />

              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] tracking-widest uppercase px-3 py-1">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 w-20 overflow-hidden border transition-colors ${
                    activeImage === index
                      ? "border-gold"
                      : "border-gold/20 hover:border-gold/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </div>

              <span className="text-gold font-medium">{averageRating}</span>

              <span className="text-cream/40 text-sm">
                ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-3xl text-gold">
                {formatPrice(product.price)}
              </span>

              {product.originalPrice && (
                <>
                  <span className="line-through text-lg text-cream/30">
                    {formatPrice(product.originalPrice)}
                  </span>

                  <span className="bg-gold/20 text-gold text-xs px-2 py-1 rounded">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>
            <div className="mb-8 space-y-2 border-y border-gold/10 py-5">
              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Brand</span>

                <span className="text-cream">{product.brand}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-cream/40">SKU</span>

                <span className="text-cream">{product.sku}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Availability</span>

                <span
                  className={
                    product.inStock ? "text-green-400" : "text-red-400"
                  }
                >
                  {product.inStock ? "✔ In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Delivery</span>

                <span className="text-cream">2–4 Working Days</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 mb-8">
              {product.description}
            </p>
            {/* Size */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-cream/30 mb-3">
                Size
              </p>

              <div className="flex gap-3 flex-wrap">
                {sizes.map((sizeProduct) => (
                  <button
                    key={sizeProduct.id}
                    onClick={() => router.push(`/product/${sizeProduct.slug}`)}
                    className={`px-5 py-3 border text-sm tracking-wider transition-all duration-300
          ${
            sizeProduct.id === product.id
              ? "bg-gold text-charcoal border-gold"
              : "border-gold text-gold hover:bg-gold hover:text-charcoal"
          }`}
                  >
                    {sizeProduct.size}
                  </button>
                ))}
              </div>
            </div>
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mb-4 flex w-full items-center justify-center gap-3 bg-gold py-4 font-body text-sm font-medium uppercase tracking-widest text-charcoal transition-colors duration-300 hover:bg-gold-light"
            >
              <ShoppingBag size={16} />

              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>
            {/* Trust Badges */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs tracking-wider text-cream/30">
                <Truck size={14} className="text-gold" />
                Free Delivery on 3K+
              </div>

              <div className="flex items-center gap-2 text-xs tracking-wider text-cream/30">
                <Shield size={14} className="text-gold" />
                100% Authentic
              </div>
            </div>
            {/* Accordions */}
            <div className="space-y-0 border-t border-gold/20">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-gold/10">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === accordion.id ? null : accordion.id,
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="font-body text-sm uppercase tracking-widest text-cream/70">
                      {accordion.title}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`text-gold transition-transform duration-300 ${
                        openAccordion === accordion.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-6 text-sm leading-relaxed text-cream/50">
                      {accordion.id === "notes" ? (
                        <div className="space-y-3">
                          {(["top", "heart", "base"] as const).map((tier) => (
                            <div key={tier} className="flex gap-4">
                              <span className="mt-0.5 w-12 shrink-0 text-xs uppercase tracking-widest text-gold">
                                {tier}
                              </span>

                              <span>{product.notes[tier].join(" • ")}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        accordion.content
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gold/10">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
            Frequently Asked Questions
          </p>

          <h2 className="font-display text-4xl text-cream">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: `How long does ${product.name} last?`,
              a: `${product.name} offers long-lasting performance. Most customers experience 8–12 hours depending on skin type, weather and application.`,
            },
            {
              q: "Is this perfume suitable for daily wear?",
              a: "Yes. It is designed for everyday use as well as special occasions.",
            },
            {
              q: "Is Cash on Delivery available?",
              a: "Yes. We offer Cash on Delivery across Pakistan.",
            },
            {
              q: "How long does delivery take?",
              a: "Orders are usually delivered within 2–4 working days across Pakistan.",
            },
            {
              q: "Is this an original TAYB fragrance?",
              a: "Yes. Every perfume is crafted by TAYB Perfumes using premium quality fragrance oils.",
            },
          ].map((faq, index) => (
            <details key={index} className="border border-gold/20 p-5">
              <summary className="cursor-pointer font-medium text-cream">
                {faq.q}
              </summary>

              <p className="mt-4 text-sm leading-7 text-cream/60">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {reviews.length > 0 && (
  <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gold/10">
    <div className="mb-12">
      <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
        Customer Reviews
      </p>

      <h2 className="font-display text-4xl text-cream mb-3">
        What Customers Say
      </h2>

      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-gold text-gold"
            />
          ))}
        </div>

        <span className="text-gold font-medium">
          {averageRating}
        </span>

        <span className="text-cream/40">
          ({reviewCount} Reviews)
        </span>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="border border-gold/10 bg-[#161616] p-6"
        >
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              {review.image ? (
                <Image
                  src={review.image}
                  alt={review.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
                  {review.name.charAt(0)}
                </div>
              )}

              <div>
                <h3 className="text-cream font-medium">
                  {review.name}
                </h3>

                <p className="text-xs text-cream/40">
                  {review.city}
                </p>
              </div>
            </div>

            {review.verifiedPurchase && (
              <span className="bg-green-600/20 text-green-400 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                Verified Purchase
              </span>
            )}
          </div>

          <div className="flex gap-1 mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-gold text-gold"
              />
            ))}
          </div>

          {review.longevity && (
            <p className="text-gold text-xs uppercase tracking-wider mb-3">
              Longevity: {review.longevity}
            </p>
          )}

          <p className="text-cream/60 leading-7">
            {review.review}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gold/10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs tracking-[0.35em] uppercase mb-2">
                You May Like
              </p>

              <h2 className="font-display text-4xl text-cream">
                Related Products
              </h2>
            </div>

            <Link
              href={`/${product.category}`}
              className="hidden md:block text-xs uppercase tracking-[0.3em] text-cream/40 hover:text-gold transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
