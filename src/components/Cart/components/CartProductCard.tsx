"useClient";

import { Product } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QuantityButtons } from "./QuantityButtons";
import { useCart } from "@/store/useCart";
import Link from "next/link";
import { useCartVisibility } from "@/store/cartVisibility";

type Props = {
  product: Product;
};

export function CartProductCard({ product }: Props) {
  const { getProductQuantity, setCart } = useCart();
  const { setCartVisible } = useCartVisibility();

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
  }, [quantity, product.id, setCart]);

  return (
    <div className="flex justify-between border-b py-8 dark:border-[#212121]">
      <div className="flex gap-4">
        <Link
          onClick={() => setCartVisible(false)}
          className="cursor-pointer"
          href={`/product/${product.id}?image=0`}
        >
          <Image
            src={product.images[0]}
            className="rounded-md border dark:border-[#212121]"
            width={100}
            height={100}
            alt="productImg"
          />
        </Link>
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
