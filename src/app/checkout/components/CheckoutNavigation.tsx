"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function CheckoutNavigation() {
  const pathname = usePathname();

  return (
    <div className="text-secondary flex items-center gap-4 pb-8">
      <Link
        className={twMerge(
          "cursor-pointer hover:text-white",
          pathname === "/checkout/information" && "text-white",
          (pathname === "/checkout/shipping" || pathname === "/checkout/payment") &&
            "text-blue-600",
        )}
        href={"/checkout/information"}
      >
        Information
      </Link>
      <h1>
        <ArrowIcon />
      </h1>
      <Link
        className={twMerge(
          "cursor-pointer hover:text-white",
          pathname === "/checkout/shipping" && "text-white",
          pathname === "/checkout/payment" && "text-blue-600",
          pathname === "/checkout/information" && "text-secondary pointer-events-none",
        )}
        href={"/checkout/shipping"}
      >
        Shipping
      </Link>
      <h1>
        <ArrowIcon />
      </h1>
      <Link
        className={twMerge(
          "cursor-pointer hover:text-white",
          pathname === "/checkout/payment" && "text-white",
          (pathname === "/checkout/information" || pathname === "/checkout/shipping") &&
            "text-secondary pointer-events-none",
        )}
        href={"/checkout/payment"}
      >
        Payment
      </Link>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-secondary size-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
