"use client";

import { Input } from "@/components/Input";
import React from "react";
import { useCheckout } from "../store/useCheckout";

export function ApartmentInput() {
  const { userDetails, setUserDetails } = useCheckout();

  return (
    <Input
      value={userDetails.apartment}
      errorMsg={"Invalid Apartment"}
      onChange={(e) => setUserDetails({ ...userDetails, apartment: e.target.value })}
      wrapperClassName="w-full"
      className="w-full py-3"
      placeholder="Apartment, building, floor, etc. (optional)"
      label="Apartment, suite, unit, building, floor, etc. (optional)"
    />
  );
}
