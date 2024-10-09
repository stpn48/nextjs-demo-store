"use client";

import React from "react";
import { useCheckout } from "../../information/store/useCheckout";

type Props = {};

export function DetailsOverview({}: Props) {
  const {} = useCheckout();

  return (
    <div className="main-border-color flex flex-col bg-black text-sm">
      <div className="main-border-color flex justify-between rounded-t-lg border-x border-t p-4">
        <h1 className="text-secondary">Contact</h1>
        <h1>yourname@example.com</h1>
        <h1>Change</h1>
      </div>
      <div className="main-border-color flex justify-between rounded-b-lg border p-4">
        <h1 className="text-secondary">Contact</h1>
        <h1>yourname@example.com</h1>
        <h1>Change</h1>
      </div>
    </div>
  );
}
