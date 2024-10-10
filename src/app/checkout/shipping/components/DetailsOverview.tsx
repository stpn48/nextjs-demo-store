"use client";

import React from "react";
import { useCheckout } from "../../information/store/useCheckout";
import { OverviewCard } from "../../payment/components/OverviewCard";

export function DetailsOverview() {
  const { userDetails } = useCheckout();

  return (
    <div className="flex flex-col text-sm dark:bg-black">
      <OverviewCard title="Contact" value={userDetails.email} changeHref="/checkout/information" />
      <div className="border-t dark:border-[#212121]"></div>
      <OverviewCard
        title="Shipping Details"
        value={`${userDetails.firstName} ${userDetails.lastName}, ${userDetails.address}, ${userDetails.city}, ${userDetails.state}, ${userDetails.postalCode}, ${userDetails.country}, ${userDetails.apartment}`}
        changeHref="/checkout/information"
      />
    </div>
  );
}
