"use client";

import { useEffect } from "react";
import { useCheckout } from "../information/store/useCheckout";
import { allFieldsAreEmpty } from "@/utils/allFieldsEmpty";
import toast from "react-hot-toast";
import { LoadingSkeleton } from "../information/components/LoadingSkeleton";

export function LocalStorageUserDetailsHandler({ children }: { children: React.ReactNode }) {
  const { userDetails, setUserDetails } = useCheckout();

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
    if (data) {
      const storedUserDetails = JSON.parse(data);
      setUserDetails(storedUserDetails);

      toast.success("User details retrieved from local storage.");
    }
  }, [setUserDetails]);

  if (allFieldsAreEmpty(userDetails)) {
    return <LoadingSkeleton />;
  }

  // fields loaded from local storage
  return <>{children}</>;
}
