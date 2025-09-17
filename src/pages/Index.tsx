import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
