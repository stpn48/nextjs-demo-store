import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  product: Product;
  size?: "sm" | "lg";
};

export function ProductCard({ product, size = "sm" }: ProductProps) {
  const imageUrl = product.images ? product.images[0] : "";

  // Define dimensions based on size prop
  const dimensions = size === "sm" ? { width: 350, height: 350 } : { width: 600, height: 600 };

  return (
    <div
      className={`product-card light: relative border bg-[#f0f0f0] dark:border-[#212121] dark:bg-black ${size === "sm" ? "h-[350px] w-[350px]" : "h-[600px] w-[600px]"} light:hover:border-blue-600 cursor-pointer rounded-lg border-transparent transition-all dark:hover:border-blue-600`}
    >
      <Link prefetch={true} href={`/product/${product.id}?image=0`}>
        <div className={`h-full w-full overflow-hidden rounded-lg`}>
          <Image
            className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            src={imageUrl}
            alt={product.title}
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>

        <div className="main-border-color pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full border bg-black p-1 pl-4 text-xs text-white">
          <h2 className="text-center">{product.title}</h2>
          <p className="rounded-full bg-blue-600 px-2 py-1 font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
