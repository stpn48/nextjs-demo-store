import React from "react";
import { EmailInput } from "./components/EmailInput";
import { FirstNameLastNameInputs } from "./components/FirstNameLastNameInputs";
import { AddressInput } from "./components/AddressInput";
import { CountryInput } from "./components/CountryInput";
import { Input } from "@/components/Input";
import { CityStatePostalCodeInputs } from "./components/CityStatePostalCodeInputs";

export default function CheckoutInformationPage() {
  return (
    <section className="relative flex h-fit w-[60%] flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Contact</h1>
      <EmailInput />
      <h1 className="mt-10 text-2xl font-bold">Shipping address</h1>
      <FirstNameLastNameInputs />
      <AddressInput />
      <CountryInput />
      <Input
        wrapperClassName="w-full"
        className="w-full py-3"
        placeholder="Apartment, building, floor, etc. (optional)"
        label="Apartment, suite, unit, building, floor, etc. (optional)"
      />
      <CityStatePostalCodeInputs />
      <button className="mt-10 w-full rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700">
        Continue to shipping
      </button>
    </section>
  );
}
