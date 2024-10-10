import { AddCartButton } from "./AddCartButton";
import { Product } from "@/types/types";

type Props = {
  productDetails: Product;
};

export function ProductDetails({ productDetails }: Props) {
  return (
    <div className="flex w-fit flex-col items-center justify-between gap-4 md:w-[540px]">
      <div className="flex flex-col items-center gap-5 md:items-start">
        <h1 className="text-4xl font-bold dark:text-white">{productDetails.title}</h1>
        <p className="h-fit w-fit rounded-full bg-blue-600 px-4 py-1 pr-5 text-white">
          ${productDetails.price}
        </p>
        <p className="text-secondary h-fit w-fit flex-wrap px-32 text-center md:px-0 md:text-justify">
          {productDetails.description}
        </p>
        <AddCartButton productDetails={productDetails} />
      </div>
    </div>
  );
}
