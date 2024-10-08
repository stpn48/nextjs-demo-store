"use client";

import React, { useCallback, useEffect } from "react";
import { useCheckout } from "../store/useCheckout";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { checkIfEmailIsValid } from "@/utils/checkIfEmailIsValid";

export default function ContinueToShippingBtn() {
  const {
    email,
    lastName,
    country,
    apartment,
    city,
    state,
    postalCode,
    submitInformation,
    setSubmitInformation,
  } = useCheckout();

  const router = useRouter();

  const handleClick = useCallback(() => {
    setSubmitInformation(true);
  }, [setSubmitInformation]);

  useEffect(() => {
    if (!submitInformation) return;

    if (!checkIfEmailIsValid(email) || !lastName || !country || !city || !state || !postalCode) {
      setSubmitInformation(false);
      return;
    }

    // all inputs validated, redirect to shipping page
    router.prefetch("/checkout/shipping");
    router.push("/checkout/shipping");
    setSubmitInformation(false);
  }, [submitInformation, email, lastName, country, apartment, city, state, postalCode]);

  return (
    <button
      onClick={handleClick}
      className="mt-10 w-full rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700"
    >
      Continue to shipping
    </button>
  );
}
