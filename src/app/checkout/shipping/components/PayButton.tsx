import React from "react";
import Link from "next/link";

export function PayButton() {
  return (
    <Link
      prefetch={true}
      href={"/checkout/payment"}
      className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Pay
    </Link>
  );
}
