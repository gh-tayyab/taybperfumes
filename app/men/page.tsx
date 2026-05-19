import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const menProducts = products.filter((p) => p.category === "men");

export default function MenPage() {
  return (
    <div className="pt-[100px]">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=1800&q=80"
          alt="Men's Fragrances"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            For Him
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Men
          </h1>
          <p className="text-cream/50 text-sm tracking-wider mt-4 max-w-sm">
            Bold. Commanding. Unmistakable. Fragrances built for men who leave
            an impression.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cream/30 text-sm tracking-wider mb-10">
          {menProducts.length} products
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
