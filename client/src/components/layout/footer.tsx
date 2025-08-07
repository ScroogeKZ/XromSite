import { Link } from "wouter";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import logoPath from "@assets/1571623_1754544968143.png";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-800 dark:bg-brand-gray-900 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 flex items-center">
                <img 
                  src={logoPath} 
                  alt="ХРОМ-KZ логотип" 
                  className="h-full w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold" data-testid="footer-company-name">{COMPANY_INFO.name}</h3>
                <p className="text-gray-300 text-sm">{COMPANY_INFO.description}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Производство изделий из нержавеющей стали высочайшего качества для корпоративных и частных клиентов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200 text-xl" data-testid="social-instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200 text-xl" data-testid="social-facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200 text-xl" data-testid="social-whatsapp">
                <MessageCircle />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/products" className="hover:text-primary transition-colors duration-200">Лифтовые порталы</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors duration-200">Т-образные профили</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors duration-200">Перила</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors duration-200">Декоративные решетки</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors duration-200">О нас</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors duration-200">Портфолио</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-200">Отзывы</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-200">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span data-testid="footer-address">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span data-testid="footer-phone">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span data-testid="footer-email">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {COMPANY_INFO.fullName}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
