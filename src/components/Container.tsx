"use client";

import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={twMerge(``, className)}>{children}</div>;
}
