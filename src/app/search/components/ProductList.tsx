"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProductCard } from "@/components/ProductCard";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";
import React from "react";
import { ProductListSkeleton } from "./ProductListSkeleton";

export function ProductList() {
  const {
    data: products,
    isLoading,
    isError,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
  } = useInfiniteProducts();

  if (isLoading || isRefetching) {
    return <ProductListSkeleton />;
  }

  if (isError || products === undefined) {
    return <h1 className="text-white">Error fetching products...</h1>;
  }

  return (
    <>
      <div className="mt-10 flex flex-col justify-center gap-4 pb-10 md:mt-0 md:flex-row md:flex-wrap">
        {products.pages.map((page) =>
          page.map((product) => <ProductCard key={product.id} product={product} />),
        )}
      </div>

      {!isFetchingNextPage && (
        <div className="flex w-full justify-center">
          <button
            className="w-fit rounded-lg border bg-white px-4 py-2 text-black dark:border-[#232323] dark:bg-black dark:text-white"
            onClick={() => fetchNextPage()}
          >
            Load More
          </button>
        </div>
      )}

      {isFetchingNextPage && (
        <div className="flex w-full justify-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
