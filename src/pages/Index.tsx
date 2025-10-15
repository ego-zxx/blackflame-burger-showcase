import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBurgers from "@/components/FeaturedBurgers";
import Specials from "@/components/Specials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCart />
      <Hero />
      <FeaturedBurgers />
      <Specials />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
};

export default Index;
