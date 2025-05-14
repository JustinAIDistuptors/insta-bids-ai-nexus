
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FilterOption {
  value: string;
  label: string;
}

const interfaceOptions: FilterOption[] = [
  { value: 'all', label: 'All Interfaces' },
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'vscode', label: 'VS Code' },
  { value: 'other', label: 'Other' },
];

const useCaseOptions: FilterOption[] = [
  { value: 'all', label: 'All Use Cases' },
  { value: 'coding', label: 'Coding' },
  { value: 'research', label: 'Research' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'content', label: 'Content Creation' },
  { value: 'system-design', label: 'System Design' },
];

interface PromptFiltersProps {
  onFilterChange: (filter: string, value: string) => void;
  selectedInterface: string;
  selectedUseCase: string;
}

const FilterSelect: React.FC<{
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}> = ({ options, value, onChange, label }) => {
  const [open, setOpen] = React.useState(false);
  const selectedOption = options.find(option => option.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value === 'all' ? label : selectedOption?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder={`Search ${label.toLowerCase()}...`} className="h-9" />
          <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                {option.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const PromptFilters: React.FC<PromptFiltersProps> = ({ 
  onFilterChange, 
  selectedInterface, 
  selectedUseCase 
}) => {
  const activeTags = [
    { id: 'react', label: 'React' },
    { id: 'database', label: 'Database' },
    { id: 'api', label: 'API' },
  ];

  const handleRemoveTag = (tagId: string) => {
    // In a real app, this would remove the tag from the active filters
    console.log(`Remove tag: ${tagId}`);
  };

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <h3 className="text-sm font-medium mb-3">Filter Prompts</h3>
      <div className="flex flex-wrap gap-3">
        <FilterSelect 
          options={interfaceOptions}
          value={selectedInterface}
          onChange={(value) => onFilterChange('interface', value)}
          label="Interface"
        />
        
        <FilterSelect 
          options={useCaseOptions}
          value={selectedUseCase}
          onChange={(value) => onFilterChange('useCase', value)}
          label="Use Case"
        />
        
        <Button variant="outline">
          Project
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        
        <Button variant="outline">
          Created By
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </div>
      
      {activeTags.length > 0 && (
        <div className="flex gap-2 mt-3">
          <span className="text-sm text-muted-foreground pt-0.5">Tags:</span>
          <div className="flex gap-1.5 flex-wrap">
            {activeTags.map(tag => (
              <Badge key={tag.id} variant="secondary" className="px-2 py-1 gap-1.5 cursor-pointer hover:bg-secondary/80">
                {tag.label}
                <span className="text-xs leading-none" onClick={() => handleRemoveTag(tag.id)}>×</span>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptFilters;
