import React from "react";
import { Product } from "@/types/types";
import { Carousel } from "./Carousel";

export async function FeaturedProductsCarousel({}) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=20&limit=20");

  const featuredProducts: Product[] = await res.json();

  return <Carousel products={featuredProducts}></Carousel>;
}
