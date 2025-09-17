import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, highlight = false }: FeatureCardProps) => {
  return (
    <Card className={`p-6 transition-spring hover:shadow-card hover:-translate-y-1 ${
      highlight ? 'bg-gradient-card border-primary/20 shadow-soft' : 'bg-card border-border'
    }`}>
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
        highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      
      <h3 className="text-lg font-medium text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};