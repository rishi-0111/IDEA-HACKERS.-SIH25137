import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";
import heroImage from "@/assets/hero-travel.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Mini GudieI
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Smart Travel Planning Made Simple
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover hyper-local, verified information about hotels, restaurants, attractions, 
              and emergency services with AI-powered search and real-time updates.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="pt-8">
            <SearchBar />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Exploring
            </Button>
            <Button variant="minimal" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
    </section>
  );
};