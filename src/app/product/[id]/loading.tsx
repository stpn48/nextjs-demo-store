import React from "react";

export default function loading() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center p-4">
      <div className="main-border-color flex w-fit justify-center gap-10 rounded-lg border bg-black p-10">
        <div className="flex w-[540px] flex-col gap-10">
          <div className="h-[540px] w-[540px] animate-pulse rounded-md bg-stone-700" />
          <div className="flex w-full justify-center gap-4">
            <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700" />
            <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700" />
            <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-stone-700" />
          </div>
        </div>

        <div className="flex w-[540px] flex-col justify-between gap-4">
          <div className="flex flex-col gap-5">
            <div className="h-[40px] w-full animate-pulse rounded-md bg-stone-700" />
            <div className="h-[40px] w-[66px] animate-pulse rounded-full bg-stone-700" />
            <div className="h-[150px] w-full animate-pulse rounded-md bg-stone-700" />
          </div>
          <div className="h-[48px] w-full animate-pulse rounded-full bg-stone-700"></div>
        </div>
      </div>
    </div>
  );
}
