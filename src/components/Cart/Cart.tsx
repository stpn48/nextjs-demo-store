"use client";

import { useCartVisibility } from "@/store/cartVisibility";
import { useCart } from "@/store/useCart";
import { motion, AnimatePresence } from "framer-motion";
import { CartProductCard } from "./components/CartProductCard";
import { useCallback, useEffect, useState } from "react";
import { useCheckout } from "@/app/checkout/information/store/useCheckout";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCheckoutButton } from "./useCheckoutButton";

const slideInVariants = {
  hidden: { x: "100%" }, // start off-screen (to the right)
  visible: { x: "0%", transition: { type: "spring", stiffness: 300, damping: 30 } }, // slide in
  exit: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }, // slide out
};

export default function Cart() {
  const { cartVisible, setCartVisible } = useCartVisibility();
  const { cart, getTotalPrice } = useCart();
  const { setUserDetails } = useCheckout();

  const router = useRouter();

  const { checkoutButtonDisabled } = useCheckoutButton();

  const handleCheckoutButtonClick = useCallback(() => {
    setCartVisible(false);
    router.prefetch("/checkout/information");
    router.push("/checkout/information");
  }, [setCartVisible, setUserDetails]);

  return (
    <>
      {/* Overlay */}
      {cartVisible && (
        <div
          onClick={() => setCartVisible(false)}
          className="fixed right-0 top-0 z-10 h-screen w-screen bg-stone-900 opacity-50"
        />
      )}

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartVisible && (
          <motion.div
            className="fixed right-0 top-0 z-20 flex h-screen w-[400px] flex-col justify-between bg-black p-4 font-geistSans text-white"
            initial="hidden" // hidden state (off-screen)
            animate="visible" // visible state (onscreen)
            exit="exit" // exit state (off-screen again)
            variants={slideInVariants} // pass in the animation variants
            key="cart" // unique key to track this element
          >
            <div className="carousel-container flex flex-col overflow-y-auto">
              <h1 className="text-xl font-bold">Your Cart</h1>

              {cart.length === 0 && (
                <p className="text-secondary mt-10 flex w-full justify-center text-sm">
                  No items in cart...
                </p>
              )}
              {cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-t-md py-4">
              <div className="main-border-color flex justify-between border-b py-1">
                <h1 className="text-secondary">Total</h1>
                <h1>${getTotalPrice()} USD</h1>
              </div>
              <div className="main-border-color flex justify-between border-b py-1">
                <h1 className="text-secondary">Taxes</h1>
                <h1>$0.00 USD</h1>
              </div>
              <div className="main-border-color text-secondary flex justify-between border-b py-1">
                <h1>Shipping</h1>
                <h1 className="text-sm">Calculated at checkout</h1>
              </div>
              <button
                disabled={checkoutButtonDisabled}
                onClick={handleCheckoutButtonClick}
                className="w-full rounded-full bg-blue-600 px-4 py-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
