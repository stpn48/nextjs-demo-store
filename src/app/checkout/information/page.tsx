import { ApartmentInput } from "./components/ApartmentInput";
import React from "react";
import { EmailInput } from "./components/EmailInput";
import { FirstNameLastNameInputs } from "./components/FirstNameLastNameInputs";
import { AddressInput } from "./components/AddressInput";
import { CountryInput } from "./components/CountryInput";
import { CityStatePostalCodeInputs } from "./components/CityStatePostalCodeInputs";
import ContinueToShippingBtn from "./components/ContinueToShippingBtn";

export default function CheckoutInformationPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Contact</h1>
      <EmailInput />
      <h1 className="mt-10 text-2xl font-bold">Shipping address</h1>
      <FirstNameLastNameInputs />
      <AddressInput />
      <CountryInput />
      <ApartmentInput />
      <CityStatePostalCodeInputs />
      <ContinueToShippingBtn />
    </>
  );
}
