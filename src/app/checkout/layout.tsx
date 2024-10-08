import React from "react";
import CartContentSection from "./components/CartContentSection/CartContentSection";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit w-screen justify-center p-8 font-geistSans text-white">
      <div className="main-border-color flex h-fit w-full max-w-[1400px] rounded-lg border bg-black">
        {children}
        <CartContentSection />
      </div>
    </div>
  );
}
