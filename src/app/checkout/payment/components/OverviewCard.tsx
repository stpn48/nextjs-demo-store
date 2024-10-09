import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  value: string;
  changeHref: string;
  className?: string;
};

export function OverviewCard({ title, value, changeHref, className }: Props) {
  return (
    <div
      className={twMerge(
        "main-border-color flex justify-between border p-4 first:rounded-t-lg first:border-b-0 last:rounded-b-lg last:border-t-0",
        className,
      )}
    >
      <h1 className="text-secondary">{title}</h1>
      <h1>{value}</h1>
      <Link href={changeHref} className="text-secondary cursor-pointer hover:text-white">
        Change
      </Link>
    </div>
  );
}
