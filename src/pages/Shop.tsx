
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Plus, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const setQuantity = (productId: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleImageLoad = (productId: number) => {
    setLoadingImages(prev => ({ ...prev, [productId]: false }));
  };

  const handleImageError = (productId: number) => {
    setLoadingImages(prev => ({ ...prev, [productId]: false }));
  };

  const handleAddToCart = (product: any) => {
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
  };

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
            <img
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border animate-poster-glow"
              draggable={false}
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

          {/* Products Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-card/70 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group relative" style={{animationDelay: `${index * 100}ms`}}>
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden">
                  {loadingImages[product.id] !== false && (
                    <Skeleton className="w-full h-64" />
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 animate-poster-glow ${loadingImages[product.id] === false ? 'opacity-100' : 'opacity-0 absolute'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(product.id)}
                    onError={() => handleImageError(product.id)}
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                  
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
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${product.price}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) - 1)}
                        className="hover:scale-110 transition-transform duration-200 border-purple-300/50 hover:border-purple-500"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold text-purple-700 dark:text-purple-300">{getQuantity(product.id)}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) + 1)}
                        className="hover:scale-110 transition-transform duration-200 border-purple-300/50 hover:border-purple-500"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-button-glow"
                      onClick={() => handleAddToCart(product)}
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
