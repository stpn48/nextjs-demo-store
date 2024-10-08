import { CartItem } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  product: CartItem;
};

export function ProductOverview({ product }: Props) {
  return (
    <div className="main-border-color flex border-b py-4">
      <Image
        className="main-border-color rounded-sm border"
        src={product.images[0]}
        alt={product.title}
        width={100}
        height={100}
      />
      <div className="flex w-full justify-between px-4">
        <div>
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-secondary">{product.category}</p>
        </div>
        <h1 className="flex h-full items-center">${product.price}</h1>
      </div>
    </div>
  );
}
