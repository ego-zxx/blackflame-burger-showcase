import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = ["Home", "Menu", "Order Online", "Locations", "About Us", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-gold" />
            <div>
              <h1 className="text-xl font-bold tracking-tight">BLACK FLAME</h1>
              <p className="text-xs text-muted-foreground font-display">Burgers</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="lg" className="hidden md:inline-flex">
            Order Now
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Flame className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
