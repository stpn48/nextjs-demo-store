import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  selected: boolean;
  className?: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
};

export function DeliveryChoice({ className, title, description, price, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "flex cursor-pointer justify-between p-4",
        className,
        selected ? "border-blue-600" : "main-border-color border hover:border-[#2e2e2e]",
        selected && "border",
      )}
    >
      <div>
        <h1>{title}</h1>
        <p className="text-secondary">{description}</p>
      </div>
      <p>${price}</p>
    </div>
  );
}
