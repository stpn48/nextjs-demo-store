import React from "react";
import { Input } from "../Navbar/components/Input";

type Props = {};

export function NewsletterSignup({}: Props) {
  return (
    <div className="text-secondary mr-10 flex flex-col gap-2">
      <h1>Signup for sales and updates</h1>
      <Input type="email" placeholder="Enter your email" />
    </div>
  );
}
