
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BookOpen, Wrench, Database } from 'lucide-react';

const FeaturedPrompts = () => {
  const prompts = [
    { id: 1, title: "Database Schema Generator", category: "Development", uses: 124 },
    { id: 2, title: "Code Review Assistant", category: "Development", uses: 98 },
    { id: 3, title: "Research Paper Analyzer", category: "Research", uses: 76 }
  ];

  return (
    <div className="grid gap-4">
      {prompts.map(prompt => (
        <Link to={`/prompts/${prompt.id}`} key={prompt.id}>
          <Card className="card-hover cursor-pointer">
            <CardContent className="p-4 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md text-blue-700 mt-0.5">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">{prompt.title}</h4>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="bg-blue-50">{prompt.category}</Badge>
                    <span className="text-xs text-muted-foreground">{prompt.uses} uses</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const FeaturedTools = () => {
  const tools = [
    { id: 1, title: "OpenAI Assistant Framework", category: "Framework", integration: "OpenAI" },
    { id: 2, title: "Data Visualization Toolkit", category: "Visualization", integration: "Multiple" },
    { id: 3, title: "Automated Testing Suite", category: "Testing", integration: "Python" }
  ];

  return (
    <div className="grid gap-4">
      {tools.map(tool => (
        <Link to={`/tools/${tool.id}`} key={tool.id}>
          <Card className="card-hover cursor-pointer">
            <CardContent className="p-4 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-md text-green-700 mt-0.5">
                  <Wrench className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">{tool.title}</h4>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50">{tool.category}</Badge>
                    <span className="text-xs text-muted-foreground">{tool.integration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const FeaturedMCPs = () => {
  const mcps = [
    { id: 1, title: "Advanced Data Extraction System", category: "Data Processing", components: 5 },
    { id: 2, title: "Multi-Stage Content Generator", category: "Content", components: 3 },
    { id: 3, title: "Automated Research Assistant", category: "Research", components: 4 }
  ];

  return (
    <div className="grid gap-4">
      {mcps.map(mcp => (
        <Link to={`/mcp/${mcp.id}`} key={mcp.id}>
          <Card className="card-hover cursor-pointer">
            <CardContent className="p-4 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-md text-purple-700 mt-0.5">
                  <Database className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">{mcp.title}</h4>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="bg-purple-50">{mcp.category}</Badge>
                    <span className="text-xs text-muted-foreground">{mcp.components} components</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const FeaturedResources: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Featured Resources</CardTitle>
        <CardDescription>Most used tools and prompts across the team</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="prompts">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="mcps">MCP Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="prompts" className="mt-0">
            <FeaturedPrompts />
          </TabsContent>
          <TabsContent value="tools" className="mt-0">
            <FeaturedTools />
          </TabsContent>
          <TabsContent value="mcps" className="mt-0">
            <FeaturedMCPs />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FeaturedResources;
