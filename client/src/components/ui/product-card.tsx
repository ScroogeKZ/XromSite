import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card 
      className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-tech-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
      data-testid={`product-card-${product.id}`}
    >
      <div 
        className="h-48 bg-cover bg-center relative overflow-hidden rounded-t-lg"
        style={{ backgroundImage: `url(${product.image})` }}
        data-testid={`product-image-${product.id}`}
      >
        {/* Clean overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Minimalist tech indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-tech-primary" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2" 
            data-testid={`product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" 
           data-testid={`product-description-${product.id}`}>
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
}
