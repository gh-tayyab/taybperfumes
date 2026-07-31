"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

export default function ReviewsCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
      });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-gold text-black rounded-full p-3"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-gold text-black rounded-full p-3"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}