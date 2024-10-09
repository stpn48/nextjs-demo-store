"use client";

import React, { useState } from "react";
import { DeliveryChoice } from "./DeliveryChoice";

type Props = {};

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

export function ShippingMethodSelect({}: Props) {
  const [selectedChoice, setSelectedChoice] = useState(1);

  return (
    <div className="flex flex-col text-sm">
      {deliveryChoices.map((choice) => (
        <DeliveryChoice
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
