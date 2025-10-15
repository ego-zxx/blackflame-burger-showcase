import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home", type: "anchor" },
    { name: "Menu", href: "/menu", type: "link" },
    { name: "Order Online", href: "#order", type: "anchor" },
    { name: "Specials", href: "#specials", type: "anchor" },
    { name: "Testimonials", href: "#testimonials", type: "anchor" },
    { name: "Contact", href: "#contact", type: "anchor" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80; // navbar height
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
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
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            )}
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
