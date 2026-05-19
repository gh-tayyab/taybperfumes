import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const bundleProducts = products.filter((p) => p.category === "bundle");

export default function BundlesPage() {
  return (
    <div className="pt-[100px]">
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1800&q=80"
          alt="Bundles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Save More
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Bundles
          </h1>
          <p className="text-cream/50 text-sm tracking-wider mt-4 max-w-sm">
            Get both signature scents and save 10% on every bundle.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
