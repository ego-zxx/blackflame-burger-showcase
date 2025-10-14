import { Flame, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-gold" />
              <div>
                <h3 className="text-xl font-bold">BLACK FLAME</h3>
                <p className="text-xs text-muted-foreground font-display">Burgers</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-display leading-relaxed">
              Crafting premium gourmet burgers with fire and passion since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {["Menu", "Order Online", "Locations", "About Us", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>123 Flame Street, Gourmet District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>hello@blackflameburgers.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold">Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 12am</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Black Flame Burgers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
