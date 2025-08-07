import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Code, Database, Cloud, Cpu, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section 
      className="relative bg-minimal-light dark:bg-minimal-dark min-h-screen flex items-center"
      data-testid="hero-section"
    >
      {/* Minimal geometric background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Clean badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-8">
            <Code className="w-4 h-4 mr-2 text-tech-primary" />
            Качество и надежность с 2010 года
          </div>

          {/* Minimalist heading */}
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight" 
              data-testid="hero-title">
            <span className="font-bold text-tech-primary">ХРОМ-KZ</span>
            <span className="block text-2xl md:text-4xl mt-4 text-gray-600 dark:text-gray-300">
              Нержавеющая сталь
            </span>
          </h1>

          {/* Clean description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed" 
             data-testid="hero-description">
            Производим качественные изделия из нержавеющей стали для строительства, 
            архитектуры и промышленности. Точность, долговечность, красота.
          </p>

          {/* Clean CTA */}
          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => setContactOpen(true)}
              className="bg-tech-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors"
              data-testid="button-discuss"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Обсудить проект
            </Button>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center" data-testid="feature-quality">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-6 h-6 text-tech-primary" />
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Качество</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">ГОСТ стандарт</div>
            </div>
            
            <div className="text-center" data-testid="feature-experience">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-tech-primary" />
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Опыт</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">10+ лет</div>
            </div>
            
            <div className="text-center" data-testid="feature-service">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-6 h-6 text-tech-primary" />
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Сервис</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">24/7 поддержка</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Обсудить проект
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400 mb-6">
            Свяжитесь с нами для обсуждения вашего проекта
          </DialogDescription>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Телефон</h4>
              <p className="text-gray-700 dark:text-gray-300">+7 (727) 123-45-67</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Email</h4>
              <p className="text-gray-700 dark:text-gray-300">info@hrom-kz.com</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Адрес</h4>
              <p className="text-gray-700 dark:text-gray-300">г. Алматы, ул. Промышленная 15</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button 
              className="flex-1 bg-tech-accent hover:bg-blue-600 text-white"
              onClick={() => window.open('tel:+77271234567')}
            >
              Позвонить
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open('mailto:info@hrom-kz.com')}
            >
              Написать
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
