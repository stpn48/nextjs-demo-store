"use client";

import React from "react";
import { useCheckout } from "../../information/store/useCheckout";
import { OverviewCard } from "../../payment/components/OverviewCard";

export function DetailsOverview() {
  const { userDetails } = useCheckout();

  return (
    <div className="main-border-color flex flex-col bg-black text-sm">
      <OverviewCard title="Contact" value={userDetails.email} changeHref="/checkout/information" />
      <div className="main-border-color border-t"></div>
      <OverviewCard
        title="Shipping Details"
        value={`${userDetails.firstName} ${userDetails.lastName}, ${userDetails.address}, ${userDetails.city}, ${userDetails.state}, ${userDetails.postalCode}, ${userDetails.country}, ${userDetails.apartment}`}
        changeHref="/checkout/information"
      />
    </div>
  );
}
