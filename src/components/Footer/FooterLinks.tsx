import Link from "next/link";

export function FooterLinks() {
  return (
    <div className="text-secondary flex flex-col gap-2">
      <Link href={"/"} className="hover:text-white hover:underline">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-white hover:underline">
        About
      </Link>
      <Link href={"/terms-conditions"} className="hover:text-white hover:underline">
        Terms & Conditions
      </Link>
      <Link href={"/shipping-return"} className="hover:text-white hover:underline">
        Shipping & Return Policy
      </Link>
      <Link href={"/privacy"} className="hover:text-white hover:underline">
        Privacy policy
      </Link>
      <Link href={"/faq"} className="hover:text-white hover:underline">
        FAQ
      </Link>
    </div>
  );
}
