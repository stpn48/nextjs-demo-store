import { CartItem } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  product: CartItem;
};

export function ProductOverview({ product }: Props) {
  return (
    <div className="flex flex-col border-b py-4 md:flex-row dark:border-[#212121]">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={100}
        height={100}
        layout="fixed" // Changed from 'fixed' to 'intrinsic'
        objectFit="cover" // Retains aspect ratio and fills the container
      />
      <div className="flex w-full items-center justify-between px-4">
        <div>
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-secondary">{product.category}</p>
        </div>
        <h1 className="flex h-full items-center">${product.price}</h1>
      </div>
    </div>
  );
}
