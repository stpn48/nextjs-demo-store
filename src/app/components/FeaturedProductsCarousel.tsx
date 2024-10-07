import React from "react";
import { Carousel } from "./Carousel";

export async function FeaturedProductsCarousel({}) {
  const res = await fetch("https://dummyjson.com/products");

  const { products: featuredProducts } = await res.json();

  return <Carousel products={featuredProducts}></Carousel>;
}
