import { create } from "zustand";

type Store = {
  email: string;
  setEmail: (val: string) => void;
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  address: string;
  setAddress: (val: string) => void;
  country: string;
  setCountry: (val: string) => void;
  apartment: string;
  setApartment: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  state: string;
  setState: (val: string) => void;
  postalCode: string;
  setPostalCode: (val: string) => void;
  submitInformation: boolean;
  setSubmitInformation: (val: boolean) => void;
};

export const useCheckout = create<Store>((set) => ({
  email: "",
  setEmail: (val) => set((state) => (val !== state.email ? { email: val } : {})),

  firstName: "",
  setFirstName: (val) => set((state) => (val !== state.firstName ? { firstName: val } : {})),

  lastName: "",
  setLastName: (val) => set((state) => (val !== state.lastName ? { lastName: val } : {})),

  address: "",
  setAddress: (val) => set((state) => (val !== state.address ? { address: val } : {})),

  country: "",
  setCountry: (val) => set((state) => (val !== state.country ? { country: val } : {})),

  apartment: "",
  setApartment: (val) => set((state) => (val !== state.apartment ? { apartment: val } : {})),

  city: "",
  setCity: (val) => set((state) => (val !== state.city ? { city: val } : {})),

  state: "",
  setState: (val) => set((state) => (val !== state.state ? { state: val } : {})),

  postalCode: "",
  setPostalCode: (val) => set((state) => (val !== state.postalCode ? { postalCode: val } : {})),

  submitInformation: false,
  setSubmitInformation: (val) =>
    set((state) => (val !== state.submitInformation ? { submitInformation: val } : {})),
}));
