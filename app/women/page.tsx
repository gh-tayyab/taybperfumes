import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const womenProducts = products.filter((p) => p.category === "women");

export default function WomenPage() {
  return (
    <div className="pt-[100px]">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1800&q=80"
          alt="Women's Fragrances"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            For Her
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Women
          </h1>
          <p className="text-cream/50 text-sm tracking-wider mt-4 max-w-sm">
            Delicate. Timeless. Deeply feminine. Fragrances that bloom on your
            skin and stay.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cream/30 text-sm tracking-wider mb-10">
          {womenProducts.length} products
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
