"use client";

import React, { useEffect } from "react";
import { useCheckout } from "../../information/store/useCheckout";
import { useRouter } from "next/navigation";
import { allFieldsValid } from "@/utils/allFieldsValid";
import { allFieldsAreEmpty } from "@/utils/allFieldsEmpty";

type Props = {
  children: React.ReactNode;
};

export function ProtectedCheckoutRoute({ children }: Props) {
  const { userDetails, setSubmitInformation } = useCheckout();

  const router = useRouter();

  useEffect(() => {
    if (!allFieldsValid(userDetails) && !allFieldsAreEmpty(userDetails)) {
      setSubmitInformation(true); // Set submitInformation to false, bcs submission was invalid
      router.push("/checkout/information");
    }
  }, [userDetails, router, setSubmitInformation]);

  return <>{children}</>;
}
