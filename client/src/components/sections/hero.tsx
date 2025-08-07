import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative gradient-gray text-white py-24 lg:py-32 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='0,30 30,0 60,30 30,60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-900/20 to-brand-gray-900/40 backdrop-blur-sm"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rotate-12 animate-bounce hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-primary/40 rounded-full animate-ping hidden lg:block"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30">
              ✨ Более 10 лет на рынке
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Производство изделий из{" "}
            <span className="bg-gradient-to-r from-primary to-brand-teal-300 bg-clip-text text-transparent">
              нержавеющей стали
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto lg:mx-0" data-testid="hero-description">
            Качественные изделия для корпоративных и частных заказчиков в Астане. Лучшие материалы, современные технологии, разумные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              data-testid="button-calculate"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Получить расчет
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/50 text-white hover:bg-primary hover:text-white hover:border-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              <Phone className="mr-2 w-5 h-5" />
              Связаться с нами
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mx-0">
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300" data-testid="stat-experience">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-200 font-medium">лет на рынке</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300" data-testid="stat-projects">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-200 font-medium">выполненных проектов</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300" data-testid="stat-support">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-200 font-medium">техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
