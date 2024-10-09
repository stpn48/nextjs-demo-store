import { FeaturedProductsCarousel } from "./components/FeaturedProductsCarousel";
import { HeroProducts } from "./components/HeroProducts";

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-20 overflow-x-hidden font-geistSans">
      <HeroProducts />
      <FeaturedProductsCarousel />
    </div>
  );
}
