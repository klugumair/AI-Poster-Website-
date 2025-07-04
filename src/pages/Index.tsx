
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, ChevronRight, Instagram, Mail, Palette, Truck, Award, Sparkles, Zap, Heart, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { useCart } from "../hooks/useCart";

const Index = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const glowingPosters = [
    {
      id: 1,
      image: "/lovable-uploads/69952a6a-310c-4031-aa40-21ba3d52bcb9.png",
      title: "Freedom's Flight",
      description: "A powerful symbol of liberation and hope",
      theme: "Revolutionary Spirit",
      colors: "Red & Black"
    },
    {
      id: 2,
      image: "/lovable-uploads/b4884bba-27cc-4124-971b-73c9b69d9108.png",
      title: "Cosmic Dreams",
      description: "Where earth meets the infinite cosmos",
      theme: "Surreal Landscape",
      colors: "Pink & Blue"
    },
    {
      id: 3,
      image: "/lovable-uploads/1b09030d-2d9c-4766-99ac-ef5e966fd040.png",
      title: "Urban Nights",
      description: "The pulse of city life under moonlight",
      theme: "Modern Metropolis",
      colors: "Purple & Silver"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
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
      <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
        
        {/* Floating Glowing Poster Image */}
        <div className="absolute top-20 right-10 md:right-20 z-0 animate-float">
          <div className="relative">
            <img
              src="/lovable-uploads/0ede5133-a3ce-42bc-95b3-93ce09f22575.png"
              alt="Japanese Garden Poster"
              className="w-32 h-40 md:w-48 md:h-60 object-cover rounded-lg shadow-2xl opacity-30 hover:opacity-60 transition-all duration-500 animate-poster-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-lg animate-shimmer"></div>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-40 left-10 md:left-20 z-0 animate-float animation-delay-300">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 z-0 animate-bounce-slow animation-delay-500">
          <Sparkles className="w-6 h-6 text-blue-400 opacity-40" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-scale-in animate-text-glow">
              AetherGraphix
            </h1>
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-500 animate-spin-slow" />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200 animate-slide-up">
            Transform your space with stunning, high-quality posters that capture the essence of modern art and design. Each piece tells a story, evokes emotion, and brings life to your walls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Link to="/shop">
              <Button size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-button-glow border-2 border-blue-500/50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 animate-shimmer border-2 border-purple-500/30">
                Custom Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section id="features" className="py-16 px-4 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Why Choose AetherGraphix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Museum-grade paper with vibrant, fade-resistant inks</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Free worldwide shipping on orders over $25</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-muted-foreground">30-day money-back guarantee on all purchases</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">Personalized posters tailored to your vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Animated Posters Collection */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Glowing Art Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-200">
              Discover our exclusive collection of luminescent posters that bring ethereal beauty and ambient lighting to any space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {glowingPosters.map((poster, index) => (
              <div key={poster.id} className={`group animate-fade-in animation-delay-${(index + 1) * 200}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image container with glow */}
                  <div className="relative p-6">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={poster.image} 
                        alt={poster.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 animate-poster-glow"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating glow effects */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {poster.title}
                        </h3>
                        <div className="flex gap-2">
                          <Eye className="w-5 h-5 text-blue-400 animate-pulse" />
                          <Heart className="w-5 h-5 text-pink-400 animate-bounce" />
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {poster.description}
                      </p>
                      
                      <div className="flex justify-between items-center pt-4">
                        <div className="space-y-1">
                          <p className="text-sm text-blue-400 font-medium">{poster.theme}</p>
                          <p className="text-xs text-gray-500">{poster.colors}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                          <span className="text-sm text-yellow-400 font-medium">Glowing Effect</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in animation-delay-600">
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 animate-button-glow border-2 border-purple-500/30">
                Explore All Glowing Posters
                <Sparkles className="ml-2 w-5 h-5 animate-spin-slow" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">
              The AetherGraphix Story
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-fade-in animation-delay-200">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Crafting Visual Poetry</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At AetherGraphix, we believe that art is not just decoration—it's a language that speaks to the soul. 
                  Every piece in our collection is carefully curated to evoke emotion, inspire creativity, and transform 
                  ordinary spaces into extraordinary experiences.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse opacity-30"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Beyond Traditional Art</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our innovative printing techniques and premium materials ensure that each poster maintains its 
                  vibrancy for years to come. We push the boundaries of what's possible, creating pieces that 
                  seem to glow with their own inner light.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full animate-pulse opacity-30 animation-delay-200"></div>
              </div>
            </div>
            
            <div className="relative animate-fade-in animation-delay-400">
              <div className="relative">
                <img
                  src="/lovable-uploads/21eefac3-70c1-4306-8a19-75377de01429.png"
                  alt="Artistic moment"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-poster-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-shimmer"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in animation-delay-600">
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Artistic Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each piece is a masterwork of digital artistry, combining traditional aesthetics with modern innovation 
                to create something truly unique and captivating.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-500 animation-delay-200">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Luminous Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our proprietary printing process creates posters that seem to emit their own light, 
                bringing an ethereal glow to any room they grace.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-500 animation-delay-400">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300 animate-pulse">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Emotional Connection</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe art should move you. Every piece is selected for its ability to create 
                an emotional resonance that transforms both space and spirit.
              </p>
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
