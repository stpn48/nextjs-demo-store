"use client";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { useCheckout } from "../store/useCheckout";
import { useEffect, useState } from "react";
import { checkIfEmailIsValid } from "@/utils/checkIfEmailIsValid";

export function EmailInput() {
  const { userDetails, setUserDetails, submitInformation } = useCheckout();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      const isValid = checkIfEmailIsValid(userDetails.email);

      if (!isValid) {
        setError(true);
      }
    }
  }, [submitInformation, userDetails]);

  return (
    <>
      <Input
        error={error}
        errorMsg={"Invalid Email"}
        setError={setError}
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        label="Email"
        required
        requiredMsg="Enter your email"
        className="w-full py-3"
        placeholder="Email"
      />
      <Checkbox label="Email me with offers and news" />
    </>
  );
}
