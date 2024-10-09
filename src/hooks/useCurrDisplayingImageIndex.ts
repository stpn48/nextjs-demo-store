"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useCurrDisplayingImageIndex() {
  const searchParams = useSearchParams();

  const [currDisplayingImageIndex, setCurrDisplayingImageIndex] = useState<number>(0);

  // Get the image index from the URL query params
  useEffect(() => {
    const imageIndex = searchParams.get("image");

    if (imageIndex) {
      setCurrDisplayingImageIndex(Number(imageIndex));
    }
  });

  // Update the URL query params when the image index changes
  useEffect(() => {
    // Update the URL using history.replaceState for shallow-like behavior
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("image", currDisplayingImageIndex.toString());
    window.history.replaceState({}, "", newUrl.toString());
  }, [currDisplayingImageIndex]);

  return { currDisplayingImageIndex, setCurrDisplayingImageIndex };
}
