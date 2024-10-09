"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";

export function FirstNameLastNameInputs() {
  const { userDetails, setUserDetails, submitInformation } = useCheckout();

  const [lastNameError, setLastNameError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      if (!userDetails.lastName) {
        setLastNameError(true);
      }
    }
  }, [submitInformation, userDetails]);

  return (
    <div className="flex w-full gap-2">
      <Input
        value={userDetails.firstName}
        onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="First name (optional)"
        label="First name (optional)"
      />
      <Input
        error={lastNameError}
        errorMsg={"Invalid Last Name"}
        setError={setLastNameError}
        value={userDetails.lastName}
        onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
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
