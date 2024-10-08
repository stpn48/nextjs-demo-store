"use client";

import { Input } from "@/components/Input";
import React from "react";
import { useCheckout } from "../store/useCheckout";

export function ApartmentInput() {
  const { apartment, setApartment } = useCheckout();

  return (
    <Input
      value={apartment}
      errorMsg={"Invalid Apartment"}
      onChange={(e) => setApartment(e.target.value)}
      wrapperClassName="w-full"
      className="w-full py-3"
      placeholder="Apartment, building, floor, etc. (optional)"
      label="Apartment, suite, unit, building, floor, etc. (optional)"
    />
  );
}
