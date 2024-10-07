"use client";

import React from "react";
import { NavbarBtn } from "./NavbarBtn";
import { useCartVisibility } from "@/store/cartVisibility";
import { useCart } from "@/store/useCart";

type Props = {};

export function CartButton({}: Props) {
  const { setCartVisible } = useCartVisibility();
  const { cart } = useCart();

  return (
    <NavbarBtn className="absolute right-2 top-2" onClick={() => setCartVisible(true)}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-secondary size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <div className="absolute -bottom-3 -right-3 rounded-sm bg-blue-600 px-1 text-[10px] font-bold text-white">
          <h1>{cart.length}</h1>
        </div>
      </div>
    </NavbarBtn>
  );
}
