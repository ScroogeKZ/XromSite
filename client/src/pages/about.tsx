import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100" data-testid="about-page">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6" data-testid="about-title">
              О компании ХРОМ-KZ
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="about-description-1">
              Компания "ХРОМ КЗ" - ведущий производитель и прямой поставщик изделий из нержавеющей стали в Астане. 
              Мы работаем с корпоративными и частными заказчиками уже более 10 лет.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="about-description-2">
              За время нашей деятельности мы сменили два цеха и в настоящее время планируем дальнейшее расширение 
              производства и спектра услуг. Наши клиенты - это крупные ЖК застройщики, которые доверяют нам 
              самые ответственные проекты.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="text-center p-4 bg-white shadow-md" data-testid="stat-years">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">лет опыта</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white shadow-md" data-testid="stat-facilities">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-gray-600">производственных цеха</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3" data-testid="advantage-materials">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="text-gray-700">Лучшие материалы и технологии</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="advantage-timing">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="text-gray-700">Выполнение заказов в кратчайшие сроки</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="advantage-pricing">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="text-gray-700">Самые подходящие цены для любого клиента</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="advantage-quality">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="text-gray-700">Высокое качество без компромиссов</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://pixabay.com/get/g123c4076f54379d52bbd73745510d1f193787cfd478d1609d4d42141cb1cdb096e3fd2769796c8f9112d642926159d7b577e22be2e935e6bb0aedfd8c83cfcca_1280.jpg" 
              alt="Производственный цех ХРОМ-KZ" 
              className="rounded-xl shadow-lg w-full"
              data-testid="about-facility-image"
            />
            
            <Card className="bg-white p-6 shadow-lg" data-testid="advantages-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Наши преимущества</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3" data-testid="advantage-competitive-prices">
                    <Star className="text-yellow-500 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Конкурентные цены на все виды продукции</span>
                  </li>
                  <li className="flex items-start space-x-3" data-testid="advantage-individual-approach">
                    <Star className="text-yellow-500 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Индивидуальный подход к каждому заказу</span>
                  </li>
                  <li className="flex items-start space-x-3" data-testid="advantage-full-cycle">
                    <Star className="text-yellow-500 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Полный цикл производства и монтажа</span>
                  </li>
                  <li className="flex items-start space-x-3" data-testid="advantage-warranty">
                    <Star className="text-yellow-500 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Гарантия качества на все изделия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
