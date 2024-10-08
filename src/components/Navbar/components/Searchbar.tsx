"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Input } from "../../Input";
import { useSearch } from "@/app/search/store/useSearch";
import { useRouter, useSearchParams } from "next/navigation";
import path from "path";

export function Searchbar() {
  const { query, setQuery } = useSearch();

  const [localQuery, setLocalQuery] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search);

    if (localQuery === query) return;

    if (!localQuery) {
      params.delete("q");
    } else {
      params.set("q", localQuery);
    }

    const newQuery = params.toString() ? `/search?${params.toString()}` : "/search";

    router.push(newQuery);

    setQuery(localQuery);
  }, [localQuery, query, router, setQuery]);

  useEffect(() => {
    const searchWithEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleSearch();
    };

    window.addEventListener("keydown", (e) => searchWithEnter(e));

    return () => window.removeEventListener("keydown", (e) => searchWithEnter(e));
  }, [handleSearch]);

  useEffect(() => {
    const initialQuery = searchParams.get("q");

    if (initialQuery) {
      setQuery(initialQuery);
      setLocalQuery(initialQuery);
    }
  }, [searchParams, setQuery]);

  return (
    <div className="flex h-[38px] items-stretch">
      <button
        onClick={handleSearch}
        className="main-border-color h-full flex-grow rounded-bl-md rounded-tl-md border-b border-l border-t p-2"
      >
        <SearchLogo />
      </button>
      <Input
        className="rounded-bl-none rounded-tl-none border-l-0"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}

function SearchLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-secondary size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
