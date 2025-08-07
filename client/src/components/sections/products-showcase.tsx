import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";

export default function ProductsShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" data-testid="products-showcase">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20L0 0h40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              🔧 Продукция
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6" data-testid="products-title">
            Наша <span className="bg-gradient-to-r from-primary to-brand-teal-300 bg-clip-text text-transparent">продукция</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="products-description">
            Производим широкий спектр изделий из нержавеющей стали высочайшего качества. От лифтовых порталов до декоративных элементов — решения для любых потребностей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fadeInUp" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Нужно индивидуальное решение?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Мы изготовим любые изделия по вашим чертежам
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
