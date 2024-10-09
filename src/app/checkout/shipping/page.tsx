import React from "react";
import { DetailsOverview } from "./components/DetailsOverview";
import { ShippingMethodSelect } from "./components/ShippingMethodSelect";
import { ProtectedShippingRoute } from "../components/ProtectedRoute";

export default function ShippingPage() {
  return (
    <ProtectedShippingRoute>
      <DetailsOverview />
      <h1 className="text-2xl font-bold">Shipping method</h1>
      <ShippingMethodSelect />
    </ProtectedShippingRoute>
  );
}
