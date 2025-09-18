import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Clock, Camera, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterDropdown } from "@/components/FilterDropdown";
import { SortDropdown } from "@/components/SortDropdown";

const attractions = [
  {
    id: 1,
    name: "Historic City Cathedral",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 542,
    type: "Historical",
    price: "Free",
    location: "Old Town, 0.4 km away",
    openTime: "9:00 AM - 6:00 PM",
    duration: "1-2 hours",
    description: "Magnificent medieval cathedral with stunning architecture and centuries of history."
  },
  {
    id: 2,
    name: "Modern Art Museum",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 318,
    type: "Museum",
    price: "$15",
    location: "Arts District, 1.1 km away",
    openTime: "10:00 AM - 8:00 PM",
    duration: "2-3 hours",
    description: "Contemporary art exhibitions featuring local and international artists."
  },
  {
    id: 3,
    name: "Sunset Beach Park",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 789,
    type: "Nature",
    price: "Free",
    location: "Coastal Area, 2.3 km away",
    openTime: "24/7",
    duration: "2-4 hours",
    description: "Beautiful beach with walking trails, perfect for sunset viewing and photography."
  },
  {
    id: 4,
    name: "Adventure Mountain Trail",
    image: "https://images.unsplash.com/photo-1464822759844-d150baec3fa5?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 267,
    type: "Adventure",
    price: "$25",
    location: "Mountain Area, 15 km away",
    openTime: "7:00 AM - 7:00 PM",
    duration: "4-6 hours",
    description: "Challenging hiking trail with breathtaking mountain views and guided tours available."
  },
  {
    id: 5,
    name: "Central Market Plaza",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 456,
    type: "Cultural",
    price: "Free",
    location: "Downtown, 0.7 km away",
    openTime: "8:00 AM - 10:00 PM",
    duration: "1-3 hours",
    description: "Vibrant marketplace with local crafts, food vendors, and cultural performances."
  },
  {
    id: 6,
    name: "Observatory & Planetarium",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 203,
    type: "Science",
    price: "$20",
    location: "Science District, 3.2 km away",
    openTime: "2:00 PM - 10:00 PM",
    duration: "2-3 hours",
    description: "State-of-the-art planetarium with astronomy shows and telescope viewing."
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Historical": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    case "Museum": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Nature": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Adventure": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "Cultural": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Science": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function Attractions() {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [currentSort, setCurrentSort] = useState('rating-desc');

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[filterType] || [];
      const isSelected = currentFilters.includes(value);
      
      if (isSelected) {
        return {
          ...prev,
          [filterType]: currentFilters.filter(f => f !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentFilters, value]
        };
      }
    });
  };

  const handleSortChange = (sortBy: string) => {
    setCurrentSort(sortBy);
  };

  const sortOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating: Highest First', value: 'rating-desc' },
    { label: 'Rating: Lowest First', value: 'rating-asc' },
    { label: 'Distance: Nearest First', value: 'distance-asc' },
  ];

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
              <h1 className="text-2xl font-bold text-foreground">Attractions</h1>
              <p className="text-muted-foreground">Explore amazing destinations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-muted-foreground">Found {attractions.length} attractions</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <SortDropdown 
                onSortChange={handleSortChange}
                currentSort={currentSort}
                options={sortOptions}
              />
              <FilterDropdown 
                type="price"
                onFilterChange={handleFilterChange}
                selectedFilters={selectedFilters}
              />
              <FilterDropdown 
                type="distance"
                onFilterChange={handleFilterChange}
                selectedFilters={selectedFilters}
              />
              <FilterDropdown 
                type="rating"
                onFilterChange={handleFilterChange}
                selectedFilters={selectedFilters}
              />
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="group overflow-hidden hover:shadow-card transition-spring hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getTypeColor(attraction.type)}>
                    {attraction.type}
                  </Badge>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-card/90 text-card-foreground">
                    {attraction.price}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {attraction.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {attraction.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{attraction.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({attraction.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {attraction.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{attraction.openTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>Duration: {attraction.duration}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="travel">
                    <Ticket className="h-4 w-4 mr-2" />
                    Visit
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