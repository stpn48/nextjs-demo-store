"use client";

import { UserLoggedIn } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import { NavbarBtn } from "./NavbarBtn";
import { UserMenu } from "./UserMenu";

type Props = {
  user: UserLoggedIn | null;
};

export function UserButton({ user }: Props) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="relative">
      <NavbarBtn onClick={() => setShowUserMenu(true)}>
        {user?.user_metadata.avatar_url ? (
          <Image
            src={user.user_metadata.avatar_url}
            width={24}
            height={24}
            alt="userAvatar"
            className="rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-secondary size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        )}
      </NavbarBtn>

      {showUserMenu && <UserMenu user={user} closeMenu={() => setShowUserMenu(false)} />}
    </div>
  );
}
