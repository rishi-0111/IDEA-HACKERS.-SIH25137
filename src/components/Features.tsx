import { FeatureCard } from "./FeatureCard";
import { Brain, MapPin, Shield, Zap, Compass, Star } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Search",
    description: "Smart recommendations using advanced algorithms and natural language processing",
    highlight: true
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "Real-time location sharing with trusted contacts and emergency assistance"
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Direct partnerships with businesses and AI-verified crowdsourced updates"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live information about availability, pricing, and current conditions"
  },
  {
    icon: Compass,
    title: "Offline Mode",
    description: "Download city guides and search offline with smart indexing technology"
  },
  {
    icon: Star,
    title: "Hidden Gems",
    description: "Discover local favorites and off-the-beaten-path experiences"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge AI, real-time data processing, and semantic search 
            to deliver the most relevant and personalized travel recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};