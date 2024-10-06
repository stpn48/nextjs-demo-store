"use client";

import { useCartVisibility } from "@/store/cartVisibility";
import { motion, AnimatePresence } from "framer-motion";

const slideInVariants = {
  hidden: { x: "100%" }, // start off-screen (to the right)
  visible: { x: "0%", transition: { type: "spring", stiffness: 300, damping: 30 } }, // slide in
  exit: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }, // slide out
};

export default function Cart() {
  const { cartVisible, setCartVisible } = useCartVisibility();

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
            className="fixed right-0 top-0 z-20 h-screen w-[400px] bg-black p-4 text-white"
            initial="hidden" // hidden state (off-screen)
            animate="visible" // visible state (onscreen)
            exit="exit" // exit state (off-screen again)
            variants={slideInVariants} // pass in the animation variants
            key="cart" // unique key to track this element
          >
            <h1 className="text-xl font-bold">Your Cart</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
