import React, { Suspense } from "react";
import Link from "next/link";
import { NavbarBtn } from "./components/NavbarBtn";
import { Searchbar } from "./components/Searchbar";
import { CartButton } from "./components/CartButton";
import { ThemeSwitchButton } from "./components/ThemeSwitchButton";

export function Navbar() {
  return (
    <div
      suppressHydrationWarning
      className="flex items-center justify-center overflow-x-hidden px-2 py-2 font-geistSans"
    >
      <div className="text-secondary absolute left-2 top-2 flex items-center gap-4 text-sm">
        <Link prefetch className="hover:text-black dark:hover:text-white" href={"/"}>
          <NavbarBtn>Z</NavbarBtn>
        </Link>
        <Link
          className="hidden hover:text-black md:block dark:hover:text-white"
          prefetch={true}
          href={"/search"}
        >
          All
        </Link>
        <Link
          prefetch={true}
          className="hidden hover:text-black md:block dark:hover:text-white"
          href={"/about"}
        >
          About
        </Link>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <Searchbar className="dark:border-[#212121]" searchBarClassName="dark:border-[#212121]" />
      </Suspense>
      <div suppressHydrationWarning className="absolute right-4 top-2 flex items-center gap-2">
        <ThemeSwitchButton />
        <CartButton />
      </div>
    </div>
  );
}
