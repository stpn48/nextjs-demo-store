import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={twMerge(
        "none main-border-color rounded-md border bg-inherit p-2 text-sm text-white outline-none",
        className,
      )}
      {...props}
    />
  );
}
