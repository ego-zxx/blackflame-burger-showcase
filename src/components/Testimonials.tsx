import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    review: "The best burger I've ever tasted. The Truffle Royale is absolutely divine. Worth every penny!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    review: "Black Flame has redefined what a burger should be. The quality is unmatched, and the atmosphere is perfect.",
    rating: 5,
  },
  {
    name: "David Martinez",
    review: "I'm a regular now. The Flame burger is my go-to. Perfectly cooked every single time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black">
            Customer <span className="text-gold">Favorites</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display italic">
            What our guests are saying
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 space-y-6 hover:border-gold/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/90 font-display leading-relaxed text-lg">
                "{testimonial.review}"
              </p>

              {/* Name */}
              <div className="pt-4 border-t border-gold/20">
                <p className="font-bold text-gold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">Verified Guest</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
