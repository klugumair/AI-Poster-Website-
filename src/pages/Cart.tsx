
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, Sparkles } from "lucide-react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };

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
              to="/shop" 
              className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
            >
              <ArrowLeft size={20} className="group-hover:animate-bounce" />
              <span className="text-sm font-medium animate-text-glow">Back to Shop</span>
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
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">Add some amazing posters to start your artistic journey!</p>
            <Link 
              to="/shop"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-button-glow"
            >
              <Sparkles className="inline w-5 h-5 mr-2 animate-spin-slow" />
              Explore Collection
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
            to="/shop" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition-all duration-200 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:animate-bounce" />
            <span className="text-sm font-medium animate-text-glow">Back to Shop</span>
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

      {/* Cart Content */}
      <main className="flex-1 px-4 py-8 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">Shopping Cart</h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 text-sm font-medium transition-all duration-200 hover:scale-105 animate-text-glow"
            >
              Clear Cart
            </button>
          </div>

          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={item.id} className="bg-card/70 backdrop-blur-md rounded-2xl border border-border/50 p-6 animate-fade-in hover:shadow-lg transition-all duration-300 group" style={{animationDelay: `${index * 100}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full md:w-32 h-32 object-cover rounded-xl animate-poster-glow group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{item.title}</h3>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 rounded-full border border-purple-300/50 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all duration-200 hover:scale-110 hover:border-purple-500"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold text-purple-700 dark:text-purple-300">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 rounded-full border border-purple-300/50 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all duration-200 hover:scale-110 hover:border-purple-500"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-lg">
                          Total: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${(item.price * item.quantity).toFixed(2)}</span>
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:text-red-600 transition-all duration-200 hover:scale-110"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white animate-fade-in animation-delay-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold animate-text-glow">Order Summary</h2>
                <div className="text-4xl font-bold animate-text-glow">
                  ${getTotalPrice().toFixed(2)}
                </div>
              </div>

              <div className="space-y-4">
                <button
                  className="w-full px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-button-glow"
                  onClick={handleCheckout}
                >
                  <Sparkles className="inline w-5 h-5 mr-2 animate-spin-slow" />
                  Proceed to Checkout
                </button>
                
                <div className="text-center">
                  <Link 
                    to="/shop" 
                    className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 animate-text-glow"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
