"use client";

import React, { useCallback, useEffect } from "react";
import { useCheckout } from "../store/useCheckout";
import { useRouter } from "next/navigation";
import { allFieldsValid } from "@/utils/allFieldsValid";

export default function ContinueToShippingBtn() {
  const { userDetails, submitInformation, setSubmitInformation } = useCheckout();

  const router = useRouter();

  const handleClick = useCallback(() => {
    setSubmitInformation(true);
  }, [setSubmitInformation]);

  useEffect(() => {
    if (!submitInformation) return;

    if (!allFieldsValid(userDetails)) {
      setSubmitInformation(false);
      return;
    }

    // all inputs validated, redirect to shipping page
    router.prefetch("/checkout/shipping");
    router.push("/checkout/shipping");
    setSubmitInformation(false);
  }, [submitInformation, userDetails, router, setSubmitInformation]);

  return (
    <button
      onClick={handleClick}
      className="mt-10 w-full rounded-full bg-blue-600 px-4 py-2 hover:bg-blue-700"
    >
      Continue to shipping
    </button>
  );
}
