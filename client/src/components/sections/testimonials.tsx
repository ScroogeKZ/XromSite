import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Tag } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-teal-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden" data-testid="testimonials-section">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-teal-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              ⭐ Отзывы клиентов
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6" data-testid="testimonials-title">
            Что говорят <span className="bg-gradient-to-r from-primary to-brand-teal-300 bg-clip-text text-transparent">клиенты</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Доверие наших клиентов — наша главная награда и мотивация для постоянного совершенствования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 relative group animate-fadeInUp" 
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-brand-teal-300/20 rounded-lg p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white dark:bg-gray-800 h-full w-full rounded-lg"></div>
              </div>
              
              <CardContent className="p-0 relative">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-primary/20"
                      data-testid={`testimonial-avatar-${testimonial.id}`}
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-primary font-medium" data-testid={`testimonial-position-${testimonial.id}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed" data-testid={`testimonial-content-${testimonial.id}`}>
                  “{testimonial.content}”
                </p>
                <div className="flex text-yellow-500 mb-2" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* BI Group Certificate */}
          <Card className="gradient-brand text-white p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border-0 relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.4s' }} data-testid="bi-group-certificate">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-teal-300 opacity-10 animate-pulse"></div>
            
            <CardContent className="p-0 relative">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <Award className="text-6xl text-yellow-400 mb-4 w-16 h-16 mx-auto animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Благодарственное письмо</h3>
                <p className="text-brand-teal-100 font-medium">от компании BI Group</p>
              </div>
              <p className="text-center mb-6 text-lg leading-relaxed">
                “За высокое качество выполненных работ и профессиональный подход к реализации проектов”
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/30">
                  <Tag className="text-yellow-400 w-5 h-5" />
                  <span className="font-semibold text-lg">Сертифицированный партнер</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
