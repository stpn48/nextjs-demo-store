"use client";

import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export function NavbarBtn({ className, children, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "main-border-color main-button-color rounded-md border p-2 font-geistMono",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
