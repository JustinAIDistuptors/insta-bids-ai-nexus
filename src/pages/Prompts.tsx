
import React, { useState } from 'react';
import PromptCard, { PromptCardProps } from '@/components/prompts/PromptCard';
import PromptFilters from '@/components/prompts/PromptFilters';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Plus, BookOpen, Search } from 'lucide-react';

// Mock data for prompts
const mockPrompts: PromptCardProps[] = [
  {
    id: '1',
    title: 'Database Schema Generator',
    description: 'Generate complete database schemas with tables, relationships, and documentation from natural language descriptions.',
    tags: ['Database', 'SQL', 'Schema Design'],
    interface: 'ChatGPT',
    useCount: 124,
    lastUpdated: '2 days ago',
    isFavorite: true,
  },
  {
    id: '2',
    title: 'Code Review Assistant',
    description: 'Provides detailed code reviews with suggestions for improvements, potential bugs, and optimization opportunities.',
    tags: ['Code Review', 'Best Practices'],
    interface: 'Claude',
    useCount: 98,
    lastUpdated: '5 days ago',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Research Paper Analyzer',
    description: 'Extract key findings, methodologies, and insights from academic research papers.',
    tags: ['Research', 'Academic', 'Analysis'],
    interface: 'Claude',
    useCount: 76,
    lastUpdated: '1 week ago',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'API Documentation Generator',
    description: 'Create comprehensive API documentation from code examples and endpoint descriptions.',
    tags: ['API', 'Documentation'],
    interface: 'ChatGPT',
    useCount: 65,
    lastUpdated: '3 days ago',
    isFavorite: false,
  },
  {
    id: '5',
    title: 'UI Component Specification',
    description: 'Generate detailed specifications for UI components including accessibility requirements and interaction states.',
    tags: ['UI', 'Design', 'Accessibility'],
    interface: 'Gemini',
    useCount: 54,
    lastUpdated: '1 day ago',
    isFavorite: true,
  },
  {
    id: '6',
    title: 'Testing Framework Setup',
    description: 'Instructions for setting up comprehensive testing frameworks with examples for different languages.',
    tags: ['Testing', 'QA', 'Framework'],
    interface: 'VS Code',
    useCount: 42,
    lastUpdated: '4 days ago',
    isFavorite: false,
  }
];

const Prompts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInterface, setSelectedInterface] = useState('all');
  const [selectedUseCase, setSelectedUseCase] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  
  const handleFilterChange = (filter: string, value: string) => {
    if (filter === 'interface') {
      setSelectedInterface(value);
    } else if (filter === 'useCase') {
      setSelectedUseCase(value);
    }
  };
  
  // Filter prompts based on search and filters
  const filteredPrompts = mockPrompts.filter(prompt => {
    const matchesSearch = 
      searchTerm === '' ||
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesInterface = 
      selectedInterface === 'all' ||
      prompt.interface.toLowerCase() === selectedInterface.toLowerCase();
    
    // In a real app, you'd have a useCase property to filter by
    const matchesUseCase = selectedUseCase === 'all';
    
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'favorites' && prompt.isFavorite);
    
    return matchesSearch && matchesInterface && matchesUseCase && matchesTab;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-2">Prompts Library</h1>
          <p className="text-muted-foreground">Discover and use prompts for various AI interfaces and use cases</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Prompt
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>All Prompts</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Favorites</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search prompts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <PromptFilters 
        onFilterChange={handleFilterChange} 
        selectedInterface={selectedInterface}
        selectedUseCase={selectedUseCase}
      />
      
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/40">
          <BookOpen className="h-12 w-12 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No prompts found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or create a new prompt</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} {...prompt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Prompts;
