
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, ChevronRight, Instagram, Mail, Palette, Truck, Award, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { Skeleton } from "../components/ui/skeleton";

const Index = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border shadow-sm rounded-full animate-fade-in">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
          <img
            src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
            alt="AetherGraphix Logo"
            className="h-8 w-8 rounded-full shadow object-cover border border-border"
            draggable={false}
          />
          <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">Home</Link>
            <Link to="/shop" className="text-foreground hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">Products</Link>
            <a href="#about" className="text-foreground hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">About</a>
            <a href="#features" className="text-foreground hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">Features</a>
          </nav>
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

      {/* Hero Section with Enhanced Animations */}
      <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-scale-in">
              AetherGraphix
            </h1>
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Transform your space with stunning, high-quality posters that capture the essence of modern art and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Link to="/shop">
              <Button size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse">
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
                Custom Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section id="features" className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Why Choose AetherGraphix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Museum-grade paper with vibrant, fade-resistant inks</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Free worldwide shipping on orders over $25</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-muted-foreground">30-day money-back guarantee on all purchases</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">Personalized posters tailored to your vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="bg-card rounded-lg shadow border overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.style.display = 'block';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s' }}
                    />
                    <Skeleton className="w-full h-64 hidden" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in animation-delay-600">
            <Link to="/shop">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
                View All Products
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About AetherGraphix</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're passionate about bringing exceptional art into your everyday spaces. Our carefully curated collection 
            features premium quality posters that blend contemporary aesthetics with timeless appeal. Each piece is 
            printed on high-grade materials to ensure vibrant colors and lasting durability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">High-grade materials and professional printing for lasting beauty.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Quick and secure delivery to bring art to your doorstep.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">Personalized posters tailored to your unique vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border"
              draggable={false}
            />
            <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
          </div>
          
          {/* Contact Information */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">📞 Get in Touch</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-muted-foreground">
              <a 
                href="https://www.instagram.com/aethergraphix/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
                <span>📸 Follow us @aethergraphix</span>
              </a>
              
              <a 
                href="https://wa.me/923349261882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp: +92 334 926 1882</span>
              </a>
              
              <a 
                href="mailto:aipsoters23@gmail.com"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Mail size={20} />
                <span>✉️ aipsoters23@gmail.com</span>
              </a>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 text-center">
            🌟 Transforming spaces with exceptional art and design 🌟
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition">Shop</Link>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
            <Link to="/custom-order" className="text-muted-foreground hover:text-foreground transition">Custom Orders</Link>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2024 AetherGraphix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
