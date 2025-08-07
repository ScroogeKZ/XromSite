import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      className="group bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 relative"
      data-testid={`product-card-${product.id}`}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-brand-teal-300/20 rounded-lg p-0.5">
        <div className="bg-white dark:bg-gray-800 h-full w-full rounded-lg"></div>
      </div>
      
      <div className="relative">
        <div 
          className="h-52 bg-cover bg-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden"
          style={{ backgroundImage: `url(${product.image})` }}
          data-testid={`product-image-${product.id}`}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <CardContent className="p-6 relative">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300" data-testid={`product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2" data-testid={`product-description-${product.id}`}>
            {product.description}
          </p>
          <Button 
            variant="link" 
            className="text-primary hover:text-primary/80 font-semibold p-0 group-hover:translate-x-2 transition-transform duration-300"
            data-testid={`product-details-${product.id}`}
          >
            Подробнее <ArrowRight className="ml-1 w-4 h-4 group-hover:animate-pulse" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
