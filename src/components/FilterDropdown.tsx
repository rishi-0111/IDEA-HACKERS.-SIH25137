import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, DollarSign, MapPin, Star } from "lucide-react";

interface FilterDropdownProps {
  type: 'price' | 'distance' | 'rating' | 'general';
  onFilterChange: (filter: string, value: string) => void;
  selectedFilters: Record<string, string[]>;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ 
  type, 
  onFilterChange, 
  selectedFilters 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getFilterOptions = () => {
    switch (type) {
      case 'price':
        return [
          { label: 'Under ₹1,000', value: '0-1000' },
          { label: '₹1,000 - ₹2,000', value: '1000-2000' },
          { label: '₹2,000 - ₹5,000', value: '2000-5000' },
          { label: '₹5,000 - ₹10,000', value: '5000-10000' },
          { label: 'Above ₹10,000', value: '10000+' },
        ];
      case 'distance':
        return [
          { label: 'Within 1 km', value: '0-1' },
          { label: '1-3 km', value: '1-3' },
          { label: '3-5 km', value: '3-5' },
          { label: '5-10 km', value: '5-10' },
          { label: 'Above 10 km', value: '10+' },
        ];
      case 'rating':
        return [
          { label: '4.5+ Stars', value: '4.5+' },
          { label: '4.0+ Stars', value: '4.0+' },
          { label: '3.5+ Stars', value: '3.5+' },
          { label: '3.0+ Stars', value: '3.0+' },
        ];
      default:
        return [];
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'price':
        return <DollarSign className="h-4 w-4 mr-2" />;
      case 'distance':
        return <MapPin className="h-4 w-4 mr-2" />;
      case 'rating':
        return <Star className="h-4 w-4 mr-2" />;
      default:
        return <Filter className="h-4 w-4 mr-2" />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'price':
        return 'Price Range';
      case 'distance':
        return 'Distance';
      case 'rating':
        return 'Rating';
      default:
        return 'Filter';
    }
  };

  const options = getFilterOptions();
  const activeFilters = selectedFilters[type] || [];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          {getIcon()}
          {getLabel()}
          {activeFilters.length > 0 && (
            <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
              {activeFilters.length}
            </span>
          )}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-background border border-border shadow-lg">
        <DropdownMenuLabel className="text-sm font-medium">{getLabel()}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={activeFilters.includes(option.value)}
            onCheckedChange={(checked) => {
              onFilterChange(type, option.value);
            }}
            className="text-sm"
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
        {activeFilters.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                // Clear all filters for this type
                activeFilters.forEach(filter => onFilterChange(type, filter));
              }}
              className="text-sm text-muted-foreground"
            >
              Clear all
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};