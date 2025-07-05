
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, ExternalLink, ShoppingCart, Copy, Sparkles, Palette, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "../components/ThemeToggle";
import { useCart } from "../hooks/useCart";

const POSTER_SIZES = [
  { id: "small", name: "Small (11x14 inches)", price: 12 },
  { id: "medium", name: "Medium (16x20 inches)", price: 15 },
  { id: "large", name: "Large (18x24 inches)", price: 20 },
  { id: "xlarge", name: "Extra Large (24x36 inches)", price: 25 }
];

const CustomOrder = () => {
  const { toast } = useToast();
  const { cartItems } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [orderCopied, setOrderCopied] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const generateCustomOrderSummary = () => {
    const selectedSizeInfo = POSTER_SIZES.find(size => size.id === selectedSize);
    const orderDetails = [
      `Custom Poster Order`,
      `Name: ${customerName}`,
      `Email: ${customerEmail}`,
      `Size: ${selectedSizeInfo?.name || "Not selected"}`,
      `Price: $${selectedSizeInfo?.price || 0}`,
      `Description: ${description || "No description provided"}`,
      `Images: Will be sent in Instagram conversation`
    ].join('\n');
    
    return `Hi! I'd like to order a custom poster:\n\n${orderDetails}\n\nI will send the images in our Instagram conversation.`;
  };

  const handleInstagramContact = async () => {
    if (!selectedSize || !customerName || !customerEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before contacting us.",
        variant: "destructive",
      });
      return;
    }

    const orderSummary = generateCustomOrderSummary();
    
    try {
      await navigator.clipboard.writeText(orderSummary);
      setOrderCopied(true);
      toast({
        title: "Order details copied!",
        description: "Your custom order details have been copied. Now opening Instagram to message us!",
      });
    } catch (error) {
      toast({
        title: "Please copy manually",
        description: "Copy the order details below and paste them when messaging us on Instagram.",
      });
    }

    setTimeout(() => {
      window.open('https://www.instagram.com/aethergraphix/', '_blank');
    }, 500);
  };

  const handleCopyOrderSummary = async () => {
    if (!selectedSize || !customerName || !customerEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to copy the order summary.",
        variant: "destructive",
      });
      return;
    }

    const orderSummary = generateCustomOrderSummary();
    
    try {
      await navigator.clipboard.writeText(orderSummary);
      setOrderCopied(true);
      toast({
        title: "Order summary copied!",
        description: "The order details have been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please select and copy the text manually.",
        variant: "destructive",
      });
    }
  };

  const selectedSizeInfo = POSTER_SIZES.find(size => size.id === selectedSize);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 text-foreground overflow-x-hidden">
      {/* Heroic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-300 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float animation-delay-500 blur-xl"></div>

      {/* Floating Header with Heroic Theme */}
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
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 pt-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heroic Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-purple-600 animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow">
              Create Your Masterpiece
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Transform your memories into stunning custom posters with our professional design expertise and premium materials
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Form Section */}
            <div className="space-y-8 animate-fade-in animation-delay-200">
              <div className="bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Palette className="w-6 h-6 text-purple-600 animate-pulse" />
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Order Details</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-purple-700 dark:text-purple-300">Your Name *</label>
                      <Input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your full name"
                        className="border-purple-200/50 focus:border-purple-500 transition-all duration-300 hover:scale-105"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-purple-700 dark:text-purple-300">Email Address *</label>
                      <Input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border-purple-200/50 focus:border-purple-500 transition-all duration-300 hover:scale-105"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-purple-700 dark:text-purple-300">Poster Size *</label>
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="border-purple-200/50 focus:border-purple-500 transition-all duration-300 hover:scale-105">
                          <SelectValue placeholder="Select a size" />
                        </SelectTrigger>
                        <SelectContent>
                          {POSTER_SIZES.map((size) => (
                            <SelectItem key={size.id} value={size.id}>
                              {size.name} - ${size.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-purple-700 dark:text-purple-300">Design Description (Optional)</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your vision: colors, style, text, layout preferences, or any special requests..."
                        rows={4}
                        className="border-purple-200/50 focus:border-purple-500 transition-all duration-300 hover:scale-105 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Image Instructions */}
              <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-300/30 shadow-xl animate-poster-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-shimmer"></div>
                
                <div className="relative z-10 text-center">
                  <Instagram className="w-16 h-16 text-purple-600 mx-auto mb-4 animate-bounce-slow" />
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Send Your Images</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Your precious memories deserve the highest quality treatment. Send us your images through Instagram for personalized assistance and optimal results.
                  </p>
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-purple-200/30">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                      <span className="font-semibold text-purple-700 dark:text-purple-300">Pro Tips for Best Results:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>📸 High-resolution images (300 DPI or higher)</li>
                      <li>🎨 Multiple photos for collage designs</li>
                      <li>🌈 Consider lighting and color balance</li>
                      <li>📐 Horizontal images work best for larger sizes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Order Summary */}
            <div className="space-y-8 animate-fade-in animation-delay-400">
              {/* Enhanced Pricing Section */}
              <div className="bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium Pricing</h2>
                  <div className="space-y-4">
                    {POSTER_SIZES.map((size) => (
                      <div 
                        key={size.id} 
                        className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                          selectedSize === size.id 
                            ? 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 border-purple-300 dark:from-blue-950/80 dark:to-purple-950/80 dark:border-purple-700 animate-button-glow' 
                            : 'bg-muted/30 border-border/30 hover:border-purple-300/50'
                        }`}
                      >
                        <div>
                          <span className="font-semibold">{size.name}</span>
                          <div className="text-xs text-muted-foreground mt-1">
                            Museum-grade • Premium finish
                          </div>
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${size.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {selectedSizeInfo && (
                    <div className="mt-6 pt-6 border-t border-purple-200/30">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span>Selected Total:</span>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-glow">
                          ${selectedSizeInfo.price}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Contact Section */}
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-8 rounded-2xl shadow-xl animate-poster-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-shimmer"></div>
                
                <div className="relative z-10 text-center text-white">
                  <Instagram className="w-12 h-12 mx-auto mb-4 animate-bounce-slow" />
                  <h2 className="text-2xl font-bold mb-4">Ready to Create?</h2>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    Let's bring your vision to life with our expert design team and premium materials
                  </p>
                  
                  <Button 
                    onClick={handleInstagramContact}
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg py-4 mb-4 hover:scale-105 transition-all duration-300 animate-button-glow"
                    size="lg"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    {orderCopied ? "Order Copied! Open Instagram" : "Contact Us on Instagram"}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h4 className="font-semibold mb-3">🚀 Your Journey to Amazing:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>1. 📋 Fill details above</div>
                      <div>2. 📱 Contact us</div>
                      <div>3. 🖼️ Send your images</div>
                      <div>4. ✨ Receive masterpiece</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Order Summary Preview */}
              {(customerName || customerEmail || selectedSize) && (
                <div className="bg-muted/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/30 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300">Order Summary Preview:</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyOrderSummary}
                      className="flex items-center gap-2 border-purple-300/50 hover:border-purple-500 hover:scale-105 transition-all duration-200"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Details
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line bg-card/50 p-4 rounded-xl border border-purple-200/30 select-all font-mono">
                    {generateCustomOrderSummary()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomOrder;
