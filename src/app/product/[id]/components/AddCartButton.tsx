"use client";

import { useCartVisibility } from "@/store/cartVisibility";
import { useCart } from "@/store/useCart";
import { Product } from "@/types/types";
import { useCallback, useEffect, useState } from "react";

type Props = {
  productDetails: Product;
};

export function AddCartButton({ productDetails }: Props) {
  const { setCartVisible } = useCartVisibility();

  const { cart, setCart, addToCart, getProductQuantity } = useCart();

  const [itemQuantity, setItemQuantity] = useState<number | null>(null);

  const handleAddToCart = useCallback(() => {
    setCartVisible(true);
    addToCart(productDetails);
    setItemQuantity(1);
  }, [productDetails]);

  const handleIncreaseQuantity = useCallback(() => {
    setItemQuantity((prev) => (prev !== null ? prev + 1 : 1));

    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productDetails.id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  }, [setCart, productDetails.id]);

  const handleDecreaseQuantity = useCallback(() => {
    setItemQuantity((prev) => (prev ? prev - 1 : 0));

    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productDetails.id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  }, [setCart, productDetails.id]);

  useEffect(() => {
    const itemQuantity = getProductQuantity(productDetails.id);
    setItemQuantity(itemQuantity);
  }, [productDetails.id]);

  if (itemQuantity === null) {
    return <div>loading..</div>;
  }

  return (
    <>
      {itemQuantity === 0 && (
        <button
          onClick={handleAddToCart}
          className="mt-10 rounded-full bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
        >
          Add To Cart
        </button>
      )}

      {itemQuantity > 0 && (
        <div className="flex gap-2 text-white">
          <button onClick={handleDecreaseQuantity}>Decrease</button>
          <p>{itemQuantity}</p>
          <button onClick={handleIncreaseQuantity}>Increase</button>
        </div>
      )}
    </>
  );
}
