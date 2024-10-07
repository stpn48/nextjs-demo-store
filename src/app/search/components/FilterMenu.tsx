"use client";

import React, { useCallback, useEffect } from "react";
import { useSearch } from "../store/useSearch";
import { FilterType } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

const filterChoices: FilterType[] = [
  "A-Z",
  "Z-A",
  "Price: Highest to Lowest",
  "Price: Lowest to Highest",
];

export function FilterMenu() {
  const { filter, setFilter } = useSearch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChoiceClick = useCallback(
    (choice: FilterType) => {
      if (filter === choice) {
        setFilter("");

        return;
      }
      setFilter(choice);
    },
    [filter, setFilter],
  );

  // update url when filter changes
  useEffect(() => {
    if (!filter) {
      router.push("/search");
      return;
    }

    router.push(`/search?filter=${filter}`);
  }, [filter]);

  // initially set filter from url
  useEffect(() => {
    setFilter(searchParams.get("filter") as FilterType);
  }, []);

  return (
    <div className="flex w-fit flex-col gap-2 text-sm text-white">
      <h1 className="text-xl font-bold">Filters</h1>
      {filterChoices.map((choice) => (
        <p
          className={`${filter === choice ? "text-white" : "text-secondary"} w-full cursor-pointer whitespace-nowrap hover:text-white`}
          onClick={() => handleChoiceClick(choice)}
        >
          {choice}
        </p>
      ))}
    </div>
  );
}
