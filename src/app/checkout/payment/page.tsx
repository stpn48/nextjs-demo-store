import React from "react";
import { DetailsOverview } from "./components/DetailsOverview";
import Image from "next/image";
import { ProtectedCheckoutRoute } from "../shipping/components/ProtectedCheckoutRoute";

export default function PaymentPage() {
  return (
    <ProtectedCheckoutRoute>
      <div>
        <DetailsOverview />
        <h1 className="mt-10 text-2xl font-bold">Payment method</h1>
        <p className="text-secondary text-sm">All transactions are securely encrypted.</p>
        <div className="main-border-color mt-4 flex h-[200px] flex-col items-center justify-center gap-4 rounded-lg border">
          <Image src={"/errorIcon.svg"} alt="error" width={50} height={50} />
          <p className="text-secondary w-fit px-4 text-center text-sm">
            This store can&apos;t accept payments right now
          </p>
        </div>
      </div>
    </ProtectedCheckoutRoute>
  );
}
