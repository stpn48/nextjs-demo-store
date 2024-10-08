import { Input } from "@/components/Input";
import React from "react";
export function CountryInput() {
  return (
    <div className="flex flex-col gap-1">
      <Input
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
