import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useCurrDisplayingImageIndex() {
  const searchParams = useSearchParams();

  const [currDisplayingImageIndex, setCurrDisplayingImageIndex] = useState<number | null>(null);

  // Get the image index from the URL query params
  useEffect(() => {
    const imageIndex = searchParams.get("image");

    if (imageIndex) {
      setCurrDisplayingImageIndex(Number(imageIndex));
    }
  }, [searchParams]);

  // Update the URL query params when the image index changes
  useEffect(() => {
    if (currDisplayingImageIndex !== null) {
      // Update the URL using history.replaceState for shallow-like behavior
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("image", currDisplayingImageIndex.toString());
      window.history.replaceState({}, "", newUrl.toString());
    }
  }, [currDisplayingImageIndex]);

  return { currDisplayingImageIndex, setCurrDisplayingImageIndex };
}
