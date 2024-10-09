import { UserDetails } from "@/types/types";
import { create } from "zustand";

type Store = {
  userDetails: UserDetails;
  setUserDetails: (val: UserDetails | ((prev: UserDetails) => UserDetails)) => void;

  submitInformation: boolean;
  setSubmitInformation: (val: boolean) => void;
};

export const useCheckout = create<Store>((set) => ({
  userDetails: {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    shippingMethodId: 1,
    shippingMethod: "Fast Delivery",
    localStorageKey: "checkoutUserData",
  },
  setUserDetails: (val) =>
    set((state) => ({
      userDetails: typeof val === "function" ? val(state.userDetails) : val,
    })),

  submitInformation: false,
  setSubmitInformation: (val) =>
    set((state) => (val !== state.submitInformation ? { submitInformation: val } : {})),
}));
