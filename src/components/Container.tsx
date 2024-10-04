"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";
import { useThemeStore } from "@/store/useThemeStore";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  const { theme, setTheme } = useThemeStore();

  return <div className={twMerge(`main-bg ${theme}`, className)}>{children}</div>;
}
