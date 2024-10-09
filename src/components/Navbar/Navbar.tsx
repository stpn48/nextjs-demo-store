import React, { Suspense } from "react";
import Link from "next/link";
import { NavbarBtn } from "./components/NavbarBtn";
import { Searchbar } from "./components/Searchbar";
import { CartButton } from "./components/CartButton";

export function Navbar() {
  return (
    <div className="flex items-center justify-center overflow-x-hidden px-2 py-2 font-geistSans">
      <div className="text-secondary absolute left-2 top-2 flex items-center gap-4 text-sm">
        <Link prefetch className="hover:text-white" href={"/"}>
          <NavbarBtn>Z</NavbarBtn>
        </Link>
        <Link className="hidden hover:text-white md:block" prefetch={true} href={"/search"}>
          All
        </Link>
        <Link prefetch={true} className="hidden hover:text-white md:block" href={"/about"}>
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
