import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import logoPath from "@assets/1571623_1754544968143.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/products", label: "Продукция" },
    { href: "/about", label: "О нас" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/contact", label: "Контакты" },
  ];

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        location === href
          ? "text-tech-primary"
          : "text-gray-600 dark:text-gray-300 hover:text-tech-primary"
      }`}
      onClick={onClick}
      data-testid={`nav-link-${href.replace('/', '') || 'home'}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50" data-testid="header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="h-8 flex items-center">
              <img 
                src={logoPath} 
                alt="ХРОМ-KZ логотип" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-lg font-semibold text-tech-primary">{COMPANY_INFO.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Нержавеющая сталь</div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700 dark:text-gray-200">
              <Phone className="text-primary w-4 h-4" />
              <span className="font-medium" data-testid="header-phone">{COMPANY_INFO.phone}</span>
            </div>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavLink key={item.href} {...item} onClick={() => setIsOpen(false)} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
