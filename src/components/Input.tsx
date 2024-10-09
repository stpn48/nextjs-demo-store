"use client";

import React, { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  wrapperClassName?: string;
  required?: boolean;
  requiredMsg?: string;
  error?: boolean;
  errorMsg?: string;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  className,
  label,
  wrapperClassName,
  required,
  requiredMsg,
  error,
  errorMsg,
  setError,
  onChange,
  ...props
}: Props) {
  const [text, setText] = useState("");
  const [displayLabel, setDisplayLabel] = useState(false);
  const [showRequiredError, setShowRequiredError] = useState(false);

  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      // input is not required so don't check
      if (required && !e.target.value) {
        setShowRequiredError(true);
      }
    },
    [setShowRequiredError, required],
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setError) {
        setError(false);
        setShowRequiredError(false);
      }

      if (onChange) {
        onChange(e);
      }

      const value = e.target.value;

      setDisplayLabel(!!value); // Show label if there is a value
      setText(value ? label || "label" : ""); // Update text only if there's a value
    },
    [setShowRequiredError, setDisplayLabel, required, setError, onChange],
  );

  useEffect(() => {
    // when required error is true, show the label otherwise it would have been hidden.
    if (showRequiredError) {
      setText(requiredMsg || "This field is required");
      setDisplayLabel(true);
    }
  }, [showRequiredError, requiredMsg]);

  useEffect(() => {
    if (error) {
      setText(errorMsg || "This field is invalid");
      setDisplayLabel(true);
    }
  }, [error, errorMsg]);

  return (
    <div className={twMerge("relative w-full", wrapperClassName)}>
      <input
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        className={twMerge(
          "none rounded-md border bg-inherit p-2 text-sm text-white outline-none",
          className,
          showRequiredError || error ? "border-[#db235b]" : "main-border-color",
        )}
        {...props}
      />
      {label && (
        <label
          className={twMerge(
            `absolute left-2 top-0 -translate-y-2 transform bg-black text-xs transition-all`,
            displayLabel ? "text-xs opacity-100" : "text-sm opacity-0",
            showRequiredError || error ? "text-[#db235b]" : "text-secondary",
          )}
        >
          {text}
        </label>
      )}
    </div>
  );
}
