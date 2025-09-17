import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, MapPin, Clock, Users, AlertTriangle, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const emergencyServices = [
  {
    id: 1,
    name: "City General Hospital",
    type: "Hospital",
    phone: "+1-555-0123",
    address: "123 Medical Center Dr",
    distance: "0.8 km away",
    status: "Open 24/7",
    specialties: ["Emergency", "Trauma", "ICU"],
    description: "Full-service hospital with emergency department and specialized trauma care."
  },
  {
    id: 2,
    name: "Downtown Police Station",
    type: "Police",
    phone: "+1-555-0911",
    address: "456 Justice Ave",
    distance: "0.5 km away",
    status: "24/7 Service",
    specialties: ["Emergency Response", "Tourist Police", "Crime Prevention"],
    description: "Main police headquarters with tourist assistance and 24/7 emergency response."
  },
  {
    id: 3,
    name: "Fire Station #7",
    type: "Fire Department",
    phone: "+1-555-0119",
    address: "789 Rescue Blvd",
    distance: "1.2 km away",
    status: "24/7 Service",
    specialties: ["Fire Response", "Rescue", "Medical Emergency"],
    description: "Fire and rescue services with medical emergency response capabilities."
  },
  {
    id: 4,
    name: "St. Mary's Urgent Care",
    type: "Urgent Care",
    phone: "+1-555-0456",
    address: "321 Care Street",
    distance: "1.5 km away",
    status: "6:00 AM - 10:00 PM",
    specialties: ["Minor Injuries", "Illness", "X-Ray"],
    description: "Walk-in urgent care for non-life-threatening medical needs."
  },
  {
    id: 5,
    name: "Tourist Police Unit",
    type: "Tourist Police",
    phone: "+1-555-0777",
    address: "555 Visitor Center",
    distance: "0.3 km away",
    status: "8:00 AM - 8:00 PM",
    specialties: ["Tourist Assistance", "Translation", "Lost Items"],
    description: "Specialized police unit for tourist safety and assistance with multilingual support."
  },
  {
    id: 6,
    name: "Harbor Medical Clinic",
    type: "Medical Clinic",
    phone: "+1-555-0789",
    address: "777 Harbor View",
    distance: "2.1 km away",
    status: "8:00 AM - 6:00 PM",
    specialties: ["General Practice", "Travel Medicine", "Vaccines"],
    description: "Medical clinic specializing in travel health and routine medical care for visitors."
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Hospital": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "Police": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Fire Department": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "Urgent Care": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Tourist Police": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Medical Clinic": return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const getUrgencyLevel = (type: string) => {
  switch (type) {
    case "Hospital":
    case "Police":
    case "Fire Department":
      return "urgent";
    default:
      return "normal";
  }
};

export default function Emergency() {
  const navigate = useNavigate();

  const urgentServices = emergencyServices.filter(service => getUrgencyLevel(service.type) === "urgent");
  const regularServices = emergencyServices.filter(service => getUrgencyLevel(service.type) === "normal");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-destructive/10 border-b border-destructive/20">
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
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Emergency Services</h1>
                <p className="text-muted-foreground">Quick access to emergency assistance</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <div className="bg-destructive/5 border-b border-destructive/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                For life-threatening emergencies, call 911 immediately
              </span>
            </div>
            <Button variant="destructive" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call 911
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Urgent Services */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h2 className="text-xl font-bold text-foreground">Urgent Emergency Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urgentServices.map((service) => (
              <Card key={service.id} className="border-destructive/20 hover:shadow-card transition-spring hover:-translate-y-1">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">
                        {service.name}
                      </h3>
                      <Badge className={getTypeColor(service.type)}>
                        {service.type}
                      </Badge>
                    </div>
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.address} • {service.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.status}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {service.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" variant="destructive">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Services */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Plus className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Medical & Support Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularServices.map((service) => (
              <Card key={service.id} className="hover:shadow-card transition-spring hover:-translate-y-1">
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">
                      {service.name}
                    </h3>
                    <Badge className={getTypeColor(service.type)}>
                      {service.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.address} • {service.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.status}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {service.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" variant="travel">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}