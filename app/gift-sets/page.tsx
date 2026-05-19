import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const giftProducts = products.filter((p) => p.category === "gift-set");

export default function GiftSetsPage() {
  return (
    <div className="pt-[100px]">
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549488344-cbb6c34f3b97?w=1800&q=80"
          alt="Gift Sets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            The Perfect Gift
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Gift Sets
          </h1>
          <p className="text-cream/50 text-sm tracking-wider mt-4 max-w-sm">
            Beautifully curated, elegantly packaged. Give the gift of a
            signature scent.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        {giftProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl italic text-cream/40">
              New gift sets coming soon
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
