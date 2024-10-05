import { Product } from "@/types/types";
import { ProductDetails } from "./components/ProductDetails";
import { ImageSlider } from "./components/ImageSlider";

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`);
  const productDetails: Product = await res.json();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center p-4">
      <div className="main-border-color flex w-fit justify-center gap-10 rounded-lg border bg-black p-10">
        <ImageSlider images={productDetails.images} />
        <ProductDetails productDetails={productDetails} />
      </div>
    </div>
  );
}
