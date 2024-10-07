import React from "react";
import Link from "next/link";
import { NavbarBtn } from "./components/NavbarBtn";
import { Searchbar } from "./components/Searchbar";
import { CartButton } from "./components/CartButton";

export function Navbar() {
  return (
    <div className="flex items-center justify-center px-2 py-2 font-geistSans">
      <div className="text-secondary absolute left-2 top-2 flex items-center gap-4 text-sm">
        <Link prefetch href={"/"}>
          <NavbarBtn>Z</NavbarBtn>
        </Link>
        {/* TODO: Add paths */}
        <Link href={""}>All Items</Link>
        <Link href={""}>About</Link>
      </div>
      <Searchbar />
      <CartButton />
    </div>
  );
}
