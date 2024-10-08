"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  onCheck?: () => void;
  onUncheck?: () => void;
  label?: string;
};

export function Checkbox({ onCheck, onUncheck, label }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-2 pl-1 text-sm">
      <div
        tabIndex={0}
        className={twMerge(
          "main-border-color flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border outline-none transition-all focus:border-blue-600",
          isChecked ? "bg-blue-600" : "inherit",
        )}
        onClick={() => setIsChecked((prev) => !prev)}
      >
        {isChecked && <Checkmark />}
      </div>
      <p className="cursor-pointer" onClick={() => setIsChecked((prev) => !prev)}>
        {label}
      </p>
    </div>
  );
}

function Checkmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
