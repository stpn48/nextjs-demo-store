"use client";

import { Product } from "@/types/types";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useRef } from "react";

type Props = {
  products: Product[];
};

export function Carousel({ products }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const scrollSpeed = 1.5; // Adjust this value to change the scroll speed

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = 0; // Reset scroll to the beginning
      } else {
        carousel.scrollLeft += scrollSpeed; // Auto-scroll left
      }
    };

    const scrollInterval = setInterval(scroll, 16); // 60fps (16ms/frame)

    // Cleanup interval on unmount
    return () => {
      clearInterval(scrollInterval);
    };
  }, [carouselRef]);

  return (
    <div className="w-screen overflow-x-scroll pb-8" ref={carouselRef}>
      <div className="flex w-max gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
