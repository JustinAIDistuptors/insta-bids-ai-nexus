
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ActivityItem {
  id: string;
  user: {
    name: string;
    initials: string;
  };
  action: string;
  resource: string;
  resourceType: 'prompt' | 'tool' | 'mcp' | 'feed';
  time: string;
}

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    user: { name: 'Alex Johnson', initials: 'AJ' },
    action: 'created',
    resource: 'Database Schema Generator',
    resourceType: 'prompt',
    time: '2 hours ago'
  },
  {
    id: '2',
    user: { name: 'Morgan Lee', initials: 'ML' },
    action: 'updated',
    resource: 'OpenAI Assistant Framework',
    resourceType: 'tool',
    time: '4 hours ago'
  },
  {
    id: '3',
    user: { name: 'Taylor Smith', initials: 'TS' },
    action: 'shared',
    resource: 'Advanced Data Extraction System',
    resourceType: 'mcp',
    time: '5 hours ago'
  },
  {
    id: '4',
    user: { name: 'Jordan Casey', initials: 'JC' },
    action: 'commented on',
    resource: 'Google Gemini First Impressions',
    resourceType: 'feed',
    time: 'Yesterday'
  },
  {
    id: '5',
    user: { name: 'Alex Johnson', initials: 'AJ' },
    action: 'updated',
    resource: 'Code Review Assistant',
    resourceType: 'prompt',
    time: 'Yesterday'
  }
];

const getResourceTypeColor = (type: string) => {
  switch (type) {
    case 'prompt': return 'bg-blue-100 text-blue-800';
    case 'tool': return 'bg-green-100 text-green-800';
    case 'mcp': return 'bg-purple-100 text-purple-800';
    case 'feed': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const ActivityCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Team activity across all resources</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[320px] px-6">
          <div className="space-y-4 pb-4">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 animate-fade-in">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user.name}</span>{' '}
                    <span className="text-muted-foreground">{activity.action}</span>{' '}
                    <span className="font-medium">{activity.resource}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={`${getResourceTypeColor(activity.resourceType)} px-2 py-0.5 rounded text-xs`}>
                      {activity.resourceType}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
