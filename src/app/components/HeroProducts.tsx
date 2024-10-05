import { Product } from "@/types/types";
import { ProductCard } from "./ProductCard";

export async function HeroProducts({}) {
  const res = await Promise.all([
    fetch(`https://api.escuelajs.co/api/v1/products/28`),
    fetch(`https://api.escuelajs.co/api/v1/products/32`),
    fetch("https://api.escuelajs.co/api/v1/products/29"),
  ]);

  const data: Product[] = await Promise.all(res.map((r) => r.json()));

  return (
    <div className="mt-10 flex items-center gap-8">
      <ProductCard size="lg" product={data[0]} />
      <div className="flex flex-col gap-8">
        <ProductCard product={data[1]} />
        <ProductCard product={data[2]} />
      </div>
    </div>
  );
}
