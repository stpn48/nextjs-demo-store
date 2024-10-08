"use client";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { useCheckout } from "../store/useCheckout";
import { useEffect, useState } from "react";
import { checkIfEmailIsValid } from "@/utils/checkIfEmailIsValid";

export function EmailInput() {
  const { email, setEmail, submitInformation } = useCheckout();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      const isValid = checkIfEmailIsValid(email);

      if (!isValid) {
        setError(true);
      }
    }
  }, [submitInformation, email]);

  return (
    <>
      <Input
        error={error}
        errorMsg={"Invalid Email"}
        setError={setError}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
