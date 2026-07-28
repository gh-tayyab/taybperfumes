"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Product } from "@/lib/data";

const ProductSlider = dynamic(() => import("@/components/ProductSlider"), {
  ssr: false,
  loading: () => <div className="h-[500px]" />,
});

interface Props {
  products: Product[];
}

export default function LazyProductSlider({ products }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // thora pehle preload ho jaye
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref}>
      {visible ? (
        <ProductSlider products={products} />
      ) : (
        <div className="h-[500px]" />
      )}
    </div>
  );
}