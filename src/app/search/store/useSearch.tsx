import { FilterType } from "@/types/types";
import { create } from "zustand";

interface Store {
  filter: FilterType;
  setFilter: (val: FilterType) => void;

  query: string;
  setQuery: (val: string) => void;
}
export const useSearch = create<Store>((set) => ({
  filter: "",
  setFilter: (val) => set({ filter: val }),

  query: "",
  setQuery: (val) => set({ query: val }),
}));
