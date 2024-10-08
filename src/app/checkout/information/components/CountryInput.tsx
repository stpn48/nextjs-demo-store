"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";

export function CountryInput() {
  const { country, setCountry, submitInformation } = useCheckout();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      if (!country) {
        setError(true);
      }
    }
  }, [submitInformation, country]);

  return (
    <div className="flex flex-col gap-1">
      <Input
        value={country}
        error={error}
        errorMsg={"Invalid Country"}
        setError={setError}
        onChange={(e) => setCountry(e.target.value)}
        required
        requiredMsg="Enter your country"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="Country"
        label="Country"
      />
      <p className="text-secondary text-sm">* Example: US, united states, uniTedStates etc.</p>
    </div>
  );
}
