import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import { Settings, ArrowRight, Layers, Workflow, BarChart3 } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" data-testid="products-showcase">
      <div className="container mx-auto px-4">
        {/* Clean header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-6">
            <Settings className="w-4 h-4 mr-2 text-tech-primary" />
            Наша продукция
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-6" 
              data-testid="products-title">
            Изделия из <span className="font-semibold text-tech-primary">нержавеющей стали</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" 
             data-testid="products-description">
            Производим широкий спектр металлических изделий высокого качества. 
            От простых конструкций до сложных архитектурных элементов.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Manufacturing features */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
              Наши преимущества
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Почему выбирают именно нас
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Layers className="w-8 h-8 text-tech-primary" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Материалы</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Сталь марок 304, 316, 430
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Workflow className="w-8 h-8 text-tech-primary" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Производство</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Резка, сварка, полировка
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BarChart3 className="w-8 h-8 text-tech-primary" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Контроль</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Проверка каждого изделия
              </p>
            </div>
          </div>
        </div>
        
        {/* Minimalist CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
              Готовы к сотрудничеству?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Обсудим ваш проект и подберем оптимальное техническое решение
            </p>
            <Button className="bg-tech-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg">
              Обсудить проект
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
