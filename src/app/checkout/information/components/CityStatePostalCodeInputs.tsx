"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";

export function CityStatePostalCodeInputs() {
  const { userDetails, setUserDetails, submitInformation } = useCheckout();
  useCheckout();

  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      if (!userDetails.city) {
        setCityError(true);
      }

      if (!userDetails.state) {
        setStateError(true);
      }

      if (!userDetails.postalCode) {
        setPostalCodeError(true);
      }
    }
  }, [submitInformation, userDetails]);

  return (
    <div className="flex gap-2">
      <Input
        error={cityError}
        errorMsg={"Invalid City"}
        setError={setCityError}
        value={userDetails.city}
        onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
        required
        requiredMsg="Enter your city"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="City"
        label="City"
      />
      <Input
        error={stateError}
        errorMsg={"Invalid State"}
        setError={setStateError}
        value={userDetails.state}
        onChange={(e) => setUserDetails({ ...userDetails, state: e.target.value })}
        required
        requiredMsg="Enter your state"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="State"
        label="State"
      />
      <Input
        error={postalCodeError}
        errorMsg={"Invalid Postal Code"}
        setError={setPostalCodeError}
        value={userDetails.postalCode}
        onChange={(e) => setUserDetails({ ...userDetails, postalCode: e.target.value })}
        required
        requiredMsg="Enter your postal code"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="Postal code"
        label="Postal code"
      />
    </div>
  );
}
