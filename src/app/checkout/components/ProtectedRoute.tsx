"use client";

import React, { useEffect } from "react";
import { useCheckout } from "../information/store/useCheckout";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { checkIfEmailIsValid } from "@/utils/checkIfEmailIsValid";

type Props = {
  children: React.ReactNode;
};

export function ProtectedShippingRoute({ children }: Props) {
  const { email, address, apartment, city, country, lastName, postalCode, state } = useCheckout();

  const router = useRouter();

  useEffect(() => {
    if (
      !checkIfEmailIsValid(email) ||
      !address ||
      !city ||
      !country ||
      !lastName ||
      !postalCode ||
      !state
    ) {
      toast.error("Please fill out all the required fields, before proceeding");
      router.push("/checkout/information");
    }
  }, [email, address, apartment, city, country, lastName, postalCode, state]);

  return <>{children}</>;
}
