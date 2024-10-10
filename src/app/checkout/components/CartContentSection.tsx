"use client";

import { useCart } from "@/store/useCart";
import React from "react";
import { ProductOverview } from "./ProductOverview";

export default function CartContentSection() {
  const { cart, getTotalPrice, shippingPrice } = useCart();

  return (
    <section className="carousel-container mt-10 flex w-full flex-col justify-between border-t p-8 xl:mt-0 xl:w-[40%] xl:border-l dark:border-[#212121]">
      <div className="overflow-y-auto">
        {cart.map((product) => (
          <ProductOverview key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 flex w-full flex-col justify-between gap-4">
        <div className="text-secondary flex w-full justify-between">
          <h1>Subtotal</h1>
          <h1>${getTotalPrice() - shippingPrice} USD</h1>
        </div>
        <div className="text-secondary flex w-full justify-between">
          <h1>Shipping</h1>
          <h1>{shippingPrice ? `$${shippingPrice} USD` : "Next step"}</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1>Total</h1>
          <h1>${getTotalPrice()} USD</h1>
        </div>
      </div>
    </section>
  );
}
