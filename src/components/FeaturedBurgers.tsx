import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import burgerFlame from "@/assets/burger-flame.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerBBQ from "@/assets/burger-bbq.jpg";
import burgerClassic from "@/assets/burger-classic.jpg";

const burgers = [
  {
    name: "The Flame",
    description: "Double beef, pepper jack, jalapeños, crispy onion strings, chipotle mayo",
    price: "$18.99",
    weight: "450g",
    image: burgerFlame,
  },
  {
    name: "Truffle Royale",
    description: "Wagyu beef, brie cheese, caramelized onions, arugula, truffle aioli",
    price: "$24.99",
    weight: "380g",
    image: burgerTruffle,
  },
  {
    name: "BBQ Bacon Beast",
    description: "Thick beef patty, crispy bacon, aged cheddar, onion rings, BBQ sauce",
    price: "$19.99",
    weight: "500g",
    image: burgerBBQ,
  },
  {
    name: "Classic Perfection",
    description: "Premium beef, aged American cheese, lettuce, tomato, special sauce",
    price: "$16.99",
    weight: "350g",
    image: burgerClassic,
  },
];

const FeaturedBurgers = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black">
            Featured <span className="text-gold">Burgers</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display italic">
            Handcrafted masterpieces, flame-grilled to perfection
          </p>
        </div>

        {/* Burgers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {burgers.map((burger) => (
            <Card 
              key={burger.name} 
              className="bg-card border-border overflow-hidden group hover:border-gold/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-4 py-2 rounded-full font-bold text-lg">
                  {burger.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {burger.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-display">
                    {burger.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground font-semibold">
                    {burger.weight}
                  </span>
                  <Button variant="gold" size="sm" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline-gold" size="lg" className="px-12">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBurgers;
