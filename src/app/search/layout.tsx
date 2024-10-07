import React, { Suspense } from "react";
import { FilterMenu } from "./components/FilterMenu";
type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <div className="mt-10 flex gap-4 px-6">
      <Suspense fallback={<p>loading...</p>}>
        <FilterMenu />
      </Suspense>
      {children}
    </div>
  );
}
