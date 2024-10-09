"use client";

import { CartItem, Product } from "@/types/types";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  getTotalPrice: () => number;
  setShippingPrice: React.Dispatch<React.SetStateAction<number>>;
  cartFetched: boolean;
  shippingPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]); // Start with an empty cart
  const [shippingPrice, setShippingPrice] = useState<number>(0);

  const [cartFetched, setCartFetched] = useState(false);

  // Fetch cart from localStorage on client side
  useEffect(() => {
    const cartContent = localStorage.getItem("cart");

    if (cartContent && cartContent !== "undefined") {
      setCart(JSON.parse(cartContent));
    }
    setCartFetched(true);
  }, [setCartFetched, setCart]); // Run only once when the component mounts

  const addToCart = React.useCallback((newProduct: Product) => {
    setCart((prev) => {
      const productExist = prev.find((item) => item.id === newProduct.id);

      if (!productExist) {
        return [...prev, { ...newProduct, quantity: 1 }];
      }

      return prev.map((item) =>
        item.id === newProduct.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }, []);

  const removeFromCart = React.useCallback((productId: number) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== productId);
    });
  }, []);

  const getProductQuantity = React.useCallback(
    (productId: number) => {
      const cartItem = cart.find((item) => item.id === productId);
      return cartItem ? cartItem.quantity : 0;
    },
    [cart],
  );

  const getTotalPrice = React.useCallback(() => {
    return (
      Number(cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)) +
      shippingPrice
    );
  }, [cart, shippingPrice]);

  useEffect(() => {
    if (!cartFetched) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartFetched]);

  const value = useMemo(() => {
    return {
      cart,
      setCart,
      addToCart,
      removeFromCart,
      getProductQuantity,
      getTotalPrice,
      shippingPrice,
      setShippingPrice,
      cartFetched,
    };
  }, [
    cart,
    addToCart,
    removeFromCart,
    getProductQuantity,
    getTotalPrice,
    cartFetched,
    shippingPrice,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
