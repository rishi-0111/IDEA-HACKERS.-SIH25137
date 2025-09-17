import { Search, Mic, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(!isListening);
    // Voice search implementation would go here
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center bg-card shadow-card rounded-lg border border-border overflow-hidden transition-smooth hover:shadow-glow">
        <div className="flex items-center px-4 text-muted-foreground">
          <Search className="h-5 w-5" />
        </div>
        
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hotels, restaurants, attractions..."
          className="flex-1 border-0 bg-transparent text-base py-6 px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        
        <div className="flex items-center gap-2 px-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoiceSearch}
            className={`h-8 w-8 ${isListening ? 'text-accent' : ''}`}
          >
            <Mic className="h-4 w-4" />
          </Button>
          
          <div className="w-px h-6 bg-border" />
          
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MapPin className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};