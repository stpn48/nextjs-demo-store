import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  images: string[];
  currDisplayingImageIndex: number | null;
  setCurrDisplayingImageIndex: Dispatch<SetStateAction<number>>;
};

export function ImagesPagination({
  images,
  currDisplayingImageIndex,
  setCurrDisplayingImageIndex,
}: Props) {
  if (!images) {
    return null;
  }

  return (
    <div className="flex h-[100px] w-full justify-center gap-4">
      {images.map((image, index) => (
        <div key={index} className="h-[100px] w-[100px] overflow-hidden">
          <Image
            onClick={() => setCurrDisplayingImageIndex(index)}
            alt="productImg"
            width={100}
            layout="fixed"
            objectFit="cover"
            className={`cursor-pointer rounded-md border hover:border-blue-600 ${currDisplayingImageIndex === index ? "border-blue-600" : "border-transparent"}`}
            height={100}
            src={image}
          />
        </div>
      ))}
    </div>
  );
}
