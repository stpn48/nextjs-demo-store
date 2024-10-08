"use client";

import React, { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  wrapperClassName?: string;
  required?: boolean;
  requiredMsg?: string;
};

export function Input({
  className,
  label,
  wrapperClassName,
  required,
  requiredMsg,
  ...props
}: Props) {
  const [displayLabel, setDisplayLabel] = useState(false);
  const [showRequiredError, setShowRequiredError] = useState(false);

  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      // input is not required so don't check
      if (!required) return;

      // input is required so when user loses focus and its empty show the error
      if (!e.target.value) {
        setShowRequiredError(true);
      }
    },
    [setShowRequiredError, required],
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // if input is required and user has not entered anything, show the error
      if (required) {
        setShowRequiredError(!!!e.target.value);
      }

      // show label if not empty if value is "" it will result in false (don't show label) else show the label
      setDisplayLabel(!!e.target.value);
    },
    [setShowRequiredError, setDisplayLabel, required],
  );

  useEffect(() => {
    // when required error is true, show the label otherwise it would have been hidden.
    if (showRequiredError) {
      setDisplayLabel(true);
    }
  }, [showRequiredError]);

  return (
    <div className={twMerge("relative w-full", wrapperClassName)}>
      <input
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        className={twMerge(
          "none rounded-md border bg-inherit p-2 text-sm text-white outline-none",
          className,
          showRequiredError ? "border-[#db235b]" : "main-border-color",
        )}
        {...props}
      />
      {label && (
        <label
          className={twMerge(
            `absolute left-2 top-0 -translate-y-2 transform bg-black text-xs transition-all`,
            displayLabel ? "text-xs opacity-100" : "text-sm opacity-0",
            showRequiredError ? "text-[#db235b]" : "text-secondary",
          )}
        >
          {showRequiredError ? requiredMsg || "nic" : label}
        </label>
      )}
    </div>
  );
}
