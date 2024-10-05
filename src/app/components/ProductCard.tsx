import { Product } from "@/types/types";
import Image from "next/image";

type ProductProps = {
  product: Product;
  size?: "sm" | "lg";
};

export function ProductCard({ product, size = "sm" }: ProductProps) {
  const imageUrl = product.images[0];
  const cleanedImageUrl = imageUrl.replace(/["[\]']+/g, "").trim();

  const imgWidth = size === "sm" ? 350 : 600;
  const imgHeight = size === "sm" ? 350 : 600;

  return (
    <div className="product-card relative h-fit w-fit cursor-pointer rounded-lg border border-transparent transition-all hover:border-blue-600">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="rounded-lg object-cover transition-transform duration-300 hover:scale-105" // Added object-cover and transform
          src={cleanedImageUrl}
          alt={product.title}
          width={imgWidth}
          height={imgHeight}
        />
      </div>

      <div className="main-border-color pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full border bg-black p-1 pl-4 text-xs text-white">
        <h2 className="text-center">{product.title}</h2>
        <p className="rounded-full bg-blue-600 px-2 py-1 font-bold">${product.price}</p>
      </div>
    </div>
  );
}
