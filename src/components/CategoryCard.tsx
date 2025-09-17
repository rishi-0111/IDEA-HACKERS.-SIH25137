import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

export const CategoryCard = ({ icon: Icon, title, description, color, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border cursor-pointer transition-spring hover:shadow-card hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} mb-4 shadow-soft`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-smooth from-primary to-primary-glow" />
    </Card>
  );
};