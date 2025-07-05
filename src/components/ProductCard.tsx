
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import OptimizedImage from './OptimizedImage';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (productId: number, quantity: number) => void;
  onAddToCart: (product: Product) => void;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = memo(({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  index
}) => {
  return (
    <div 
      className="bg-card/70 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group relative" 
      style={{animationDelay: `${index * 50}ms`}}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 animate-poster-glow"
          width={400}
          height={256}
        />
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm animate-pulse border-purple-500/30"
        >
          {product.category}
        </Badge>
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge variant="outline" className="bg-blue-500/90 text-white border-blue-500 animate-button-glow">
            <Info className="w-3 h-3 mr-1" />
            View Details
          </Badge>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {product.description}
        </p>
        
        {/* Enhanced Product Details */}
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-lg border border-purple-200/30 dark:border-purple-800/30">
          <h4 className="text-sm font-semibold mb-2 text-purple-700 dark:text-purple-300">Premium Features:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Museum-grade 200gsm paper</li>
            <li>• Multiple sizes (A4, A3, A2)</li>
            <li>• Fade-resistant premium inks</li>
            <li>• Ready to frame perfection</li>
          </ul>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground font-medium">(4.9)</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuantityChange(product.id, Math.max(1, quantity - 1))}
              className="hover:scale-110 transition-transform duration-200 border-purple-300/50 hover:border-purple-500"
            >
              -
            </Button>
            <span className="w-8 text-center font-semibold text-purple-700 dark:text-purple-300">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuantityChange(product.id, quantity + 1)}
              className="hover:scale-110 transition-transform duration-200 border-purple-300/50 hover:border-purple-500"
            >
              +
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-button-glow"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button variant="outline" className="w-full hover:scale-105 transition-all duration-200 border-purple-300/50 hover:border-purple-500 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
