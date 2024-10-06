import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/types";
import React from "react";

type Props = {};

export async function ItemCarousel({}: Props) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=10&limit=10");
  const selectedProducts: Product[] = await res.json();

  return (
    <div className="flex w-screen flex-col gap-4 overflow-x-scroll p-4">
      <h1 className="text-2xl font-bold text-white">Related Products</h1>
      <div className="flex w-max gap-4">
        {selectedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
