import { Input } from "@/components/Input";
import React from "react";

export function AddressInput() {
  return (
    <div className="flex flex-col gap-1">
      <Input
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
