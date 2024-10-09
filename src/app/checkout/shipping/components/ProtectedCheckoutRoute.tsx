"use client";

import React, { useEffect } from "react";
import { useCheckout } from "../../information/store/useCheckout";
import { useRouter } from "next/navigation";
import { allFieldsValid } from "@/utils/allFieldsValid";
import { allFieldsAreEmpty } from "@/utils/allFieldsEmpty";
import { useCart } from "@/store/useCart";

type Props = {
  children: React.ReactNode;
};

export function ProtectedCheckoutRoute({ children }: Props) {
  const { userDetails, setSubmitInformation } = useCheckout();
  const { cart, cartFetched } = useCart();

  const router = useRouter();

  useEffect(() => {
    if (!cartFetched) return;

    if (cart.length === 0) {
      router.push("/");
      return;
    }

    if (!allFieldsValid(userDetails) && !allFieldsAreEmpty(userDetails)) {
      setSubmitInformation(true);
      router.push("/checkout/information");
    }
  }, [userDetails, router, setSubmitInformation, cart, cartFetched]);

  return <>{children}</>;
}
