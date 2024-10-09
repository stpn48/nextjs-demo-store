import React from "react";
import CartContentSection from "./components/CartContentSection";
import { LocalStorageUserDetailsHandler } from "./components/LocalStorageUserDetailsHandler";
import CheckoutNavigation from "./components/CheckoutNavigation";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocalStorageUserDetailsHandler>
      <div className="flex h-fit w-screen justify-center p-8 font-geistSans text-white">
        <div className="main-border-color flex h-fit w-full max-w-[1400px] flex-col items-center rounded-lg border bg-black xl:flex-row xl:items-stretch">
          <section className="relative flex min-h-[700px] w-[60%] flex-col gap-4 p-0 pt-10 lg:pt-0 xl:p-8">
            <CheckoutNavigation />
            {children}
          </section>

          <CartContentSection />
        </div>
      </div>
    </LocalStorageUserDetailsHandler>
  );
}
