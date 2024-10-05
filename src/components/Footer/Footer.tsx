import React from "react";
import { NavbarBtn } from "../Navbar/components/NavbarBtn";
import Link from "next/link";
import { FooterLinks } from "./FooterLinks";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  return (
    <div className="font-geistSans flex flex-col text-sm">
      <div className="main-border-color mt-10 flex h-[300px] items-center gap-20 border-t p-4 px-10 text-sm text-white">
        <div className="flex items-center gap-2">
          <NavbarBtn className="text-secondary text-sm">Z</NavbarBtn>
          <h1 className="font-geistMono font-semibold">ZOMRAK STORE</h1>
        </div>
        <div className="flex flex-grow items-center justify-between">
          <FooterLinks />
          <NewsletterSignup />
        </div>
      </div>
      <div className="main-border-color text-secondary flex gap-2 border-t p-5">
        <p className="text-sm">© 2022 Zomrak Store</p>
        <p>|</p>
        <Link href={"https://github.com/stpn48/nextjs-demo-store"}>View Source</Link>
      </div>
    </div>
  );
}
