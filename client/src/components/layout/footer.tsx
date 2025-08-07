import { Link } from "wouter";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import logoPath from "@assets/1571623_1754544968143.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 flex items-center">
                <img 
                  src={logoPath} 
                  alt="ХРОМ-KZ логотип" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="footer-company-name">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Нержавеющая сталь</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Производим качественные изделия из нержавеющей стали для строительства, 
              архитектуры и промышленности. Надежность и красота в каждом изделии.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors duration-200" data-testid="social-github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors duration-200" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors duration-200" data-testid="social-website">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Продукция</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><Link href="/products" className="hover:text-tech-primary transition-colors duration-200 text-sm">Лифтовые порталы</Link></li>
              <li><Link href="/products" className="hover:text-tech-primary transition-colors duration-200 text-sm">Т-образные профили</Link></li>
              <li><Link href="/products" className="hover:text-tech-primary transition-colors duration-200 text-sm">Перила и ограждения</Link></li>
              <li><Link href="/products" className="hover:text-tech-primary transition-colors duration-200 text-sm">Декоративные решетки</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-tech-primary flex-shrink-0" />
                <span data-testid="footer-address">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tech-primary" />
                <span data-testid="footer-phone">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tech-primary" />
                <span data-testid="footer-email">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; 2025 {COMPANY_INFO.fullName}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
