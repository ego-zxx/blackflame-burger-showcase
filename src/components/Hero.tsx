import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-burger.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
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
            <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg px-10 py-6" onClick={() => navigate('/menu')}>
              Order Now
            </Button>
            <Button variant="outline-gold" size="lg" className="w-full sm:w-auto text-lg px-10 py-6" onClick={() => navigate('/menu')}>
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Arrow */}
      <div className="absolute bottom-8 right-8 md:right-12 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs md:text-sm text-gold/70 font-medium">Scroll</span>
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-gold" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
