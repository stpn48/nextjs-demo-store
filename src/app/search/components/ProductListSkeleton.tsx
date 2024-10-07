import React from "react";
export function ProductListSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array(20)
        .fill("")
        .map((_) => (
          <div className="h-[348px] w-[348px] animate-pulse rounded-lg bg-stone-700"></div>
        ))}
    </div>
  );
}
