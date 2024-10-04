import { create } from "zustand";

type Store = {
  theme: "light" | "dark";
  setTheme: (newTheme: "light" | "dark") => void;
};
export const useThemeStore = create<Store>((set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
