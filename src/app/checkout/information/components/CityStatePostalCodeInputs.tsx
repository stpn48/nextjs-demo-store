import { Input } from "@/components/Input";
import React from "react";
export function CityStatePostalCodeInputs() {
  return (
    <div className="flex gap-2">
      <Input
        required
        requiredMsg="Enter your city"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="City"
        label="City"
      />
      <Input
        required
        requiredMsg="Enter your state"
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="State"
        label="State"
      />
      <Input
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
