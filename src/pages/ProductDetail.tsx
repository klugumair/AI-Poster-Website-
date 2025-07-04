
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Sparkles } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const product = products.find(item => item.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles className="w-12 h-12 text-white animate-spin-slow" />
          </div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Product Not Found</h1>
          <Link to="/shop" className="text-blue-600 hover:text-purple-600 transition-colors animate-text-glow">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      img: product.image
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden">
      {/* Heroic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>

      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full animate-fade-in animate-button-glow">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:animate-bounce" />
            <span className="text-sm font-medium animate-text-glow">Back</span>
          </button>
          <div className="h-6 w-px bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
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
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium animate-text-glow">Cart</span>
          </Link>
        </div>
      </header>

      {/* Product Detail */}
      <main className="flex-1 px-4 py-8 pt-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="bg-card/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-border/50 animate-fade-in group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-full object-cover animate-poster-glow group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center animate-fade-in animation-delay-200">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full animate-button-glow">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">{product.name}</h1>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${product.price}</span>
              </div>

              {/* Enhanced Rating */}
              <div className="flex items-center mb-8">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">(4.9 out of 5)</span>
              </div>

              <div className="space-y-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-button-glow"
                >
                  <Sparkles className="inline w-5 h-5 mr-2 animate-spin-slow" />
                  Add to Cart
                </button>
                
                <div className="text-center">
                  <Link 
                    to="/shop" 
                    className="text-blue-600 hover:text-purple-600 font-medium transition-colors animate-text-glow"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-xl border border-purple-200/30 dark:border-purple-800/30">
                <h3 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 text-lg">Premium Product Features</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Museum-grade 200gsm premium paper</li>
                  <li>• Available in multiple sizes (A4, A3, A2)</li>
                  <li>• Fade-resistant archival inks</li>
                  <li>• Ready to frame perfection</li>
                  <li>• Fast worldwide shipping</li>
                  <li>• 30-day satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
