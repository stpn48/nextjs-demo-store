import React, { Suspense } from "react";
import { FilterMenu } from "./components/FilterMenu";
type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <div className="mt-20 flex flex-col items-center gap-4 px-6 md:flex-row md:items-start">
      <Suspense fallback={<p className="text-secondary">loading...</p>}>
        <FilterMenu />
      </Suspense>

      {children}
    </div>
  );
}
