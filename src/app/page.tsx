import { FeaturedProductsCarousel } from "./components/FeaturedProductsCarousel";
import { HeroProducts } from "./components/HeroProducts";

export default async function Home() {
  return (
    <div className="font-geistSans flex flex-col items-center gap-20">
      <HeroProducts />
      <FeaturedProductsCarousel />
    </div>
  );
}
