
import React, { useState } from 'react';
import ToolCard, { ToolCardProps } from '@/components/tools/ToolCard';
import ToolsHeader from '@/components/tools/ToolsHeader';

// Mock data for tools
const mockTools: ToolCardProps[] = [
  {
    id: '1',
    title: 'OpenAI Assistant Framework',
    description: 'A comprehensive framework for building, testing, and deploying OpenAI assistants with various capabilities.',
    category: 'Framework',
    complexityLevel: 'Intermediate',
    lastUpdated: '3 days ago',
    integration: 'OpenAI',
    isFavorite: true,
    url: 'https://platform.openai.com/assistants',
  },
  {
    id: '2',
    title: 'Data Visualization Toolkit',
    description: 'Tools for creating interactive data visualizations from various data sources and formats.',
    category: 'Visualization',
    complexityLevel: 'Intermediate',
    lastUpdated: '1 week ago',
    integration: 'Multiple',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Automated Testing Suite',
    description: 'End-to-end testing framework for AI systems with support for regression testing and benchmarking.',
    category: 'Testing',
    complexityLevel: 'Advanced',
    lastUpdated: '2 weeks ago',
    integration: 'Python',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Content Generation API',
    description: 'API for generating various types of content including articles, product descriptions, and marketing copy.',
    category: 'Content',
    complexityLevel: 'Beginner',
    lastUpdated: '5 days ago',
    integration: 'REST API',
    isFavorite: true,
    url: '#',
  },
  {
    id: '5',
    title: 'AI Model Evaluation Framework',
    description: 'Tools for evaluating and comparing different AI models against standard benchmarks and custom datasets.',
    category: 'Evaluation',
    complexityLevel: 'Advanced',
    lastUpdated: '1 month ago',
    integration: 'Python/Jupyter',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Semantic Search Engine',
    description: 'Vector-based search engine for finding semantically similar content across various repositories.',
    category: 'Search',
    complexityLevel: 'Intermediate',
    lastUpdated: '2 months ago',
    integration: 'Docker',
    isFavorite: false,
  },
  {
    id: '7',
    title: 'Natural Language Processing Toolkit',
    description: 'Comprehensive NLP tools for text processing, sentiment analysis, and entity extraction.',
    category: 'NLP',
    complexityLevel: 'Intermediate',
    lastUpdated: '3 weeks ago',
    integration: 'Python',
    isFavorite: true,
  },
  {
    id: '8',
    title: 'Model Training Pipeline',
    description: 'End-to-end pipeline for training and fine-tuning machine learning models on custom datasets.',
    category: 'Training',
    complexityLevel: 'Advanced',
    lastUpdated: '1 week ago',
    integration: 'Python/TensorFlow',
    isFavorite: false,
  },
  {
    id: '9',
    title: 'Document Processing System',
    description: 'System for processing and extracting information from various document types including PDFs, images, and scanned documents.',
    category: 'Document Processing',
    complexityLevel: 'Intermediate',
    lastUpdated: '10 days ago',
    integration: 'API',
    isFavorite: false,
  }
];

const Tools: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState('grid');
  
  // Filter tools based on search
  const filteredTools = mockTools.filter(tool => {
    return searchTerm === '' ||
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <ToolsHeader
        totalTools={mockTools.length}
        onSearch={setSearchTerm}
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      
      <div className={`grid gap-6 ${currentView === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
