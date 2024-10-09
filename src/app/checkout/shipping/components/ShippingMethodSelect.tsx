"use client";

import React, { useEffect, useState } from "react";
import { DeliveryChoice } from "./DeliveryChoice";
import { useCart } from "@/store/useCart";
import { useCheckout } from "../../information/store/useCheckout";

const deliveryChoices = [
  {
    id: 0,
    title: "Premium Delivery",
    description: "1-2 days",
    price: 8.99,
  },
  {
    id: 1,
    title: "Fast Delivery",
    description: "1-3 business days",
    price: 5.99,
  },
  {
    id: 2,
    title: "Standard Delivery",
    description: "3-5 business days",
    price: 3.99,
  },
];

export function ShippingMethodSelect() {
  const { setShippingPrice } = useCart();
  const { userDetails, setUserDetails } = useCheckout();
  const [selectedChoice, setSelectedChoice] = useState(userDetails.shippingMethodId);

  useEffect(() => {
    setShippingPrice(deliveryChoices[selectedChoice].price);

    setUserDetails((prev) => ({
      ...prev,
      shippingMethodId: selectedChoice,
      shippingMethod: deliveryChoices[selectedChoice].title,
    }));
  }, [selectedChoice, setUserDetails, setShippingPrice]);

  return (
    <div className="flex flex-col text-sm">
      {deliveryChoices.map((choice) => (
        <DeliveryChoice
          key={choice.id}
          onClick={() => setSelectedChoice(choice.id)}
          selected={selectedChoice === choice.id}
          title={choice.title}
          className="first:rounded-t-lg last:rounded-b-lg"
          description={choice.description}
          price={choice.price}
        />
      ))}
    </div>
  );
}
