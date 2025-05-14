
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Plus } from 'lucide-react';

const MCPRepository: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-2">MCP Tools Repository</h1>
          <p className="text-muted-foreground">Manage and discover Multi-Component Process tools</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create MCP Tool
        </Button>
      </div>
      
      <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-none">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-purple-800">
                <Database className="h-4 w-4" />
                <span>Multi-Component Process</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Create systems that do the work for you</h2>
              <p className="text-gray-600">
                Multi-Component Process (MCP) tools combine multiple AI components to create automated workflows
                that solve complex problems. Browse our repository or create your own.
              </p>
              <div className="pt-2">
                <Button variant="default" className="bg-purple-700 hover:bg-purple-800">
                  Explore MCP Tools
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Database className="h-32 w-32 text-purple-700/20" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <p className="text-muted-foreground">
            The MCP Tools Repository section is currently under development. Check back soon for a comprehensive
            library of multi-component AI processes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MCPRepository;
