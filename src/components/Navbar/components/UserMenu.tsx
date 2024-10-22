"use client";

import { UserLoggedIn } from "@/types/types";
import Link from "next/link";
import React from "react";
import { SignOutButton } from "./SignOutButton";

type Props = {
  closeMenu: () => void;
  user: UserLoggedIn | null;
};

export function UserMenu({ closeMenu, user }: Props) {
  const userData = user?.user_metadata;

  return (
    <>
      <div className="fixed inset-0 z-10 h-screen w-screen" onClick={closeMenu} />
      <div className="absolute right-0 top-12 z-20 flex flex-col gap-3 whitespace-nowrap rounded-lg border bg-white p-4 dark:border-[#212121] dark:bg-[#131313]">
        <p className="text-secondary">
          {userData ? "Logged in as " + userData.full_name : "Visiting as Guest"}
        </p>

        {userData && <SignOutButton />}

        {!userData && (
          <Link
            href={"/signup"}
            className="flex w-full justify-center rounded-lg py-2 hover:bg-stone-100 hover:dark:bg-stone-900"
            onClick={closeMenu}
          >
            Log In
          </Link>
        )}
      </div>
    </>
  );
}
