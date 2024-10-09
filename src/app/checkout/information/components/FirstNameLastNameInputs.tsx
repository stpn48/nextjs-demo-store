"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";

export function FirstNameLastNameInputs() {
  const { firstName, setFirstName, lastName, setLastName, submitInformation } = useCheckout();

  const [lastNameError, setLastNameError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      if (!lastName) {
        setLastNameError(true);
      }
    }
  }, [submitInformation, lastName]);

  return (
    <div className="flex w-full gap-2">
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="First name (optional)"
        label="First name (optional)"
      />
      <Input
        error={lastNameError}
        errorMsg={"Invalid Last Name"}
        setError={setLastNameError}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        requiredMsg="Enter your last name"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="Last name"
        label="Last name"
      />
    </div>
  );
}
