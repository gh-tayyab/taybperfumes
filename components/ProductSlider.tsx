"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ProductCard from "@/components/ProductCard"; // apna path

export default function ProductSlider({
  products,
}: {
  products: any[];
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={7500}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={24}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}