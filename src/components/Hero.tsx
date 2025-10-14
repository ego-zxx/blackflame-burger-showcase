import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import heroImage from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium gourmet burger" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/20">
              <Flame className="w-16 h-16 text-gold" />
            </div>
          </div>

          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              BLACK <span className="text-gold">FLAME</span>
            </h1>
            <p className="text-2xl md:text-4xl font-display text-gold italic">
              Crafted With Fire
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the bold, smoky perfection of premium gourmet burgers. 
            Each bite is a masterpiece, flame-grilled to luxurious perfection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg px-10 py-6">
              Order Online
            </Button>
            <Button variant="outline-gold" size="lg" className="w-full sm:w-auto text-lg px-10 py-6">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
