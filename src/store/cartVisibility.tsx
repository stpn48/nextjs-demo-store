import { create } from "zustand";

type Store = {
  cartVisible: boolean;
  setCartVisible: (val: boolean) => void;
};
export const useCartVisibility = create<Store>((set) => ({
  cartVisible: false,
  setCartVisible: (val) => set({ cartVisible: val }),
}));
