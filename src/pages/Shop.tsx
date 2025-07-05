
import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "../components/ProductCard";
import OptimizedImage from "../components/OptimizedImage";

const Shop = () => {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Memoize cart item count for performance
  const cartItemCount = useMemo(() => 
    cartItems.reduce((total, item) => total + item.quantity, 0), 
    [cartItems]
  );

  const getQuantity = useCallback((productId: number) => 
    quantities[productId] || 1, 
    [quantities]
  );

  const setQuantity = useCallback((productId: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  }, []);

  const handleAddToCart = useCallback((product: any) => {
    const quantity = getQuantity(product.id);
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.name,
        price: product.price,
        img: product.image
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  }, [addToCart, getQuantity, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden">
      {/* Heroic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>

      {/* Floating Header with Heroic Theme */}
      <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full animate-fade-in animate-button-glow">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:animate-bounce" />
            <span className="text-sm font-medium animate-text-glow">Back to Home</span>
          </Link>
          <div className="h-6 w-px bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 group">
            <OptimizedImage
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border animate-poster-glow"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">AetherGraphix</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
          >
            <ShoppingCart size={20} className="group-hover:animate-bounce" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse animate-button-glow">
                {cartItemCount}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium animate-text-glow">Cart</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Heroic Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">Premium Poster Collection</h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Discover our curated collection of high-quality posters that bring ethereal beauty and artistic excellence to transform your space
            </p>
          </div>

          {/* Custom Order Section with Heroic Theme */}
          <div className="mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center hover:scale-105 transition-all duration-500 animate-fade-in animation-delay-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-shimmer"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-text-glow">Want Something Custom?</h2>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
                Create your own personalized masterpiece with your images and our professional design expertise
              </p>
              <Link to="/custom-order">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold hover:scale-105 transition-all duration-300 px-8 py-4 text-lg animate-button-glow">
                  <Plus className="w-5 h-5 mr-2 animate-spin-slow" />
                  Order Custom Poster
                </Button>
              </Link>
            </div>
          </div>

          {/* Optimized Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
