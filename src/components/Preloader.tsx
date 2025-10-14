import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Flame Icon with Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full animate-flame-pulse" />
          <Flame className="w-24 h-24 text-gold animate-flame-pulse relative z-10" />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black tracking-tight animate-fade-in">
            BLACK <span className="text-gold">FLAME</span>
          </h1>
          <p className="text-lg font-display text-gold italic animate-fade-in">
            Crafted With Fire
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold to-amber animate-[width_2s_ease-in-out] w-full origin-left" 
               style={{ animation: "loading 2s ease-in-out forwards" }} />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
