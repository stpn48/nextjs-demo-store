"use client";

import { useEffect } from "react";
import { useCheckout } from "../information/store/useCheckout";
import { allFieldsAreEmpty } from "@/utils/allFieldsEmpty";
import { LoadingSkeleton } from "../information/components/LoadingSkeleton";
import { useCart } from "@/store/useCart";
import { useRouter } from "next/navigation";

export function LocalStorageUserDetailsHandler({ children }: { children: React.ReactNode }) {
  const { userDetails, setUserDetails } = useCheckout();
  const { cart, cartFetched } = useCart();

  const router = useRouter();

  // save user details to local storage when userDetails change
  useEffect(() => {
    if (!allFieldsAreEmpty(userDetails)) {
      localStorage.setItem("checkoutUserData", JSON.stringify(userDetails));

      return;
    }
  }, [userDetails]);

  // retrieve user details from local storage when component mounts
  useEffect(() => {
    const data = localStorage.getItem("checkoutUserData");
    if (data !== null) {
      const storedUserDetails = JSON.parse(data);
      setUserDetails(storedUserDetails);
    } else {
      setUserDetails((prev) => ({ ...prev, localStorageKey: "afsdsddfa" }));
    }
  }, [setUserDetails]);

  useEffect(() => {
    if (!cartFetched) return;

    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  if (allFieldsAreEmpty(userDetails)) {
    return <LoadingSkeleton />;
  }

  // fields loaded from local storage
  return <>{children}</>;
}
