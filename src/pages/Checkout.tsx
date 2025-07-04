
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden">
        {/* Heroic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>

        {/* Header */}
        <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full animate-fade-in animate-button-glow">
          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
            >
              <ArrowLeft size={20} className="group-hover:animate-bounce" />
              <span className="text-sm font-medium animate-text-glow">Back to Cart</span>
            </Link>
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
        </header>

        {/* Empty Cart Message */}
        <main className="flex-1 flex items-center justify-center px-4 pt-32 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Sparkles className="w-12 h-12 text-white animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">Add some items to your cart before checking out!</p>
            <Link 
              to="/shop"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-button-glow"
            >
              <Sparkles className="inline w-5 h-5 mr-2 animate-spin-slow" />
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden">
      {/* Heroic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>

      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full animate-fade-in animate-button-glow">
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:animate-bounce" />
            <span className="text-sm font-medium animate-text-glow">Back to Cart</span>
          </Link>
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
      </header>

      {/* Checkout Content */}
      <main className="flex-1 pt-32 relative z-10">
        <div className="text-center mb-8 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">Secure Checkout</h1>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
          </div>
          <p className="text-lg text-muted-foreground">Complete your order to bring art to your space</p>
        </div>
        <CheckoutForm />
      </main>
    </div>
  );
};

export default Checkout;
