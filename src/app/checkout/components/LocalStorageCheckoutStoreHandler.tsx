"use client";

import { useEffect } from "react";
import { useCheckout } from "../information/store/useCheckout";

export function LocalStorageCheckoutStoreHandler() {
  const {
    setEmail,
    setFirstName,
    setLastName,
    setAddress,
    setCountry,
    setApartment,
    setCity,
    setState,
    setPostalCode,
    setSubmitInformation,
    email,
    firstName,
    lastName,
    address,
    country,
    apartment,
    city,
    state,
    postalCode,
    submitInformation,
  } = useCheckout();

  useEffect(() => {
    // Retrieve checkoutStore from local storage when component mounts
    const storedCheckoutStore = localStorage.getItem("checkoutStore");
    if (storedCheckoutStore) {
      const parsedStore = JSON.parse(storedCheckoutStore);

      // Only set values if they are not already present in Zustand
      if (email === "") setEmail(parsedStore.email);
      if (firstName === "") setFirstName(parsedStore.firstName);
      if (lastName === "") setLastName(parsedStore.lastName);
      if (address === "") setAddress(parsedStore.address);
      if (country === "") setCountry(parsedStore.country);
      if (apartment === "") setApartment(parsedStore.apartment);
      if (city === "") setCity(parsedStore.city);
      if (state === "") setState(parsedStore.state);
      if (postalCode === "") setPostalCode(parsedStore.postalCode);
      if (submitInformation === false) setSubmitInformation(parsedStore.submitInformation);
    }
  }, [
    setEmail,
    setFirstName,
    setLastName,
    setAddress,
    setCountry,
    setApartment,
    setCity,
    setState,
    setPostalCode,
    setSubmitInformation,
    email,
    firstName,
    lastName,
    address,
    country,
    apartment,
    city,
    state,
    postalCode,
    submitInformation,
  ]);

  useEffect(() => {
    // Save checkoutStore to local storage whenever it changes
    const checkoutStore = JSON.stringify({
      email,
      firstName,
      lastName,
      address,
      country,
      apartment,
      city,
      state,
      postalCode,
      submitInformation,
    });

    if (
      email ||
      firstName ||
      lastName ||
      address ||
      country ||
      apartment ||
      city ||
      state ||
      postalCode ||
      submitInformation
    ) {
      localStorage.setItem("checkoutStore", checkoutStore);
    }
  }, [
    email,
    firstName,
    lastName,
    address,
    country,
    apartment,
    city,
    state,
    postalCode,
    submitInformation,
  ]);

  return null;
}
