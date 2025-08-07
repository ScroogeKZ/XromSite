import ProductCard from "@/components/ui/product-card";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="products-page">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6" data-testid="products-page-title">
            Наша продукция
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="products-page-description">
            Полный каталог изделий из нержавеющей стали высочайшего качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Индивидуальные заказы</h2>
          <p className="text-gray-600 mb-6">
            Помимо стандартной продукции, мы выполняем индивидуальные заказы по техническим чертежам заказчика. 
            Наши специалисты готовы реализовать проекты любой сложности.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Работа по индивидуальным чертежам</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Различные марки нержавеющей стали</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Современные технологии обработки</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Контроль качества на всех этапах</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
