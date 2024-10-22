import { signOut } from "@/app/actions/signOut";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

export function SignOutButton() {
  const handleSignOut = useCallback(async () => {
    await signOut();

    toast.success("You have been logged out successfully.");
  }, []);

  return (
    <button
      className="w-full rounded-lg py-2 text-red-600 hover:bg-stone-100 hover:dark:bg-stone-900"
      onClick={handleSignOut}
    >
      Log Out
    </button>
  );
}
