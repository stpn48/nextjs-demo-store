import React from "react";
import { Input } from "./Input";

export function Searchbar() {
  return (
    <div className="flex h-[38px] items-stretch">
      <button className="main-border-color h-full flex-grow rounded-bl-md rounded-tl-md border-b border-l border-t p-2">
        <SearchLogo />
      </button>
      <Input className="rounded-bl-none rounded-tl-none border-l-0" placeholder="Search" />
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
