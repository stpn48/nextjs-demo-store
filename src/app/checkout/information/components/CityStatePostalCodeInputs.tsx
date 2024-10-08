"use client";

import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import { useCheckout } from "../store/useCheckout";
import { stat } from "fs";

export function CityStatePostalCodeInputs() {
  const { city, setCity, state, setState, postalCode, setPostalCode, submitInformation } =
    useCheckout();

  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);

  useEffect(() => {
    if (submitInformation) {
      if (!city) {
        setCityError(true);
      }

      if (!state) {
        setStateError(true);
      }

      if (!postalCode) {
        setPostalCodeError(true);
      }
    }
  }, [submitInformation, city, state, postalCode]);

  return (
    <div className="flex gap-2">
      <Input
        error={cityError}
        errorMsg={"Invalid City"}
        setError={setCityError}
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
        value={state}
        onChange={(e) => setState(e.target.value)}
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
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
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
