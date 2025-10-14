import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import friesImage from "@/assets/fries.jpg";
import wingsImage from "@/assets/wings.jpg";
import drinkImage from "@/assets/drink.jpg";

const specials = [
  {
    name: "Premium Fries",
    description: "Golden, crispy perfection with sea salt",
    price: "$5.99",
    image: friesImage,
  },
  {
    name: "Buffalo Wings",
    description: "Spicy, tangy, irresistible",
    price: "$12.99",
    image: wingsImage,
  },
  {
    name: "Craft Beverages",
    description: "Curated selection of premium drinks",
    price: "$4.99",
    image: drinkImage,
  },
];

const Specials = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black">
            Perfect <span className="text-gold">Pairings</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display italic">
            Complete your meal with our premium sides & drinks
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specials.map((special) => (
            <Card 
              key={special.name}
              className="bg-card border-border overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={special.image}
                  alt={special.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{special.name}</h3>
                  <p className="text-sm text-muted-foreground font-display">
                    {special.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-gold">{special.price}</span>
                  <Button variant="outline-gold" size="sm">
                    Order Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
