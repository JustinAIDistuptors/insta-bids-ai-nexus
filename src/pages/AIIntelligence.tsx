
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rss, Plus } from 'lucide-react';

const AIIntelligence: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-2">AI Intelligence Feed</h1>
          <p className="text-muted-foreground">Stay updated with the latest AI news, research, and insights</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Intelligence
        </Button>
      </div>
      
      <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-none">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-orange-800">
                <Rss className="h-4 w-4" />
                <span>Intelligence Feed</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Collective AI knowledge and insights</h2>
              <p className="text-gray-600">
                Our AI Intelligence Feed provides curated updates on AI developments, best practices,
                and industry news to keep our team at the cutting edge of AI engineering.
              </p>
              <div className="pt-2">
                <Button variant="default" className="bg-orange-700 hover:bg-orange-800">
                  Browse Latest Articles
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Rss className="h-32 w-32 text-orange-700/20" />
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
            The AI Intelligence Feed section is currently under development. Check back soon for 
            curated articles, research papers, and industry insights.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIIntelligence;
