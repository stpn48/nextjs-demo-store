import React from "react";
import { GoogleButton } from "./components/GoogleButton";

export default function SignupPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Continue With Google</h1>
      <GoogleButton />
    </div>
  );
}
