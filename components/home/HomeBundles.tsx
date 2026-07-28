import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/data";

interface Props {
    bundles: Product[];
}

export default function HomeBundles({ bundles }: Props) {
    return (
    <section className="py-4 max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Save More
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Bundles
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    )}