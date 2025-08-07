import Hero from "@/components/sections/hero";
import ProductsShowcase from "@/components/sections/products-showcase";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <ProductsShowcase />
      <Testimonials />
    </div>
  );
}
