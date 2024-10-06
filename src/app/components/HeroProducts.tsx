import { Product } from "@/types/types";
import { ProductCard } from "../../components/ProductCard";

export async function HeroProducts({}) {
  const res = await Promise.all([
    fetch(`https://dummyjson.com/products/17`),
    fetch(`https://dummyjson.com/products/27`),
    fetch("https://dummyjson.com/products/23"),
  ]);

  const data = await Promise.all(res.map((r) => r.json()));

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
