"use client";

import React from "react";
import { useCheckout } from "../../information/store/useCheckout";
import { OverviewCard } from "./OverviewCard";

export function DetailsOverview() {
  const { userDetails } = useCheckout();

  return (
    <div className="flex flex-col text-sm dark:border-[#212121] dark:bg-black">
      <OverviewCard title="Contact" value={userDetails.email} changeHref="/checkout/information" />
      <OverviewCard
        title="Shipping Details"
        value={`${userDetails.firstName} ${userDetails.lastName}, ${userDetails.address}, ${userDetails.city}, ${userDetails.state}, ${userDetails.postalCode}, ${userDetails.country}, ${userDetails.apartment}`}
        changeHref="/checkout/information"
      />
      <OverviewCard
        title="Shipping Method"
        value={userDetails.shippingMethod}
        changeHref="/checkout/shipping"
      />
    </div>
  );
}
