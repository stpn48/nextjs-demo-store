"use client";

import { ProductListSkeleton } from "./ProductListSkeleton";
import React from "react";
import { ProductCard } from "@/components/ProductCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";

export function ProductList() {
  const {
    data: products,
    isLoading,
    isError,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteProducts();

  if (isLoading || isRefetching) {
    return <ProductListSkeleton />;
  }

  if (isError || products === undefined) {
    return <h1 className="text-white">Error fetching products...</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 pb-10">
        {products.pages.map((page) =>
          page.map((product) => <ProductCard key={product.id} product={product} />),
        )}
      </div>
      {isFetchingNextPage && (
        <div className="flex w-full justify-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
