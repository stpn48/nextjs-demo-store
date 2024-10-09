import React from "react";
import { DetailsOverview } from "./components/DetailsOverview";
import { ShippingMethodSelect } from "./components/ShippingMethodSelect";
import { ProtectedShippingRoute } from "./components/ProtectedShippingRoute";
import { PayButton } from "./components/PayButton";

export default function ShippingPage() {
  return (
    <ProtectedShippingRoute>
      <DetailsOverview />
      <h1 className="mt-10 text-2xl font-bold">Shipping method</h1>
      <div className="flex h-full flex-col justify-between">
        <ShippingMethodSelect />
        <PayButton />
      </div>
    </ProtectedShippingRoute>
  );
}
