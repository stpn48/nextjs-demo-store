"use client";

import { useCart } from "@/store/useCart";
import React, { useCallback } from "react";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  productId: number;
};

export function QuantityButtons({ quantity, setQuantity, productId }: Props) {
  const { setCart, removeFromCart } = useCart();

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prev) => (prev !== null ? prev + 1 : 1));
  }, [setCart, quantity, productId, setQuantity]);

  const handleDecreaseQuantity = useCallback(() => {
    if (quantity - 1 === 0) {
      removeFromCart(productId);
      return;
    }

    setQuantity((prev) => (prev ? prev - 1 : 0));
  }, [setCart, quantity, productId, removeFromCart, setQuantity]);

  return (
    <div className="main-border-color flex items-center gap-3 rounded-full border bg-black bg-opacity-45 px-2 py-1 text-white">
      <button onClick={handleDecreaseQuantity}>
        <MinusIcon />
      </button>
      <p className="text-sm">{quantity}</p>
      <button onClick={handleIncreaseQuantity}>
        <PlusIcon />
      </button>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-secondary size-5 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-secondary size-5 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}
