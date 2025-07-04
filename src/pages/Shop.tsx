
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border shadow-sm rounded-full animate-fade-in">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="h-6 w-px bg-border" />
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <img
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border"
              draggable={false}
            />
            <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105"
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium">Cart</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Poster Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of high-quality posters to transform your space
            </p>
          </div>

          {/* Custom Order Section */}
          <div className="mb-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-200">
            <h2 className="text-2xl font-bold text-white mb-4">Want Something Custom?</h2>
            <p className="text-white/90 mb-6">
              Create your own personalized poster with your images and our professional design touch
            </p>
            <Link to="/custom-order">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold hover:scale-105 transition-all duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Order Custom Poster
              </Button>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-card rounded-lg shadow border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group" style={{animationDelay: `${index * 50}ms`}}>
                <div className="relative overflow-hidden">
                  {loadingImages[product.id] !== false && (
                    <Skeleton className="w-full h-80" />
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 ${loadingImages[product.id] === false ? 'opacity-100' : 'opacity-0 absolute'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(product.id)}
                    onError={() => handleImageError(product.id)}
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm animate-pulse"
                  >
                    {product.category}
                  </Badge>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="outline" className="bg-blue-500/90 text-white border-blue-500">
                      <Info className="w-3 h-3 mr-1" />
                      View Details
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  {/* Enhanced Product Details */}
                  <div className="mb-4 p-3 bg-muted/30 rounded-md">
                    <h4 className="text-sm font-semibold mb-2">Product Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Premium quality print on 200gsm paper</li>
                      <li>• Available in multiple sizes (A4, A3, A2)</li>
                      <li>• Fade-resistant inks for longevity</li>
                      <li>• Ready to frame</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">(4.9)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) - 1)}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold">{getQuantity(product.id)}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) + 1)}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" className="w-full hover:scale-105 transition-all duration-200">
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
