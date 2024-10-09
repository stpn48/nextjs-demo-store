import React, { Suspense } from "react";
import { FilterMenu } from "./components/FilterMenu";
type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 px-6 md:flex-row md:items-start">
      <FilterMenu />
      {children}
    </div>
  );
}
