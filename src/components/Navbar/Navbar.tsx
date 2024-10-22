import { getUser } from "@/app/actions/getUser";
import Link from "next/link";
import React, { Suspense } from "react";
import { AdminDashboardButton } from "./components/AdminDashboardButton";
import { CartButton } from "./components/CartButton";
import { NavbarBtn } from "./components/NavbarBtn";
import { Searchbar } from "./components/Searchbar";
import { ThemeSwitchButton } from "./components/ThemeSwitchButton";
import { UserButton } from "./components/UserButton";

export async function Navbar() {
  const user = await getUser();

  return (
    <div
      suppressHydrationWarning
      className="fixed z-10 flex w-screen items-center justify-center bg-white px-2 py-2 font-geistSans dark:bg-[#131313]"
    >
      <div className="text-secondary absolute left-2 top-2 flex items-center gap-4 text-sm">
        <Link prefetch className="hover:text-black dark:hover:text-white" href={"/"}>
          <NavbarBtn>Z</NavbarBtn>
        </Link>
        <Link
          className="hidden hover:text-black dark:hover:text-white md:block"
          prefetch={true}
          href={"/search"}
        >
          All
        </Link>
        <Link
          prefetch={true}
          className="hidden hover:text-black dark:hover:text-white md:block"
          href={"/about"}
        >
          About
        </Link>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <Searchbar className="dark:border-[#212121]" searchBarClassName="dark:border-[#212121]" />
      </Suspense>
      <div suppressHydrationWarning className="absolute right-4 top-2 flex items-center gap-2">
        {user?.role.role === "admin" && <AdminDashboardButton />}
        <ThemeSwitchButton />
        <UserButton user={user} />
        <CartButton />
      </div>
    </div>
  );
}
