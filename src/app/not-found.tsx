import React from "react";

type Props = {};

export default function notFoundPage({}: Props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white font-geistSans text-xl font-medium text-black dark:bg-[#131313] dark:text-white">
      404 Page Not Found
    </div>
  );
}
