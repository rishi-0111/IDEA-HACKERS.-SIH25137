import { CategoryCard } from "./CategoryCard";
import { Hotel, Utensils, MapPin, Heart } from "lucide-react";

const categories = [
  {
    icon: Hotel,
    title: "Hotels",
    description: "Find verified accommodations with real-time availability and trusted reviews",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Utensils,
    title: "Restaurants",
    description: "Discover local cuisine with AI-powered recommendations and hidden gems",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: MapPin,
    title: "Attractions",
    description: "Explore must-see destinations and off-the-beaten-path experiences",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Emergency",
    description: "Quick access to hospitals, police stations, and emergency services",
    color: "from-red-500 to-pink-600"
  }
];

export const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for with our smart categorization and filtering system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              color={category.color}
              onClick={() => console.log(`Navigate to ${category.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};