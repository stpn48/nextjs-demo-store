"useClient";

import { Product } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QuantityButtons } from "./QuantityButtons";
import { useCart } from "@/store/useCart";

type Props = {
  product: Product;
};

export function CartProductCard({ product }: Props) {
  const { getProductQuantity, setCart } = useCart();

  const [quantity, setQuantity] = useState(getProductQuantity(product.id));

  useEffect(() => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: quantity };
        }

        return item;
      });
    });
  }, [quantity]);

  return (
    <div className="main-border-color flex justify-between border-b py-8">
      <div className="flex gap-4">
        <Image
          src={product.images[0]}
          className="main-border-color rounded-md border"
          width={100}
          height={100}
          alt="productImg"
        />
        <div className="flex flex-col">
          <h1>{product.title}</h1>
          <h1 className="text-secondary">{product.category}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1>${(product.price * quantity).toFixed(2)} USD</h1>
        <QuantityButtons productId={product.id} quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}
