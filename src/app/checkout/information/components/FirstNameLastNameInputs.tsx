import { Input } from "@/components/Input";
import React from "react";

export function FirstNameLastNameInputs() {
  return (
    <div className="flex w-full gap-2">
      <Input
        wrapperClassName="flex-grow"
        className="w-full py-3"
        placeholder="First name (optional)"
        label="First name (optional)"
      />
      <Input
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
