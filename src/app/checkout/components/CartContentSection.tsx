"use client";

import { useCart } from "@/store/useCart";
import React from "react";
import { ProductOverview } from "./ProductOverview";

export default function CartContentSection() {
  const { cart, getTotalPrice } = useCart();

  return (
    <section className="main-border-color carousel-container flex w-[40%] flex-col justify-between border-l p-8">
      <div className="overflow-y-auto">
        {cart.map((product) => (
          <ProductOverview key={product.id} product={product} />
        ))}
      </div>
      <div className="flex w-full justify-between">
        <h1>Subtotal</h1>
        <h1>${getTotalPrice()} USD</h1>
      </div>
    </section>
  );
}
