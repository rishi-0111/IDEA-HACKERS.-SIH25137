import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  onSortChange: (sortBy: string) => void;
  currentSort: string;
  options: Array<{ label: string; value: string }>;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ 
  onSortChange, 
  currentSort, 
  options 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentOption = options.find(option => option.value === currentSort);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          {currentOption?.label || 'Sort by'}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-background border border-border shadow-lg">
        <DropdownMenuLabel className="text-sm font-medium">Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => {
              onSortChange(option.value);
              setIsOpen(false);
            }}
            className={`text-sm ${currentSort === option.value ? 'bg-accent' : ''}`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};