import React from "react";

type Props = {};

export function LoadingSkeleton({}: Props) {
  return (
    <div className="flex h-fit w-screen justify-center p-8 font-geistSans text-white">
      <div className="main-border-color flex h-fit w-full max-w-[1400px] rounded-lg border bg-black">
        <section className="relative flex min-h-[700px] w-[60%] flex-col gap-4 p-8">
          <div className="h-full w-full animate-pulse rounded-md bg-stone-700"></div>
        </section>
        <section className="main-border-color relative flex min-h-[700px] w-[40%] flex-col gap-4 border-l p-8">
          <div className="h-[133px] w-full animate-pulse rounded-md bg-stone-700" />
          <div className="flex h-full flex-col justify-between">
            <div className="h-[133px] w-full animate-pulse rounded-md bg-stone-700" />
            <div className="h-[24px] w-full animate-pulse rounded-md bg-stone-700" />
          </div>
        </section>
      </div>
    </div>
  );
}
