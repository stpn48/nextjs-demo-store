"use client";

import { Product } from "@/types/types";
import React, { useCallback, createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  getTotalPrice: () => number;
};

const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const cartContent = localStorage.getItem("cart");

    if (cartContent) {
      return JSON.parse(cartContent);
    }

    return [];
  });

  const addToCart = (newProduct: Product) => {
    setCart((prev) => {
      const productExist = prev.find((item) => item.id === newProduct.id);

      if (!productExist) {
        return [...prev, { ...newProduct, quantity: 1 }];
      }

      return prev;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== productId);
    });
  };

  const getProductQuantity = (productId: number) => {
    const cartItem = cart.find((item) => item.id === productId);

    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo(() => {
    return {
      cart,
      setCart,
      addToCart,
      removeFromCart,
      getProductQuantity,
      getTotalPrice,
    };
  }, [cart, setCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
