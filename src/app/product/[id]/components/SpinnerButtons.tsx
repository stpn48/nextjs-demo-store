"use client";

import React, { Dispatch, SetStateAction, useCallback } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  setCurrDisplayingImageIndex: Dispatch<SetStateAction<number | null>>;
  imageCount: number;
};

export function SpinnerButtons({ className, setCurrDisplayingImageIndex, imageCount }: Props) {
  const handleRightClick = useCallback(() => {
    setCurrDisplayingImageIndex((prev) => {
      if (prev === null) return 0;
      if (prev + 1 > imageCount - 1) return 0;
      return prev + 1;
    });
  }, [setCurrDisplayingImageIndex]);

  const handleLeftClick = useCallback(() => {
    setCurrDisplayingImageIndex((prev) => {
      if (prev === null) return 2;
      if (prev === 0) return imageCount - 1;
      return prev - 1;
    });
  }, [setCurrDisplayingImageIndex]);

  return (
    <div
      className={twMerge(
        "text-secondary secondary-bg flex gap-4 rounded-full border border-black px-3 py-2 opacity-80",
        className,
      )}
    >
      <button onClick={handleLeftClick}>
        <ArrLeft />
      </button>
      <button onClick={handleRightClick}>
        <ArrRight />
      </button>
    </div>
  );
}

function ArrLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 transition-all hover:scale-105 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}
function ArrRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 transition-all hover:scale-105 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
