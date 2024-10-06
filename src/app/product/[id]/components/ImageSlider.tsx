"use client";

import { useCurrDisplayingImageIndex } from "@/hooks/useCurrDisplayingImageIndex";
import Image from "next/image";
import { SpinnerButtons } from "./SpinnerButtons";
import { ImagesPagination } from "./ImagesPagination";
import { useEffect } from "react";

type Props = {
  images: string[];
};

export function ImageSlider({ images }: Props) {
  const { currDisplayingImageIndex, setCurrDisplayingImageIndex } = useCurrDisplayingImageIndex();

  useEffect(() => {
    console.log(currDisplayingImageIndex);
  }, [currDisplayingImageIndex]);

  return (
    <div className="relative flex w-[540px] flex-col gap-10">
      {currDisplayingImageIndex === null && (
        <div className="h-[540px] w-[540px] animate-pulse rounded-md bg-stone-700"></div>
      )}

      {currDisplayingImageIndex !== null && (
        <div className="h-[540px] w-[540px]">
          <Image
            className="rounded-md object-cover"
            width={540}
            height={540}
            src={images ? images[currDisplayingImageIndex] : ""} // Display current image
            alt={`Image ${currDisplayingImageIndex + 1}`} // Alternative text
          />
        </div>
      )}

      <SpinnerButtons
        imageCount={images.length}
        className="absolute bottom-[30%] left-[50%] -translate-x-1/2 transform"
        setCurrDisplayingImageIndex={setCurrDisplayingImageIndex}
      />

      {currDisplayingImageIndex === null && (
        <div className="flex w-full justify-center gap-4">
          <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700"></div>
          <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700"></div>
          <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700"></div>
        </div>
      )}

      {currDisplayingImageIndex !== null && (
        <ImagesPagination
          images={images}
          currDisplayingImageIndex={currDisplayingImageIndex}
          setCurrDisplayingImageIndex={setCurrDisplayingImageIndex}
        />
      )}
    </div>
  );
}
