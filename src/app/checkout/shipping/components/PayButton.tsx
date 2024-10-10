import React from "react";
import Link from "next/link";

export function PayButton() {
  return (
    <Link
      prefetch={true}
      href={"/checkout/payment"}
      className="mt-10 flex justify-center rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 xl:mt-0"
    >
      Pay
    </Link>
  );
}
