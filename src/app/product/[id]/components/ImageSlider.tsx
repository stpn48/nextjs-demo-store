"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export function ImageSlider({ images }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currDisplayingImageIndex, setCurrDisplayingImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const imageIndex = searchParams.get("image");

    if (imageIndex) {
      setCurrDisplayingImageIndex(Number(imageIndex));
    }
  }, [searchParams]);

  useEffect(() => {
    router.push(`?image=${currDisplayingImageIndex}`);
  }, [currDisplayingImageIndex, router]);

  return (
    <div className="h-[540px] w-[540px]">
      {currDisplayingImageIndex === null && (
        <div className="h-[540px] w-[540px] animate-pulse rounded-md bg-stone-700"></div>
      )}
      {currDisplayingImageIndex !== null && (
        <Image
          width={540}
          height={540}
          src={images[currDisplayingImageIndex]} // Display current image
          alt={`Image ${currDisplayingImageIndex + 1}`} // Alternative text
        />
      )}
    </div>
  );
}
