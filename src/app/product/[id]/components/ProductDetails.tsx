import { Product } from "@/types/types";

type Props = {
  productDetails: Product;
};

export function ProductDetails({ productDetails }: Props) {
  return (
    <div className="flex w-[540px] flex-col justify-between gap-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">{productDetails.title}</h1>
        <p className="h-fit w-fit rounded-full bg-blue-600 px-4 py-2 pr-5 text-justify text-white">
          ${productDetails.price}
        </p>
        <p className="text-secondary">{productDetails.description}</p>
      </div>
      <button className="rounded-full bg-blue-600 px-4 py-3 text-white hover:bg-blue-700">
        Add To Cart
      </button>
    </div>
  );
}
