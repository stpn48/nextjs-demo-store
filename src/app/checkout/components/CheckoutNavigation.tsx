"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function CheckoutNavigation() {
  const pathname = usePathname();

  return (
    <div className="absolute -right-14 -top-6 flex items-center gap-4 pb-8 text-xs text-[#8d8d8d] md:relative md:right-0 md:top-0 md:mt-8 xl:mt-0">
      <Link
        className={twMerge(
          "cursor-pointer hover:text-black dark:hover:text-white",
          pathname === "/checkout/information" && "text-black dark:text-white",
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
          "cursor-pointer hover:text-black dark:hover:text-white",
          pathname === "/checkout/shipping" && "text-black dark:text-white",
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
          "cursor-pointer hover:text-black dark:hover:text-white",
          pathname === "/checkout/payment" && "text-black dark:text-white",
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
