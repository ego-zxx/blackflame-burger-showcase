import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Import burger images
import classicBurger from "@/assets/burger-classic.jpg";
import bbqBurger from "@/assets/burger-bbq.jpg";
import truffleBurger from "@/assets/burger-truffle.jpg";
import flameBurger from "@/assets/burger-flame.jpg";
import fries from "@/assets/fries.jpg";
import wings from "@/assets/wings.jpg";
import drink from "@/assets/drink.jpg";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Flame Burger",
    category: "burgers",
    price: "$14.99",
    description: "Flame-grilled beef patty with lettuce, tomato, onion, and our signature sauce",
    image: classicBurger,
  },
  {
    id: 2,
    name: "BBQ Bacon Burger",
    category: "burgers",
    price: "$16.99",
    description: "Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings",
    image: bbqBurger,
  },
  {
    id: 3,
    name: "Truffle Mushroom Burger",
    category: "burgers",
    price: "$18.99",
    description: "Sautéed mushrooms, truffle aioli, Swiss cheese, and arugula",
    image: truffleBurger,
  },
  {
    id: 4,
    name: "The Black Flame Special",
    category: "burgers",
    price: "$19.99",
    description: "Double patty, aged cheddar, caramelized onions, jalapeños, and flame sauce",
    image: flameBurger,
  },
  {
    id: 5,
    name: "Truffle Parmesan Fries",
    category: "sides",
    price: "$7.99",
    description: "Crispy fries tossed with truffle oil and parmesan cheese",
    image: fries,
  },
  {
    id: 6,
    name: "Flame-Grilled Wings",
    category: "sides",
    price: "$12.99",
    description: "Spicy wings with our signature flame sauce and ranch dip",
    image: wings,
  },
  {
    id: 7,
    name: "Craft Sodas",
    category: "drinks",
    price: "$3.99",
    description: "Selection of artisan sodas and specialty beverages",
    image: drink,
  },
  {
    id: 8,
    name: "Milkshakes",
    category: "drinks",
    price: "$6.99",
    description: "Vanilla, chocolate, or strawberry - thick and creamy",
    image: drink,
  },
];

const categories = [
  { id: "all", name: "All Items" },
  { id: "burgers", name: "Burgers" },
  { id: "sides", name: "Sides" },
  { id: "drinks", name: "Drinks" },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { elementRef, isVisible } = useScrollAnimation();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <FloatingCart />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              Our <span className="text-gold">Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of premium flame-grilled burgers and sides
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "gold" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className="min-w-[120px]"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section ref={elementRef} className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className={`overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-4 py-2 rounded-full font-bold">
                      {item.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      <Button 
                        variant="outline-gold" 
                        className="w-full mt-4"
                        onClick={() => {
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          });
                          toast({
                            title: "Added to cart",
                            description: `${item.name} has been added to your cart.`,
                          });
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
