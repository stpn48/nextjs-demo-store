import React from "react";
import { Input } from "../Input";

export function NewsletterSignup() {
  return (
    <div className="text-secondary mr-10 hidden gap-2 md:block">
      <h1>Signup for sales and updates</h1>
      <Input type="email" placeholder="Enter your email" />
    </div>
  );
}
