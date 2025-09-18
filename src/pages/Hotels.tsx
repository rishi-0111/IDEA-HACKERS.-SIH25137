import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Wifi, Car, Coffee, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterDropdown } from "@/components/FilterDropdown";
import { SortDropdown } from "@/components/SortDropdown";

const hotels = [
  {
    id: 1,
    name: "Grand Ocean Resort",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 324,
    price: "$299",
    location: "Downtown, 0.8 km from center",
    amenities: ["Free WiFi", "Parking", "Restaurant", "Pool"],
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities."
  },
  {
    id: 2,
    name: "Urban Boutique Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 189,
    price: "$189",
    location: "City Center, 0.2 km from center",
    amenities: ["Free WiFi", "Gym", "Cafe", "Business Center"],
    description: "Modern boutique hotel in the heart of the city with contemporary design."
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 256,
    price: "$149",
    location: "Mountain District, 3.5 km from center",
    amenities: ["Free WiFi", "Hiking Trails", "Spa", "Restaurant"],
    description: "Peaceful mountain retreat perfect for nature lovers and adventure seekers."
  },
  {
    id: 4,
    name: "Historic Palace Hotel",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 412,
    price: "$249",
    location: "Historic Quarter, 1.2 km from center",
    amenities: ["Free WiFi", "Concierge", "Fine Dining", "Valet"],
    description: "Elegant historic hotel with timeless charm and exceptional service."
  },
  {
    id: 5,
    name: "Eco Garden Resort",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 167,
    price: "$119",
    location: "Garden District, 2.1 km from center",
    amenities: ["Eco-Friendly", "Garden", "Organic Restaurant", "Yoga"],
    description: "Sustainable eco-resort surrounded by beautiful gardens and green spaces."
  },
  {
    id: 6,
    name: "Skyline Business Hotel",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 298,
    price: "$199",
    location: "Business District, 1.8 km from center",
    amenities: ["Free WiFi", "Meeting Rooms", "Executive Lounge", "Parking"],
    description: "Professional business hotel with modern facilities and city skyline views."
  }
];

const amenityIcons = {
  "Free WiFi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
  "Pool": Users,
  "Gym": Users,
  "Cafe": Coffee,
  "Business Center": Users,
  "Hiking Trails": MapPin,
  "Spa": Users,
  "Concierge": Users,
  "Fine Dining": Coffee,
  "Valet": Car,
  "Eco-Friendly": MapPin,
  "Garden": MapPin,
  "Organic Restaurant": Coffee,
  "Yoga": Users,
  "Meeting Rooms": Users,
  "Executive Lounge": Users
};

export default function Hotels() {
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
              <h1 className="text-2xl font-bold text-foreground">Hotels</h1>
              <p className="text-muted-foreground">Discover verified accommodations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-muted-foreground">Found {hotels.length} hotels</p>
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

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="group overflow-hidden hover:shadow-card transition-spring hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-card/90 text-card-foreground">
                    {hotel.price}/night
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi;
                    return (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Icon className="h-3 w-3 mr-1" />
                        {amenity}
                      </Badge>
                    );
                  })}
                  {hotel.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{hotel.amenities.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="travel">
                    Book Now
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