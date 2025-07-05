
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Zap, Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float animation-delay-500 blur-2xl"></div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full animate-fade-in animate-button-glow">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 group">
          <OptimizedImage
            src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
            alt="AetherGraphix Logo"
            className="h-10 w-10 rounded-full shadow-lg object-cover border-2 border-purple-500/30 animate-poster-glow"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">AetherGraphix</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/shop" className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform animate-text-glow">Shop</Link>
          <Link to="/custom-order" className="text-foreground hover:text-purple-600 transition-colors duration-200 font-medium hover:scale-105 transform animate-text-glow">Custom Order</Link>
          <Link to="/cart" className="text-foreground hover:text-pink-600 transition-colors duration-200 font-medium hover:scale-105 transform animate-text-glow">Cart</Link>
        </div>
      </nav>

      {/* Hero Section with Floating Glowing Poster */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Floating Poster with Glow Effect */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 animate-float hidden lg:block">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 animate-pulse scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-40 animate-pulse scale-125 animation-delay-300"></div>
            <OptimizedImage
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="Featured Poster"
              className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700 animate-poster-glow"
              width={320}
              height={384}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow leading-tight">
              Ethereal
              <br />
              <span className="text-5xl md:text-7xl">Art Gallery</span>
            </h1>
            
            {/* Glowing Divider */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Transform your space with premium posters that blend 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> artistic excellence </span>
              and 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> ethereal beauty</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-200">
              <Link to="/shop">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-button-glow group">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/custom-order">
                <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-2 border-purple-500/50 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 dark:hover:from-purple-950/50 dark:hover:to-pink-950/50 transition-all duration-300 hover:scale-105 animate-button-glow">
                  Custom Design
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Heroic Theme */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">
              Crafting Visual Stories
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every poster is a gateway to imagination, meticulously designed to elevate your environment with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> premium quality </span>
              and 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> artistic vision</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Museum-grade materials and fade-resistant inks ensure your art remains vibrant for decades."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Unique Designs",
                description: "Curated collection of exclusive artwork that transforms any space into a visual masterpiece."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Impact",
                description: "Ready-to-frame perfection that immediately elevates your room's aesthetic and atmosphere."
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="mb-6 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posters Collection Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-pulse"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-text-glow">
              Posters Collection
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our handpicked selection of premium posters, each one designed to inspire and captivate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: 1,
                image: "/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png",
                title: "Cosmic Explorer",
                description: "Journey through the cosmos with this ethereal space artwork",
                price: "$24"
              },
              {
                id: 2,
                image: "/lovable-uploads/c9c1341f-8d13-4539-b653-cc85ab0c1b3a.png",
                title: "Stellar Artist",
                description: "Where creativity meets the infinite expanse of space",
                price: "$28"
              },
              {
                id: 3,
                image: "/lovable-uploads/4f2e1299-cbbf-460d-a97f-f995e1ce5878.png",
                title: "Desert Wanderer",
                description: "Capture the spirit of adventure with this western masterpiece",
                price: "$26"
              }
            ].map((poster, index) => (
              <div key={poster.id} className="group relative animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500 scale-110"></div>
                <div className="relative bg-card/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      width={400}
                      height={256}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {poster.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {poster.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {poster.price}
                      </span>
                      <Link to="/shop">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 animate-button-glow">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in animation-delay-600">
            <Link to="/shop">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-button-glow group">
                Explore Full Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Heroic Theme */}
      <footer className="relative py-16 px-4 mt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">
              Get In Touch
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your space? Connect with us and let's create something 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> extraordinary </span>
              together
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <Instagram className="w-8 h-8" />,
                name: "Instagram",
                handle: "@aethergraphix",
                color: "from-pink-500 to-purple-600",
                hoverColor: "group-hover:from-pink-600 group-hover:to-purple-700"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                name: "WhatsApp",
                handle: "+1 (555) 123-4567",
                color: "from-green-500 to-emerald-600",
                hoverColor: "group-hover:from-green-600 group-hover:to-emerald-700"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                name: "Email",
                handle: "hello@aethergraphix.com",
                color: "from-blue-500 to-cyan-600",
                hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-700"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                name: "Phone",
                handle: "+1 (555) 987-6543",
                color: "from-violet-500 to-purple-600",
                hoverColor: "group-hover:from-violet-600 group-hover:to-purple-700"
              }
            ].map((contact, index) => (
              <div key={index} className="group relative animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-500 scale-105`}></div>
                <div className="relative bg-card/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  <div className={`mb-4 inline-flex p-4 rounded-full bg-gradient-to-r ${contact.color} ${contact.hoverColor} text-white transition-all duration-300 group-hover:scale-110 animate-button-glow`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {contact.name}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {contact.handle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in animation-delay-800">
            <div className="flex justify-center items-center gap-4 mb-6">
              <OptimizedImage
                src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
                alt="AetherGraphix"
                className="h-12 w-12 rounded-full shadow-lg object-cover border-2 border-purple-500/30 animate-poster-glow"
                width={48}
                height={48}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">
                AetherGraphix
              </span>
            </div>
            <p className="text-muted-foreground">
              © 2024 AetherGraphix. Crafting ethereal art experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
