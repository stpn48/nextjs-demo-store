"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";

export function AddressInput() {
  const { address, setAddress, submitInformation } = useCheckout();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (submitInformation && !address) {
      setError(true);
    }
  }, [submitInformation, setError]);

  return (
    <div className="flex flex-col gap-1">
      <Input
        error={error}
        setError={setError}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        requiredMsg="Enter your address"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="Address"
        label="Address"
      />
      <p className="text-secondary text-sm">* Add house number and street name if you have them</p>
    </div>
  );
}
