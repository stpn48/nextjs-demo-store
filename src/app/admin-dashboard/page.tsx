import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/types";
import React from "react";

export default async function AdminDashboardPage() {
  const res = await fetch("https://dummyjson.com/products?limit=0");

  const { products: featuredProducts }: { products: Product[] } = await res.json();

  return (
    <div className="min-h-screen w-screen">
      <div className="flex w-full flex-col items-center gap-2">
        {featuredProducts.map((product: Product) => (
          <div className="flex h-fit items-center gap-4">
            <ProductCard product={product} key={product.id} />
            <div className="flex flex-col gap-4">
              <h1>Stock:</h1>
              <div className="flex h-fit items-center gap-4">
                <button className="text-secondary rounded-lg border bg-black px-4 py-2 dark:border-[#232323]">
                  -
                </button>
                <h1>{product.stock}</h1>
                <button className="text-secondary rounded-lg border bg-black px-4 py-2 dark:border-[#232323]">
                  +
                </button>
              </div>
              <button className="h-fit rounded-lg border bg-black px-4 py-2 text-red-600 dark:border-[#232323]">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
