import React, { Suspense } from "react";
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
        <Link prefetch={true} href={"/search"}>
          All Items
        </Link>
        <Link prefetch={true} href={"/about"}>
          About
        </Link>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <Searchbar />
      </Suspense>
      <CartButton />
    </div>
  );
}
