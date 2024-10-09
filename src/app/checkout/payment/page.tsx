import React from "react";
import { DetailsOverview } from "./components/DetailsOverview";

type Props = {};

export default function PaymentPage({}: Props) {
  return (
    <div>
      <DetailsOverview />
      <h1 className="mt-10 text-2xl font-bold">Payment method</h1>
    </div>
  );
}
