"use client";

import { useCartVisibility } from "@/store/cartVisibility";
import { useCart } from "@/store/useCart";
import { Product } from "@/types/types";
import { useCallback } from "react";

type Props = {
  productDetails: Product;
};

export function AddCartButton({ productDetails }: Props) {
  const { setCartVisible } = useCartVisibility();

  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    setCartVisible(true);
    addToCart(productDetails);
  }, [productDetails]);

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-10 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add To Cart
      </button>
    </>
  );
}
