"use client";

import { useSearch } from "@/app/search/store/useSearch";
import { Product } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { throttle } from "lodash";
import { useEffect } from "react";
import { getFilterParams } from "@/utils/getFilterParams";

const PRODUCTS_PER_PAGE = 20;

export function useInfiniteProducts() {
  const { filter, query } = useSearch();

  const fetchProducts = async ({ pageParam = 0 }) => {
    const { sortBy, order } = getFilterParams(filter);
    const limit = PRODUCTS_PER_PAGE;
    const skip = pageParam * PRODUCTS_PER_PAGE;
    const url = new URL("https://dummyjson.com/products/search");

    const params: Record<string, string> = {
      limit: limit.toString(),
      skip: skip.toString(),
    };

    if (query) {
      params.q = query;
    }

    if (sortBy) {
      params.sortBy = sortBy;
    }
    if (order) {
      params.order = order;
    }

    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url);
    const data = await res.json();
    return data.products as Product[];
  };

  // Destructure the necessary parts from useInfiniteQuery
  const queryResult = useInfiniteQuery({
    queryKey: ["products", { filter, query }],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PRODUCTS_PER_PAGE) {
        return undefined;
      }
      return allPages.length;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });

  const { isFetching, fetchNextPage, hasNextPage } = queryResult;

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        if (hasNextPage && !isFetching) {
          fetchNextPage();
        }
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetching]);

  // Restructure the return object like this:
  return queryResult;
}
