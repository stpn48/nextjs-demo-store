"use client";

import { useCartVisibility } from "@/store/cartVisibility";
import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export function useCheckoutButton() {
  const { cart } = useCart();
  const { cartVisible } = useCartVisibility();

  const [checkoutButtonDisabled, setCheckoutButtonDisabled] = useState(true);

  useEffect(() => {
    if (cart.length === 0) {
      setCheckoutButtonDisabled(true);
    } else {
      setCheckoutButtonDisabled(false);
    }
  }, [cart, setCheckoutButtonDisabled]);

  // disable body scroll when cart is open
  useEffect(() => {
    if (cartVisible) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable body scroll
      document.body.style.overflow = "auto";
    }

    // Clean up function to reset body scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartVisible]);

  return { checkoutButtonDisabled };
}
