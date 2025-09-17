import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Clock, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Ocean Breeze Seafood",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 256,
    priceRange: "$$$",
    cuisine: "Seafood",
    location: "Waterfront, 0.5 km away",
    openTime: "11:00 AM - 10:00 PM",
    description: "Fresh seafood with ocean views. Known for their signature lobster and daily catch specials."
  },
  {
    id: 2,
    name: "Nonna's Italian Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 189,
    priceRange: "$$",
    cuisine: "Italian",
    location: "Little Italy, 1.2 km away",
    openTime: "5:00 PM - 11:00 PM",
    description: "Authentic Italian cuisine made with love using traditional family recipes passed down generations."
  },
  {
    id: 3,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 312,
    priceRange: "$$",
    cuisine: "Asian Fusion",
    location: "Chinatown, 0.8 km away",
    openTime: "12:00 PM - 9:30 PM",
    description: "Modern Asian fusion with a creative twist on traditional dishes and exotic spices."
  },
  {
    id: 4,
    name: "The Steakhouse Prime",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 198,
    priceRange: "$$$$",
    cuisine: "Steakhouse",
    location: "Downtown, 0.3 km away",
    openTime: "6:00 PM - 12:00 AM",
    description: "Premium steaks and fine dining experience with an extensive wine collection."
  },
  {
    id: 5,
    name: "Green Garden Cafe",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 145,
    priceRange: "$",
    cuisine: "Vegetarian",
    location: "Garden District, 1.5 km away",
    openTime: "8:00 AM - 6:00 PM",
    description: "Farm-to-table vegetarian cafe with organic ingredients and healthy options."
  },
  {
    id: 6,
    name: "Street Food Paradise",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 423,
    priceRange: "$",
    cuisine: "Street Food",
    location: "Food Market, 2.1 km away",
    openTime: "10:00 AM - 8:00 PM",
    description: "Authentic street food from around the world in a vibrant market atmosphere."
  }
];

const getPriceColor = (priceRange: string) => {
  switch (priceRange) {
    case "$": return "text-green-600";
    case "$$": return "text-yellow-600";
    case "$$$": return "text-orange-600";
    case "$$$$": return "text-red-600";
    default: return "text-muted-foreground";
  }
};

export default function Restaurants() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-secondary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Restaurants</h1>
              <p className="text-muted-foreground">Discover amazing local cuisine</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-muted-foreground">Found {restaurants.length} restaurants</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Sort by Rating</Button>
              <Button variant="outline" size="sm">Cuisine Filter</Button>
            </div>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group overflow-hidden hover:shadow-card transition-spring hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-card/90 text-card-foreground">
                    {restaurant.cuisine}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {restaurant.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({restaurant.reviews} reviews)</span>
                    </div>
                    <div className={`font-semibold ${getPriceColor(restaurant.priceRange)}`}>
                      {restaurant.priceRange}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {restaurant.description}
                </p>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {restaurant.openTime}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="travel">
                    Reserve Table
                  </Button>
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}