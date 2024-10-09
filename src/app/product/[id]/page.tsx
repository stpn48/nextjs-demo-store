import { Product } from "@/types/types";
import { ProductDetails } from "./components/ProductDetails";
import { ImageSlider } from "./components/ImageSlider";
import { ItemCarousel } from "./components/ItemCarousel";
import { Suspense } from "react";
import { ItemCarouselSkeleton } from "./components/ItemCarouselSkeleton";

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const productDetails: Product = await res.json();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-10 overflow-x-hidden p-4">
      <div className="main-border-color flex w-fit justify-center gap-10 overflow-x-hidden rounded-lg border bg-black p-10">
        <ImageSlider images={productDetails.images} />
        <ProductDetails productDetails={productDetails} />
      </div>
      <Suspense fallback={<ItemCarouselSkeleton />}>
        <ItemCarousel />
      </Suspense>
    </div>
  );
}
