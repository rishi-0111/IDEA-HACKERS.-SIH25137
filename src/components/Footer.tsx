import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Mini GudieI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart travel planning with AI-powered recommendations and real-time updates.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Hotels
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Restaurants
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Attractions
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Emergency
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Features</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                AI Search
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Offline Mode
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Real-time Updates
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Location Tracking
              </Button>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Global Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@minigudiei.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Mini GudieI. All rights reserved. Powered by advanced AI technology.</p>
        </div>
      </div>
    </footer>
  );
};