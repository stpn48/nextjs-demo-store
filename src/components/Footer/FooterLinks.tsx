import Link from "next/link";

export function FooterLinks() {
  return (
    <div className="text-secondary flex flex-col gap-2">
      <Link href={"/"} className="hover:text-black dark:hover:text-white">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-black dark:hover:text-white">
        About
      </Link>
      <Link href={"/terms-conditions"} className="hover:text-black dark:hover:text-white">
        Terms & Conditions
      </Link>
      <Link href={"/shipping-return"} className="hover:text-black dark:hover:text-white">
        Shipping & Return Policy
      </Link>
      <Link href={"/privacy"} className="hover:text-black dark:hover:text-white">
        Privacy policy
      </Link>
      <Link href={"/faq"} className="hover:text-black dark:hover:text-white">
        FAQ
      </Link>
    </div>
  );
}
